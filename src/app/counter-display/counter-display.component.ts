import { Component, inject, OnInit } from '@angular/core';
import { CounterService } from '../services/CounterService/counter-service.service';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.scss',
})
export class CounterDisplayComponent implements OnInit {
  counter: number = 0;

  private counterService = inject(CounterService);

  ngOnInit(): void {
    this.counterService.counter$.subscribe((value) => {
      this.counter = value;
    });
  }
}
