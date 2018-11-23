import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../main-page/models/customer.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(customer, search: string) {
     console.log(search);
     
      if (customer.phone.match(search) && search > '10') {
        return customer.phone;
    }
  }

}
