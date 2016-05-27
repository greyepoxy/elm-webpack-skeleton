module TestRunner exposing (main)

import App.Components.FakeTests exposing (tests)

import ElmTest exposing (..)

allTests : Test
allTests =
  suite "All tests"
    [ tests
    ]

main : Program Never
main =
  runSuiteHtml allTests
