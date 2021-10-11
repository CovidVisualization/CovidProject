import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { LoginService } from '../pages/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;
  isloggin = false;
  user = "Mansea";

  loginObj : any;

  constructor(private loginServ: LoginService) { 
    this.loginObj = this.loginServ.loginObj;
  }

  ngOnInit(): void {
  }

  onLogout() {
    return false;
  }
  

}