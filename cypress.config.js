const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: "https://demo.owasp-juice.shop/#/",
    viewportHeight: 1080,
    viewportWidth: 1920,
  },
});
