# Static Site Generation

### Requirements

* nodejs v16
* yarn v1.22

There is a [Dockerfile](https://github.com/gilde-der-nacht/dnd-light.gildedernacht.ch/blob/main/.devcontainer/Dockerfile) which can be use to build a development environment.

Install yarn: https://classic.yarnpkg.com/en/docs/install

## Install Dependencies

```sh
$ yarn --version
$ yarn
```

## Develop

Run the following script in this folder:

```sh
$ yarn dev
```

## Build

Run the following script in this folder:

```sh
$ yarn build
```

## Debug

```sh
$ yarn debug # for debug output from eleventy (SSG)
```
