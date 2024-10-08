import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'formatDate',
  standalone: true,
})
export default class DatePipe implements PipeTransform {
  transform(value: Date | string | number, dateFormat: string) {
    if (!value) return '';
    const date = new Date(value);
    return format(date, dateFormat);
  }
}
