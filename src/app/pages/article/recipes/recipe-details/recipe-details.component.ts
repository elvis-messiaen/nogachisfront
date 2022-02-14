import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { Category } from 'src/app/models/category.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  public articles: Article[] = [];
  public search = '';
  public categories: Category[] = [];

  constructor(private articleService: ArticleService,
    private http: HttpClient) { }


  ngOnInit(): void {
    this.http
      .get<Article[]>('http://localhost:8080/article')
      .subscribe((data: Article[]) => {
        this.articles = data.filter(
          (article) => article.nametype === 'RECETTE'
        );
      });

  }
}
