# openweathermap.org

-npm run cy:run:chrome"
-npm run cy:run:firefox"

npx cypress run --record --key=5ea94412-6792-4bd7-a4f4-7e8d457d2985 --parallel
cypress run --record --key 5ea94412-6792-4bd7-a4f4-7e8d457d2985
npx cypress run --record --group 2x-chrome --browser chrome --parallel --ci-build-id ${BUILD_NUMBER}
npx cypress run --record --key=5ea94412-6792-4bd7-a4f4-7e8d457d2985 --group 2x-chrome --browser chrome --parallel --ci-build-id main-05eae7d0bd3a8af8cbf56e5f55461396fd26e65a
