import { Component, OnInit } from '@angular/core';
import { Cv } from '../models/cv.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit{
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;

  constructor(
    private cvService: CvService
  ) {}

  onCvClick(cv: Cv): void {
    this.selectedCv = cv;
  }

  closeDetails() {
    this.selectedCv = null;
  }

  ngOnInit(): void {
    this.cvs = this.cvService.getCvs();
  }
}
