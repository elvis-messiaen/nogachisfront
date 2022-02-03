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
