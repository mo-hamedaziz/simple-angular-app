import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  textColor: string = 'black';
  fontSize: number = 16;
  fontFamily: string = 'Arial';

  // selectedTheme: string = 'theme-standard';

  updateTextColor(color: string): void {
    this.textColor = color;
  }

  updateFontSize(size: number): void {
    this.fontSize = size;
  }

  updateFontFamily(font: string): void {
    this.fontFamily = font;
  }

  // changeTheme(theme: string): void {
  //   this.selectedTheme = theme;
  // }
}
