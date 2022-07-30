import { NgModule } from "@angular/core";
import { AutocompleteComponent } from "src/app/components/autocomplete/autocomplete.component";
import { SmWeatherBoxComponent } from "src/app/components/sm-weather-box/sm-weather-box.component";
import { WeatherBoxComponent } from "src/app/components/weather-box/weather-box.component";
import { CoreModule } from "src/app/core/core.module";
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  imports: [CoreModule,HomeRoutingModule],
  declarations: [
    HomeComponent,
    AutocompleteComponent,
    WeatherBoxComponent,
    SmWeatherBoxComponent
  ]
})

export class HomeModule { }