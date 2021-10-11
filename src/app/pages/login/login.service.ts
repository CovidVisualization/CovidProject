import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  onRegisterComplete = new EventEmitter<boolean>()
  onLoginComplete = new EventEmitter<boolean>()

  constructor(
    private http : HttpClient
  ) { }

  register(item: any) {
    this.http.post('http://localhost:4200/proxy/api/covid/register', item).subscribe(
      res => this.onRegisterComplete.emit(true), 
      err => this.onRegisterComplete.emit(false)
    )
  }

  login(item: any) {
    this.http.post('http://localhost:4200/proxy/api/covid/login', item).subscribe(
      res => this.onLoginComplete.emit(true), 
      err => this.onLoginComplete.emit(false)
    )
  }


}
