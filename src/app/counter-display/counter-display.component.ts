import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [],
  template: `<p>Counter: {{ data().counter }}</p>`,
  styleUrls: ['./counter-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CounterDisplayComponent {
  protected readonly data = toSignal(inject(ActivatedRoute).data, { initialValue: { counter: 0 } });
}
