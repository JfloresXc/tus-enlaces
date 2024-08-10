import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFormComponent } from '@shared/components/input-form/input-form.component';
import { AuthServiceService } from '../../shared/auth.service.service';
import { LogInResponse } from '../../interfaces/log-in-response.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputFormComponent],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css',
})
export class FormLoginComponent {
  isLogin = true;
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthServiceService, private router: Router, private spinner: NgxSpinnerService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(4), Validators.required]],
    });
  }

  submit() {
    if (this.loginForm.invalid) return;

    this.spinner.show();

    this.authService.login({
      user: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    }).subscribe(({ response, status, message }: LogInResponse) => {
      this.spinner.hide();

      if (status == 200) {
        localStorage.setItem('accessToken', response?.token ?? '');
        localStorage.setItem('username', response?.email ?? '');
        this.router.navigateByUrl('/users/report-all-users');
      } else {
        Swal.fire(
          'Error',
          message,
          'error'
        )
      }
    })
  }
}
