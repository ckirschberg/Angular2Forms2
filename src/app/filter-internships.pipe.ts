import { Pipe, Injectable, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filterInternships'
})
@Injectable()
export class FilterInternships implements PipeTransform {
  transform(items: any[], search: string) {

    //return [-1];

    if (!search) {
      return items;
    }

  //  //function: toLowerCase()
  //  //function on array: filter( item => item.firstname
  //  //function includes()
  //  let foundItems = [];
  //
  //  //To display a message to the user. No search results.....
  //  if (foundItems && foundItems.length == 0) {
  //    return [-1];
  //  }
  //
  //  return [];
  }
}
