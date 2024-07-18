import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  private readonly http: HttpClient = inject(HttpClient);

  createPost(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
