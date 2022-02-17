import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { Category } from 'src/app/models/category.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  public articles: Article[] = [];
  public search = '';
  public modeconservation = 'undefined';
  public categories: Category[] = [];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.articleService.getAll().subscribe({
      next: data => {
        this.articles = [...data].filter((article) => article.nametype === 'RECETTE');
      },
    })
  }
}
