import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserSelectionService {
  private selectedUserId: WritableSignal<string | null> = signal(null);

  selectUser(id: string) {
    this.selectedUserId.set(id); // Используем метод set для изменения значения сигнала
  }

  getSelectedUserId(): WritableSignal<string | null> {
    return this.selectedUserId;
  }
}
