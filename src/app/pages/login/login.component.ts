import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(loginFrom: NgForm): void {
    console.log(loginFrom.value);
    const token = loginFrom.value;
    console.log(token.userName);
    console.log(token.password);
  }

}

