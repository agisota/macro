# Unfurling Service

To run locally:

```
just run
```

To test:

```
just test
```

To unfurl:

First, make sure the serve is running with something like `just run`, then:

```
$ just unfurl https://rox.one
{
  "url": "https://rox.one",
  "title": "Rox | Home",
  "description": "Rox - the next generation productivity suite",
  "image_url": "https://rox.one/logo.png",
  "favicon_url": "https://rox.one/favicon.ico"
}
```

Build the docker image:

```
just docker-build
```

Run the docker image:

```
just docker-run
```
