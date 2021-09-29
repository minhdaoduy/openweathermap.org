import Search from "../PageObjects/searchObject";
import { searchInput } from "../fixtures/inputData.json";
const search = new Search();
describe("Sign In", () => {
  let home;
  // before(() => {

  // });
  before(() => {
    cy.visit();
  });

  it("Testcase ID C1 - Verify displaying of search result", () => {
    const signIn = home.goToSignIn();

    signIn.fillEmail("daoduyminh@gmail.com").fillPassword("operation").submit();
    home.verifyLoginSuccessfulByEmail("daoduyminh@gmail.com");
  });
});
