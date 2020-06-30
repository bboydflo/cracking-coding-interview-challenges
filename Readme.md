# Cracking the Coding Interview Challenges

This is a monorepo that uses [Lerna](https://lerna.js.org/) [Yarn](https://yarnpkg.com) and TSDX
Make sure both Yarn and Lerna are installed globally.

```sh
npm i -g yarn
yarn global add lerna
```

## Bootstrap monorepo

```sh
lerna bootstrap --hoist
```

## Create a new package

Bootstrapo a new `basic` package

```sh
yarn new-package packages/<package-name>
```

## Run tests for all packages

```sh
# using lerna which uses yarn under the hood
lerna run test

# or cd into packages/package-name and run
yarn test
```

## Run a single project

```sh
cd package/<package-name>
yarn start
```

## Docs

- [Yarn](https://classic.yarnpkg.com/en/docs)
- [Lerna](https://github.com/lerna/lerna)
