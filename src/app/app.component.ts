import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jerusalem-runners';

  ngOnInit() {
    firebase.initializeApp({
    apiKey: 'AIzaSyCDmFV0_CC6ltw8-mevf4qphUHgPvANgB0',
    authDomain: 'jerusalem-runners.firebaseapp.com',
    });
  }

}
