import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  // TODO -< Всіди мають бути декоратори доступа
  authService = inject(AuthService);
  router = inject(Router);
  form: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });
  // TODO -< Отак мало бути
  // protected readonly form = inject(FormBuilder).group({
  //   username: ['', Validators.required],
  //   password: ['', Validators.required],
  // });

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe(
        (response) => {
          this.router.navigate(['']);
          console.log(response);
        },
        (error) => {
          // Handle error response here, e.g., show an error message
          console.error('Login failed', error);
        }
      );
    }
  }
}
