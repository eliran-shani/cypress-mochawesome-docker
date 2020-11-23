// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import {COOKIES} from "./commands"

require('cypress-commands')

before(function () {

    cy.clearLocalStorageCache()
    cy.clearCookies()

    cy.login(
        Cypress.env('baseUrl'),
        Cypress.env('username'),
        Cypress.env('password')
    )
})

beforeEach(function () {

    // Whitelist cookies
    Cypress.Cookies.defaults({
        preserve: COOKIES
    })

    // Restore local storage
    cy.restoreLocalStorageCache()
})

afterEach(() => {

    // Save local storage
    cy.saveLocalStorageCache()
})

