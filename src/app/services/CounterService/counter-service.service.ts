import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private counterSubject = new BehaviorSubject<number>(0);
  counter$ = this.counterSubject.asObservable();

  incrementCounter() {
    const currentValue = this.counterSubject.value;
    this.counterSubject.next(currentValue + 1);
  }
}
