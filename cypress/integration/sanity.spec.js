import {leftPanel} from "../support/leftPanel"

const leftPANEL = new leftPanel()

function verifyPage({url} = {}) {

    // URL assertion
    cy.url().should('include', Cypress.env('baseUrl') + url)

    // Component visibility assertion
    cy.get('#region-main-box').should('be.visible')
}

describe('Sanity', {retries: {runMode: 2}}, function () {

    it('Verify basic navigation functionality - Home', function () {
        leftPANEL.goToHome()
        verifyPage({url: ''})
    })

    it('Verify basic navigation functionality - Dashboard', function () {
        leftPANEL.goToDashboard()
        verifyPage({url: 'my/'})
    })

    it('Verify basic navigation functionality - Calendar', function () {
        leftPANEL.goToCalendar()
        verifyPage({url: 'calendar/'})
    })

    it('Verify basic navigation functionality - Private Files', function () {
        leftPANEL.goToPrivateFiles()
        verifyPage({url: 'user/files.php'})
    })

    it('Verify basic navigation functionality - Content Bank', function () {
        leftPANEL.goToContentBank()
        verifyPage({url: 'contentbank/index.php'})
    })

    it('Verify basic navigation functionality - Site Administration', function () {
        leftPANEL.goToSiteAdministration()
        verifyPage({url: 'admin/search.php'})
    })
})
