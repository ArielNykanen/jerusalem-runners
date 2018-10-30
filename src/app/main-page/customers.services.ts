import { Customer } from './models/customer.model';

export class CustomerServices {

  goodCustomers: Customer[] = [];

  getAllCustomers() {
    if (localStorage.getItem('customers')) {
      return JSON.parse(localStorage.getItem('customers'));
    }
    return this.goodCustomers;
  }

  addCustomer(customer: Customer) {
    this.goodCustomers.push(customer);
    const allCustomers = JSON.stringify(this.goodCustomers);
    localStorage.setItem('customers', allCustomers);
  }

}
