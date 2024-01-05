const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },

    baseUrl: "https://demo.owasp-juice.shop/#/",
    viewportHeight: 1080,
    viewportWidth: 1920,
    defaultCommandTimeout: 10000,
  },
});
