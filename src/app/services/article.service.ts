
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Article } from "../models/article.model";


@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private readonly articleUrl: string;

  constructor(private http: HttpClient) {
    this.articleUrl = 'http://localhost:8080/article';
  }

  public getall(): Observable<Article[]> {
    return this.http.get<Article[]>(this.articleUrl);
  }

  public getOne(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.articleUrl}/${id}`);
  }

  public create(category: Article): Observable<Article> {
    return this.http.post<Article>(this.articleUrl, category);
  }

  public delete(id: number): Observable<Article> {
    return this.http.delete(`${this.articleUrl}/${id}`);
  }

  public update(user: Article): Observable<Article> {
    return this.http.put<Article>(this.articleUrl, user);
  }
}