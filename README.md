# Test

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


<div class="form-group">
  <label [for]="controlName">{{ label }}</label>
  <!-- TODO -< Забудь про id і про for, в фреймворку таке не використовуєтсья ніколи, замість цього обгортай всю констукцію в label тег -->
  <input
    [id]="controlName"
    [formControl]="control"
    [type]="type"
    [placeholder]="placeholder"
    class="form-control"
  />
  <!-- TODO -< *ngIf - не викоритовуй ніколи, устарів, він буде тільки на старих проектах, але уже коли з цим стикнешся, тоді і будемо розьиратися -->
  <div
    *ngIf="control?.invalid && (control?.dirty || control?.touched)"
    class="error-message"
  >
  <!-- TODO -< Нівякому випадку ніколи, не використовуй виклик функції, або метода в html, як і гетери, це не оптимізовано, дял цього є сигнали -->
    {{ getErrorMessage() }}
  </div>
</div>

