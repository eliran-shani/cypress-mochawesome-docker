export class PeopleResults { 

    clickOnFullName(fullName)
    {
        cy.get('a[title="${fullName}"]').click();        
    }  
    
    validateIsResultVisible(resultName)
    {
        cy.contains(resultName).should('be.visible');
    }    

}
