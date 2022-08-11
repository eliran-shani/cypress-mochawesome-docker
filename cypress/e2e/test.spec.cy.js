import {HomePage} from './pageObjects/homepage'

describe('Hiredscore Assignemnt', () => {
  const homePage = new HomePage();

  it('Navigate to "Crunchbase"', () => {
    homePage.navigateToPage();
    homePage.validatePageIsDisplayed();
  })

  it('Search category "People"', () => {   
    homePage.searchForCategory('People');  
    homePage.validateCategoryFiltersAreDiplayed();  
  })

  it('Type "Hiredscore" in "Current organization" field', () => {   
   homePage.setCurrentOrganizationFilter('Hiredscore'); 
   homePage.validateFiltersOptionsAreDiplayed();     
  })

  it('In the dropdown results, click on the first result', () => {   
    homePage.clickOnResultsInPeopleFilters(0); 
    homePage.validateResultIsDisplayed("Full Name")       
  })

  it('In the table results, click "Athena Karp" and verify that url matches "https://www.crunchbase.com/person/athena-karp"', () => {   
    const expectedUrl = 'https://www.crunchbase.com/person/athena-karp';    
    homePage.clickOnPeopleResultsByFullName('Athena Karp') ; 
    cy.url().should('eq', expectedUrl ); 
  })
})