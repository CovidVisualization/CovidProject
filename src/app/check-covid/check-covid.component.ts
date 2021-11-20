import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import hospitalJSON from '../data/hospital-data.json';

export interface HospitalData {
  name: string;
  district: string;
  province: string;
  type: string;
  typeEnter: string;
  price: string;
  location: string;
}

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-check-covid',
  templateUrl: './check-covid.component.html',
  styleUrls: ['./check-covid.component.scss'],
})
export class CheckCovidComponent implements AfterViewInit {

  HOSPITAL_DATA: HospitalData[] = hospitalJSON;

  displayedColumns: string[] = [
    'name',
    'district',
    'province',
    'type',
    'typeEnter',
    'price',
  ];
  dataSource = new MatTableDataSource(this.HOSPITAL_DATA);

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
