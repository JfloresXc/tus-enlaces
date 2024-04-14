import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ListLinksComponent } from './components/list-links/list-links.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormLoginComponent, ListLinksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
