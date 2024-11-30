import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  myFavColor: string = 'goldenrod'

  @Input() parentBgColor: string = '';
  @Output() changeColor = new EventEmitter<string>();

  changeParentBg() {
    this.changeColor.emit(this.myFavColor);
  }
}
