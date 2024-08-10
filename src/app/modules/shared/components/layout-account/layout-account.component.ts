import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarAccountComponent } from '../sidebar-account/sidebar-account.component';
import { NavbarAccountComponent } from '../navbar-account/navbar-account.component';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-layout-account',
  standalone: true,
  imports: [RouterOutlet, SidebarAccountComponent, NavbarAccountComponent, LoaderComponent],
  templateUrl: './layout-account.component.html'
})
export class LayoutAccountComponent {
  constructor() {
  }

}
