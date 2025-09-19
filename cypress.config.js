
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {   
    baseUrl: "https://antoniotrindade.com.br/treinoautomacao",
    defaultCommandTimeout: 5000,
    },
  video: false, 
  videosFolder: 'cypress/videos',
  screenshotsFolder: 'cypress/screenshots',
  screenshotOnRunFailure: true,
  retries: {
      runMode: 0,
      openMode: 0
  },


});

