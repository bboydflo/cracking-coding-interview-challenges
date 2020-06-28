# Cracking the Coding Interview Challenges

This is a monorepo that uses [Lerna](https://lerna.js.org/) [Yarn](https://yarnpkg.com), Typescript and Jest
Make sure both Yarn and Lerna are installed globally.

```sh
npm i -g yarn
yarn global add lerna
```

## Bootstrap monorepo

```sh
lerna bootstrap --hoist
```

## Run tests for all packages

```sh
# using yarn workspaces
yarn test

# using lerna which uses yarn under the hood
lerna run test
```

## Run a single project

```sh
cd exercises/<project-name>
yarn start
```

## Generate jest config

```sh
# from within one of the packages
npx ts-jest config:init
```

## Docs

- [Yarn](https://classic.yarnpkg.com/en/docs)
- [Lerna](https://github.com/lerna/lerna)
- [ts-jest](https://github.com/kulshekhar/ts-jest)
