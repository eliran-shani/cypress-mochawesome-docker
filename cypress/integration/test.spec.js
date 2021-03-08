// Navigate to http://www.crunchbase.com/
// Click on “People”
// Under the “current organization” field, fill in the following string > “Hiredscore”
// in the dropdown results, click on the first result.
// in the table results, click on Athena Karp
// Verify URL to match https://www.crunchbase.com/person/athena-karp

describe('Go to Athena Karp profile', () => {
    it('Loads the people page',  () => {
        cy.visit('http://www.crunchbase.com/')
        .get('[href="/discover/people"]').click()
    })

    it('Organization exists on search results', () => {
        cy.get('.show-filters-button').click()
        .get('[id=mat-input-1]').focus()
        .type('HiredScore')
        .get('.mat-autocomplete-visible.ng-star-inserted').contains('HiredScore').click()
        .get('.mat-raised-button.mat-button-base.mat-primary.ng-star-inserted').click();
    })

    it('Verify Athena Karp URL', () => {
        cy.get('.body-wrapper').contains('Athena Karp').click()
        .url().should('eq', 'https://www.crunchbase.com/person/athena-karp');
    })
})