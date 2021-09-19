import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  getLikedImages(): Observable<any[]> {
    let likedImages: any[] = []
    Object.keys(localStorage).forEach((key) => {
      if (key.substring(0, 12) === 'nasaImage!@#') {
        let jsonValue = localStorage.getItem(key);
        let jsonObject = ""
        if (jsonValue) {
          jsonObject = JSON.parse(jsonValue);
        }
        likedImages.push(jsonObject);
      }
    });
    return of(likedImages);
  }

  getImages(): Observable<any> {
    return this.http.get<any>('https://api.nasa.gov/planetary/apod?count=3&api_key=' + environment.API_KEY);
  }
}
