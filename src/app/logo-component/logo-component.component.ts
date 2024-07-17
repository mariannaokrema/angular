import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../data/services/CounterService/counter-service.service';

@Component({
  selector: 'app-logo-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logo-component.component.html',
  styleUrls: ['./logo-component.component.scss'],
})
export class LogoComponent {
  constructor(private counterService: CounterService) {}

  incrementCounter() {
    this.counterService.incrementCounter();
  }
}
