import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  name: string;
  position: number;
  district: string;
  province: string;
  type: string;
  typeEnter: string;
  price: string;
  location: string;
}

const ELEMENT_DATA: UserData[] = [
  {
    position: 1,
    name: 'โรงพยาบาลยอนฮี',
    district: 'กรุงเทพมหานคร',
    province: 'ดอนเมือง',
    type: 'CPR',
    typeEnter: 'Drive-Thu',
    price: '3000',
    location: 'google map',
  },
  {
    position: 2,
    name: 'โรงพยาบาล Mansea',
    district: 'กรุงเทพมหานคร',
    province: 'ลาดพร้าว',
    type: 'CPR',
    typeEnter: 'Drive-Thu',
    price: '1500',
    location: 'google map',
  },
  {
    position: 3,
    name: 'โรงพยาบาล Mansea',
    district: 'กรุงเทพมหานคร',
    province: 'ลาดพร้าว',
    type: 'CPR',
    typeEnter: 'Drive-Thu',
    price: '1500',
    location: 'google map',
  },
  {
    position: 4,
    name: 'โรงพยาบาล Mansea',
    district: 'กรุงเทพมหานคร',
    province: 'ลาดพร้าว',
    type: 'CPR',
    typeEnter: 'Drive-Thu',
    price: '1500',
    location: 'google map',
  },
  {
    position: 5,
    name: 'โรงพยาบาล Mansea',
    district: 'กรุงเทพมหานคร',
    province: 'ลาดพร้าว',
    type: 'CPR',
    typeEnter: 'Drive-Thu',
    price: '1500',
    location: 'google map',
  },
  {
    position: 6,
    name: 'โรงพยาบาล Mansea',
    district: 'กรุงเทพมหานคร',
    province: 'ลาดพร้าว',
    type: 'CPR',
    typeEnter: 'Drive-Thu',
    price: '1500',
    location: 'google map',
  },
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-check-covid',
  templateUrl: './check-covid.component.html',
  styleUrls: ['./check-covid.component.css'],
})
export class CheckCovidComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'district',
    'province',
    'type',
    'typeEnter',
    'price',
    'location',
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

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
