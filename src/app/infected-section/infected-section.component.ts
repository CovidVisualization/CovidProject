import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infected-section',
  templateUrl: './infected-section.component.html',
  styleUrls: ['./infected-section.component.css']
})
export class InfectedSectionComponent implements OnInit {

  amountInfected = 1;
  amountInfectedToday= 555;
  amountHealing = 20;
  amountHealed = 3;
  amountDeath = 4;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://25.58.26.212/covid/api/covid/totalcovid').subscribe(data => {
      console.log(data)

      // var dataTmp = { ...data }
      // this.amountInfected = dataTmp['newCase']
    })
  }

}

// function addComma(string) {

// };