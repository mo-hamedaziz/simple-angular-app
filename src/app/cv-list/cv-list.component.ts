import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent {
  @Input() cvs: Cv[] = [];
  @Output() cvClick = new EventEmitter<Cv>();

  onCvClick(cv: Cv): void {
    this.cvClick.emit(cv);
  }
}
