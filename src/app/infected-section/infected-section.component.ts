import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infected-section',
  templateUrl: './infected-section.component.html',
  styleUrls: ['./infected-section.component.css']
})
export class InfectedSectionComponent implements OnInit {

  amountInfected = 0;
  amountInfectedToday = 0;
  amountHealing = 20;
  amountHealed = 3;
  amountDeath = 4;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://25.58.26.212/covid/api/covid/totalcovid').subscribe(data => {
      
      this.amountInfected = data[0].totalnew
      this.amountInfectedToday = data[0].newCase
      this.amountHealing = data[0].healing
      this.amountHealed = data[0].healed
      this.amountDeath = data[0].dead

    })
  }

}

// function addComma(string) {

// };