import { Component, OnInit , ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import mapJSON from './map-data.json';

export interface MapData {
  name: string;
  amountInfected: string;
}

@Component({
  selector: 'app-map-section',
  templateUrl: './map-section.component.html',
  styleUrls: ['./map-section.component.scss']
})
export class MapSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  MAP_DATA: MapData[] = mapJSON;

  displayedColumns: string[] = [
    'name',
    'amountInfected',
  ];
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
