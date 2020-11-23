import {leftPanel} from "../support/leftPanel"

const leftPANEL = new leftPanel()

function verifyURLContains(expectedURL) {
    cy.url().should('include', expectedURL)
}

function verifyComponentVisibility(selector) {
    cy.get(selector).should('be.visible')
}

describe('Sanity', { retries: { runMode: 2 } }, function () {

    it('Verify basic navigation functionality - Home', function () {
        leftPANEL.goToHome()
        verifyURLContains(Cypress.env('baseUrl'))
        verifyComponentVisibility('#region-main-box')
    })

    it('Verify basic navigation functionality - Dashboard', function () {
        leftPANEL.goToDashboard()
        verifyURLContains(Cypress.env('baseUrl') + 'my/')
        verifyComponentVisibility('#region-main-box')
    })

    it('Verify basic navigation functionality - Calendar', function () {
        leftPANEL.goToCalendar()
        verifyURLContains(Cypress.env('baseUrl') + 'calendar/')
        verifyComponentVisibility('#region-main-box')
    })

    it('Verify basic navigation functionality - Private Files', function () {
        leftPANEL.goToPrivateFiles()
        verifyURLContains(Cypress.env('baseUrl') + 'user/files.php')
        verifyComponentVisibility('#region-main-box')
    })

    it('Verify basic navigation functionality - Content Bank', function () {
        leftPANEL.goToContentBank()
        verifyURLContains(Cypress.env('baseUrl') + 'contentbank/index.php')
        verifyComponentVisibility('#region-main-box')
    })

    it('Verify basic navigation functionality - Site Administration', function () {
        leftPANEL.goToSiteAdministration()
        verifyURLContains(Cypress.env('baseUrl') + 'admin/search.php')
        verifyComponentVisibility('#region-main-box')
    })

})
