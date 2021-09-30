import { searchAndVerify } from "../BusinessControl/searchControl";
import { searchInput } from "../fixtures/inputData.json";
describe("Sign In", () => {
  before(() => {
    cy.window().then((win) => {
      win.localStorage.clear;
    });

    cy.clearCookies();
    cy.clearLocalStorage();
    // cy.visit("");
  });

  it("Verify displaying of search result [1]", () => {
    searchAndVerify(searchInput.keyword);
  });
});
