import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { Log } from '../../decorators/log.decorator';

@Component({
  selector: 'app-logo-component',
  standalone: true,
  imports: [],
  templateUrl: './logo-component.component.html',
  styleUrl: './logo-component.component.scss',
})
export class LogoComponent {
  private readonly counterService = inject(CounterService);
  @Log
  incrementCounter() {
    this.counterService.incrementCounter();
  }
}
