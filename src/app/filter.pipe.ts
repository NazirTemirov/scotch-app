import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ninjas: any, term: any): any {
    if (term === undefined) {
      return ninjas;
    }
    return ninjas.filter(function(ninja){
      return ninja && ninja.name.toLowerCase().includes(term.toLowerCase());
    });
  }

}
