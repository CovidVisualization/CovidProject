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
  informationDate = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://25.58.26.212/covid/api/covid/totalcovid').subscribe(data => {
      
      var intTotal: number = +data[0].totalnew;
      if (intTotal.toLocaleString() != "0") {
        this.amountInfected = intTotal.toLocaleString();
      }
      
      var intTotalToday: number = +data[0].newCase;
      if (intTotalToday.toLocaleString() != "0") {
        this.amountInfectedToday = intTotalToday.toLocaleString();
      }
      
      var intHealing: number = +data[0].healing
      if (intHealing.toLocaleString() != "0") {
        this.amountHealing = intHealing.toLocaleString()
      }
      
      var intHealed: number = +data[0].healed
      if (intHealed.toLocaleString() != "0") {
        this.amountHealed = intHealed.toLocaleString()
      }

      var intDeath: number = +data[0].dead
      if (intDeath.toLocaleString() != "0") {
        this.amountDeath = intDeath.toLocaleString()
      }

      var charDate: any = data[0].date
      if (charDate.toLocaleString() != "0") {
        this.informationDate = charDate.toLocaleString()
      }

    })
  }

}

// function addComma(string) {

// };