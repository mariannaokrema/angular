import { Pipe, PipeTransform } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Pipe({
  standalone: true,
  name: 'formArray'
})
export class FormArrayPipe implements PipeTransform {
  transform(value: FormGroup, controlName: string): FormArray {
    return value.get(controlName) as FormArray;
  }
}
