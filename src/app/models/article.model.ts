import { Typescard } from '../typescard';
import { Category } from './category.model';
import { Photo } from "./photo.model";

export interface Article {
  id: number;
  namecategory_id: number;
  content: string;
  date: Date;
  typescard: Category;
  namephoto: Photo;
  title: string;
  nametype: Typescard;
  modeconservation: string;
  contentdescription: string;
}
