import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article.model';
import { environment } from '../../environments/environment';

const ARTICLE_API = `${environment.URL}/article/`;

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<Article[]> {
    return this.http.get<Article[]>(ARTICLE_API);
  }

  public getOne(id: number): Observable<Article> {
    return this.http.get<Article>(ARTICLE_API + id);
  }

  public create(article: Article): Observable<Article> {
    return this.http.post<Article>(ARTICLE_API, article);
  }

  public delete(id: number): Observable<Article> {
    return this.http.delete<Article>(ARTICLE_API + id);
  }

  public update(article: Article): Observable<Article> {
    return this.http.put<Article>(ARTICLE_API, article);
  }

}
