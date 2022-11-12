import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    host: 'http://localhost:8001'
  },
  e2e: {
    screenshotOnRunFailure: true,
    video: false,
    downloadsFolder: 'e2e/downloads',
    fixturesFolder: 'e2e/fixtures',
    supportFolder: 'e2e/support',
    supportFile: 'e2e/support/e2e.ts',
    screenshotsFolder: 'e2e/screenshots',
    specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})