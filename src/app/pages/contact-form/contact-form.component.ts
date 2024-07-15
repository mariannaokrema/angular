import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './PostService';
import { CustomInputComponent } from '../../custom-input/custom-input.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomInputComponent,
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [PostService],
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  fb = inject(FormBuilder);
  router = inject(Router);
  formService = inject(PostService);

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      phones: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.contactForm.valueChanges.subscribe(value => {
      console.log('Form value changed:', value);
    });

    this.contactForm.statusChanges.subscribe(status => {
      console.log('Form status changed:', status);
    });
  }

  get phones(): FormArray {
    return this.contactForm.get('phones') as FormArray;
  }

  addPhone() {
    const phoneFormGroup = this.fb.group({
      phone: ['', Validators.required],
    });
    this.phones.push(phoneFormGroup);
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }

  getPhoneFormGroup(index: number): FormGroup {
    return this.phones.at(index) as FormGroup;
  }

  checkPhoneControlsValidity() {
    for (let i = this.phones.length - 1; i >= 0; i--) {
      const phoneGroup = this.phones.at(i);
      if (phoneGroup.get('phone')?.invalid) {
        this.phones.removeAt(i);
      }
    }
  }

  onSubmit() {
    this.checkPhoneControlsValidity();

    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;
      formValue.phones = formValue.phones.filter((phoneGroup: any) => phoneGroup.phone);

      this.formService.createPost(formValue).subscribe({
        next: (response) => {
          this.router.navigate(['/result'], {
            queryParams: { data: JSON.stringify(response) },
          });
        },
        error: (error) => {
          console.error('Error submitting form', error);
        },
        complete: () => {
          console.log('Form submission complete');
        },
      });
    } else {
      console.log('Form is not valid');
      this.contactForm.markAllAsTouched();
    }
  }
}
