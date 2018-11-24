import { Customer } from './models/customer.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class CustomerServices {

  netStatus = new Subject<Boolean>();
  customersUpdated = new Subject<Customer[]>();

  allCustomers: Customer[] = [
    new Customer('אריאל', '0544443334', '2' , '2', '20', '20'),
    new Customer('הרצל', '0544443335', '4' , '0', '2', '344'),
    new Customer('אלי', '0544543335', '5' , '0', '20', '344'),
    new Customer('שמחה', '0544443454', '2' , '0', '4', '344'),
    new Customer('רעות', '0524247646', '2' , '0', '16', '344'),
    new Customer('שני', '0574537459', '2' , '0', '16', '344'),
    new Customer('איציק', '0524234560', '2' , '0', '16', '344'),
    new Customer('שמחה', '0524273453', '2' , '0', '16', '344'),
    new Customer('חמד', '0524243354', '0' , '-12', '0', '344'),
  ];


  getAllCustomers() {
    // todo make it posible to save data when offline
    // if (localStorage.getItem('customers')) {
    //   return JSON.parse(localStorage.getItem('customers'));
    // }
    return this.allCustomers;
  }

  checkIfCustomerExists(phoneNum) {
    for (const customer of this.allCustomers) {
      if (customer && customer.phone != null && customer.phone == phoneNum) {
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

  addUpdateToCustomer(customer: Customer) {

  }


}
