import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../models/cv.model';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent {
  @Input() cvs: Cv[] = [];
  @Output() cvClick = new EventEmitter<Cv>();

  constructor(
    private embaucheService: EmbaucheService
  ) {}

  onCvClick(cv: Cv): void {
    this.cvClick.emit(cv);
  }

  embaucher(cv: Cv) {
    this.embaucheService.addToEmbauche(cv);
  }
}
