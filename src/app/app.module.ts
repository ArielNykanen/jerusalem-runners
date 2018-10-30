import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './app-navbar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddTipComponent } from './main-page/add-tip/add-tip.component';
import { CustomerSearchComponent } from './main-page/customer-search/customer-search.component';
import { AppRoutingModule } from './app-routes.routing';
import { CustomerServices } from './main-page/customers.services';
import { BadCustomersComponent } from './main-page/customer-search/bad-customers/bad-customers.component';
import { GoodCustomersComponent } from './main-page/customer-search/good-customers/good-customers.component';
import { UnknownCustomersComponent } from './main-page/customer-search/unknown-customers/unknown-customers.component';
import { ProfileEditComponent } from './main-page/profile-edit/profile-edit.component';
import { AddCustomerComponent } from './main-page/customer-search/add-customer/add-customer.component';
import { AllCustomersComponent } from './main-page/customer-search/all-customers/all-customers.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NavigationServices } from './navigation.services';
import { UserServices } from './user.services';
import { CurrentStatusComponent } from './main-page/current-status/current-status.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageComponent,
    AddCustomerComponent,
    AddTipComponent,
    CustomerSearchComponent,
    BadCustomersComponent,
    GoodCustomersComponent,
    UnknownCustomersComponent,
    ProfileEditComponent,
    AllCustomersComponent,
    NotFoundPageComponent,
    CurrentStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CustomerServices,
    UserServices,
    NavigationServices
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
