import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TResponseData } from '../../types/responseData';

interface QueryParams {
  data?: string;
}

@Component({
  selector: 'app-form-result',
  templateUrl: './result.component.html',
  standalone: true,
  imports: [JsonPipe],
})
export class ResultComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  responseData: TResponseData | null = null;

  ngOnInit() {
    this.route.queryParams.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const queryParams = params as QueryParams;
      if (queryParams.data) {
        this.responseData = JSON.parse(queryParams.data);
      }
    });
  }
}
