import { searchAndVerify } from "../BusinessControl/searchControl";
import { searchInput } from "../fixtures/inputData.json";

describe("Sign In", () => {
  it("Testcase ID C1 - Verify displaying of search result", () => {
    searchAndVerify(searchInput.keyword2);
  });
});
