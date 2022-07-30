import { CurrentCity } from "../core/models/current-city";
import { AppState } from "./app.state";

export function checkIfFavorite(appState: AppState, city: CurrentCity): boolean {
    const index = appState.favoritesCities.findIndex(item => item.key == city.key);
    if (index == 0) return true;
    if (index == -1) return false;
    return true;
}

export function removeFromFavorite(appState: AppState, index: any) {
    const arr = [...appState.favoritesCities];
    arr.splice(index, 1);
    return arr;
}

export function getIndex(appState: AppState, city: CurrentCity): number {
    return appState.favoritesCities.findIndex(item => item.id == city.id);
}