import { Category } from '../../../models/category.model';
import { ArticleService } from '../../../services/article.service';
import { Article } from '../../../models/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preservations',
  templateUrl: './preservations.component.html',
  styleUrls: ['./preservations.component.scss'],
})
export class PreservationsComponent implements OnInit {
  public articles: Article[] = [];
  public search = '';
  public modeconservation = 'undefined';
  public categories: Category[] = [];
  public value: any;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getAll().subscribe({
      next: data => {
        this.articles = [...data].filter((article) => article.nametype === 'CONSERVATION');
      },
    })
  }
}
