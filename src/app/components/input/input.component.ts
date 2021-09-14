import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  @Input() title = '';

  @Output() onValueChanged = new EventEmitter<string>();

  value = '';

  addNewValue(value: string) {
    this.onValueChanged.emit(value);
  }

}
