import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AddTipComponent } from './main-page/add-tip/add-tip.component';
import { ProfileEditComponent } from './main-page/profile-edit/profile-edit.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CurrentStatusComponent } from './main-page/current-status/current-status.component';
import { SignupComponent } from './auth/signup/signup.component';

const AppRoutes: Routes = [
  {
  path: '', component: CurrentStatusComponent
},
{
  path: 'sign-up', component: SignupComponent
},
{
  path: 'add-tip', component: AddTipComponent
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
