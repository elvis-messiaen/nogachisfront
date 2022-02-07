import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Photo } from "../models/photo.model";

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  private readonly photoUrl: string;

  constructor(private http: HttpClient) {
    this.photoUrl = 'http://localhost:8080';
  }

  public getAll(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photoUrl);
  }

  public getOne(id: number): Observable<Photo> {
    return this.http.get<Photo>(`${this.photoUrl}/photo/${id}`);
  }

  public create(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>(`${this.photoUrl}/photo`, photo);
  }


  public delete(id: number): Observable<Photo> {
    return this.http.delete(`${this.photoUrl}/photo/${id}`);
  }

  public update(photo: Photo): Observable<Photo> {
    return this.http.put<Photo>(this.photoUrl, photo);
  }
}