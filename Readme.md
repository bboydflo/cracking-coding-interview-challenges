# Cracking the Coding Interview Challenges

This is a monorepo that uses [Lerna](https://lerna.js.org/) and [Yarn](https://yarnpkg.com).
Make sure both are installed globally.

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
yarn test
```

## Run a single project

```sh
cd exercises/<project-name>
yarn start
```

## Docs

- [Yarn](https://classic.yarnpkg.com/en/docs)
- [Lerna](https://github.com/lerna/lerna)
