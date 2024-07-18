import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe, NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TResponseData } from '../../types/responseData';

@Component({
  selector: 'app-form-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss',
  standalone: true,
  imports: [JsonPipe, NgIf],
})
export class ResultComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  responseData: TResponseData | null = null;

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        this.responseData = JSON.parse(params['data']);
      });
  }
}
