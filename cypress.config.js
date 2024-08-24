// cypress.config.mjs or cypress.config.js (with ES module syntax)
import { defineConfig } from 'cypress';

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:5174', // Update this URL to match your local development server
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
