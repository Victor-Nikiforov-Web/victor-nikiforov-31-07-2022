import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ClickableDirective } from "./directives/clickable.directive";
import { DaysPipe } from "./pipes/days.pipe";
import { UnitPipe } from "./pipes/unit.pipe";

const exportable = [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
]
const directives = [
    ClickableDirective,
    UnitPipe
]

const pipes = [DaysPipe]
@NgModule({
    declarations: [directives,pipes],
    exports: [exportable, directives,pipes]
})

export class CoreModule { }