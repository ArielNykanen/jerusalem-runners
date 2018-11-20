import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../main-page/models/customer.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(customer, searchInput: string) {
      if (customer.phone.match(searchInput) && searchInput.length >= 3) {
        return customer;
    }
  }

}
