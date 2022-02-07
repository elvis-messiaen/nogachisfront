
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
    this.articleUrl = 'http://localhost:8080';
  }

  public getall(): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.articleUrl}/article`);
  }

  public getOne(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.articleUrl}/article${id}`);
  }

  public create(article: Article): Observable<Article> {
    return this.http.post<Article>(`${this.articleUrl}/article`, article);
  }

  public delete(id: number | string): Observable<Article> {
    return this.http.delete<Article>(`${this.articleUrl}/article/${id}`);
  }

  public update(article: Article): Observable<Article> {
    return this.http.put<Article>(this.articleUrl, article);
  }
}