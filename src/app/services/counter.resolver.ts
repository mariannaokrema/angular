import { inject, Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CounterService } from './counter.service';

@Injectable()
export default class CounterResolver implements Resolve<number> {
  private readonly counterService = inject(CounterService);

  resolve() {
    return this.counterService.counter$;
  }
}
