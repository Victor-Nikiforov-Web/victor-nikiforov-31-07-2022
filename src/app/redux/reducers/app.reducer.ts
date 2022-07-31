import { createReducer, on } from "@ngrx/store";
import { checkIfFavorite, getIndex, removeFromFavorite } from "../app.helpers";
import { initialAppState } from "../app.state";
import { AppActions } from "../app.types";

export const appReducer = createReducer(initialAppState,

    on(AppActions.changeTemperatureUnits, (state, action) => ({
        ...state,
        temperatureUnits: action.unit
    })),

    on(AppActions.manageFavorite, (state, action) => (
        {
            ...state,
            favoritesCities:
                checkIfFavorite(state, action) ?
                    removeFromFavorite(state, getIndex(state, action))
                    :
                    [...state.favoritesCities, { ...action }]
        }))

);
