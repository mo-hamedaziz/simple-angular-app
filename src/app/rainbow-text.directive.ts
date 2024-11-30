import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbowText]'
})
export class RainbowTextDirective {

  constructor() { }

  private colors: string[] = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
  ];

  @HostBinding('style.color') color: string = 'black';
  @HostBinding('style.borderColor') borderColor: string = 'black';

  private changeColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    const randomColor = this.colors[randomIndex];
    
    this.color = randomColor;
    this.borderColor = randomColor;
  }

  @HostListener('keyup') onKeyUp() {
    this.changeColor();
  }

}
