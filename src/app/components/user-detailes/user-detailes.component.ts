import { Component, effect, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserSelectionService } from '../../services/user-selection.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  standalone: true,
  selector: 'app-user-details',
  template: `<h2>Деталі користувача</h2>
    @if (user) {
      <p><strong>Ім'я:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p><strong>Телефон:</strong> {{ user.phone }}</p>
    }
    ,`,
})
// export class UserDetailsComponent extends ApiService implements OnInit {
//   public user: any;
//   private userSelectionService = inject(UserSelectionService);

//   ngOnInit(): void {
//     // Используем effect для автоматического обновления данных при изменении сигнала
//     effect(() => {
//       const userId = this.userSelectionService.getSelectedUserId();
//       if (userId) {
//         this.initialize(); // Загрузите данные, когда выбран новый пользователь
//       }
//     });
//   }

//   protected getEndpoint(): string {
//     const userId = this.userSelectionService.getSelectedUserId();
//     return `users/${userId}`;
//   }

//   protected handleResponse(response: any): void {
//     this.user = response;
//   }
// }
export class UserDetailsComponent extends ApiService  {
  public user: any;
  private userSelectionService = inject(UserSelectionService);

  constructor() {
    super();
    // Используем effect в инжекционном контексте (конструктор)
    effect(() => {
      const userId = this.userSelectionService.getSelectedUserId()();
      if (userId) {
        this.initialize(); // Загружаем данные, когда выбран новый пользователь
      }
    });
  }

  protected getEndpoint(): string {
    const userId = this.userSelectionService.getSelectedUserId()();
    return `users/${userId}`; // Используем сигнал для получения ID пользователя
  }

  protected handleResponse(response: any): void {
    this.user = response;
  }
}