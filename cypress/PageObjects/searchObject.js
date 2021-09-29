export default class searchObject {
  fillSearch(value) {
    return cy.input(value, '[class="search-container"] input');
  }

  clickSearchButton() {
    return cy.press(value, 'button[type="submit"]');
  }

  clickSuggestionByCityName(cityName) {
    cy.get(
      '[class="search-dropdown-menu"] li:contains(' + cityName + ")"
    ).click();
  }

  getCityNameInSearchResult() {
    // return cy.get('[class="section-content"] h2');
    return cy.getText('[class="section-content"] h2');
  }

  getTemperatureInSearchResult() {
    // return cy.get('[class="current-temp"] span');
    return cy.getText('[class="current-temp"] span');
  }

  getCurrentDateInSearchResult() {
    // return cy.get('[class="section-content"] h2').siblings();
    // return cy.getText('[class="section-content"] h2 + span');
    return cy.getText('[class="section-content"] [class="orange-text"]');
  }
}
