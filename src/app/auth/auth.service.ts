import * as firebase from 'firebase';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  token: string;
  loading = false;
  successMessage = false;
  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    this.loading = true;
    firebase.auth().createUserWithEmailAndPassword(email, password).
    then((response) => {
      this.loading = false;
      this.router.navigate(['/sign-in']);
      this.successMessage = true;
    }).
      catch(
        (error: Error) => {
          this.loading = false;
          alert(error);
        }
      );
  }

  signinUser(email: string, password: string) {
    this.loading = true;
    this.successMessage = false;
    firebase.auth().signInWithEmailAndPassword(email, password).
    then(
      response => {
        this.router.navigate(['../']);
        console.log(response);
        firebase.auth().currentUser.getIdToken()
         .then(
           (token: string) => {
             this.token = token;
             console.log(this.token);
             console.log('this is the id i took:  t8LuaXh9X0cdPomny3RmINwMIi83');
            }
         );
      }
    ).catch((error) => {
      this.loading = false;
      alert(error);
    }
    );
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
    .then(
      (token: string) => this.token = token
      );
      return this.token;
  }

  isAuthenticated() {
    return this.token != null;
}

logOut() {
  firebase.auth().signOut();
  this.token = null;
}

}
