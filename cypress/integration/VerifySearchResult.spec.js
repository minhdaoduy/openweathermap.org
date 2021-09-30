import { searchAndVerify } from "../BusinessControl/searchControl";
import { searchInput } from "../fixtures/inputData.json";
import { submitResult } from "../helpers/testRail";
describe("Verify search result", () => {
  let result = {
    testID: "",
    status: "untested",
    message: "this test is failed",
  };

  it("[1-1] Verify displaying of search result", () => {
    result.testID = "1";
    result.status = "failed";
    searchAndVerify(searchInput.keyword);
    result.status = "passed";
    result.message = "";
  });

  afterEach(() => {
    submitResult(result);
  });
});
