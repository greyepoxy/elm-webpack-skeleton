module App.View (..) where

import Html exposing (..)
import App.Actions exposing (..)
import App.Model exposing (..)


view : Signal.Address Action -> AppModel -> Html
view address model =
  div
    []
    [ text "Hello" ]
