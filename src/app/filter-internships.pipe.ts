import { Pipe, Injectable, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filterInternships'
})
@Injectable()
export class FilterInternships implements PipeTransform {
  transform(items: any[], search: string) {

    if (!search) {
      return items;
    }

    //function: toLowerCase()
    //function on array: filter( item => item.firstname
    //function includes()
    let foundItems =



    return [];
  }
}
