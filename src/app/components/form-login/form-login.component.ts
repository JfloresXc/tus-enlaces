import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css',
})
export class FormLoginComponent {
  isLogin = true;

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(4)),
  });

  constructor() {}

  ngOnInit() {}

  submit() {
    console.log(this.loginForm.value);
  }
}
