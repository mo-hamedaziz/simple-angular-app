import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent {
  @Input() cv!: Cv;
  @Output() close = new EventEmitter<void>();

  closeDetails() {
    this.close.emit();
  }
}
