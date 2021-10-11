import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit {

  displayLogin = true;
  displayRegister = false;
  login : any;

  province_th : string[] = [
    "กรุงเทพมหานคร",
    "กระบี่",
    "กาญจนบุรี",
    "กาฬสินธุ์",
    "กำแพงเพชร",
    "ขอนแก่น",
    "จันทบุรี",
    "ฉะเชิงเทรา",
    "ชลบุรี",
    "ชัยนาท",
    "ชัยภูมิ",
    "ชุมพร",
    "เชียงใหม่",
    "เชียงราย",
    "ตรัง",
    "ตราด",
    "ตาก",
    "นครนายก",
    "นครปฐม",
    "นครพนม",
    "นครราชสีมา",
    "นครศรีธรรมราช",
    "นครสวรรค์",
    "นนทบุรี",
    "นราธิวาส",
    "น่าน",
    "บึงกาฬ",
    "บุรีรัมย์",
    "ปทุมธานี",
    "ประจวบคีรีขันธ์",
    "ปราจีนบุรี",
    "ปัตตานี",
    "พระนครศรีอยุธยา",
    "พะเยา",
    "พังงา",
    "พัทลุง",
    "พิจิตร",
    "พิษณุโลก",
    "เพชรบุรี",
    "เพชรบูรณ์",
    "แพร่",
    "ภูเก็ต",
    "มหาสารคาม",
    "มุกดาหาร",
    "แม่ฮ่องสอน",
    "ยโสธร",
    "ยะลา",
    "ร้อยเอ็ด",
    "ระนอง",
    "ระยอง",
    "ราชบุรี",
    "ลพบุรี",
    "ลำปาง",
    "ลำพูน",
    "เลย",
    "ศรีสะเกษ",
    "สกลนคร",
    "สงขลา",
    "สตูล",
    "สมุทรปราการ",
    "สมุทรสงคราม",
    "สมุทรสาคร",
    "สระแก้ว",
    "สระบุรี",
    "สิงห์บุรี",
    "สุโขทัย",
    "สุพรรณบุรี",
    "สุราษฎร์ธานี",
    "สุรินทร์",
    "หนองคาย",
    "หนองบัวลำภู",
    "อ่างทอง",
    "อำนาจเจริญ",
    "อุดรธานี",
    "อุตรดิตถ์",
    "อุทัยธานี",
    "อุบลราชธานี",
  ];



  constructor(
    private loginServ: LoginService,
    private router: Router,) {

    this.loginServ.onRegisterComplete.subscribe(data => {
      if (data) {
        console.log("Register complete Yeah")
        this.displayLogin = true;
        this.displayRegister = false;
      } else {
        console.error("Register fail")
      }
    })

    this.loginServ.onLoginComplete.subscribe(data => {

      if (data) {
        // this.login = this.loginServ.loginObj;
        console.log("Login complete Yeah")
        // alert("yes");
        this.router.navigate(["dashboard"])
      } else {
        console.error("Login fail")
        alert("Login Failed.");
      }
    })

  }


  ngOnInit(): void {
    // let list = document.getElementById('datalistOptions'); 

    // this.province_th.forEach(item => {
    //   let option = document.createElement('option');
    //   option.value = item;

    //   // if (list !== null){
    //   //   alert("fuck");
    //   //   list.appendChild(option);
    //   // }
    //   list!.appendChild(option);
    // });

  }

  log (x: any) {
    // console.log(x)
  }

  compairUserPassword(retypePassword: any, userPassword: any) {
    const retypePass = retypePassword.value;
    const userPass = userPassword.value;
    if (retypePass != userPass){
      return true;
    }
    return false;
  }

  checkProvince(province : any, registerForm : NgForm) {
    const selectProvince = province.value;
    // console.log(this.province_th.includes(selectProvince))
    if (this.province_th.includes(selectProvince)) {
      return false;
    }
    try {
      registerForm.form.controls["province"].setErrors({"invalid": true});
    } catch { }
    return true;
  }

  LoginButtonClick() {
    this.displayLogin = true;
    this.displayRegister = false;
  }

  RegisterButtonClick() {
    this.displayLogin = false;
    this.displayRegister = true;
  }

  onLogin(loginFrom: NgForm): void {
    const loginToken = loginFrom.value;

    let item : any = {}
    item.userEmail = loginToken.userEmail;
    item.userPassword = loginToken.password;

    this.loginServ.login(item)
  }

  onRegister(registerFrom: NgForm): void {
    const registerToken = registerFrom.value;
    let item : any= {}
    item.userEmail = registerToken.userEmail
    item.userName = registerToken.userName
    item.userSurname = registerToken.userSurname
    item.password = registerToken.userPassword
    item.province = registerToken.province

    this.loginServ.register(item)
  }

}

