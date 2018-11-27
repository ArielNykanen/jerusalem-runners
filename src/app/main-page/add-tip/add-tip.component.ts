import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserServices } from 'src/app/user.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerServices } from '../customers.services';
import { Customer } from '../models/customer.model';
import { Router } from '@angular/router';
import { DataStoreServices } from 'src/app/shared/data-storage.services';
import { Response } from '@angular/http';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { translateFromL } from 'src/app/shared/my-animations';
import { PublicMsg } from '../models/publicMsg.model';
import { PublicMsgServices } from 'src/app/shared/PublicMsg.services';

@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.component.html',
  styleUrls: ['./add-tip.component.css'],
  animations : [
    translateFromL
  ]
})
export class AddTipComponent implements OnInit, OnDestroy {
  randomSuccessMessages: PublicMsg[];
  //  [
  //   'עוד קצת עוד קצת ואתה בטופפפ',
  // 'אחלה תמשיך ככה אולי תגיע למיליון בסוף', 'אחלה לקוח תאמין לי הלוואי הייתי שם במקומך',
  //  'צריך עוד אנשים כאלה בנאדם שבאמת מבין אותנו השליחים',
  //  'איךךך איך הוא הביא לך טיפ כזה אחלה גבר'
  // ];
  randomFaliureMessages: PublicMsg[];
  //  [
  //   'מעולה אולי עד סוף היום יהיה לך מספיק לבירה',
  //   'פעם הבאה תגיד לו לא כולל שירות ימניאק',
  //   'תן ללקוח הזה איזה שתן בתא דואר טפיי חרא של בנאדם',
  //   'לא נורא פעם הבאה תגיע לו בדקה האחרונה הזיין הזה'
  // ];

  tipStatusStyles;
  successMessage = '';
  failAlert: object;
  successAlert: object;
  error = '';
  loading = false;
  tipSelected: number;
  tipNotSellected = '';
  tipped = true;
  currentNetStatus: Boolean = true;
  currentUserPauch;
  searchPhone = '';
  searchName = '';
  customerSelected = false;
  selectedCustomer;
  selectedCustomerId;
  customerExists = false;
  allCustomers: Customer[];
  addCustomerTipForm: FormGroup;
  constructor(
    private userServices: UserServices,
    private customerServices: CustomerServices,
    private router: Router,
    private dataSotrageServices: DataStoreServices,
    private publicMsgService: PublicMsgServices
    ) { }

  ngOnInit() {
    this.addCustomerTipForm = new FormGroup({
      'customerName': new FormControl(null, Validators.required),
      'customerPhone': new FormControl(null, Validators.required),
      'customerTip': new FormControl(null, Validators.required),
      'customerTipped': new FormControl(null),
      'customerShit': new FormControl(null),
    });
    this.currentUserPauch = this.userServices.getCurrentPauch();
    this.tipStatusStyles = this.userServices.getTipStatusStyles();
    this.publicMsgService.successAlert.subscribe((newMsg) => this.successAlert = newMsg);
    this.publicMsgService.failAlert.subscribe((newMsg) => this.failAlert = newMsg);


    this.publicMsgService.failMessagesUpdated.subscribe(
      (allMessages: PublicMsg[]) => {
          this.randomFaliureMessages = allMessages;
      }
      );

    this.publicMsgService.successMessagesUpdated.subscribe(
      (allMessages: PublicMsg[]) => {
        this.randomSuccessMessages = allMessages;
        console.log(allMessages);
      }
      );
      // todo this.dataSotrageServices.storeFailAlertMessages().
      // subscribe(
      //   (response: Response) => {
      //    this.successMessage = '!עודכן בהצלחה';
      //    // todo make the response create success message!
      //   });
      this.dataSotrageServices.fetchFailAlertMessages();
      this.dataSotrageServices.fetchSuccessAlertMessages();
    this.customerServices.customersUpdated.subscribe((customers: Customer[]) => {
      this.allCustomers = customers;
      // todo make it observable when it notices user is offline then it will get the localstorage
      // todo if there is one.
    });
    if (this.allCustomers == null) {
      this.dataSotrageServices.fetchCustomers();
    }
    this.customerServices.netStatus.subscribe(
      (status: Boolean) => {
        this.currentNetStatus = status;
      });

      this.customerServices.successMessage.subscribe(
        (successMessage: string) => {
          this.successMessage = successMessage;
        }
      );
      this.customerServices.errorMessage.subscribe(
        (message: string) => {
          this.successMessage = null;
          this.error = message;
        }
      );
  }

  onSuccessMsgVote(vote: boolean, msgId: object) {
    this.dataSotrageServices.updateSuccessMsg(msgId, vote);
    this.successAlert = null;
  }

  onFailMsgVote(vote: boolean, msgId: object) {
    this.dataSotrageServices.updateFailMsg(msgId, vote);
    this.failAlert = null;
  }


  onTipped() {
    this.tipped = !this.tipped;
  }
  onGetCustomerColor(customer: Customer) {
    const result = Number(this.onGetCustomerAvrg(customer));
    if (result <= 5) {
      return 'bg-danger text-danger';
    } else if (result < 10) {
      return 'bg-warning text-secondary';
    } else if (result <= 20) {
      return 'bg-info text-success';
    } else if (result > 20) {
      return 'bg-success text-gold font-weight-bold';
    }
  }

