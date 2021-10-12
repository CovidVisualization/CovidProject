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

  loginObj : any;

  constructor(private http: HttpClient, private loginServ : LoginService) {
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

  data : any;

  date_lebels: string[] = [];
  date_newCase: string[] = [];
  data_healed: string[] = [];

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

      this.data = {
        labels: this.date_lebels.slice(this.dateRange),
        datasets: [{
          label: 'ผูู้ติดเชื้อ',
          data: this.date_newCase.slice(this.dateRange),
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
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
    })
  } //end of ngOnInit

  update(dataRangeForm : NgForm){
    const token = dataRangeForm.value;
    this.dateRange = token.dateRange * -1;

    this.data = {
      labels: this.date_lebels.slice(this.dateRange),
      datasets: [{
        label: 'ผูู้ติดเชื้อ',
        data: this.date_newCase.slice(this.dateRange),
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)'
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

  }
}
