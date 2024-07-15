import { Component, Input, OnInit, inject, signal, computed } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class CustomInputComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';

  control!: FormControl;

  fb = inject(FormBuilder);

  controlState = signal<FormControl | null>(null);

  ngOnInit() {
    this.control = this.formGroup.get(this.controlName) as FormControl;
    this.controlState.set(this.control);
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

  errorMessage = computed(() => {
    const control = this.controlState();
    if (control) {
      if (control.hasError('required')) {
        return `${this.label} is required`;
      }
      if (control.hasError('email')) {
        return `Invalid ${this.label.toLowerCase()}`;
      }
    }
    return '';
  });
}
