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

  province_th : String[] = [
    'กรุงเทพฯ',
    'กระบี่',
    'กาญจนบุรี',
    'กาฬสินธุ์',
    'กำแพงเพชร',
    'ขอนแก่น',
    'จันทบุรี',
    'ฉะเชิงเทรา',
    'ชลบุรี',
    'ชัยนาท',
    'ชัยภูมิ',
    'ชุมพร',
    'เชียงใหม่',
    'เชียงราย',
    'ตรัง',
    'ตราด',
    'ตาก',
    'นครนายก',
    'นครปฐม',
    'นครพนม',
    'นครราชสีมา',
    'นครศรีธรรมราช',
    'นครสวรรค์',
    'นนทบุรี',
    'นราธิวาส',
    'น่าน',
    'บึงกาฬ',
    'บุรีรัมย์',
    'ปทุมธานี',
    'ประจวบคีรีขันธ์',
    'ปราจีนบุรี',
    'ปัตตานี',
    'พระนครศรีอยุธยา',
    'พะเยา',
    'พังงา',
    'พัทลุง',
    'พิจิตร',
    'พิษณุโลก',
    'เพชรบุรี',
    'เพชรบูรณ์',
    'แพร่',
    'ภูเก็ต',
    'มหาสารคาม',
    'มุกดาหาร',
    'แม่ฮ่องสอน',
    'ยโสธร',
    'ยะลา',
    'ร้อยเอ็ด',
    'ระนอง',
    'ระยอง',
    'ราชบุรี',
    'ลพบุรี',
    'ลำปาง',
    'ลำพูน',
    'เลย',
    'ศรีสะเกษ',
    'สกลนคร',
    'สงขลา',
    'สตูล',
    'สมุทรปราการ',
    'สมุทรสงคราม',
    'สมุทรสาคร',
    'สระแก้ว',
    'สระบุรี',
    'สิงห์บุรี',
    'สุโขทัย',
    'สุพรรณบุรี',
    'สุราษฎร์ธานี',
    'สุรินทร์',
    'หนองคาย',
    'หนองบัวลำภู',
    'อ่างทอง',
    'อำนาจเจริญ',
    'อุดรธานี',
    'อุตรดิตถ์',
    'อุทัยธานี',
    'อุบลราชธานี',
  ];

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
      registerForm.form.controls['province'].setErrors({'invalid': true});
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

  wantToLogin() {
    return this.displayLogin
  }

  wantToRegister() {
    return this.displayRegister
  }

  onLogin(loginFrom: NgForm): void {
    const loginToken = loginFrom.value;

    const jsonObj = [];
    let item : any = {}
    item.userEmail = loginToken.userEmail;
    item.userPassword = loginToken.password;

    jsonObj.push(item);
    console.log(jsonObj);
  }

  onRegister(registerFrom: NgForm): void {
    const registerToken = registerFrom.value;

    const jsonObj = [];
    const item : any= {}
    item.userEmail = registerToken.userEmail
    item.userName = registerToken.userName
    item.userSurname = registerToken.userSurname
    item.password = registerToken.userPassword
    item.province = registerToken.province

    jsonObj.push(item);
    console.log(jsonObj);

  }
}
