import {
  AfterContentInit,
  Component,
  ContentChild,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { InputRefDirective } from 'src/app/common/input-ref.directive';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss'],
})
export class FaInputComponent implements OnInit, AfterContentInit {
  @Input() icon: string;

  @ContentChild(InputRefDirective) input: InputRefDirective;

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    if (!this.input) {
      console.error('the app-fa-input needs an input inside its content');
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus() {
    return this.input ? this.input.focus : false;
  }

  get classes() {
    let cssClasses: { [key: string]: boolean } = {};
    if (this.icon) {
      cssClasses['fa-' + this.icon] = true;
    }
    return cssClasses;
  }
}
