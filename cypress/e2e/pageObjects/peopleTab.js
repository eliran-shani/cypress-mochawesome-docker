import {PeopleFilters} from './peopleFilters'
import {PeopleResults} from './peopleResults'

export class PeopleTab {     
    peopleFilters = new PeopleFilters();
    peopleResults = new PeopleResults();

    setCurrentOrganizationFilter(organizationName)
    {
        this.peopleFilters.setCurrentOrganizationFilter(organizationName);  
    }  
    
    selectCurrentOrganizationResult(index)
    {
        this.peopleFilters.selectCurrentOrganizationResult(index);
    }

    clickOnResultsByFullName(fullName)
    {
        this.peopleResults.clickOnFullName(fullName);
    }

}