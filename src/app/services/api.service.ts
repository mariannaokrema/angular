import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable()
export abstract class ApiService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com';

  // Інжектуємо HttpClient напряму
  private readonly http: HttpClient = inject(HttpClient);

  protected fetchData(endpoint: string): Promise<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`).toPromise();
  }

  protected abstract handleResponse(response: any): void;

  protected abstract getEndpoint(): string;

  public async initialize(): Promise<void> {
    const endpoint = this.getEndpoint();
    const response = await this.fetchData(endpoint);
    this.handleResponse(response);
  }
}
