class header {

    toggleUserMenu(toggleTo) {

        const userMenuElement = cy.get('.userbutton')

        userMenuElement.find('dropdown').attribute('class').then((classAttr) => {

            // Open user menu if closed
            if (classAttr.includes('show') && toggleTo === false) {
                userMenuElement.click()
            }

            // close user menu if opened
            if (classAttr.notInclude('show') && toggleTo === true) {
                userMenuElement.click()
            }
        })
    }

    openUserMenu() {
        this.toggleUserMenu(true)
    }

    closeUserMenu() {
        this.toggleUserMenu(false)
    }

    logout() {
        this.toggleUserMenu()
        cy.get('[data-title="logout,moodle"]').click()
        cy.get('.login').should('be.visible')
    }


}