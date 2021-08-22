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

## Jest
* npm i -D jest ts-jest @types/jest 
* npm i -D jest-sonar jest-sonar-reporter ( sonar config is an extra)

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