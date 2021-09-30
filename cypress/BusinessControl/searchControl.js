import Search from "../PageObjects/searchObject";
const search = new Search();
export default class searchControl {}

function searchWeather(value) {
  search.fillSearch(value);
  search.clickSearchButton();
  search.clickTheFirstSuggestionByCityName();
}

function verify(expectedValues) {
  search.verifyCityNameInSearchResult(expectedValues.cityName);
  search.verifyTemperatureInSearchResult(expectedValues.temperature);
  search.verifyCurrentDateInSearchResult();
}

export function searchAndVerify(value) {
  // cy.visit("");
  cy.intercept("GET", "**/data/2.5/onecall*").as("find");
  cy.visit("");
  searchWeather(value);
  cy.wait("@find");
  cy.wait("@find").then(({ response }) => {
    const expectedValues = {
      cityName: value,
      temperature: Math.round(response.body.current.temp) + "°C",
    };
    verify(expectedValues);
  });
}
