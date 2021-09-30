const resultsDefinition = {
  passed: 1,
  blocked: 2,
  untested: 3,
  retest: 4,
  failed: 5,
};
const user = Cypress.config().testrailReporter.user;
const password = Cypress.config().testrailReporter.password;

export function submitResult(result) {
  let url = "https://minhdao.testrail.io/index.php?/api/v2/add_results/1";
  let body = {
    results: [
      {
        test_id: result.testID,
        status_id: resultsDefinition[result.status],
        comment: result.message,
      },
    ],
  };
  let header = { "Content-Type": "application/json" };
  let authen = {
    user: user,
    pass: password,
    sendImmediately: true,
  };
  cy.request({
    method: "POST",
    url: url,
    headers: header,
    auth: authen,
    body: body,
  });
}

export function addTestRun() {
  let body = {
    suite_id: 1,
    name: new Date().toString(),
    include_all: false,
    case_ids: [1],
  };
  let header = { "Content-Type": "application/json" };
  let authen = {
    user: "daoduyminh@gmail.com",
    pass: "U8ewFuN6xA987EaFOESH",
    sendImmediately: true,
  };
  cy.request({
    method: "POST",
    url: "https://minhdao.testrail.io/index.php?/api/v2/add_run/1",
    headers: header,
    auth: authen,
    body: body,
  }).then((res) => {
    cy.log(res.body.id);
    cy.request({
      method: "GET",
      url:
        "https://minhdao.testrail.io/index.php?/api/v2/get_tests/" +
        res.body.id,
      headers: header,
      auth: authen,
    }).then((res2) => {
      cy.log(res2.body.tests[0].id);
    });
  });
}
