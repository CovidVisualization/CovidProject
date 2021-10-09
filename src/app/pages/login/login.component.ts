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

<<<<<<< HEAD
=======
  log (x: any) {
    console.log(x)
  }

  compairUserPassword(retypePassword: any, userPassword: any) {
    const retypePass = retypePassword.value;
    const userPass = userPassword.value;
    if (retypePass != userPass){
      return true;
    }
    return false;
  }

  checkProvince(province : any) {
    const selectProvince = province.value;
    // console.log(this.province_th.includes(selectProvince))
    if (this.province_th.includes(selectProvince)) {
      return false;
    }
    // province.setErrors({'invalid': true});
    province.$setValidity("invalid", true);
    return true;
  }
>>>>>>> parent of 5335f2e (login register input validation **done)

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
    // console.log(registerToken.userEmail);
    // console.log(registerToken.password);
  }

}
