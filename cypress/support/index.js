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

require('cypress-commands')

// Alternatively you can use CommonJS syntax:
// require('./commands')

function login({url, username, password}) {
    cy.visit(url)
    cy.get('.login').contains('Log in').click()
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('button#loginbtn').click()
}

function verifyLoggedIn() {
    cy.get('.usermenu').should('be.visible')
    cy.get('.page-header-headings').should('be.visible')
}

before(function () {
    login({
        url:Cypress.env('baseUrl'),
        username:Cypress.env('username'),
        password:Cypress.env('password')
    })
})


