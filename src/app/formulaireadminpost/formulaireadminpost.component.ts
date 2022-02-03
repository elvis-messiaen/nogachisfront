import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Article } from '../models/article.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-formulaireadminpost',
  templateUrl: './formulaireadminpost.component.html',
  styleUrls: ['./formulaireadminpost.component.css'],
})
export class FormulaireadminpostComponent implements OnInit {
  froid = [
    { names: 'REFRIGERATTION' },
    { names: 'SUGELATION' },
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

  public categories: Article[] = [];
  public selectedCategory?: Article;
  public form: FormGroup = new FormGroup({
    fr: new FormControl(this.froid[3], Validators.required),
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    typescard: new FormControl('', Validators.required),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(50),
    ]),
    liens: new FormArray([]),
  });

  public get liens() {
    return this.form.get('liens') as FormArray;
  }

  public addPhoto() {
    this.liens.push(new FormControl(''));
  }

  public remove(index: number) {
    this.liens.removeAt(index);
  }

  public cardinfos() {}

  constructor(
    private categoryService: CategoryService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  public submit() {
    this.categoryService.create(this.form.value).subscribe();
    this.form.reset();
    console.log(this.http);
  }
}
