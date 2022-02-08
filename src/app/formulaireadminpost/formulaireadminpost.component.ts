import { CategoryService } from './../services/category.service';
import { Category } from './../models/category.model';
import { Photo } from './../models/photo.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';

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
  public namephoto: string = '';

  public form: FormGroup = new FormGroup({
    name: new FormControl(this.froid[1], Validators.required),
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    date: new FormControl('', [Validators.required]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(50),
    ]),
    namephoto: new FormControl(),
    namecategory: new FormControl('', [Validators.required]),
  });

  /*
  public formCategory: FormGroup = new FormGroup({
    namecategory: new FormControl('', [Validators.required]),
  });
*/

  constructor(
    private articleService: ArticleService,
    private http: HttpClient,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {}
/*
  public submitCategory() {
    this.categoryService.create(this.formCategory.value).subscribe();
    this.formCategory.reset();
    console.log(this.formCategory.value);
    
  }
*/
  public namecat!: string;
  public recuper(e: any) {
    this.namecat = e.target.value;
    console.log(this.namecat);    
  }

  public submit() {
    this.articleService.create(this.form.value).subscribe();
   // this.categoryService.create(this.namecat).subscribe();
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
