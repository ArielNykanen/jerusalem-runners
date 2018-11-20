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
  tipStatusStyles;
  successMessage = '';
  error = '';
  loading = false;
  tipSelected: number;
  tipNotSellected = '';
  tipped = true;
  currentNetStatus: Boolean = true;
  currentUserPauch;
  searchInput = '';
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

    this.addCustomerTipForm = new FormGroup({
      'customerName': new FormControl(null, Validators.required),
      'customerPhone': new FormControl(null, Validators.required),
      'customerTip': new FormControl(null, Validators.required),
      'customerTipped': new FormControl(null),
      'customerShit': new FormControl(null),
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
      this.addCustomerTipForm.get('customerPhone').value.toString(),
      !this.tipped ? '1' : '0', this.tipped ? '1' : '0',
      '23',
      this.addCustomerTipForm.get('customerTip').value > 0 ? this.addCustomerTipForm.get('customerTip').value : '0'
      ));
      alert('customer was added successfuly!');
      this.allCustomers = this.customerServices.getAllCustomers();
      this.dataSotrageServices.storeCustomers().
      subscribe(
        (response: Response) => {
           console.log('Customer Was Added Successfuly');
           this.allCustomers = this.customerServices.getAllCustomers();
          }
        );
      this.userServices.onAddIncome(this.addCustomerTipForm.get('customerTip').value);
      this.currentUserPauch = this.userServices.getCurrentPauch();
      this.router.navigate(['../']);
    } else {
      this.error = '!לקוח קיים כבר! בחר בהוסף ועדכן';
    }

  }

  ngOnDestroy() {
    console.log('ngOnDestroy Was Fired! In add-tip');
  }

}
