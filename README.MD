[⬅️&nbsp;&nbsp;README](../README.md)

# Nx

This project was generated using [Nx](https://nx.dev).

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@nx-nextjs/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### RUN DEV APP app-nextjs-v2

`npx nx serve app-nextjs-v2`

### RUN DEV APP app-nextjs-v1

`npx nx serve app-nextjs-v1`

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app-e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.

## CIRCLE CI

- DOC *https://circleci.com/docs/*
- DOC CONFIG *https://circleci.com/docs/configuration-reference/#section=configuration*
  <img src="https://circleci.com/docs/assets/img/docs/arch.png">
- LOGIN OR REGISTER
  *https://circleci.com/vcs-authorize/?return-to=https%3A%2F%2Fapp.circleci.com%2Fdashboard*
- NX TOOL CIRCLE CI GENERATE
- NX CIRCLE COMMAND
  ```
  yarn nx generate @nrwl/workspace:ci-workflow --ci=circleci --no-interactive --dry-run
  ```
- INSTALL VS EXTENSION
- SETUP *https://app.circleci.com/projects/setup/*
  <img src="https://media.graphassets.com/NbYUlX5NQHGY3hEqjnlv" class="object-top w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg">
- ORGANIZATION GITHUB :
  *https://app.circleci.com/settings/organization/github/TranHuuPhu1998/security?return-to=https%3A%2F%2Fapp.circleci.com%2Fpipelines%2Fgithub%2FTranHuuPhu1998%2Fnx-micro-frontend-nextjs*
  <img src="https://media.graphassets.com/FwML5dXXScekGnEHNvkQ">

- DASH BOARD
  *https://app.circleci.com/pipelines/github/TranHuuPhu1998/nx-micro-frontend-nextjs*
- NOTIFICATION SLACK
  *https://circleci.com/developer/orbs/orb/circleci/slack#quick-start*
- EXAMPLE Javascript App - Vue.JS Front-End
  *https://github.com/CircleCI-Public/sample-javascript-cfd/tree/1bb4bed9e982086a6018204d5fa4cc252a1a4cb4*
- parallel - RUN COMMAND SONG SONG
