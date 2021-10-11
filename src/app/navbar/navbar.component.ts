import { Component, DoCheck } from '@angular/core';
import { LoginService } from '../pages/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements DoCheck  {

  loginObj : any;

  constructor(private loginServ: LoginService) { 
    this.loginObj = this.loginServ.loginObj;
  }

  ngDoCheck(): void {
    this.loginObj = this.loginServ.loginObj;

  }




  onLogout() {
  
    this.loginServ.loginObj = undefined;
    this.loginObj = undefined;
  }
  

}