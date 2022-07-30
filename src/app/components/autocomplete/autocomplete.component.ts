import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { debounceTime, map, Observable, switchMap } from 'rxjs';
import { AutoCompeleteInterface } from 'src/app/core/models/autocomplete';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})

export class AutocompleteComponent implements OnInit {
  myControl = new FormControl('');
  filteredOptions!: Observable<any[]>;

  @Output() selectedCity = new EventEmitter<AutoCompeleteInterface>();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      debounceTime(400),
      switchMap(value => this.getCities(value as string))
    );
  }

  private getCities(city: string): Observable<AutoCompeleteInterface[]> {
    return this.apiService.getCityAPI(city).pipe(
      map(array => array.map((item: any) => {
        return { key: item.Key, name: item.LocalizedName }
      })),
    );
  }

  public displayFn(item: AutoCompeleteInterface): string {
    return item.name;
  }

  public onChangeValue(value: MatAutocompleteSelectedEvent): void {
    const option = value.option.value;
    this.selectedCity.emit(option);
  }
}
