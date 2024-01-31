const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },

    baseUrl: "http://localhost:3000/#/",
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 10000,
  },
});
