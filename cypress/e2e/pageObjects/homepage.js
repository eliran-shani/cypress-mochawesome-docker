import {Header} from './Header'
import {PeopleTab} from './peopleTab'

export class HomePage {

    header = new Header();
    peopleTab = new PeopleTab();
    
    navigateToPage() {
        cy.visit('http://www.crunchbase.com');    
    }
  
    searchForCategory(categoryName)
    {
      this.header.advancedSearch(categoryName);          
    }
  
    setCurrentOrganizationFilter(stringToSearch)
    {
        this.peopleTab.setCurrentOrganizationFilter(stringToSearch);
    }

    clickOnResultsInPeopleFilters(index)
    { 
        this.peopleTab.selectCurrentOrganizationResult(0);       
    }

    clickOnPeopleResultsByFullName(fullName)
    {
        this.peopleTab.clickOnResultsByFullName(fullName);
    }


    //Validations methods
    validatePageIsDisplayed() {
        this.header.isVisible();
    }
    
    validateCategoryFiltersAreDiplayed()
    {
        this.peopleTab.peopleFilters.validateFiltersAreDisplayed(); 
    }

    validateFiltersOptionsAreDiplayed()
    {
        this.peopleTab.peopleFilters.validateOptionsListIsDisplayed()
    }

    validateResultIsDisplayed(resultName)
    {
        this.peopleTab.peopleResults.validateIsResultVisible(resultName) 
    }

}