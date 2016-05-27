module Main exposing (..)

import Html.App
import Platform.Cmd exposing (Cmd)
import App.Messages exposing (..)
import App.Model exposing (..)
import App.Update exposing (..)
import App.View exposing (..)


init : ( AppModel, Cmd Message )
init =
  ( initialModel, Cmd.none )

main : Program Never
main =
  Html.App.program
    { init = init
    , subscriptions = (\_-> Sub.none)
    , update = update
    , view = view
    }
