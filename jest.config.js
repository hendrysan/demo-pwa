const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest", // Transpile TypeScript files
    "^.+\\.(js|jsx)$": "babel-jest", // Transpile JS files (including ES modules)
  },

  moduleNameMapper: {
    // Handle CSS imports (if you're using CSS modules or SASS)
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Point to your setup file
};
module.exports = createJestConfig(customJestConfig);
