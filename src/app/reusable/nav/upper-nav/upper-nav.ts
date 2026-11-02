import { Component, Input, Output, EventEmitter, input } from '@angular/core';


@Component({
  selector: 'app-upper-nav',
  imports: [],
  templateUrl: './upper-nav.html',
  styleUrl: './upper-nav.css'
})
export class UpperNav {
  @Input() myName = '';
  private internalValue = 0;
  location = input.required<string>();

  @Input()
  get value() {
    return this.internalValue;
  }
  set value(value: number) {
    this.internalValue = value;
  }
}
