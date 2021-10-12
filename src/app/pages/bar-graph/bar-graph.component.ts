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

  mapData : MapData[] = [];

  dataSource : MatTableDataSource<MapData>;

  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:4200/proxy/api/covid/province').subscribe(data => {

      Object.entries(data).forEach(
        ([key, value]) => this.mapData.push(value)
      );

      this.dataSource = new MatTableDataSource(this.mapData);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

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


}
