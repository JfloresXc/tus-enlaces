import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FooterComponent, NavbarComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  title = 'tus-enlaces';
}
