import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../data/services/CounterService/counter-service.service';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss'],
})
export class CounterDisplayComponent implements OnInit {
  counter: number = 0;

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    this.counterService.counter$.subscribe(value => {
      this.counter = value;
    });
  }
}
