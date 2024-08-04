import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formValid = false;

  setFormValid(valid: boolean) {
    this.formValid = valid;
  }

  isFormValid(): boolean {
    return this.formValid;
  }
}
