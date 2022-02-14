import { Category } from '../models/category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const CATEGORY_API = `${environment.URL}/category/`;

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(CATEGORY_API);
  }

  public getOne(id: number): Observable<Category> {
    return this.http.get<Category>(CATEGORY_API + id);
  }

  public create(category: Category): Observable<Category> {
    return this.http.post<Category>(CATEGORY_API, category);
  }

  public delete(id: number): Observable<Category> {
    return this.http.delete(CATEGORY_API + id);
  }

  public update(category: Category): Observable<Category> {
    return this.http.put<Category>(CATEGORY_API, category);
  }
}
