import { Component } from '@angular/core';
import { FormLoginComponent } from '../../components/form-login/form-login.component';
import { BrandComponent } from '../../../../components/brand/brand.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormLoginComponent, BrandComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent { }
