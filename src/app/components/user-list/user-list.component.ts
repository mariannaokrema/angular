import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { User } from '../../types/user.interface';
import { UserSelectionService } from '../../services/user-selection.service';

@Component({
  standalone: true,
  selector: 'app-user-list',
  template: `
    <h2>Список користувачів</h2>
    <ul>
      @for (user of users; track user.id) {
        <li>
          <a (click)="selectUser(user.id.toString())">
            {{ user.name }}
          </a>
        </li>
      } @empty {
        <li>Немає користувачів.</li>
      }
    </ul>
  `,
  styleUrls: ['./user-list.component.scss'],
})
export default class UserListComponent extends ApiService {
  public users: User[] = [];

  private readonly userSelectionService = inject(UserSelectionService);

  protected override getEndpoint(): string {
    return 'users';
  }

  protected override handleResponse(response: any): void {
    this.users = response;
  }

  ngOnInit() {
    this.initialize();
  }

  selectUser(userId: string) {
    this.userSelectionService.selectUser(userId);
  }

  trackById(index: number, user: User): string {
    return user.id.toString();
  }
}
