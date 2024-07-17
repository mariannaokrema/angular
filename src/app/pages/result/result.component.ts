import { Component, DestroyRef, OnInit, inject } from '@angular/core';
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

  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  responseData: any;

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        this.responseData = JSON.parse(params['data']);
      });
  }
}
