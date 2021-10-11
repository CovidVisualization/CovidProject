import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { async } from '@angular/core/testing';

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
      res => {
      this.onRegisterComplete.emit(true)
      
      // console.log(res);
      }, 
      err => this.onRegisterComplete.emit(false)
    )
  }

//   login = async (item : any): Promise<any> => {
//     this.http.post('http://localhost:4200/proxy/api/covid/login', item).subscribe(
//       res => {
//         this.onLoginComplete.emit(true)
//         respondObjCall(res);
//         }, 
//       async err => {
//         this.onLoginComplete.emit(false)
//         respondObjCall(null);
//       }
//     )
// }

  login(item: any) {

    this.http.post('http://localhost:4200/proxy/api/covid/login', item).subscribe(
      res => {
        this.onLoginComplete.emit(true)
        // console.log(res);
        }, 
      err => {
        this.onLoginComplete.emit(false)
      }
    )
    
  }
}