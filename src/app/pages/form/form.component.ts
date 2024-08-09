// * Base
import { Component, inject, signal, OnInit, DestroyRef } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from '../../components/custom-input/custom-input.component';

// * Services
import { PostService } from '../../services/post.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

// * Types
import { TResponseData } from '../../types/responseData';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CustomInputComponent, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export default class FormComponent implements OnInit {
  // * Injects
  private readonly fb = inject(FormBuilder);
  private readonly destroyRef = inject(DestroyRef);
  private readonly postService = inject(PostService);

  // * Base
  protected readonly isSubmitting = signal(false);

  protected form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  ngOnInit() {
    this.formChangesSubscription();
  }

  // * Methods
  onSubmit() {
    if (this.form.valid) {
      this.isSubmitting.update(() => true);
      this.form.disable();

      setTimeout(() => {
        const formValue = this.form.value as TResponseData;

        this.postService.createPost(formValue).subscribe({
          next: (response) => {
            console.log('Success', response);
          },
          error: (error) => {
            console.error('Error', error);
          },
          complete: () => {
            this.isSubmitting.update(() => false);
            this.form.enable();
          },
        });
      }, 3000);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private formChangesSubscription() {
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      console.log('Form value changed:', value);
    });
  }
}
