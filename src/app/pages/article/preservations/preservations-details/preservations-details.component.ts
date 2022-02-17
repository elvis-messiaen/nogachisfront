import { ArticleService } from '../../../../services/article.service';
import { Article } from '../../../../models/article.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-preservations-details',
  templateUrl: './preservations-details.component.html',
  styleUrls: ['./preservations-details.component.scss'],
})
export class PreservationsDetailsComponent implements OnInit {
  public article!: Article;

  constructor(
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        map((params) => parseInt(params.get('id') as string, 10)),
        mergeMap((id) => this.articleService.getOne(id)),
      )
      .subscribe((article) => (this.article = article));
  }
}
