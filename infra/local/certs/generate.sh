#!/usr/bin/env bash
# Regenerate the local-dev CA and the localhost server certificate.
# These materials are dummy, checked-in secrets for `just run_local` only.
set -euo pipefail

cd "$(dirname "$0")"

# LibreSSL (the macOS default `/usr/bin/openssl`) writes EC keys with explicit
# curve parameters and SHA-1 signatures that modern clients reject; prefer an
# OpenSSL 3 binary when one is installed, exactly like issue-host.sh.
resolve_openssl() {
  if [[ -n "${OPENSSL_BIN:-}" && -x "${OPENSSL_BIN}" ]]; then
    printf '%s' "$OPENSSL_BIN"
    return
  fi
  local candidate
  for candidate in /opt/homebrew/opt/openssl@3/bin/openssl /usr/local/opt/openssl@3/bin/openssl; do
    if [[ -x "$candidate" ]]; then
      printf '%s' "$candidate"
      return
    fi
  done
  command -v openssl
}
openssl_bin="$(resolve_openssl)"

"$openssl_bin" genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out ca-key.pem
"$openssl_bin" req -new -x509 -key ca-key.pem -out ca.pem -days 3650 \
  -subj "/CN=Rox Local CA" \
  -addext "basicConstraints=critical,CA:TRUE" \
  -addext "keyUsage=critical,keyCertSign,cRLSign"

"$openssl_bin" genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -out localhost-key.pem
"$openssl_bin" req -new -key localhost-key.pem -out localhost.csr \
  -subj "/CN=localhost"

"$openssl_bin" x509 -req -in localhost.csr -CA ca.pem -CAkey ca-key.pem \
  -out localhost-leaf.pem -days 3650 \
  -extfile <(printf '%s\n' \
    'subjectAltName=DNS:localhost,DNS:*.localhost,IP:127.0.0.1,IP:::1' \
    'extendedKeyUsage=serverAuth')

# Serve the leaf plus the CA so clients that do not have the CA yet still
# see a complete chain; trusting `ca.pem` is what makes browsers happy.
cat localhost-leaf.pem ca.pem > localhost.pem
rm -f localhost.csr localhost-leaf.pem ca.srl

chmod 644 ca.pem localhost.pem
chmod 600 ca-key.pem localhost-key.pem
echo "wrote CA and localhost cert in $(pwd)"
