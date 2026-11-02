import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, booleanAttribute, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button implements OnInit {
  buttonType = input.required<string>();
  buttonText = input.required<string>();

  //New Knowleged, transform to use boolean
  @Input({transform: booleanAttribute}) arrowRight:boolean = false
  Navclick = output<void>();
  // @Output() Navclick = new EventEmitter<void>();

  onNavClick() {
    this.Navclick.emit();
  }
  ngOnInit(): void {
    console.log(this.buttonText());
  }
}
