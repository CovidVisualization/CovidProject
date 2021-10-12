import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../login/login.service';

export interface MapData {
  date: string;
  province: string;
  newCase: string;
}

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.css']
})

export class BarGraphComponent implements OnInit {

  mapData: MapData[] = [];

  dataSource: MatTableDataSource<MapData>;

  constructor(private http: HttpClient) { }

  type = "bar"
  options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }

  data: any;

  date_lebels: string[] = [];
  date_newCase: string[] = [];

  ngOnInit(): void {
    this.http.get('http://localhost:4200/proxy/api/covid/province').subscribe(data => {

      Object.entries(data).forEach(
        ([key, value]) => this.mapData.push(value)
      );

      this.dataSource = new MatTableDataSource(this.mapData);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;


      this.data = {
        labels: [this.dataSource.filteredData[0].province,
        this.dataSource.filteredData[1].province,
        this.dataSource.filteredData[2].province,
        this.dataSource.filteredData[3].province,
        this.dataSource.filteredData[4].province,
        this.dataSource.filteredData[5].province,
      ],
        datasets: [{
          label: "ผู้ติดเชื้อ",
          data: [this.dataSource.filteredData[0].newCase,
          this.dataSource.filteredData[1].newCase,
          this.dataSource.filteredData[2].newCase,
          this.dataSource.filteredData[3].newCase,
          this.dataSource.filteredData[4].newCase,
          this.dataSource.filteredData[5].newCase,
        ],
          backgroundColor: [
            'rgba(255, 99, 132, 0.4)','rgba(255, 255, 132, 0.4)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 1
        }]
      }

      
    })

  }

  displayedColumns: string[] = [
    'province',
    'newCase'
  ];

  // dataSource = new MatTableDataSource(this.MAP_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateChart() {

    let provinceArray : any[] = [];
    let newCaseArray : any[] = [];

    for (let i = 0; i < 6; i++) {
      try {
        provinceArray.push(this.dataSource.filteredData[i].province)
        newCaseArray.push(this.dataSource.filteredData[i].newCase)
      } catch { }
    }

    this.data = {
      labels: provinceArray,
      datasets: [{
        label: "ผู้ติดเชื้อ",
        data: newCaseArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)','rgba(255, 255, 132, 0.4)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
      }]
    }
    
  }


}
