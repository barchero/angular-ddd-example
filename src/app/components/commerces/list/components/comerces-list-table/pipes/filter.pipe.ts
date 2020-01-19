import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchObj: object): any[] {
    if(!items || !searchObj){
      return items;
    };
    let filteredItems = [];
    filteredItems.push(...items);

    for (var property in searchObj) {
      if (searchObj.hasOwnProperty(property)) {
        filteredItems = filteredItems.filter((it) => {
          if(searchObj[property] && searchObj[property].length > 0){
            return it[property].toLowerCase().includes(searchObj[property]);
          }else{
            return true;
          }
        })
      }
    };

    return filteredItems;
   };
}