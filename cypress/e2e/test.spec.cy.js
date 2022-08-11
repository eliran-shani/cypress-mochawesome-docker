import {HomePage} from './pageObjects/homepage'

describe('HiredScore Assignemnt', () => {
  const homePage = new HomePage();

  it('Navigate to "Crunchbase"', () => {
    homePage.navigateToPage();
  })

  it('Search category "People"', () => {   
    homePage.searchForCategory('People');  
  })

  it('Type "Hiredscore" in "Current organization" field', () => {   
   homePage.setCurrentOrganizationFilter('Hiredscore');      
  })

  it('In the dropdown results, click on the first result', () => {   
    homePage.clickOnResultsInPeopleFilters(0);     
  })

  it('In the table results, click "Athena Karp" and verify that url matches "https://www.crunchbase.com/person/athena-karp"', () => {   
    homePage.clickOnPeopleResultsByFullName('Athena Karp') ; 
    const expectedUrl = 'https://www.crunchbase.com/person/athena-karp';
    cy.url().should('eq', expectedUrl ); 
  })
})