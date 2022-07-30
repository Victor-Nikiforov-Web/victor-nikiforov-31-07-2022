import { CurrentCity } from "../core/models/current-city";

export const appFeatureKey = 'app';

export interface AppState {
    readonly favoritesCities: CurrentCity[];
    readonly temperatureUnits: "C" | "F";

}

export const initialAppState: AppState = {
    favoritesCities: [],
    temperatureUnits: 'C'
}