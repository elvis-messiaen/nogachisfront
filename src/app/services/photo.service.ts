import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';
import { environment } from '../../environments/environment';

const PHOTO_API = `${environment.URL}/photo/`;

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Photo[]> {
    return this.http.get<Photo[]>(PHOTO_API);
  }

  public getOne(id: number): Observable<Photo> {
    return this.http.get<Photo>(PHOTO_API + id);
  }

  public create(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>(PHOTO_API, photo);
  }


  public delete(id: number): Observable<Photo> {
    return this.http.delete(PHOTO_API + id);
  }

  public update(photo: Photo): Observable<Photo> {
    return this.http.put<Photo>(PHOTO_API, photo);
  }
}
