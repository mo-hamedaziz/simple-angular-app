import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Cv } from '../models/cv.model';
import { EmbaucheService } from '../services/embauche.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css'],
})
export class CvDetailComponent {
  @Input() cv!: Cv;

  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.cv = this.cvService.getCvById(id);
  }

  closeDetails(): void {
    this.router.navigate(['/cv']);
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

  deleteCv(): void {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id);
      this.embaucheService.deleteEmbauche(this.cv.id);
      this.router.navigate(['/cv']);
    }
  }
}
