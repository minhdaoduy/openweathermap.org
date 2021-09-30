import SearchControl from "../BusinessControl/searchControl";
import { searchAndVerify } from "../BusinessControl/searchControl";
import { searchInput } from "../fixtures/inputData.json";
const searchControl = new SearchControl();
describe("Sign In", () => {
  let home;
  // before(() => {

  // });
  before(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("");
  });

  it("Testcase ID C1 - Verify displaying of search result", () => {
    searchAndVerify(searchInput.keyword, searchInput.cityName);
  });
});
