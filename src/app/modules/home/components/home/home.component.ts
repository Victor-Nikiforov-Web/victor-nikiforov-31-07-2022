import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, of } from 'rxjs';
import { AutoCompeleteInterface } from 'src/app/core/models/autocomplete';
import { CurrentCity } from 'src/app/core/models/current-city';
import { futureWeather } from 'src/app/core/models/future-weather';
import { manageFavorite, changeTemperatureUnits } from 'src/app/redux/actions/app.action';
import { AppSelectors } from 'src/app/redux/app.types';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<any>, private homeService: HomeService,
    private _snackBar: MatSnackBar, private router: ActivatedRoute) { }

  currentCity$!: Observable<CurrentCity> | undefined;
  futureWeather$!: Observable<futureWeather[]>;
  checkIfFavorite$!: Observable<CurrentCity[]>;
  temperatureUnits$ = this.store.select(AppSelectors.temperatureUnits);
  favoritesCities$ = this.store.select(AppSelectors.favoritesCities);

  ngOnInit(): void {
    const params = this.router.snapshot.firstChild?.params;

    if (params && params['key']) {
      this.currentCity$ = this.favoritesCities$.pipe(
        map(arr => {
          const city = arr.find(item => item.key == params['key']);
          this.checkIfFavorite$ = this.homeService.checkIfFavorite(this.favoritesCities$, of(city) as Observable<CurrentCity>);
          this.getFutureWeather(params['key']);
          return city;
        })
      ) as Observable<CurrentCity>;
      return;

    }

      this.getCurrentCity({
        key: "215854",
        name: "Tel Aviv"
      });
  }


  
  openSnackBar(message: string) {
    this._snackBar.open(message, '', { duration: 3000 })
  }
  
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }

  unitChange(event: MatButtonToggleChange) {
    this.store.dispatch(changeTemperatureUnits({ unit: event.value }));
  }

  getCurrentCity(city: AutoCompeleteInterface) {
    this.currentCity$ = this.homeService.getCurrentCity(city);
    this.checkIfFavorite$ = this.homeService.checkIfFavorite(this.favoritesCities$, this.currentCity$);
    this.getFutureWeather(city.key);
  }

  getFutureWeather(key: string): void {
    this.futureWeather$ = this.homeService.getFutureWeather(key);
  }

  manageFavorite(city: CurrentCity): void {
    this.store.dispatch(manageFavorite(city));
  }

}
