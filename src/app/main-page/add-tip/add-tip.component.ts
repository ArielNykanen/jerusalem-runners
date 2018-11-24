import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserServices } from 'src/app/user.services';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomerServices } from '../customers.services';
import { Customer } from '../models/customer.model';
import { Router } from '@angular/router';
import { DataStoreServices } from 'src/app/shared/data-storage.services';
import { Response } from '@angular/http';

@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.component.html',
  styleUrls: ['./add-tip.component.css']
})
export class AddTipComponent implements OnInit, OnDestroy {
  randomSuccessMessages = [
    'עוד קצת עוד קצת ואתה בטופפפ',
  'אחלה תמשיך ככה אולי תגיע למיליון בסוף', 'אחלה לקוח תאמין לי הלוואי הייתי שם במקומך',
   'צריך עוד אנשים כאלה בנאדם שבאמת מבין אותנו השליחים',
   'איךךך איך הוא הביא לך טיפ כזה אחלה גבר'
  ];
  randomFaliureMessages = [
    'מעולה אולי עד סוף היום יהיה לך מספיק לבירה',
    'פעם הבאה תגיד לו לא כולל שירות ימניאק',
    'תן ללקוח הזה איזה שתן בתא דואר טפיי חרא של בנאדם',
    'לא נורא פעם הבאה תגיע לו בדקה האחרונה הזיין הזה'
  ];
  tipStatusStyles;
  successMessage = '';
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
  constructor(private userServices: UserServices,
    private customerServices: CustomerServices,
    private router: Router,
    private dataSotrageServices: DataStoreServices
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
    // this.customerServices.setLocalStorage();
    this.customerServices.customersUpdated.subscribe((customers: Customer[]) => {
      this.allCustomers = customers;
      // todo make it observable when it notices user is offline then it will get the localstorage
      // todo if there is one.
    });
    this.dataSotrageServices.fetchCustomers();
    this.customerServices.netStatus.subscribe(
      (status: Boolean) => {
        this.currentNetStatus = status;
      });
  }
  onTipped() {
    this.tipped = !this.tipped;
  }
  onGetCustomerColor(customer: Customer) {
    if (this.onGetCustomerAvrg(customer) < 5) {
      return 'bg-danger text-danger';
    } else if (this.onGetCustomerAvrg(customer) < 10) {
      return 'bg-warning text-secondary';
    } else if (this.onGetCustomerAvrg(customer) < 20) {
      return 'bg-info text-success';
    } else if (this.onGetCustomerAvrg(customer) > 20) {
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

  onCustomerUpdated(tip) {
    this.loading = true;
    if (this.tipped && confirm('?אתה בטוח שאתה רוצה לעדכן שהלקוח לא הביא טיפ')) { // it will fire if tipped is not sellected
      // todo make it submit customer update without tip
      const editableCustomer = this.selectedCustomer;
      const currentCustomerTotalNotTipped =  Number(editableCustomer.notTipped) + 1;
      editableCustomer.notTipped = currentCustomerTotalNotTipped;
      this.allCustomers[this.selectedCustomerId] = editableCustomer;
      this.customerServices.updateCustomers(this.allCustomers);
      this.dataSotrageServices.storeCustomers().
      subscribe(
        (response: Response) => {
         this.successMessage = '!עודכן בהצלחה';
         setTimeout(() => {
           this.router.navigate(['../']);
         }, 1500);
         // todo make the response create success message!
        }
        //  },
        //  (error: Error) => {
        //    this.error = 'משהו השתבש אנא נסה שנית';
        //  },
        //  (compl) => {},
        );
    } else {
    this.loading = false;
    }
    // it will fire if tipped is sellected
    if (!this.tipped && confirm('אתה בטוח שאתה רוצה לעדכן שהלקוח הביא לך טיפ של' + tip.value)) {
      this.loading = true;
      if (tip.value == '') {
        // todo make it return error that tip is empty
        this.tipNotSellected = 'You Need To Add Tip If You Choosed Customer Tipped!';
        return;
      } else {
        this.tipNotSellected = '';
        const editableCustomer = this.selectedCustomer;
        const currentCustomerTipped =  Number(editableCustomer.tipped) + 1;
        const currentCustomerTotal =    Number(editableCustomer.totalTip) + Number(tip.value);
        editableCustomer.tipped = currentCustomerTipped;
        editableCustomer.totalTip = currentCustomerTotal;
        this.allCustomers[this.selectedCustomerId] = editableCustomer;
        this.customerServices.updateCustomers(this.allCustomers);
        this.userServices.onAddIncome(Number(tip.value));
        this.currentUserPauch = this.userServices.getCurrentPauch();
        this.dataSotrageServices.storeCustomers().
        subscribe(
          (response: Response) => {
            this.successMessage = '!עודכן בהצלחה';
            setTimeout(() => {
              this.router.navigate(['../']);
            }, 1500);
            // todo make the response create success message!
          }
          );
        }
          // todo make it submit the update
        }
      }
      // let editableCustomer = this.selectedCustomer;
      // console.log(editableCustomer.name);
    // this.customerServices.addUpdateToCustomer();
  onUnSelect() {
    this.customerSelected = false;
  }

  onGetCustomerAvrg(customer: Customer) {
  const totalTipTimes = Number(customer.tipped) + Number(customer.notTipped);
  const result = Number(customer.totalTip) / totalTipTimes;
  return result;
  }

  onAddIncome(income: number) {
    this.userServices.onAddIncome(income);
    this.currentUserPauch = this.userServices.getCurrentPauch();
  }

  onCustomerAdded() {
    // todo make the tip and customer add
    if (!this.customerServices.checkIfCustomerExists(this.addCustomerTipForm.get('customerPhone').value)) {
    this.customerServices
    .addCustomer(new Customer(
      this.addCustomerTipForm.get('customerName').value,
      '0' + this.addCustomerTipForm.get('customerPhone').value.toString(),
      !this.tipped ? '1' : '0', this.tipped ? '1' : '0',
      '23',
      this.addCustomerTipForm.get('customerTip').value > 0 ? this.addCustomerTipForm.get('customerTip').value : '0'
      ));
      this.successMessage = '!הלקוח נוסף ונשמר בהצלחה';
      this.allCustomers = this.customerServices.getAllCustomers();
      this.dataSotrageServices.storeCustomers().
      subscribe(
        (response: Response) => {
           this.allCustomers = this.customerServices.getAllCustomers();
          }
        );
      this.userServices.onAddIncome(this.addCustomerTipForm.get('customerTip').value);
      this.currentUserPauch = this.userServices.getCurrentPauch();
    } else {
      this.error = '!לקוח קיים כבר! בחר בהוסף ועדכן';
    }
    setTimeout(() => {
     const numSu =  Math.floor(Math.random() * this.randomSuccessMessages.length);
     const numFa =  Math.floor(Math.random() * this.randomFaliureMessages.length);

      const tip = this.addCustomerTipForm.get('customerTip').value == null  ? '0' : this.addCustomerTipForm.get('customerTip').value;
      if (tip < 10) {
        this.successMessage = ' נוסף לך' + tip + this.randomFaliureMessages[numFa];
      } else {
        this.successMessage = ' נוסף לך' + tip  + this.randomSuccessMessages[numSu];
      }
      this.addCustomerTipForm.reset();
    }, 1500);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Was Fired! In add-tip');
  }

}
