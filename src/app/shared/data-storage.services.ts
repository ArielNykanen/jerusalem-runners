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

    storeCustomers(customer: Customer, tip) {
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
          },
          (error: ErrorHandler) => {
            this.customerServices.addErrorMsg('הסנכרון לא הוצלח בהצלחה :( אנא נסה שנית תודה');
            this.ngOnDestroy();
          },
          () => {
            this.customerServices.addSuccessMsg('!הלקוח הועלה למאגר בהצלחה');
            this.publicMsgServices.setOnAddTipMessage(tip);
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

    updateCustomer(customerId: number, customer: Customer, tip: any) {
      this.userAlertServices.addSuccessMsg('...טוען');
      const token =  this.authServices.getToken();
      const updateCustomer = this.http.put(
        'https://jerusalem-runners.firebaseio.com/customers/'
        + customerId + '.json?auth=' + token, customer).subscribe(
        (response: Response) => {
          // todo fix the some kind of subscription there!
      },
      (error: ErrorHandler) => {
        this.customerServices.addErrorMsg('הסנכרון לא הוצלח בהצלחה :(');
        this.ngOnDestroy();
      },
      () => {
        this.customerServices.addSuccessMsg('הלקוח עודכן בהצלחה');
        setTimeout(() => {
          this.publicMsgServices.setOnAddTipMessage(tip);
          updateCustomer.unsubscribe();
        }, 300);
      }
    );
    }

    storeSuccessAlertMessages(message: PublicMsg) {
      this.userAlertServices.addSuccessMsg('...טוען');
      const token = this.authServices.getToken();
      this.http.
      post('https://jerusalem-runners.firebaseio.com/publicSuccessAlertMessages.json?auth=' + token, message)
      .subscribe(
        (response: Response) => {
        this.publicMsgServices.addSuccessMessage(message);
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
                publicMsg[key].id = key;
                resultsArr.push(new PublicMsg(publicMsg[key].message, publicMsg[key].rating, publicMsg[key].id));
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
            const resultsArr: PublicMsg[] = [];
            Object.keys(publicMsg).map(
              (key) => {
                publicMsg[key].id = key;
                resultsArr.push(new PublicMsg(publicMsg[key].message, publicMsg[key].rating, publicMsg[key].id));
              });
            this.publicMsgServices.setSuccessMessages(resultsArr);
          } else {
            this.customerServices.setNetWorkStatus(true);
          }
      },
      (error: Error) => {
        this.customerServices.addErrorMsg('תקלה!! אנא התחבר מחדש תודה');
        this.customerServices.setNetWorkStatus(false);
      });
    }

    updateFailMsg(selectedMsg, msgRating) {
      const token =  this.authServices.getToken();
      if (selectedMsg.rating == '-1') {
        this.http.delete(
          'https://jerusalem-runners.firebaseio.com/publicFailAlertMessages/'
           + selectedMsg.id + '.json?auth=' + token).subscribe(
             (response: Response) => {
              this.customerServices.addSuccessMsg
              ('ההודעה נמחקה מהמאגר תודה על ההצבעה והמשך יום של טיפים מפנקים');
             }
           );
      } else {
      if (msgRating) {
        selectedMsg.rating += 1;
      } else {
        selectedMsg.rating -= 1;
      }
      const updatedMsg = new PublicMsg(selectedMsg.message, selectedMsg.rating, selectedMsg.id);
      const updateMessages = this.http.put(
        'https://jerusalem-runners.firebaseio.com/publicFailAlertMessages/'
        + selectedMsg.id + '.json?auth=' + token, updatedMsg).subscribe(
        (response: Response) => {
          // todo fix the some kind of subscription there!
      },
      (error: ErrorHandler) => {
        this.customerServices.addErrorMsg('הסנכרון לא הוצלח בהצלחה :(');
        this.ngOnDestroy();
      },
      () => {
        this.customerServices.addSuccessMsg('תודה על ההצבעה המשך יום נעים');
        this.ngOnDestroy();
        updateMessages.unsubscribe();
      }
    );
  }

    }
    updateSuccessMsg(selectedMsg, msgRating) {
      const token =  this.authServices.getToken();
      if (selectedMsg.rating == '-1') {
        this.http.delete(
          'https://jerusalem-runners.firebaseio.com/publicSuccessAlertMessages/'
           + selectedMsg.id + '.json?auth=' + token).subscribe(
             (response: Response) => {
              this.customerServices.addSuccessMsg('תודה על ההצבעה המשך יום נעים');
             }
           );
      } else {
      if (msgRating) {
        Number(selectedMsg.rating += 1).toFixed(1).toString();
      } else {
        Number(selectedMsg.rating -= 1).toFixed(1).toString();
      }
      const updatedMsg = new PublicMsg(selectedMsg.message, selectedMsg.rating, selectedMsg.id);
      const updateMessages = this.http.put(
        'https://jerusalem-runners.firebaseio.com/publicSuccessAlertMessages/'
        + selectedMsg.id + '.json?auth=' + token, updatedMsg).subscribe(
        (response: Response) => {
          // todo fix the some kind of subscription there!
      },
      (error: ErrorHandler) => {
        this.customerServices.addErrorMsg('הסנכרון לא הוצלח בהצלחה :(');
        this.ngOnDestroy();
      },
      () => {
        this.customerServices.addSuccessMsg('תודה על ההצבעה המשך יום נעים');
        this.ngOnDestroy();
        updateMessages.unsubscribe();
      }
    );
  }

    }


    ngOnDestroy() {
      this.subscription.unsubscribe();
      this.getSubscription.unsubscribe();
      this.tempCustomersDownloaded.unsubscribe();
    }

}
