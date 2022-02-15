import { Article } from './../../../models/article.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Article[], filters: filters): Article[] {
    console.log(filters);

    return value.filter(
      (v) =>
        (v.title?.includes(filters.search.toLowerCase()) ||
          v.content?.includes(filters.search.toLowerCase())) &&
        (filters.modeconservation == 'undefined' ||
          filters.modeconservation === v.modeconservation)
    );
  }
}

interface filters {
  search: string;
  modeconservation?: string;
}

