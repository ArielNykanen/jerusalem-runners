import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private authService: AuthService) {}

  onLogOut() {
    this.authService.logOut();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
