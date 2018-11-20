import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../main-page/models/customer.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(customer, search: string) {
      if (customer.phone.match(search) && search.length >= 3) {
        return customer.phone;
    }
  }

}
