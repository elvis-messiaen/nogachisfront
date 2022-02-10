import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/models/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  public articles: Article[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Article[]>('http://localhost:8080/article')
      .subscribe((data: Article[]) => {
        this.articles = data.sort((a, b) => 0.5 - Math.random()).slice(0, 9);
      });
  }
}
