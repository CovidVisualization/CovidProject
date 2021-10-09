import { Component, OnInit , ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import mapJSON from './map-data.json';

export interface MapData {
  date: string;
  province: string;
  newCase: string;
}

@Component({
  selector: 'app-map-section',
  templateUrl: './map-section.component.html',
  styleUrls: ['./map-section.component.scss']
})
export class MapSectionComponent implements OnInit {

  // MAP_DATA: MapData[] = [];

  MAP_DATA: MapData[] = mapJSON;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:4200/proxy/covid/api/covid/province').subscribe(data => {

      let data_map: MapData[] = [];

      Object.entries(data).forEach(
        ([key, value]) => data_map.push(value)
      );

      console.log(data_map);
      // this.MAP_DATA = data_map;

      this.getData(data_map);

    })
  }

  displayedColumns: string[] = [
    'province',
    'newCase',
  ];

  getData(data_map: MapData[]) {
    this.MAP_DATA = data_map;
  }

  dataSource = new MatTableDataSource(this.MAP_DATA); 

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
