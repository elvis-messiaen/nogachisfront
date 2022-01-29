import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  public articles: Article[] = [];
  constructor(
    private articleService: ArticleService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http
      .get<Article[]>('http://localhost:8080/article')
      .subscribe((data: Article[]) => {
        this.articles = data;
      });
  }
}