  onAddExistingCustomer(index: number) {
    this.selectedCustomerId = index;
    this.selectedCustomer = this.allCustomers[index];
    this.addCustomerTipForm.get('customerName').setValue(this.selectedCustomer.name);
    this.addCustomerTipForm.get('customerPhone').setValue(this.selectedCustomer.phone);
    this.customerSelected = true;
  }

  // onCustomerUpdated(tip) {
  //   this.loading = true;
  //   if (this.tipped && confirm('?אתה בטוח שאתה רוצה לעדכן שהלקוח לא הביא טיפ')) { // it will fire if tipped is not sellected
  //     // todo make it submit customer update without tip
  //     const editableCustomer = this.selectedCustomer;
  //     const currentCustomerTotalNotTipped =  Number(editableCustomer.notTipped) + 1;
  //     editableCustomer.notTipped = currentCustomerTotalNotTipped;
  //     this.allCustomers[this.selectedCustomerId] = editableCustomer;
  //     this.customerServices.updateCustomers(this.allCustomers);
  //     this.dataSotrageServices.storeCustomers().
  //     subscribe(
  //       (response: Response) => {
  //         if (response.json != null) {

  //           this.successMessage = '!עודכן בהצלחה';
  //           setTimeout(() => {
  //             this.setMessage(tip.value);
  //           }, 400);
  //         } else {
  //           this.error = 'ואללק איש יקר. סליחה אבל יש איזה תקלה';
  //         }
  //        // todo make the response create success message!
  //       });
  //   } else {
  //   this.loading = false;
  //   }
  //   // it will fire if tipped is sellected
  //   if (!this.tipped && confirm('אתה בטוח שאתה רוצה לעדכן שהלקוח הביא לך טיפ של' + tip.value)) {
  //     this.loading = true;
  //     if (tip.value == '') {
  //       // todo make it return error that tip is empty
  //       this.tipNotSellected = 'You Need To Add Tip If You Choosed Customer Tipped!';
  //       return;
  //     } else {
  //       this.tipNotSellected = '';
  //       const editableCustomer = this.selectedCustomer;
  //       const currentCustomerTipped =  Number(editableCustomer.tipped) + 1;
  //       const currentCustomerTotal =    Number(editableCustomer.totalTip) + Number(tip.value);
  //       editableCustomer.tipped = currentCustomerTipped;
  //       editableCustomer.totalTip = currentCustomerTotal;
  //       this.allCustomers[this.selectedCustomerId] = editableCustomer;
  //       this.customerServices.updateCustomers(this.allCustomers);
  //       this.userServices.onAddIncome(Number(tip.value));
  //       this.currentUserPauch = this.userServices.getCurrentPauch();
  //       this.dataSotrageServices.storeCustomers().
  //       subscribe(
  //         (response: Response) => {
  //           this.successMessage = '!עודכן בהצלחה';
  //           setTimeout(() => {
  //             console.log(tip.value);
              
  //             this.setMessage(tip.value);
  //           }, 400);
  //           // todo make the response create success message!
  //         }
  //         );
  //       }
  //         // todo make it submit the update
  //       }
  //     }
  //     // let editableCustomer = this.selectedCustomer;
  //     // console.log(editableCustomer.name);
  //   // this.customerServices.addUpdateToCustomer();
  // onUnSelect() {
  //   this.customerSelected = false;
  // }

  onGetCustomerAvrg(customer: Customer) {
  const totalTipTimes = Number(customer.tipped) + Number(customer.notTipped);
  const result = Number(customer.totalTip) / totalTipTimes;
  return result.toFixed(2);
  }

  onAddIncome(income: number) {
    this.userServices.onAddIncome(income);
    this.currentUserPauch = this.userServices.getCurrentPauch();
  }

  onCustomerAdded() {
    // todo make the tip and customer add
    const tip = this.addCustomerTipForm.get('customerTip').value;
    this.customerServices.addSuccessMsg('...טוען נתונים');
    if (!this.customerServices.checkIfCustomerExists(this.addCustomerTipForm.get('customerPhone').value)) {
      const customer = new Customer(
        this.addCustomerTipForm.get('customerName').value,
        '0' + this.addCustomerTipForm.get('customerPhone').value.toString(),
        !this.tipped ? '1' : '0', this.tipped ? '1' : '0',
        '23',
        this.addCustomerTipForm.get('customerTip').value > 0 ? this.addCustomerTipForm.get('customerTip').value : '0'
        );
      this.dataSotrageServices.storeCustomers(customer, tip);
      this.userServices.onAddIncome(tip);
      this.currentUserPauch = this.userServices.getCurrentPauch();
    } else {
      this.error = '!לקוח קיים כבר! בחר בהוסף ועדכן';
      return;
    }
  }

  onDisableAlertMessage() {
    this.successMessage = null;
    // this.alertMessage.message = null;
    this.router.navigate(['./']);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Was Fired! In add-tip');
  }
}
