import { Article } from 'src/app/models/article.model';
import { Injectable } from '@angular/core';
import { Typescard } from '../typescard';
import { Category } from './category.model';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root',
})
export class Articleheritage implements Article {
  public _id!: number;
  public _namecategory_id!: number;
  public _content!: string;
  public _date!: Date;
  public typescard!: Category;
  public namephoto!: Photo;
  public title!: string;
  public nametype!: Typescard;

  public get id() {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get namecategory_id() {
    return this._namecategory_id;
  }

  public set namecategory_id(namecategory_id: number) {
    this._namecategory_id = namecategory_id;
  }

  public get content() {
    return this._content;
  }

  public set content(content: string) {
    this._content = content;
  }

  public get date() {
    return this._date;
  }

  public set date(date: Date) {
    this._date = date;
  }
}
