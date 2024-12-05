import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  email = '';
  password = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Formulaire soumis avec :', form.value);
    }
  }
}
