import { Component, OnInit } from '@angular/core';
import { UserServices } from 'src/app/user.services';

@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.component.html',
  styleUrls: ['./add-tip.component.css']
})
export class AddTipComponent implements OnInit {
  tipStatusStyles;
  tipSelected = 0;
  currentUserPauch;

  onAddTwenty() {
    this.tipSelected = 20;
  }

  onAddTen() {
    this.tipSelected = 10;
  }
  onAddFive() {
    this.tipSelected = 5;
  }

  onAddElse() {
    this.tipSelected = 12;
  }

  constructor(private userServices: UserServices) { }

  onAddIncome(income: number) {
    this.userServices.onAddIncome(income);
    this.currentUserPauch = this.userServices.getCurrentPauch();
  }

  ngOnInit() {
    this.currentUserPauch = this.userServices.getCurrentPauch();
    this.tipStatusStyles = this.userServices.getTipStatusStyles();
  }

}
