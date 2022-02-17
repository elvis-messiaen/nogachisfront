import { Typescard } from './../typescard';

import { CategoryService } from './../services/category.service';
import { Photo } from './../models/photo.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Article } from '../models/article.model';
import { ArticleService } from '../services/article.service';
import { Category } from '../models/category.model';

@Component({
  selector: 'app-formulaireadminpost',
  templateUrl: './formulaireadminpost.component.html',
  styleUrls: ['./formulaireadminpost.component.css'],
})
export class FormulaireadminpostComponent implements OnInit {
  froid = [
    { names: 'REFRIGERATION' },
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
  menu = [
    { names: 'PLAT' },
    { names: 'ENTREE' },
    { names: 'DESERT' },
    { names: 'EPICES' },
  ];

  public nametype!: Typescard;

  public articles: Article[] = [];
  public photos: Photo[] = [];
  public selectArticle?: Article;
  public photo?: string;
  public namephoto: string = '';
  public category!: Category;
  public article!: Article;

  public form: FormGroup = new FormGroup({
    name: new FormControl(this.froid[1], Validators.required),
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    date: new FormControl('', [Validators.required]),
    content: new FormControl('', [
      Validators.required,
      Validators.minLength(50),
      Validators.maxLength(200),
    ]),
    contentdescription: new FormControl('', [
      Validators.required,
      Validators.minLength(200),
    ]),
    namephoto: new FormControl(),
    nametype: new FormControl('', [Validators.required]),
    namecategory: new FormControl('', [Validators.required]),
    modeconservation: new FormControl('', [Validators.required]),
  });

  constructor(
    private articleService: ArticleService,
    private http: HttpClient,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {}

  public recuper(e: any) {
    this.category.namecategory = e.target.value;
    this.category.namecategory_id = e.target.value;
    this.article.namecategory_id = e.target.value;
  }
  public idrecup!: Article;
  public submit() {
    this.form
      .get('modeconservation')
      ?.setValue(this.form.get('modeconservation')?.value.names);
    this.articleService.create(this.form.value).subscribe();
    this.selectFiles;
    this.form.reset();
  }

  public selectFiles(event: any): void {
    const formData = new FormData();
    for (const file of event.target.files) {
      formData.append('file', file);
    }
    this.http
      .post<UploadResponse>('http://localhost:8080/file', formData)
      .subscribe((res) => this.form.controls.namephoto.patchValue(res.url));
  }
}

export interface UploadResponse {
  url: string;
}
function id(id: any, Number: NumberConstructor) {
  throw new Error('Function not implemented.');
}
