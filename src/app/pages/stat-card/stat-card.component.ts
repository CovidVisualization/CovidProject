import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  templateUrl: './stat-card.component.html',
  styleUrls: ['./stat-card.component.css']
})
export class StatCardComponent implements OnInit {



  amountInfected = "";
  amountInfectedToday = "";
  amountHealing = "";
  amountHealed = "";
  amountDeath = "";
  informationDate = "";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:4200/proxy/api/covid/totalcovid').subscribe(data => {
      
      var intTotal: number = +data[0].totalnew;
      if (intTotal.toLocaleString() != "") {
        this.amountInfected = intTotal.toLocaleString();
      }
      
      var intTotalToday: number = +data[0].newCase;
      if (intTotalToday.toLocaleString() != "") {
        this.amountInfectedToday = intTotalToday.toLocaleString();
      }
      
      var intHealing: number = +data[0].healing
      if (intHealing.toLocaleString() != "") {
        this.amountHealing = intHealing.toLocaleString()
      }
      
      var intHealed: number = +data[0].healed
      if (intHealed.toLocaleString() != "") {
        this.amountHealed = intHealed.toLocaleString()
      }

      var intDeath: number = +data[0].dead
      if (intDeath.toLocaleString() != "") {
        this.amountDeath = intDeath.toLocaleString()
      }

      var charDate: any = data[0].date
      if (charDate.toLocaleString() != "") {
        this.informationDate = charDate.toLocaleString()
      }

    })
  }

}
