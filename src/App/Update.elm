module App.Update (..) where

import App.Model exposing (..)
import App.Actions exposing (..)
import Effects exposing (Effects)


update : Action -> AppModel -> ( AppModel, Effects Action )
update action model =
  ( model, Effects.none )
