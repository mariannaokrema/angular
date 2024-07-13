import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  // TODO -< Отаке пишеться з декоратором доступа "readonly":
  // private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  // TODO -< Прописувати тип який вертає метод не потрібно, це уже давно автоматично оприділяєтсья самим тайпскріптом
  // submitForm(data: any) {
  submitForm(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
  // TODO -< В серсісі не може бути таких назв як "submitForm", отак треба нвзивати: "getPostList", севіс нічого не знає ні проякі форми, він тільки з асинхронними операціями працює, це означає, що і називати так сервіс, та щей глобальний не можна, отак він мав називатися: "PostService", і папки для цього не треба, і сам цей сервіс мав бути на одному рівні з компонетом
}
