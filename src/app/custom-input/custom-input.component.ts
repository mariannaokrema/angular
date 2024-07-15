import {
  Component,
  Input,
  OnInit,
  inject,
  signal,
  computed,
  WritableSignal,
  HostBinding,
} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class CustomInputComponent implements OnInit {
  @HostBinding('style.display') display = 'block';

  @Input() formGroup!: FormGroup;
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';

  control!: FormControl;

  fb = inject(FormBuilder);

  controlState = signal<FormControl | null>(null);
  errorMessageSignal: WritableSignal<string> = signal<string>('');

  ngOnInit() {
    this.control = this.formGroup.get(this.controlName) as FormControl;
    this.controlState.set(this.control);
    this.updateErrorMessage();

    this.control.valueChanges.subscribe(() => {
      this.updateErrorMessage();
    });

    this.control.statusChanges.subscribe(() => {
      this.updateErrorMessage();
    });
  }

  private updateErrorMessage() {
    const control = this.controlState();
    if (control) {
      if (control.hasError('required')) {
        this.errorMessageSignal.set(`${this.label} is required`);
      } else if (control.hasError('email')) {
        this.errorMessageSignal.set(`Invalid ${this.label.toLowerCase()}`);
      } else {
        this.errorMessageSignal.set('');
      }
    }
  }

  errorMessage = computed(() => this.errorMessageSignal());
}
