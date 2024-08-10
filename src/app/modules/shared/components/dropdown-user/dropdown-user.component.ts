import { AuthServiceService } from '@/app/modules/auth/shared/auth.service.service';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown-user',
  standalone: true,
  imports: [],
  templateUrl: './dropdown-user.component.html'
})
export class DropdownUserComponent {
  isOpened = false;

  constructor(private authService: AuthServiceService) { }

  logout() {
    this.authService.logout();
  }

  openDropwdown(event: Event) {
    this.isOpened = !this.isOpened;
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    this.isOpened = false;
  }
}
