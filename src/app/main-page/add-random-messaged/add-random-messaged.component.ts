import { Component, OnInit } from '@angular/core';
import { PublicMsgServices } from 'src/app/shared/PublicMsg.services';
import { NgForm, FormGroup, NgControl, FormControlName, FormControl, Validators } from '@angular/forms';
import { CustomerServices } from '../customers.services';
import { translateFromL } from 'src/app/shared/my-animations';
import { DataStoreServices } from 'src/app/shared/data-storage.services';
import { UserAlertServices } from 'src/app/shared/user-alert.services';
import { PublicMsg } from '../models/publicMsg.model';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-random-messaged',
  templateUrl: './add-random-messaged.component.html',
  styleUrls: ['./add-random-messaged.component.css'],
  animations: [
    translateFromL
  ]
})
export class AddRandomMessagedComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  errorMsgArr = [
    '...אנא בבקשה תמלא את הטפסים לפני ניסיון של שליחה',
    'נסיך של אמא בבקשה תמלא את הטופס ואז רק תשלח תודה',
    'יאללה איתך תמלא את הטופס לפני שליחה',
    'לא מילאת את הטופס מה אתה חושב שיקרה הטופס יתמלא לבד שנקרא את המחשבות שלך לשם עדיין לא הגענו אז תמלא בבקשה'
  ];
  addMessageForm: FormGroup;

  constructor(
    private userAlertServices: UserAlertServices,
    private dataStoreServices: DataStoreServices,
    private authServices: AuthService,
    private router: Router,
    private publicMsgServices: PublicMsgServices
    ) { }


  ngOnInit() {
    this.addMessageForm = new FormGroup({
      'message': new FormControl(null, Validators.required),
      'selection': new FormControl(2, Validators.required)
    }
    );
    this.userAlertServices.errorMsgAdded.subscribe(
      (message: string) => {
        this.errorMessage = message;
      }
      );
    this.userAlertServices.successMsgAdded.subscribe(
      (message: string) => {
        this.successMessage = message;
      }
      );
  }

  onAddMessage(f) {
    const selection = Number(this.addMessageForm.get('selection').value);
    const formMsg = this.addMessageForm.get('message').value;
    if (this.addMessageForm.invalid) {
      const randomPick = Math.floor(Math.random() * this.errorMsgArr.length);
      this.errorMessage = this.errorMsgArr[randomPick];
      return;
    } else if (formMsg.length > 150) {
      this.errorMessage = 'משהו הישתבש אנא התחבר שנית';
      this.authServices.removeToken();
    } else {
      const message = new PublicMsg(formMsg, '0', '0');
      if (selection === 1) {
        this.dataStoreServices.storeSuccessAlertMessages(message);
      } else if (selection === 2) {
        this.dataStoreServices.storeFailAlertMessages(message);
      }
    }
  }
  onDisableAlertMessage() {
    if (!this.successMessage) {
      this.errorMessage = null;
    } else {
      this.errorMessage = null;
      this.successMessage = null;
      this.router.navigate(['./']);

    }
  }

}
