import { Article } from './../../../models/article.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Article[], search: string): Article[] {
    console.log(search);
    return value.filter(
      (v) => v.title?.includes(search.toLowerCase()));
  }
}
  



