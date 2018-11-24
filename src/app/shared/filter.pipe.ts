import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../main-page/models/customer.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(customer, search: string, searchName: string) {
      if (customer && customer.phone != null && customer.phone.match(search) && search > '10') {
        return customer;
    } else if (customer && customer.name != null &&
       searchName && customer.name.match(searchName)) {
        return customer;
    }
  }

}
