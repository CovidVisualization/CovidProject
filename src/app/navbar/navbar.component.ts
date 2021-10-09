import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;
  isloggin = false;
  user = "Mansea";
  constructor() { }

  ngOnInit(): void {
  }

  loggedin() {
    return this.isloggin;
  }

  onLogout() {

    return this.isloggin = false
  }
  

}