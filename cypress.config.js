const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com",
    defaultCommandTimeout: 30000,
    viewportHeight: 660,
    viewportWidth: 1000,
    waitForAnimations: true,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
