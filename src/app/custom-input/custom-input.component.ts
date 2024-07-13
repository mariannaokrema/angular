import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class CustomInputComponent {
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';

  constructor(private controlContainer: ControlContainer) {}

  get control(): FormControl {
    return this.controlContainer.control?.get(this.controlName) as FormControl;
  }

  getErrorMessage() {
    if (this.control?.hasError('required')) {
      return `${this.label} is required`;
    }
    if (this.control?.hasError('email')) {
      return `Invalid ${this.label.toLowerCase()}`;
    }
    return '';
  }
}
