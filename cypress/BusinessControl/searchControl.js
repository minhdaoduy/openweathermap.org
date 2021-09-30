import Search from "../PageObjects/searchObject";
const search = new Search();
export default class searchControl {}

function searchWeather(value) {
  search.fillSearch(value);
  search.clickSearchButton();
  search.clickTheFirstSuggestion();
}

function verify(expectedValues) {
  search.verifyCityNameInSearchResult(expectedValues.cityName);
  search.verifyTemperatureInSearchResult(expectedValues.temperature);
  search.verifyCurrentDateInSearchResult();
}

export function searchAndVerify(value) {
  // cy.visit("");
  cy.intercept("GET", "**/data/2.5/onecall*").as("onecall");
  cy.visit("");
  searchWeather(value);
  cy.wait("@onecall");
  cy.wait("@onecall").then(({ response }) => {
    const expectedValues = {
      cityName: value,
      temperature: Math.round(response.body.current.temp) + "°C",
    };
    verify(expectedValues);
  });
}

export function searchAndVerifyDisplayingOfSuggestion(value) {
  // cy.visit("");
  cy.intercept("GET", "**/data/2.5/find*", (req) => {
    req.continue(({ body }) => {
      expect(body.count).to.eq(1);
      body.count = 2;
    });
  }).as("find");
  cy.visit("");
  search.fillSearch(value);
  search.clickSearchButton();
  cy.wait("@find");
  cy.get('[class="search-dropdown-menu"] li').should("have.length", 1);
}
