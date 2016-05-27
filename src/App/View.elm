module App.View exposing (..)

import Html exposing (..)
import App.Messages exposing (..)
import App.Model exposing (..)


view : AppModel -> Html Message
view model =
  div
    []
    [ text "Hello" ]
