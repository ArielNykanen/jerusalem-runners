import { Customer } from './models/customer.model';
import { Subject } from 'rxjs';


export class CustomerServices {

  successMessage = new Subject<string>();
  errorMessage = new Subject<string>();
  netStatus = new Subject<Boolean>();
  customersUpdated = new Subject<Customer[]>();

  allCustomers: Customer[] = [];


  getAllCustomers() {
    // todo make it posible to save data when offline
    // if (localStorage.getItem('customers')) {
    //   return JSON.parse(localStorage.getItem('customers'));
    // }
    return this.allCustomers;
  }

  checkIfCustomerExists(phoneNum) {
    for (const customer of this.allCustomers) {
      if (customer && customer.phone != null && customer.phone.match(phoneNum)) {
        return true;
      }
    }
    return false;
  }

  addCustomer(customer: Customer) {
    this.allCustomers.push(customer);
  }

  setCustomers(updatedCustomers: Customer[]) {
    this.allCustomers = updatedCustomers;
    this.customersUpdated.next(this.allCustomers);
  }

  setNetWorkStatus(status: boolean) {
    this.netStatus.next(status);
  }

  getNetWorkStatus() {
    return this.netStatus;
  }

  setLocalStorage() {
    // for offline couses
    const currentCustomers = JSON.stringify(this.allCustomers);
    localStorage.setItem('customers', currentCustomers);
  }

  updateCustomers(customers: Customer[]) {
    this.allCustomers = customers;
  }

  addSuccessMsg(message: string) {
    this.successMessage.next(message);
  }

  addErrorMsg(message: string) {
    this.errorMessage.next(message);
  }

  addUpdateToCustomer(customer: Customer) {
  }


}
