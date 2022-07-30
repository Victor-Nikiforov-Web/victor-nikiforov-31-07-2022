import { NgModule } from "@angular/core";
import { FavoriteWeatherBoxComponent } from "src/app/components/favorite-weather-box/favorite-weather-box.component";
import { CoreModule } from "src/app/core/core.module";
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesRoutingModule } from "./favorites-routing.module";

@NgModule({
  imports:[CoreModule,FavoritesRoutingModule],
  declarations: [
    FavoritesComponent,
    FavoriteWeatherBoxComponent
  ]
})

export class FavoritesModule {}