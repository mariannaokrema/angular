import { Component, inject } from '@angular/core';
import { CounterService } from '../services/CounterService/counter-service.service';

@Component({
  selector: 'app-logo-component',
  standalone: true,
  imports: [],
  templateUrl: './logo-component.component.html',
  styleUrl: './logo-component.component.scss',
})
export class LogoComponent {
  private counterService = inject(CounterService);

  incrementCounter() {
    this.counterService.incrementCounter();
  }
}
