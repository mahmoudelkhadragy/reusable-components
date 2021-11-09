import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'app-fa-input input',
})
export class InputRefDirective {
  focus = false;

  constructor() {}

  @HostListener('focus')
  onFocus() {
    this.focus = true;
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }
}
