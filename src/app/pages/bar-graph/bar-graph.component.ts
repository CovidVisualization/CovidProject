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
  styleUrls: ['./bar-graph.component.css'],
})
export class BarGraphComponent implements OnInit {
  mapData: MapData[] = [];

  dataSource: MatTableDataSource<MapData>;

  loginObj : any ;

  constructor(private http: HttpClient, private loginServ : LoginService) {
    this.loginObj = this.loginServ.loginObj;
  }

  type = 'bar';
  options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  data: any;

  date_lebels: string[] = [];
  date_newCase: string[] = [];

  user_province_newCase: string;
  user_province: string;

  ngOnInit(): void {
    this.http
      .get('http://localhost:4200/proxy/api/covid/province')
      .subscribe((data) => {
        Object.entries(data).forEach(([key, value]) =>
          this.mapData.push(value)
        );

        this.user_province = this.loginObj.province;

        Object.entries(this.mapData).forEach(
          ([key, value]) => {
            if (value.province == this.loginObj.province) {
              this.user_province_newCase = value["newCase"]
            }
          }
        );

        this.dataSource = new MatTableDataSource(this.mapData);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.data = {
          labels: [
            this.user_province,
            this.dataSource.filteredData[0].province,
            this.dataSource.filteredData[1].province,
            this.dataSource.filteredData[2].province,
            this.dataSource.filteredData[3].province,
            this.dataSource.filteredData[4].province,
            
          ],
          datasets: [
            {
              label: '?????????????????????????????????',
              data: [
                this.user_province_newCase,
                this.dataSource.filteredData[0].newCase,
                this.dataSource.filteredData[1].newCase,
                this.dataSource.filteredData[2].newCase,
                this.dataSource.filteredData[3].newCase,
                this.dataSource.filteredData[4].newCase,
              ],
              backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.2)'
              ],
              borderColor: [
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)',
                'rgba(0, 0, 0, 1)'
              ],
              borderWidth: 1,
            },
          ],
        };
      });
  }

  displayedColumns: string[] = ['province', 'newCase'];

  // dataSource = new MatTableDataSource(this.MAP_DATA);

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateChart() {
    let provinceArray: any[] = [];
    let newCaseArray: any[] = [];

    provinceArray.push(this.user_province);
    newCaseArray.push(this.user_province_newCase);

    for (let i = 0; i < 5; i++) {
      try {
        provinceArray.push(this.dataSource.filteredData[i].province);
        newCaseArray.push(this.dataSource.filteredData[i].newCase);
      } catch {}
    }

    this.data = {
      labels: provinceArray,
      datasets: [
        {
          label: '?????????????????????????????????',
          data: newCaseArray,
          backgroundColor: [
            'rgba(255, 99, 132, 0.9)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(0, 0, 0, 0.2)'
          ],
          borderColor: [
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)'
          ],
          borderWidth: 1,
        },
      ],
    };
  }
}
