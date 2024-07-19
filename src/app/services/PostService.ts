import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TResponseData } from '../types/responseData';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  private readonly http: HttpClient = inject(HttpClient);

  createPost(data: TResponseData) {
    return this.http.post(this.apiUrl, data);
  }
}
