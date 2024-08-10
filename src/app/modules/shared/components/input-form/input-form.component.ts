import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

type InputType = 'text' | 'number' | 'email' | 'password';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-form.component.html',
})
export class InputFormComponent {
  @Input() inputId = '';
  @Input() label = '';
  @Input() type: InputType = 'text';
  @Input() control: FormControl | any = new FormControl();
}
