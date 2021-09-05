import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infected-section',
  templateUrl: './infected-section.component.html',
  styleUrls: ['./infected-section.component.css']
})
export class InfectedSectionComponent implements OnInit {

  amountInfected = "";
  amountInfectedToday = "";
  amountHealing = "";
  amountHealed = "";
  amountDeath = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://25.58.26.212/covid/api/covid/totalcovid').subscribe(data => {
      
      var intTotal: number = +data[0].totalnew;
      this.amountInfected = intTotal.toLocaleString();

      var intTotalToday: number = +data[0].newCase;
      this.amountInfectedToday = intTotalToday.toLocaleString();

      var intHealing: number = +data[0].healing
      this.amountHealing = intHealing.toLocaleString()

      var intHealed: number = +data[0].healed
      this.amountHealed = intHealed.toLocaleString()

      var intDeath: number = +data[0].dead
      this.amountDeath = intDeath.toLocaleString()

    })
  }

}

// function addComma(string) {

// };