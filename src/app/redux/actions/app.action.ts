import { createAction, props } from "@ngrx/store";
import { CurrentCity } from "src/app/core/models/current-city";

export const changeTemperatureUnits = createAction('[user] changed temperature units', 
props<{ unit: "C" | "F" }>());

export const manageFavorite = createAction('[user] added to favorites ',
props<CurrentCity>());
