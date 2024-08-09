import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TResponseData } from '../../types/responseData';
import { FormService } from '../../services/Form.service';
import { CustomDateComponent } from '../../components/custom-date/custom-date.component';
import DatePipe from '../../pipes/date.pipe';
import ImageFallbackDirective from '../../directives/image-fallback.directive';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomInputComponent,
    ImageFallbackDirective,
    CustomDateComponent,
    DatePipe,
  ],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
  providers: [PostService],
})
export class ContactFormComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly postService = inject(PostService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly formService = inject(FormService);
  private readonly fb = inject(FormBuilder);

  protected form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    // phones: this.fb.array([]),
  });
  currentDate = new Date();

  // protected phoneControls = this.form.get('phones') as FormArray;
  // protected phoneArray: FormGroup[] = [];

  ngOnInit() {
    this.formChangesSubscription();
    // this.phoneArray = this.phoneControls.controls as FormGroup[];
  }

  // addPhone() {
  //   const phoneFormGroup = this.fb.group({
  //     phone: ['', Validators.required],
  //   });
  //   this.phoneControls.push(phoneFormGroup);
  //   this.updatePhoneArray();
  // }

  // removePhone(index: number) {
  //   this.phoneControls.removeAt(index);
  //   this.updatePhoneArray();
  // }

  onSubmit() {
    // this.checkPhoneControlsValidity();

    if (this.form.valid) {
      const formValue = this.form.value as TResponseData;

      // formValue.phones = formValue.phones.filter((phoneGroup: Phone) => phoneGroup.phone);

      this.postService.createPost(formValue).subscribe({
        next: (response) => {
          this.formService.setFormValid(true); // Устанавливаем состояние формы как валидное

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
      this.form.markAllAsTouched();
    }
  }

  private formChangesSubscription() {
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      console.log('Form value changed:', value);
    });
  }

  // private checkPhoneControlsValidity() {
  //   for (let i = this.phoneControls.length - 1; i >= 0; i--) {
  //     const phoneGroup = this.phoneControls.at(i);
  //     if (phoneGroup.get('phone')?.invalid) {
  //       this.phoneControls.removeAt(i);
  //     }
  //   }
  //   this.updatePhoneArray();
  // }

  // private updatePhoneArray() {
  //   this.phoneArray = this.phoneControls.controls as FormGroup[];
  // }
}
