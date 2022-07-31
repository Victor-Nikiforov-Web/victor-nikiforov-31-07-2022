import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { map, Observable, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    constructor(private http: HttpClient) { }

    private API_KEY = environment.API_KEY;
    private autocompleteAPI = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";
    private currentWeatherAPI = "http://dataservice.accuweather.com/currentconditions/v1";
    private futureWeatherAPI = "http://dataservice.accuweather.com/forecasts/v1/daily/5day";
    private locationAPI = "http://dataservice.accuweather.com/locations/v1/cities/geoposition/search";
    
    getCityAPI(city: string): Observable<any> {
        return this.http.get(`${this.autocompleteAPI}?apikey=${this.API_KEY}&q=${city}`);
    }

    getCurrentWeather(cityKey: string): Observable<any> {
        return this.http.get(`${this.currentWeatherAPI}/${cityKey}?apikey=${this.API_KEY}`);
    }

    getFutureWeather(cityKey: string) {
        return this.http.get(`${this.futureWeatherAPI}/${cityKey}?apikey=${this.API_KEY}`);
    }

    getByLocation(lat: number, long: number) {
        return this.http.get(`${this.locationAPI}?apikey=${this.API_KEY}q=${lat}%${long}`);
    }
}