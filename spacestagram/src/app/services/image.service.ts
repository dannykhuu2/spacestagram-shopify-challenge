import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getImages(): Observable<any> {
    return this.http.get<any>('https://api.nasa.gov/planetary/apod?count=3&api_key=' + environment.API_KEY);
  }
}
