declare namespace Cypress {
    interface Chainable<Subject> {

        login(env, username, password): Chainable<any>

        logout(): Chainable<any>

        saveLocalStorageCache(): Chainable<any>

        restoreLocalStorageCache(): Chainable<any>

        clearLocalStorageCache(): Chainable<any>

        clearHSCookies(): Chainable<any>

    }
}
