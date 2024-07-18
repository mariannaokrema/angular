import { Component, OnInit, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PostService } from '../../services/PostService';
import { CustomInputComponent } from '../../custom-input/custom-input.component';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CustomInputComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  providers: [PostService],
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private postService = inject(PostService);

  private phonesSubject = new BehaviorSubject<FormArray>(this.fb.array([]));
  phones$ = this.phonesSubject.asObservable();

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      phones: this.phonesSubject.value,
    });

    this.contactForm.valueChanges.subscribe((value) => {
      console.log('Form value changed:', value);
    });

    this.contactForm.statusChanges.subscribe((status) => {
      console.log('Form status changed:', status);
    });
  }

  addPhone() {
    const phoneFormGroup = this.fb.group({
      phone: ['', Validators.required],
    });
    const phones = this.phonesSubject.value;
    phones.push(phoneFormGroup);
    this.phonesSubject.next(phones);
  }

  removePhone(index: number) {
    const phones = this.phonesSubject.value;
    phones.removeAt(index);
    this.phonesSubject.next(phones);
  }

  getPhoneFormGroup(index: number): FormGroup {
    return this.phonesSubject.value.at(index) as FormGroup;
  }

  checkPhoneControlsValidity() {
    const phones = this.phonesSubject.value;
    for (let i = phones.length - 1; i >= 0; i--) {
      const phoneGroup = phones.at(i);
      if (phoneGroup.get('phone')?.invalid) {
        phones.removeAt(i);
      }
    }
    this.phonesSubject.next(phones);
  }

  onSubmit() {
    this.checkPhoneControlsValidity();

    if (this.contactForm.valid) {
      const formValue = this.contactForm.value;
      formValue.phones = formValue.phones.filter(
        (phoneGroup: any) => phoneGroup.phone
      );

      this.postService.createPost(formValue).subscribe({
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
