import { Component, OnInit } from '@angular/core';
import { UserServices } from 'src/app/user.services';

@Component({
  selector: 'app-current-status',
  templateUrl: './current-status.component.html',
  styleUrls: ['./current-status.component.css']
})
export class CurrentStatusComponent implements OnInit {

  userCurrentPauch;
  userCurrentLevel;
  userHourPayed;
  userWorkHours;

  constructor(private userServices: UserServices) { }

  ngOnInit() {
    this.userCurrentPauch = this.userServices.getCurrentPauch();
    this.getUserLevel();
  }

  getUserLevel() {
    if (this.userCurrentPauch < 20) {
      this.userCurrentLevel = 'חור בפאוץ';
    }

    if (this.userCurrentPauch > 40) {
      this.userCurrentLevel = 'מתחיל את היום';
    }
    if (this.userCurrentPauch > 60) {
      this.userCurrentLevel = 'מתקדם';
    }
    if (this.userCurrentPauch > 100) {
      this.userCurrentLevel = 'תותח';
    }
  }

  getCurrentHourlyPayed() {
  const totalDayHourlyPayed = this.userWorkHours * this.userHourPayed;
  const totalPauchAndHour = totalDayHourlyPayed + this.userCurrentPauch;
  const totalPayed = totalPauchAndHour / this.userWorkHours;
  return totalPayed.toFixed(2);
  }

}
