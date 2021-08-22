# Why I created the clean typescript template

# Steps by step to configure
## Typescript
* mkdir 'folder-name'
* cd 'folder-name'
* npm init ( configure your project name and stuffs )
* npm i typescript --save-dev
* npm tsc --init ( You can change the base configuration )


## nodemon
* npm i -D nodemon ts-node @types/node
    * copy nodemon.json on root path ( you can change this configuration )

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
* npm i -D jest ts-jest @types/jest 
* npm i -D jest-sonar jest-sonar-reporter ( sonar config is an extra)

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