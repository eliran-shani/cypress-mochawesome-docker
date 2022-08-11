export class PeopleFilters { 

   setCurrentOrganizationFilter(organizationName)
    {
        cy.get('input[placeholder="E.g. Lyft, Twitter, Box"]').should('be.visible').type(organizationName);  
    }  
    
    selectCurrentOrganizationResult(index)
    {
        cy.get('div[role="listbox"]').find('mat-option[role="option"]').then($els => $els.get(index)).should('be.visible').click();  
    }

    validateFiltersAreDisplayed()
    {
        cy.get('input[placeholder="E.g. Lyft, Twitter, Box"]').should('be.visible');
    }

    validateOptionsListIsDisplayed()
    {
        cy.get('div[role="listbox"]').should('be.visible');
    }
    
}