import { Customer } from './models/customer.model';

export class CustomerServices {

  goodCustomers: Customer[] = [
    {name: 'ירוחם', street: 'הרב ברלין',
     house: '12', apartment: '4', tipped: '3', notTipped: '0', rating: 'לא דורג'}
  ];

  getAllCustomers() {
    return this.goodCustomers;
  }

  addCustomer(customer: Customer) {
    this.goodCustomers.push(customer);
  }

}
