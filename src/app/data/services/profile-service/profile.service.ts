import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../interfaces/profile.interface';

// TODO -< Всі ці сервіси локальні а значить не треба було ніде давати "root" провайдер, це тільки для глобальних сервісів
@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  // Отаке завжди пишеться з декораторами private і readonly
  // private readonly http: HttpClient = inject(HttpClient);
  http: HttpClient = inject(HttpClient);

  baseApiUrl = 'https://icherniakov.ru/yt-course/';

  getTestAccounts(): Observable<any[]> {
    return this.http.get<Profile[]>(`${this.baseApiUrl}account/test_accounts`);
  }

  // TODO -< Prettier форматування має бути всюди
  getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}account/me`);
  }
}
