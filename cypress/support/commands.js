
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


function verifyLoggedIn() {
    cy.get('.usermenu').should('be.visible')
    cy.get('.page-header-headings').should('be.visible')
}

Cypress.Commands.add("login", (url, username, password) => {
    cy.visit(url)
    cy.get('.login').contains('Log in').click()
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.get('button#loginbtn').click()
    verifyLoggedIn()
})

let LOCAL_STORAGE_MEMORY = {}
export const COOKIES = ["MoodleSession"]

Cypress.Commands.add("saveLocalStorageCache", () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key]
    })
})

Cypress.Commands.add("restoreLocalStorageCache", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
    })
})

Cypress.Commands.add("clearLocalStorageCache", () => {
    localStorage.clear()
    LOCAL_STORAGE_MEMORY = {}
})

Cypress.Commands.add("clearCookies", () => {
    COOKIES.forEach(cookie => {
        cy.clearCookie(cookie)
    })
})
