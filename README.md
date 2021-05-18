[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/rjNemo/deno_hello)

# Hello Server

Web app which returns the iconic `Hello, World` in various locales.

## Features

- [x] Print hello world in a random locale
- [x] Select the locale by id
- [x] Use with CLI
- [x] Basic HTTP server
- [x] HTML frontend
- [ ] Rebuild using [Aleph.js](https://alephjs.org/docs)
- [ ] Deployment

## Installation

On macOS use HomeBrew to install `deno` then update to the latest version.

```shell
brew install deno
deno upgrade
```

## ⚙️ Configuration

Create a basic configuration file using:

```shell
code .vscode/settings.json
```

with the following content

```json
{
  "deno.enable": true,
  "deno.unstable": true,
  "deno.lint": true,
  "deno.import_intellisense_origins": {
    "https://deno.land": true
  },
  "[typescript]": {
    "editor.defaultFormatter": "denoland.vscode-deno"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "denoland.vscode-deno"
  }
}
```

## 🚀 Run

See [Makefile](Makefile) for available scripts. The application can run either
via CLI or a basic HTTP server.

## 🧪 Tests

```shell
make tests
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of
conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository](https://github.com/rjNemo/deno_hello/tags).

## Authors

- **Ruidy** - _Initial work_ - [Ruidy](https://github.com/rjNemo)

See also the list of
[contributors](https://github.com/rjNemo/deno_hello/contributors) who
participated in this project.

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details
