import { OnInit } from '@angular/core';

export class UserServices implements OnInit {
  currentPauch = 0;
  tipStatusStyles = ['red', 'orange', 'green'];

  getCurrentPauchStyle() {
    if (this.currentPauch < 40) {
      return this.tipStatusStyles[0];
    }
    if (this.currentPauch < 60) {
      return this.tipStatusStyles[1];
    }
    if (this.currentPauch >= 60) {
      return this.tipStatusStyles[2];
    }
  }

  getCurrentPauch() {
    if (localStorage.getItem('pauch')) {
      const pauch = localStorage.getItem('pauch');
     return this.currentPauch = Number(pauch);
    } else {
      return this.currentPauch = Number(0);
    }
  }

  getTipStatusStyles() {
    return this.tipStatusStyles;
  }

  onAddIncome(income: number) {
    if (income > 0) {
      this.currentPauch += income;
      localStorage.setItem('pauch', this.currentPauch.toString());
    }
  }

  ngOnInit() {
  }


}
