import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent {
  user = {
    name: 'Aziz',
    firstname: 'Bchini',
    job: 'Student',
    path: 'assets/images/img1.png'
  };
}
