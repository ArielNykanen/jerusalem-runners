import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class NavigationServices {
  constructor(private router: Router) {}

  onNavigateForward(link: string) {
    this.router.navigate([this.router.url, link]);
  }

}
