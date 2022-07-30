import { createFeatureSelector, createSelector } from "@ngrx/store";
import { appFeatureKey, AppState } from "./app.state";

export const root = createFeatureSelector<AppState>(appFeatureKey);

export const temperatureUnits = createSelector(root, state => state.temperatureUnits);

export const favoritesCities = createSelector(root, state => state.favoritesCities);