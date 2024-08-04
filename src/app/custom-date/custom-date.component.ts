import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '../pipes/date.pipe';

@Component({
  selector: 'app-custom-date',
  template: `<div>
    <p>Current Date: {{ currentDate | formatDate: 'dd/MM/yyyy' }}</p>
    <p>Current Date: {{ currentDate | formatDate: 'MMMM do, yyyy' }}</p>
  </div> `,
  styleUrl: './custom-date.component.scss',
  standalone: true,
  imports: [CommonModule, DatePipe],
})
export class CustomDateComponent {
  currentDate = new Date();
}
