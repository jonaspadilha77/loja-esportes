import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appGreenText]'
})
export class GreenTextDirective {
    constructor(private el: ElementRef) {
        el.nativeElement.style.color = 'green';
    }
}
