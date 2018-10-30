import { Component, OnInit } from '@angular/core';
import { NavigationServices } from 'src/app/navigation.services';
import { FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';
import { Customer } from '../../models/customer.model';
import { CustomerServices } from '../../customers.services';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  tipped = false;
  badCustomer = true;
  addCustomerForm: FormGroup;
  allReadyExist = this.customerServices.getAllCustomers();

  constructor(private navigationService: NavigationServices,
    private customerServices: CustomerServices) { }

  onBadCustomer() {
    this.badCustomer = !this.badCustomer;
  }

  onTipped() {
    this.tipped = !this.tipped;

  }

  ngOnInit() {
    this.addCustomerForm = new FormGroup({
      'customerName': new FormControl(null, [Validators.required, this.allReadyExistCustomerName.bind(this)]),
      'customerStreet': new FormControl(null, [Validators.required, this.allReadyExistCustomerStreet.bind(this)]),
      'customerHouse': new FormControl(null, Validators.required),
      'customerApartment': new FormControl(null, Validators.required),
      'customerTipped': new FormControl(null),
      'customerShit': new FormControl(null),
    });
  }

  onCustomerAdded() {
    this.customerServices
    .addCustomer(new Customer(
      this.addCustomerForm.get('customerName').value,
      this.addCustomerForm.get('customerStreet').value,
      this.addCustomerForm.get('customerHouse').value,
      this.addCustomerForm.get('customerApartment').value,
      !this.tipped ? '1' : '0', this.tipped ? '1' : '0',
      !this.badCustomer ? 'חרא לקוח' : 'לא דורג'));
      alert('customer was added successfuly!');
      this.addCustomerForm.reset();
  }

  onCheckExist() {
    if (this.addCustomerForm.controls['customerName'].errors &&
    this.addCustomerForm.controls['customerName'].errors['customerExists1'] &&
    this.addCustomerForm.controls['customerStreet'].errors &&
    this.addCustomerForm.controls['customerStreet'].errors['customerExists2']) {
      return true;
    }
    return false;
  }

  allReadyExistCustomerName(control: FormControl): {[s: string]: boolean} {
    if (this.allReadyExist.map(function(e) {
      return  e.name;
    }).indexOf(control.value) !== -1) {
      return {'customerExists1': true};
    }
      return null;
  }

  allReadyExistCustomerStreet(control: FormControl): {[s: string]: boolean} {
    if (this.allReadyExist.map(function(e) {
      return  e.street;
    }).indexOf(control.value) !== -1) {
      return {'customerExists2': true};
    }
      return null;
  }

}
