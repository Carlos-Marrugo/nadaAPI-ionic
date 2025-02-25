import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = environment.nasaApiUrl;

  constructor(private http: HttpClient) { }

  get(endpoint: string, params?: any) {
    return this.http.get(`${this.baseUrl}/${endpoint}`, { params: { ...params, api_key: environment.apiKey } });
  }
}