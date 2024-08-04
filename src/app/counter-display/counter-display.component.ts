import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [],
  template: `<p>Counter: {{ counter().counter }}</p>`,
  styleUrls: ['./counter-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CounterDisplayComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly counter = toSignal(this.route.data, { initialValue: { counter: 0 } });
}
