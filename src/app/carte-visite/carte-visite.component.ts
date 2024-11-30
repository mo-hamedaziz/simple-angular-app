import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent {
  user = {
    firstName: 'Aziz',
    lastName: 'Bchini',
    job: 'Student',
    pathToPhoto: 'assets/images/img1.png'
  };
}
