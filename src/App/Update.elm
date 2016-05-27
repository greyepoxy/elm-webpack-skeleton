module App.Update exposing (..)

import App.Model exposing (..)
import App.Messages exposing (..)
import Platform.Cmd exposing (Cmd)


update : Message -> AppModel -> ( AppModel, Cmd Message )
update action model =
  ( model, Cmd.none )
