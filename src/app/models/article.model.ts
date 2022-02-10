import { Category } from './category.model';
import { Photo } from "./photo.model";

export interface Article {
  id: number;
  category_idcategory: string;
  content: string;
  date: Date;
  typescard: Category
  namephoto: Photo;
  title: string;
  nametype: string;
}
