import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../models/cv.model';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent {
  @Input() cv!: Cv;
  @Output() close = new EventEmitter<void>();

  constructor(private embaucheService: EmbaucheService) {}

  closeDetails() {
    this.close.emit();
  }

  embaucher(cv: Cv): void {
    this.embaucheService.addToEmbauche(cv);
    alert(`${cv.firstName} ${cv.lastName} a été embauché !`);
  }
}
