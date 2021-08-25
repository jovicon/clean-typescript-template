# Why I created the clean typescript template

I created this template because typescript have few tutorial or templates to get a complete clean installation ready to code.
I've been studying Software Design and Architecture, so this is part of acquired knowledge.

## Sources

- [typescript init](https://www.digitalocean.com/community/tutorials/typescript-new-project)
- [nodemon config](https://futurestud.io/tutorials/typescript-use-nodemon-to-restart-your-server-on-changes)
- [eslint and prettier - 1](https://dev.to/saurabhggc/add-eslint-prettier-and-airbnb-to-your-project-3mo8)
- [eslint and prettier - 2](https://www.robinwieruch.de/prettier-eslint)
- [all about](https://blog.bitsrc.io/tools-for-consistent-javascript-code-style-56a6e93d75d)

## Practices to follow

plugins:

- nodemon - Debug quickly
- eslint - great linter
- prettier - vscode linter sync
- sonar - avoid smell and bad practices

### reinforce good practices and avoid code smells

https://rules.sonarsource.com/typescript

# Steps by step to configure

## Typescript

- mkdir 'folder-name'
- cd 'folder-name'
- npm init ( configure your project name and stuffs )
- npm i -D typescript
- npm tsc --init ( You can change the base configuration )

## nodemon

- npm i -D nodemon ts-node @types/node
  - copy nodemon.json on root path ( you can change this configuration )

```typescript
------------------------------------------------------
file: nodemon.json
------------------------------------------------------
{
  "restartable": "rs",
  "ignore": [".git", "node_modules/", "dist/", "coverage/"],
  "watch": ["src"],
  "execMap": {
    "ts": "node -r ts-node/register"
  },
  "env": {
    "NODE_ENV": "dev"
  },
  "ext": "js,json,ts"
}

------------------------------------------------------
```

## Jest

- npm i -D jest ts-jest @types/jest
- npm i -D jest-sonar jest-sonar-reporter ( sonar config is an extra)

```typescript
------------------------------------------------------
file: jest.config.ts
------------------------------------------------------
module.exports = {
  roots: ["<rootDir>"],
  reporters: [
    "default",
    [
      "jest-sonar",
      {
        outputDirectory: "./",
        outputName: "test-reporter.xml",
        reportedFilePath: "absolute",
      },
    ],
  ],
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  verbose: false,
  coveragePathIgnorePatterns: [".*I.*([A-Z]|[a-z]).ts?$"],
};

------------------------------------------------------
```

```json
------------------------------------------------------
file: package.json
------------------------------------------------------
{
  ...
  "jest": {
      "testResultsProcessor": "jest-sonar-reporter"
    },
  "jestSonar": {
    "reportFile": "test-reporter.xml",
    "indent": 2,
    "env": {
      "test": {
      "reportPath": "reports-test"
      }
    }
  }
  ...
}
------------------------------------------------------
```

## Eslint && Prettier

npx eslint --init
npm i -D eslint-config-prettier eslint-plugin-prettier prettier prettier-eslint prettier-eslint-cli

```yaml
------------------------------------------------------
file: .eslintrc.yml
------------------------------------------------------
env:
  browser: true
  es2021: true
extends:
  - airbnb-base
parserOptions:
  ecmaVersion: 12
  sourceType: module
  project: 'tsconfig.json'
plugins:
  - 'prettier'
rules: {
  'prettier/prettier': 'error'
}
```

## Husky

https://github.com/typicode/husky

- npm i -D husky

- npm set-script prepare "husky install"

- npm run prepare

- npx husky add .husky/pre-commit "npm run lint && npm run test"
