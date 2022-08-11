export class Header { 
    advancedSearch(categoryName)
    {
        cy.get('button[aria-label="Advanced"]').click();
        cy.get('mat-nav-list[role="presentation"]').should('be.visible').contains(categoryName).click();         
    }    

    isVisible()
    {
        cy.get('input[data-placeholder="Search Crunchbase"]').should('be.visible');
    }
}