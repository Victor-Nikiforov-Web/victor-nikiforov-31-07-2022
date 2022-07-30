import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[clickable]'
})
export class ClickableDirective {
    @HostBinding('style.cursor') cursor: string = 'pointer';

}