import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { HttpClient } from '@angular/common/http';


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


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://25.58.26.212/coviD/api/covid/totalMonth').subscribe(data => {

      let date_lebels: string[] = [];
      let date_newCase: string[] = [];
      let data_dead: string[] = [];

      console.log(date_newCase);

      Object.entries(data).forEach(
        ([key, value]) => date_lebels.push(value["date"])
      );

      Object.entries(data).forEach(
        ([key, value]) => date_newCase.push(value["newCase"])
      );

      Object.entries(data).forEach(
        ([key, value]) => data_dead.push(value["dead"])
      );

      // date_newCase.splice(15, 0, '0');

      this.data7 = {
        labels: date_lebels.slice(-7),
        datasets: [{
          label: 'ผูู้ติดเชื้อ',
          data: date_newCase.slice(-7),
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
      
      this.data14 = {
        labels: date_lebels.slice(-14),
        datasets: [{
          label: 'ผูู้ติดเชื้อ',
          data: date_newCase.slice(-14),
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

      this.data30 = {
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
        }, {
          label: 'dead people',
          data: data_dead,
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
    })
  } //end of ngOnInit
}

