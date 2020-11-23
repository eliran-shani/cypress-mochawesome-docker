import {header} from "./header"


export class leftPanel extends header {

    goToNavItem(item) {
        cy.get('.media').contains(item).click()
    }

    goToHome() {
        this.goToNavItem('Home')
    }

    goToDashboard() {
        this.goToNavItem('Dashboard')
    }

    goToCalendar() {
        this.goToNavItem('Calendar')
    }

    goToPrivateFiles() {
        this.goToNavItem('Private files')
    }

    goToContentBank() {
        this.goToNavItem('Content bank')
    }

    goToSiteAdministration() {
        this.goToNavItem('Site administration')
    }
}