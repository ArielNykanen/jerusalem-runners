import { Http, Response } from '@angular/http';
import { CustomerServices } from '../main-page/customers.services';
import { Injectable } from '@angular/core';
import { Customer } from '../main-page/models/customer.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStoreServices {

    constructor( private http: Http,
      private customerServices: CustomerServices,
      private authServices: AuthService) {}

    storeCustomers() {
      const token =  this.authServices.getToken();
        return this.http.put('https://jerusalem-runners.firebaseio.com/customers.json?auth=' + token, this.customerServices.
        getAllCustomers());
    }

    fetchCustomers() {
      const token =  this.authServices.getToken();
      return this.http.get('https://jerusalem-runners.firebaseio.com/customers.json?auth=' + token).
      subscribe(
        (response: Response) => {
          if (response.json() == null) {
            const customers: Customer[] = [];
            this.customerServices.setCustomers(customers);
          } else {
            const customers: Customer[] = response.json();
            this.customerServices.setCustomers(customers);
          }
            this.customerServices.setNetWorkStatus(true);
      },
      (error: Error) => {
        console.log('You Are Offline!' + error);
        this.customerServices.setNetWorkStatus(false);
      });
    }

}