import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-form-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ResultComponent implements OnInit {
  // private readonly destroyRef = inject(DestroyRef);
  responseData: any;

  // TODO -< Обходися без конструктора, роби через inject(), зверху приклади як це робити
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // TODO -< Це підписка, на любій підписці треба робити unsubscribe
    this.route.queryParams.subscribe((params) => {
      this.responseData = JSON.parse(params['data']);
    });
    // TODO -< Отак мало бути, розбери це самостійно, що і як тут працює
    // this.route.queryParams
    //   .pipe(takeUntilDestroyed(this.destroyRef))
    //   .subscribe((params) => {
    //     this.responseData = JSON.parse(params['data']);
    //   });
  }
}
