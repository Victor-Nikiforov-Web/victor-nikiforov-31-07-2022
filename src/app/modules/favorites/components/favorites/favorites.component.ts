import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppSelectors } from 'src/app/redux/app.types';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  temperatureUnits$ = this.store.select(AppSelectors.temperatureUnits);
  favoritesCities$ = this.store.select(AppSelectors.favoritesCities);

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    
  }

}
