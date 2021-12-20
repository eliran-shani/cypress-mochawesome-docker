
describe('test name', () => {
	it('flow 1', () => {

		cy.visit('http://www.crunchbase.com')
		cy.viewport(1700, 1100)

		//Click on search crunchbase
        cy.get('#mat-input-0').click()

        //Click on people
        cy.get('a[href*="/discover/people"]').click()

        //Click on current organization and insert the text 
        cy.get('#mat-input-1').click().type('Hiredscore')

        //Select Hiredscore from the opened window
        cy.contains('HiredScore').click()

        //Select the first result 
        cy.get('.identifier-label').first().click()

        //Verify the Url 
        cy.url().should('eq', 'https://www.crunchbase.com/person/athena-karp') 
	})
}) 