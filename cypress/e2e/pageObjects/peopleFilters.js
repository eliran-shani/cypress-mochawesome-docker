export class PeopleFilters { 

    setCurrentOrganizationFilter(organizationName)
    {
        cy.wait(1000);
        cy.get('input[placeholder="E.g. Lyft, Twitter, Box"]').should('be.visible').type(organizationName);  
    }  
    
    selectCurrentOrganizationResult(index)
    {
        cy.get('div[role="listbox"]').find('mat-option[role="option"]').then($els => $els.get(index)).should('be.visible').click();  
    }
}