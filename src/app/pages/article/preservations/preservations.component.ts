import { Category } from './../../../models/category.model';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from './../../../services/article.service';
import { Article } from './../../../models/article.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preservations',
  templateUrl: './preservations.component.html',
  styleUrls: ['./preservations.component.css'],
})
export class PreservationsComponent implements OnInit {
  public articles: Article[] = [];
  public search = '';
  public modeconservation = 'undefined';
  public categories: Category[] = [];
  public rep: Boolean = true;
  public value: any;
  public ret: Boolean = false;

  constructor(
    private articleService: ArticleService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http
      .get<Article[]>('http://localhost:8080/article')
      .subscribe((data: Article[]) => {
        this.articles = data.filter(
          (article) => article.nametype === 'CONSERVATION',
        );
      });
  }
}
