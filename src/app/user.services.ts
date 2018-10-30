export class UserServices {
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
    return this.currentPauch;
  }

  getTipStatusStyles() {
    return this.tipStatusStyles;
  }

  onAddIncome(income: number) {
    this.currentPauch += income;
  }

}
