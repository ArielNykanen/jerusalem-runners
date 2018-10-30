import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerServices } from '../../customers.services';
import { Router } from '@angular/router';
import { NavigationServices } from 'src/app/navigation.services';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {

  customers: Customer[];
  customerNameSearch = '';
  customerStreetSearch = '';



  constructor(private customerServices: CustomerServices, private router: Router,
    private navigationService: NavigationServices) { }

  ngOnInit() {
   this.customers = this.customerServices.getAllCustomers();
  }

}
