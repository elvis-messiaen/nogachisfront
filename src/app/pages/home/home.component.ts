import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/models/article.model';
import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public articles: Article[] = [];

  constructor(private http: HttpClient, private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getAll().subscribe({
      next: data => {
        this.articles = [...data].sort((a, b) => 0.5 - Math.random()).slice(0, 9);
      },
    })
  }
}
