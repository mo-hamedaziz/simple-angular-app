import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  bgColor: string = 'green';

  changeBgColor(newColor: string) {
    this.bgColor = newColor;
  }
}
