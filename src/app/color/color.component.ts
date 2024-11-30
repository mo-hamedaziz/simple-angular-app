import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  defaultColor: string = 'green';
  currentColor: string = this.defaultColor;
  inputColor: string = '';

  changeColor() {
    this.currentColor = this.inputColor;
    this.inputColor = '';
  }

  resetColor() {
    this.currentColor = this.defaultColor;
    this.inputColor = '';
  }
}
