import { Component, inject, signal } from '@angular/core';
import UserListComponent from '../../components/user-list/user-list.component';
import { UserDetailsComponent } from '../../components/user-detailes/user-detailes.component';
import { UserSelectionService } from '../../services/user-selection.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-user-dashboard',
  imports: [UserListComponent, UserDetailsComponent, CommonModule],
  template: `
    <div class="user-dashboard">
      <div class="user-list">
        <app-user-list></app-user-list>
      </div>
      <div class="user-details" *ngIf="userId()">
        <app-user-details></app-user-details>
      </div>
    </div>
  `,
  styleUrls: ['./user-dashboard.component.scss'],
})
export default class UserDashboardComponent {
  private readonly userSelectionService = inject(UserSelectionService);
  userId = this.userSelectionService.getSelectedUserId(); // Прямое присваивание сигнала
}
