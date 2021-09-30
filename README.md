# openweathermap.org

For the manual assignment, here is the testrail where I developed test cases
https://minhdao.testrail.io/index.php?/suites/view/1&group_by=cases:section_id&group_order=asc&display_deleted_cases=0

For the automation assignment:

Setup guideline

1. install nodejs
2. Clone github (url: https://github.com/minhdaoduy/openweathermap.org)
3. run: npm i

Running guideline

1. run parallel: npx cypress run --record --key=5ea94412-6792-4bd7-a4f4-7e8d457d2985 --group 2x-chrome --browser chrome --parallel --ci-build-id main-16c2b0760723e8836552beb406ea9e6fd2ee5cd2
2. run with chrom: npm run cy:run:chrome
3. run with firefox: npm run cy:run:firefox

Report
The test run where the automation code will submit the testing result
user: daoduyminh@gmail.com",
password: U8ewFuN6xA987EaFOESH",
URL: https://minhdao.testrail.io/index.php?/runs/view/1&group_by=cases:section_id&group_order=asc

In additional, you can also se the report in: cypress/results
Or watch the videos in cypress/videos

Note: for the coding which handles for sending result to test rail, I know it’s so bad. If I have more time, the result should read from log file.
