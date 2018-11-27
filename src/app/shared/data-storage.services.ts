import { Http, Response } from '@angular/http';
import { CustomerServices } from '../main-page/customers.services';
import { Injectable, ErrorHandler, OnDestroy } from '@angular/core';
import { Customer } from '../main-page/models/customer.model';
import { AuthService } from '../auth/auth.service';
import { PublicMsgServices } from './PublicMsg.services';
import {  Subject, Subscription } from 'rxjs';
import { PublicMsg } from '../main-page/models/publicMsg.model';
import { UserAlertServices } from './user-alert.services';
import { Options } from 'selenium-webdriver/ie';

@Injectable()
export class DataStoreServices implements OnDestroy {
    subscription: Subscription;
    getSubscription: Subscription;
    tempCustomersDownloaded: Subject<Customer[]>;
    constructor( private http: Http,
      private customerServices: CustomerServices,
      private publicMsgServices: PublicMsgServices,
      private authServices: AuthService,
      private userAlertServices: UserAlertServices
      ) {}

    storeCustomers(customer: Customer) {
      this.tempCustomersDownloaded = new Subject();
      const token =  this.authServices.getToken();
      this.tempCustomersDownloaded.subscribe(
        (dbCustomers: Customer[]) => {
          dbCustomers.push(customer);
          this.customerServices.setCustomers(dbCustomers);
          this.getSubscription = this.http.put(
            'https://jerusalem-runners.firebaseio.com/customers.json?auth=' + token, dbCustomers).subscribe(
            (response: Response) => {
              // todo fix the some kind of subscription there!
              console.log('i was here trying to upload!!!!');
          },
          (error: ErrorHandler) => {
            this.customerServices.addErrorMsg('הסנכרון לא הוצלח בהצלחה :( אנא נסה שנית תודה');
            this.ngOnDestroy();
          },
          () => {
            this.customerServices.addSuccessMsg('!הלקוח הועלה למאגר בהצלחה');
            this.ngOnDestroy();
          }
        );
      });
      this.fetchCurrnetCustomers();
    }

    fetchCurrnetCustomers() {
      const token =  this.authServices.getToken();
      this.subscription = this.http.get('https://jerusalem-runners.firebaseio.com/customers.json?auth=' + token).
      subscribe(
        (response: Response) => {
            const customers: Customer[] = response.json();
            this.tempCustomersDownloaded.next(customers);
          },
      (error: ErrorHandler) => {
       this.customerServices.addErrorMsg('תקלה במערכת אנא רענן את הדף');
        this.customerServices.setNetWorkStatus(false);
      },
      () => this.subscription.unsubscribe()
      );
    }

    fetchCustomers() {
      const token =  this.authServices.getToken();
      return this.http.get('https://jerusalem-runners.firebaseio.com/customers.json?auth=' + token).
      subscribe(
        (response: Response) => {
          const customers: Customer[] = response.json();
          this.customerServices.setCustomers(customers);
          this.customerServices.setNetWorkStatus(true);
          },
      (error: Error) => {
        this.customerServices.addErrorMsg('תקלה! :( ! אנא התחבר מחדש תודה');
        this.customerServices.setNetWorkStatus(false);
      });
    }

    storeSuccessAlertMessages() {
      this.userAlertServices.addSuccessMsg('...טוען');
      const token = this.authServices.getToken();
      const successMsg = this.publicMsgServices.getAllSuccessMessages();
      this.http.
      post('https://jerusalem-runners.firebaseio.com/publicSuccessAlertMessages.json?auth=' + token, successMsg)
      .subscribe(
        (response: Response) => {
          this.userAlertServices.addSuccessMsg('נשלח ונשמר בהצלחה תודה');
      },
      (error: ErrorHandler) => this.userAlertServices.addErrorMsg('אופסי דייזי משהו השתבש לנו ')
      );
    }

    storeFailAlertMessages(message: PublicMsg) {
      this.userAlertServices.addSuccessMsg('...טוען');
      const token = this.authServices.getToken();
      this.http.
      post('https://jerusalem-runners.firebaseio.com/publicFailAlertMessages.json?auth=' + token, message)
      .subscribe(
        (response: Response) => {
          this.publicMsgServices.addFailMessage(message);
          this.userAlertServices.addSuccessMsg('נשלח ונשמר בהצלחה תודה');
      },
      (error: ErrorHandler) => this.userAlertServices.addErrorMsg('אופסי דייזי משהו השתבש לנו ')
      );
    }


    fetchFailAlertMessages() {
      const token =  this.authServices.getToken();
      return this.http.get('https://jerusalem-runners.firebaseio.com/publicFailAlertMessages.json?auth=' + token).
      subscribe(
        (response: Response) => {
          if (response.json() !== null) {
            const publicMsg: PublicMsg[] = response.json();
            const resultsArr: PublicMsg[] = [];
            Object.keys(publicMsg).map(
              (key) => {
                resultsArr.push(new PublicMsg(publicMsg[key].message));
              });
            this.publicMsgServices.setFailMessages(resultsArr);
          } else {
            this.customerServices.setNetWorkStatus(true);
          }
      },
      (error: Error) => {
        this.customerServices.addErrorMsg('תקלה!! אנא התחבר מחדש תודה');
        this.customerServices.setNetWorkStatus(false);
      });
    }

    fetchSuccessAlertMessages() {
      const token =  this.authServices.getToken();
      return this.http.get('https://jerusalem-runners.firebaseio.com/publicSuccessAlertMessages.json?auth=' + token).
      subscribe(
        (response: Response) => {
          if (response.json() !== null) {
            const publicMsg: PublicMsg[] = response.json();
            this.publicMsgServices.setSuccessMessages(publicMsg);
          } else {
            this.customerServices.setNetWorkStatus(true);
          }
      },
      (error: Error) => {
        this.customerServices.addErrorMsg('תקלה!! אנא התחבר מחדש תודה');
        this.customerServices.setNetWorkStatus(false);
      });
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
      this.getSubscription.unsubscribe();
      this.tempCustomersDownloaded.unsubscribe();
    }

}
