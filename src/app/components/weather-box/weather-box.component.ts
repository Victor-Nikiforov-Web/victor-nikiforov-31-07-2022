import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentCity } from 'src/app/core/models/current-city';
import { futureWeather } from 'src/app/core/models/future-weather';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.css']
})
export class WeatherBoxComponent implements OnInit {
  @Input() currentCity!: CurrentCity;
  @Input() futureWeather!: futureWeather[] | null;
  @Input() temperatureUnits!: Observable<"C" | "F">;
  @Input() isFavorite!: CurrentCity[] | null;
  @Output() addFavorite: EventEmitter<CurrentCity> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }

  handleFavorite() {    
    this.addFavorite.emit(this.currentCity);
  }

}
