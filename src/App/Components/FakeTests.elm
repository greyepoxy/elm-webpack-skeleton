module App.Components.FakeTests(tests) where

import ElmTest exposing (..)

--These kinds of tests would be imported from other modules
tests : Test
tests =
  suite "Example Text"
    [ test "does math correctly" <|
        (1 + 1) `assertEqual` 2

    , test "does not miscalculate things" <|
        (2 + 2) `assertNotEqual` 5

    , test "exemplifies more complex test cases" <|
        let
          expression = 2 + 2
        in
          expression `assertEqual` 4
    ]
