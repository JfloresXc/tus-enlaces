import { Component, Input, forwardRef } from '@angular/core';
import {
  FormControl,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { ControlValueAccessorDirective } from './control-value-accessor.directive';
import { ValidationErrorsComponent } from '../validation-errors/validation-errors.component';

type InputType = 'text' | 'number' | 'email' | 'password';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  imports: [ReactiveFormsModule, ValidationErrorsComponent],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent<T> extends ControlValueAccessorDirective<T> {
  @Input() inputId = '';
  @Input() label = '';
  @Input() type: InputType = 'text';
  @Input() customErrorMessages: Record<string, string> = {};
}
