import { Component } from '@angular/core';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  cvs: Cv[] = [
    { id: 1, firstName: 'Aziz', lastName: 'Bchini', age: 21, cin: '123456789', job: 'Developer', pathToPhoto: 'assets/images/cv1.jpg' },
    { id: 2, firstName: 'Emna', lastName: 'Miraoui', age: 23, cin: '23456789', job: 'Designer', pathToPhoto: 'assets/images/cv2.jpg' },
    { id: 3, firstName: 'Youssef', lastName: 'Roussi', age: 22, cin: '34567890', job: 'RH', pathToPhoto: 'assets/images/cv3.jpg' },
    { id: 4, firstName: 'Someone', lastName: 'Older than 30', age: 33, cin: '30303030', job: 'Moudir', pathToPhoto: 'assets/images/avatar.jpg' }
  ];

  selectedCv: Cv | null = null;

  onCvClick(cv: Cv): void {
    this.selectedCv = cv;
  }

  closeDetails() {
    this.selectedCv = null;
  }
}
