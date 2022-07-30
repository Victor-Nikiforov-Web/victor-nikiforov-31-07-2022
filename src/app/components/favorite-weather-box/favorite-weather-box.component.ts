import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CurrentCity } from 'src/app/core/models/current-city';
import { manageFavorite } from 'src/app/redux/actions/app.action';
import { AppSelectors } from 'src/app/redux/app.types';

@Component({
  selector: 'app-favorite-weather-box',
  templateUrl: './favorite-weather-box.component.html',
  styleUrls: ['./favorite-weather-box.component.css']
})
export class FavoriteWeatherBoxComponent implements OnInit {
  @Input() temperatureUnits$ = this.store.select(AppSelectors.temperatureUnits);
  @Input() favoritesCities$ = this.store.select(AppSelectors.favoritesCities);

  constructor(private store: Store<any>,private router:Router) { }

  ngOnInit(): void {  }

  removeItem(item:CurrentCity):void {
    this.store.dispatch(manageFavorite(item));
  }

  onClick(item:CurrentCity) {
    this.router.navigate([`home/${item.key}`]);
  }

}
