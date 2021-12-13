import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchmoviesPipe'
})
export class SearchmoviesPipe implements PipeTransform {

  transform(value: any, input: any): any{
    // console.log(value,input,"valuee")
    if (input) {
      return value.filter(val => val.title.toLowerCase().indexOf(input.toLowerCase()) >= 0);
    } else {
      return value;
    }
  }

}
