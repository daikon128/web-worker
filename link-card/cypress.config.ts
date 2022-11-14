import {cli, defineConfig} from 'cypress'
import { client } from "./e2e/plugin/db";

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
      on('task', {
        "db:createLink"(link) {
          const query = {
            text: 'INSERT INTO link(id, user_id, url, title) ' +
              'VALUES($1, $2, $3, $4)',
            values: [link.id, link.user_id, link.url, link.title ]
          }
          return client.query(query)
        },
        "db:clean"() {
          const query = {
            text: 'DELETE FROM link'
          }
          return client.query(query)
        }
      })
    },
  }
})