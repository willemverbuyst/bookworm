/// <reference types="cypress" />

const cucumber = require('cypress-cucumber-preprocessor').default

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, _config) => {
	on('file:preprocessor', cucumber())
}
