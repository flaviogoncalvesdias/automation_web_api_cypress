const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://front.serverest.dev",
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
  },
});
