import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../main-page/models/customer.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(customers: Customer[], searchInput: string) {
    const resultArray = [];
    for (const customer of customers) {
      if (customer.phone.match(searchInput) && searchInput.length >= 3) {
        resultArray.push(customer);
      }
    }
    return resultArray;
  }

}
