import { Component } from '@angular/core';
import { InputToFilterComponent } from '../input-to-filter/input-to-filter.component';

@Component({
  selector: 'app-list-links',
  standalone: true,
  imports: [InputToFilterComponent],
  templateUrl: './list-links.component.html',
  styleUrl: './list-links.component.css',
})
export class ListLinksComponent {
  links = [
    {
      title: 'Angular',
      url: 'https://angular.io',
      id: 1,
    },
    {
      title: 'React',
      url: 'https://reactjs.org',
      id: 2,
    },
    {
      title: 'Vue',
      url: 'https://vuejs.org',
      id: 3,
    },
  ];
  linksFiltered: any[] = [];

  constructor() {
    this.linksFiltered = this.links;
  }

  setFilteredData(data: any[]) {
    this.linksFiltered = data;
  }
}
