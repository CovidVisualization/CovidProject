import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.css']
})
export class LineGraphComponent implements OnInit {

  loginObj: any;

  constructor(private http: HttpClient, private loginServ: LoginService) {
    this.loginObj = this.loginServ.loginObj;
  }

  type = "line"
  options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  dateRange = -30;
  absRange = 15;

  dataAll: any;
  dataProvince: any;

  date_lebels: string[] = [];
  date_newCase: string[] = [];
  data_healed: string[] = [];

  date_lebelsProvince: string[] = [];
  date_newCaseProvince: string[] = [];
  data_healedProvince: string[] = [];

  ngOnInit(): void {

    this.http.get('http://localhost:4200/proxy/api/covid/totalMonth').subscribe(data => {

      Object.entries(data).forEach(
        ([key, value]) => this.date_lebels.push(value["date"])
      );

      Object.entries(data).forEach(
        ([key, value]) => this.date_newCase.push(value["newCase"])
      );

      Object.entries(data).forEach(
        ([key, value]) => this.data_healed.push(value["healed"])
      );

      this.dataAll = {
        labels: this.date_lebels.slice(this.dateRange),
        datasets: [{
          label: 'ผูู้ติดเชื้อ',
          data: this.date_newCase.slice(this.dateRange),
          backgroundColor: [
            'rgba(255, 99, 132, 0.9)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        }, {
          label: 'รักษาหาย',
          data: this.data_healed.slice(this.dateRange),
          backgroundColor: [
            'rgba(127, 191, 63, 0.3)'
          ],
          borderColor: [
            'rgba(76, 114, 38, 1)'
          ],
          borderWidth: 1
        }]
      }
    })

    this.http.get('http://localhost:4200/proxy/api/covid/weekprovince').subscribe(data => {

      Object.entries(data).forEach(
        ([key, value]) => {
          // console.log(value.province)
          if (value.province == this.loginObj.province) {
            this.date_lebelsProvince.push(value["date"])
          }
        }
      );

      Object.entries(data).forEach(
        ([key, value]) => {
          if (value.province == this.loginObj.province) {
            this.date_newCaseProvince.push(value["newCase"])
          }
        }
      );

      this.dataProvince = {
        labels: this.date_lebelsProvince.slice(this.dateRange),
        datasets: [{
          label: 'ผูู้ติดเชื้อในจังหวัด',
          data: this.date_newCaseProvince.slice(this.dateRange),
          backgroundColor: [
            'rgba(255, 99, 132, 0.93)'
          ],
          borderColor: [
            'rgba(255, 0, 0, 1)'
          ],
          borderWidth: 1
        }]
      }
    })

  } //end of ngOnInit

  update(dataRangeForm: NgForm) {
    const token = dataRangeForm.value;
    this.dateRange = token.dateRange * -1;
    this.absRange = token.dateRange;

    //Data for Left Chart (All Area)
    this.dataAll = {
      labels: this.date_lebels.slice(this.dateRange),
      datasets: [{
        label: 'ผูู้ติดเชื้อ',
        data: this.date_newCase.slice(this.dateRange),
        backgroundColor: [
          'rgba(255, 99, 132, 0.9)'
        ],
        borderColor: [
          'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 1
      }, {
        label: 'รักษาหาย',
        data: this.data_healed.slice(this.dateRange),
        backgroundColor: [
          'rgba(127, 191, 63, 0.2)'
        ],
        borderColor: [
          'rgba(76, 114, 38, 1)'
        ],
        borderWidth: 1
      }]
    }

    //Data for Right Chart (Province)
    this.dataProvince = {
      labels: this.date_lebelsProvince.slice(this.dateRange),
      datasets: [{
        label: 'ผูู้ติดเชื้อในจังหวัด',
        data: this.date_newCaseProvince.slice(this.dateRange),
        backgroundColor: [
          'rgba(255, 99, 132, 0.93)'
        ],
        borderColor: [
          'rgba(255, 0, 0, 1)'
        ],
        borderWidth: 1
      }]
    }
  }
}
