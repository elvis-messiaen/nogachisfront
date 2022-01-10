import { Category } from './../models/category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root',
})

export class CategoryService {
  private readonly categoryUrl: string;

  constructor(private http: HttpClient) {
    this.categoryUrl = 'http://localhost:8080/category';
  }

  public getall(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl);
  }


  public getOne(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.categoryUrl}/${id}`);
  }

  public create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoryUrl, category);
  }

  public delete(id: number): Observable<Category> {
    return this.http.delete(`${this.categoryUrl}/${id}`);
  }

  public update(user: Category): Observable<Category> {
    return this.http.put<Category>(this.categoryUrl, user);
  }
}