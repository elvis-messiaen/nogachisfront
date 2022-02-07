import { Category } from './../models/category.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  public getall(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.URL}/article`);
  }

  public getOne(id: number): Observable<Category> {
    return this.http.get<Category>(`${environment.URL}/article/${id}`);
  }

  public create(article: Category): Observable<Category> {
    return this.http.post<Category>(
      `${environment.URL}/article`,
      article
    );
  }

  public delete(id: number): Observable<Category> {
    return this.http.delete(`${environment.URL}/article/${id}`);
  }

  public update(article: Category): Observable<Category> {
    return this.http.put<Category>(environment.URL, article);
  }
}