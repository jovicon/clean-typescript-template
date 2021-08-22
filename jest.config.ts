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
