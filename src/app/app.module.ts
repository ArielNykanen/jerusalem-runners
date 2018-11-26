import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavBarComponent } from './app-navbar/nav-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddTipComponent } from './main-page/add-tip/add-tip.component';
import { AppRoutingModule } from './app-routes.routing';
import { CustomerServices } from './main-page/customers.services';
import { ProfileEditComponent } from './main-page/profile-edit/profile-edit.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NavigationServices } from './navigation.services';
import { UserServices } from './user.services';
import { CurrentStatusComponent } from './main-page/current-status/current-status.component';
import { HttpModule } from '@angular/http';
import { DataStoreServices } from './shared/data-storage.services';
import { FilterPipe } from './shared/filter.pipe';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';
import { PublicMsgServices } from './shared/PublicMsg.services';
import { AddRandomMessagedComponent } from './main-page/add-random-messaged/add-random-messaged.component';
import { UserAlertServices } from './shared/user-alert.services';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageComponent,
    AddTipComponent,
    ProfileEditComponent,
    NotFoundPageComponent,
    CurrentStatusComponent,
    FilterPipe,
    SignupComponent,
    SigninComponent,
    AddRandomMessagedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
  ],
  providers: [
    CustomerServices,
    UserServices,
    NavigationServices,
    DataStoreServices,
    AuthService,
    AuthGuard,
    PublicMsgServices,
    UserAlertServices
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
