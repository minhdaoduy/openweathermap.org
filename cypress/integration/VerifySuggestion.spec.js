import { searchAndVerifyDisplayingOfSuggestion } from "../BusinessControl/searchControl";
import { searchInput } from "../fixtures/inputData.json";

describe("Verify displaying of suggestion", () => {
  it("Verify displaying of suggestion", () => {
    // this test case is just demonstration for APIs stub and for multi threads
    searchAndVerifyDisplayingOfSuggestion(searchInput.keyword2);
  });
});
