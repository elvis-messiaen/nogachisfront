import { Photo } from './../models/photo.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-formulaireadminpost',
  templateUrl: './formulaireadminpost.component.html',
  styleUrls: ['./formulaireadminpost.component.css'],
})
export class FormulaireadminpostComponent implements OnInit {
  froid = [
    { names: 'REFRIGERATTION' },
    { names: 'SURGELATION' },
    { names: 'CONGELATION' },
  ];
  chaud = [
    { names: 'STERILISATION' },
    { names: 'PASTEURISATION' },
    { names: 'APPERTISATION' },
    { names: 'SEMI-CONSERVES' },
  ];
  eau = [
    { names: 'DESHYDRATATION' },
    { names: 'SALAGE' },
    { names: 'SAUMURAGE' },
    { names: 'FUMAGE' },
    { names: 'CONFISAGE' },
  ];

  public articles: Article[] = [];
  public photos: Photo[] = [];
  public selectArticle?: Article;
  public photo?: string;
  public namephoto: any = '';

  public form: FormGroup = new FormGroup({
    name: new FormControl(this.froid[1], Validators.required),
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    date: new FormControl('', [Validators.required]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(50),
    ]),
    namephoto: new FormControl(),
  });

  constructor(
    private articleService: ArticleService,
    private photoservices: PhotoService,
    private http: HttpClient
  ) {}
  ngOnInit(): void {}

  public submit() {
    this.articleService.create(this.form.value).subscribe();
    console.log(this.namephoto);

    this.selectFiles;
    this.form.reset();
  }

  public selectFiles(event: any): void {
    const formData = new FormData();
    for (const file of event.target.files) {
      formData.append('file', file);
    }
    this.http
      .post<UploadResponse>('http://localhost:8080/photo', formData)
      .subscribe((res) => this.form.controls.namephoto.patchValue(res.url));
  }
}

export interface UploadResponse {
  url: string;
}
