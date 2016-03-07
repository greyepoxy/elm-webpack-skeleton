module Main (..) where

import Html exposing (..)
import Effects exposing (Effects, Never)
import Task exposing (Task)
import StartApp
import App.Actions exposing (..)
import App.Model exposing (..)
import App.Update exposing (..)
import App.View exposing (..)


init : ( AppModel, Effects Action )
init =
  ( initialModel, Effects.none )


app : StartApp.App AppModel
app =
  StartApp.start
    { init = init
    , inputs = []
    , update = update
    , view = view
    }


main : Signal Html
main =
  app.html


port runner : Signal (Task Never ())
port runner =
  app.tasks