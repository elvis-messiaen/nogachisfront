import { Category } from './../models/category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  [x: string]: any;
  constructor(private http: HttpClient) {}

  public getall(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.URL}/category`);
  }

  public getOne(id: number): Observable<Category> {
    return this.http.get<Category>(`${environment.URL}/category/${id}`);
  }

  public create(category: Category): Observable<Category> {
    return this.http.post<Category>(`${environment.URL}/category`, category);
  }

  public delete(id: number): Observable<Category> {
    return this.http.delete(`${environment.URL}/category/${id}`);
  }

  public update(category: Category): Observable<Category> {
    return this.http.put<Category>(environment.URL, category);
  }
}