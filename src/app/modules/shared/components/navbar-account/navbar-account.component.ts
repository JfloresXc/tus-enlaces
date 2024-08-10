import { Component } from '@angular/core';
import { DropdownUserComponent } from '../dropdown-user/dropdown-user.component';

@Component({
  selector: 'app-navbar-account',
  standalone: true,
  imports: [DropdownUserComponent],
  templateUrl: './navbar-account.component.html'
})
export class NavbarAccountComponent {

}
