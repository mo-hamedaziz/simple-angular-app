import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Cv } from '../models/cv.model';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css'],
})
export class CvDetailComponent {
  @Input() cv!: Cv;
  @Output() close = new EventEmitter<void>();

  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService
  ) {}

  closeDetails() {
    this.close.emit();
  }

  embaucher(cv: Cv): void {
    if (this.embaucheService.getEmbaucheList().includes(cv)) {
      this.toastr.warning(
        `${cv.firstName} ${cv.lastName} est déjà embauché !`,
        'Attention'
      );
    } else {
      this.embaucheService.addToEmbauche(cv);
      this.toastr.success(
        `${cv.firstName} ${cv.lastName} a été embauché avec succès !`,
        'Félicitations'
      );
    }
  }
}
