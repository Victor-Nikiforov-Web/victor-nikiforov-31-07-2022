import { Injectable } from "@angular/core";
import { Observable, switchMap } from "rxjs";
import { map } from "rxjs";
import { AutoCompeleteInterface } from "src/app/core/models/autocomplete";
import { CurrentCity } from "src/app/core/models/current-city";
import { ApiService } from "src/app/core/services/api.service";

@Injectable({
    providedIn: "root"
})

export class HomeService {
    constructor(private apiService: ApiService) { }

    getCurrentCity(city: AutoCompeleteInterface) {
        return this.apiService.getCurrentWeather(city.key).pipe(
            map(res => {
                const [value] = res;
                return {
                    temperature: value.Temperature.Imperial.Value,
                    weatherText: value.WeatherText,
                    weatherIcon: value.WeatherIcon,
                    ...city
                }
            })
        )
    }
    getFutureWeather(key: string) {
        return this.apiService.getFutureWeather(key).pipe(
            map((res: any) =>
                res.DailyForecasts.map((item: any) => {
                    return {
                        date: new Date(item.Date), temperature: item.Temperature.Maximum.Value
                        , day: item.Day
                    }
                })
            )
        )
    }

    checkIfFavorite(cities$: Observable<CurrentCity[]>, city$: Observable<CurrentCity>) {
        return city$?.pipe(
            switchMap(city => {
                return cities$.pipe(
                    map(arr => {
                        return arr.filter(item => item.key == city.key);
                    })
                )
            })
        )
    }
}