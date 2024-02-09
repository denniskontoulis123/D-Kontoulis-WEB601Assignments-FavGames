import { Pipe, PipeTransform } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Pipe({
  name: 'contentFilter',
  standalone: true
})
export class ContentFilterPipe implements PipeTransform {

  transform(contents: Content[], typeFilter: string): Content[] {
    if (!typeFilter) {
      return contents.filter(content => !content.type);
    } else {
      return contents.filter(content => content.type === typeFilter);
    }
  }


}
