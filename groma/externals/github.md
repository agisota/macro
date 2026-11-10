---
type: C4 System
title: GitHub
status: stable
groma:
  id: github
  technology: GitHub REST
description: Public REST for the star count, plus OAuth that the auth service starts
---

The web client GETs api.github.com for stargazers_count and never sends Macro credentials. Pull-request actions go to the Macro auth host.
