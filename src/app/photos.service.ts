import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface unsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhoto() {
    return this.http.get<unsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID aVa6L8ZlFw8IPLMxszyHoyBOTcBp7mjUFH2GUlpq6EM'
      }
    });
  }
}
