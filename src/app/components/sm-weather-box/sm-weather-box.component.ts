import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { futureWeather } from 'src/app/core/models/future-weather';

@Component({
  selector: 'app-sm-weather-box',
  templateUrl: './sm-weather-box.component.html',
  styleUrls: ['./sm-weather-box.component.css']
})
export class SmWeatherBoxComponent implements OnInit {
  @Input() weather!: futureWeather;
  @Input() temperatureUnits!: Observable<"C" | "F">;

  constructor() { }

  ngOnInit(): void {
  }

}
