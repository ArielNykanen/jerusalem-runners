import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CustomerSearchComponent } from './main-page/customer-search/customer-search.component';
import { AddTipComponent } from './main-page/add-tip/add-tip.component';
import { ProfileEditComponent } from './main-page/profile-edit/profile-edit.component';
import { AddCustomerComponent } from './main-page/customer-search/add-customer/add-customer.component';
import { AllCustomersComponent } from './main-page/customer-search/all-customers/all-customers.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CurrentStatusComponent } from './main-page/current-status/current-status.component';

const AppRoutes: Routes = [
  {
  path: '', component: CurrentStatusComponent
},
{
  path: 'add-tip', component: AddTipComponent
},
  {
  path: 'customer-search', component: CustomerSearchComponent, children: [
    {path: '', component: AllCustomersComponent},
    {path: 'add-customer', component: AddCustomerComponent},
    {path: '**', component: NotFoundPageComponent},
  ]
},
  {
  path: 'profile-edit', component: ProfileEditComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],

  exports: [RouterModule]
})

export class AppRoutingModule {
}
