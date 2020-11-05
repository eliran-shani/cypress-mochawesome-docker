

describe('Sanity', function () {

    it('Verify navigation panel items visibility', function () {

        const leftNavItems = ["Home", "Dashboard", "Calendar", "Private files", "Content bank", "Site administration"]

        cy.get('#nav-drawer').within(function () {
            cy.get('.media').each(function (item, index) {
                cy.wrap(item).contains(leftNavItems[index]).should('be.visible')
            })
        })
    })

    it('Create new calendar event', function () {

    })

})