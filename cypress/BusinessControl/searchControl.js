import Search from "../PageObjects/searchObject";
const search = new Search();
export default class searchControl {
  search(value, cityName = "") {
    search.fillSearch(value);
    search.clickSearchButton();
    return search.clickSuggestionByCityName(cityName);
  }

  searchAndVerify(value) {
    const searchResult = search(value);
  }

  verify(value) {
    const cityName = search.getCityNameInSearchResult();
    const temperature = search.getTemperatureInSearchResult();
    const currentDate = search.getCurrentDateInSearchResult();
    return cy.input(value, '[class="search-container"] input');
  }
}
