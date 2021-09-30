export default class searchObject {
  fillSearch(value) {
    return cy.input(value, '[class="search-container"] input');
  }

  clickSearchButton() {
    cy.press('button[type="submit"]');
  }

  clickTheFirstSuggestionByCityName(numberSuggestion = 0) {
    cy.get('[class="search-dropdown-menu"] li').eq(numberSuggestion).click();
  }

  verifyCityNameInSearchResult(text) {
    cy.get('[class="section-content"] h2').should((ele) => {
      expect(ele.text().toLowerCase()).to.contains(text);
    });
  }

  verifyTemperatureInSearchResult(text) {
    cy.get('[class="current-temp"] span').should("have.text", text);
  }

  verifyCurrentDateInSearchResult() {
    cy.get('[class="section-content"] [class="orange-text"]').should((ele) => {
      const expectedCurrentDate = Date.parse(new Date());
      let currentDate = ele.text().replace("am", " am");
      currentDate = currentDate.replace("pm", " pm");
      currentDate = currentDate.replace(",", "," + new Date().getFullYear());
      currentDate = Date.parse(currentDate);
      expect(currentDate).within(
        expectedCurrentDate - 100000,
        expectedCurrentDate
      );
    });
  }
}
