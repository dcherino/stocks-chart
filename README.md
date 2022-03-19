# A quick start TypeScript Create React App template

An opinionated quick start [Create React App](https://github.com/facebook/create-react-app) (CRA) _template_ with configured **TypeScript**, **Styled Components**, **Husky**, **Lint Staged** and custom **ESlint** & **Prettier** configuration.

Original Create React App README available [here](./README_CRA.md)

## Usage

```bash
npx create-react-app your-project-name --template dca
```

Or

```bash
yarn create react-app your-project-name --template dca
```

`npx` command installs the most recent stable version of CRA from npm.

`--template` parameter points to this template, note that `cra-template-` prefix is omitted.

## Available Scripts

In the project directory, you can run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `yarn test` - launches the test runner in the interactive watch mode.

- `yarn build` - builds the app for production to the `build` folder.

- `yarn eject` - exposes content of `react-script` package

Due to CRA template limitations (we can change only `scripts` and `dependencies` inside generated `package.json`) all configuration is done by adding config files where possible. 

## [Prettier](https://prettier.io/)

`Prettier` has been added to force consistent formatting. It will highlight errors as warning only.

## Styles/CSS/Styling

[Styled Components](https://styled-components.com//) is used as styling library. The template is shipped with a theme created by default. 

## Eslint configurations

The template extends CRA ESLint rules with a custom set, tailored for the reasonable and clean development process.