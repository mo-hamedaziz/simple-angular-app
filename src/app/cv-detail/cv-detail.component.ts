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
    const id = Number(this.route.snapshot.paramMap.get('id'));
  
    this.cvService.getCvById(id).subscribe(
      (data: Cv) => {
        this.cv = data;
      }
    );
  }

  closeDetails(): void {
    this.router.navigate(['/cv']);
  }

  embaucher(cv: Cv): void {
    if (this.embaucheService.getEmbaucheList().includes(cv)) {
      this.toastr.warning(
        `${cv.name} ${cv.firstname} est déjà embauché !`,
        'Attention'
      );
    } else {
      this.embaucheService.addToEmbauche(cv);
      this.toastr.success(
        `${cv.name} ${cv.firstname} a été embauché avec succès !`,
        'Félicitations'
      );
    }
  }

  // The DELETE endpoint has not been handled to prevent objects from being deleted from the database.
  deleteCv(): void {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id);
      this.embaucheService.deleteEmbauche(this.cv.id);
      this.router.navigate(['/cv']);
    }
  }
}
