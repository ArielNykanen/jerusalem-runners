import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AddTipComponent } from './main-page/add-tip/add-tip.component';
import { ProfileEditComponent } from './main-page/profile-edit/profile-edit.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { CurrentStatusComponent } from './main-page/current-status/current-status.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AddRandomMessagedComponent } from './main-page/add-random-messaged/add-random-messaged.component';

const AppRoutes: Routes = [
  {
  path: '', component: CurrentStatusComponent, canActivate: [AuthGuard]
},
{
  path: 'sign-up', component: SignupComponent
},
{
  path: 'sign-in', component: SigninComponent
},
{
  path: 'add-tip', component: AddTipComponent, canActivate: [AuthGuard]
},
{
  path: 'add-random-msg', component: AddRandomMessagedComponent, canActivate: [AuthGuard]
},
{
  path: 'profile-edit', component: ProfileEditComponent, canActivate: [AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],

  exports: [RouterModule]
})

export class AppRoutingModule {
}
