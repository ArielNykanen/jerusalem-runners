import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }
  onSignUp(form: NgForm) {
    console.log("jjj");
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);
  }
  ngOnInit() {
  }

}
