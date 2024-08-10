import { animate, style, transition, trigger } from '@angular/animations';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgxSpinnerComponent,],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LoaderComponent {

}
