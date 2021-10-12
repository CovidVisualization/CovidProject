import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../pages/login/login.service';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {

  type : any = "line";
  options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  data30 : any;
  data14 : any;
  data7 : any;

  loginObj : any;

  constructor(private http: HttpClient , private loginServ : LoginService) {
      this.loginObj = this.loginServ.loginObj;
   }

  ngOnInit(): void {

    // console.log(this.loginObj);

    this.http.get('http://localhost:4200/proxy/api/covid/totalMonth').subscribe(data => {

      let date_lebels: string[] = [];
      let date_newCase: string[] = [];
      let data_healed: string[] = [];

      // console.log(date_newCase);

      Object.entries(data).forEach(
        ([key, value]) => date_lebels.push(value["date"])
      );

      Object.entries(data).forEach(
        ([key, value]) => date_newCase.push(value["newCase"])
      );

      Object.entries(data).forEach(
        ([key, value]) => data_healed.push(value["healed"])
      );

      // date_newCase.splice(15, 0, '0');

      this.data7 = {
        labels: date_lebels.slice(-7),
        datasets: [{
          label: 'ผูู้ติดเชื้อ',
          data: date_newCase.slice(-7),
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }, {
          label: 'รักษาหาย',
          data: data_healed.slice(-7),
          backgroundColor: [
            'rgba(127, 191, 63, 0.2)'
          ],
          borderColor: [
            'rgba(76, 114, 38, 1)'
          ],
          borderWidth: 1
        }]
      }
      
      this.data14 = {
        labels: date_lebels.slice(-14),
        datasets: [{
          label: 'ผูู้ติดเชื้อ',
          data: date_newCase.slice(-14),
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }, {
          label: 'รักษาหาย',
          data: data_healed.slice(-14),
          backgroundColor: [
            'rgba(127, 191, 63, 0.2)'
          ],
          borderColor: [
            'rgba(76, 114, 38, 1)'
          ],
          borderWidth: 1
        }]
      }

      this.data30 = {
        labels: date_lebels,
        datasets: [{
          label: 'ผูู้ติดเชื้อ',
          data: date_newCase,
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }, {
          label: 'รักษาหาย',
          data: data_healed,
          backgroundColor: [
            'rgba(127, 191, 63, 0.2)'
          ],
          borderColor: [
            'rgba(76, 114, 38, 1)'
          ],
          borderWidth: 1
        }]
      }
    })
  } //end of ngOnInit
}

