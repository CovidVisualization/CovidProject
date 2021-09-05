import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent implements OnInit {

  type : any;
  data : any;
  options : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://25.58.26.212/coviD/api/covid/totalWeek').subscribe(data => {

      let date_lebels: string[] = [];
      let date_newCase: string[] = [];

      Object.entries(data).forEach(
        ([key, value]) => date_lebels.push(value["date"])
      );

      Object.entries(data).forEach(
        ([key, value]) => date_newCase.push(value["newCase"])
      );

      this.type = "line";
      this.data = {
        labels: date_lebels,
        datasets: [{
          label: 'ผูู้ติดเชื้อ',
          data: date_newCase,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      }
      this.options = {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
            
          }
        }
      }
    })
  } //end of ngOnInit
}

