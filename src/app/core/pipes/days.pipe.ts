import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "daysPipe" })

export class DaysPipe implements PipeTransform {
    private days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    transform(date: Date): string {
        return this.days[date.getDay()];
    }
}