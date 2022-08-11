export class PeopleResults { 

    clickOnFullName(fullName)
    {
        cy.get('a[title="fullName"]').click();        
    }     

}
