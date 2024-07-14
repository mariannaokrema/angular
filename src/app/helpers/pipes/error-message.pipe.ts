import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  standalone: true,
  name: 'errorMessage',
})
  export class ErrorMessagePipe implements PipeTransform {
    transform(control: FormControl, label: string): string {
      if (control.hasError('required')) {
        return `${label} is required`;
      }
      if (control.hasError('email')) {
        return `Invalid ${label.toLowerCase()}`;
      }
      return '';
    }
    
    
  }