import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  displayLogin = true;
  displayRegister = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  log (x: any) {
    // console.log(x)
  }

  compairUserPassword(retypePassword: any, userPassword: any) {
    const retypePass = retypePassword.value;
    const userPass = userPassword.value;
    // console.log(retypePass, userPass)
    if (retypePass != userPass){
      return true;
    }
    return false;
  }

  LoginButtonClick() {
    this.displayLogin = true;
    this.displayRegister = false;
  }

  RegisterButtonClick() {
    this.displayLogin = false;
    this.displayRegister = true;
  }

  wantToLogin() {
    return this.displayLogin
  }

  wantToRegister() {
    return this.displayRegister
  }

  onLogin(loginFrom: NgForm): void {
    const loginToken = loginFrom.value;
    console.log(loginToken.userEmail);
    console.log(loginToken.password);
  }

  onRegister(registerFrom: NgForm): void {
    const registerToken = registerFrom.value;
    console.log(registerToken);

    if (registerToken.password.length < 6) {
      alert("Password must greater than or equal to 6.");

    }



  }
}
