import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  name: string;
  district: string;
  province: string;
  type: string;
  typeEnter: string;
  price: string;
  location: string;
}

const ELEMENT_DATA: UserData[] = [
  {
    name: 'โรงพยาบาลวชิระ',
    district: 'กรุงเทพมหานคร',
    province: 'ดอนเมือง',
    type: 'RT-PCR',
    typeEnter: 'Drive-Thu',
    price: '3000 บาท',
    location: 'https://goo.gl/maps/U2WJZNpJCe5goiAx8',
  },
  {
    name: 'โรงพยาบาล Mansea',
    district: 'กรุงเทพมหานคร',
    province: 'ลาดพร้าว',
    type: 'RT-PCR',
    typeEnter: 'Drive-Thu',
    price: '1500 บาท',
    location: 'google map',
  },
  {
    name: 'โรงพยาบาล Mansea',
    district: 'กรุงเทพมหานคร',
    province: 'ลาดพร้าว',
    type: 'RT-PCR',
    typeEnter: 'Drive-Thu',
    price: '1500 บาท',
    location: 'google map',
  },
  {
    name: 'โรงพยาบาล Mansea',
    district: 'กรุงเทพมหานคร',
    province: 'ลาดพร้าว',
    type: 'RT-PCR',
    typeEnter: 'Drive-Thu',
    price: '1500 บาท',
    location: 'google map',
  },
  {
    name: 'โรงพยาบาล Mansea',
    district: 'กรุงเทพมหานคร',
    province: 'ลาดพร้าว',
    type: 'RT-PCR',
    typeEnter: 'Drive-Thu',
    price: '1500 บาท',
    location: 'google map',
  },
  {
    name: 'โรงพยาบาล Mansea',
    district: 'กรุงเทพมหานคร',
    province: 'ลาดพร้าว',
    type: 'RT-PCR',
    typeEnter: 'Drive-Thu',
    price: '1500 บาท',
    location: 'goole map',
  },
];

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-check-covid',
  templateUrl: './check-covid.component.html',
  styleUrls: ['./check-covid.component.scss'],
})
export class CheckCovidComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'name',
    'district',
    'province',
    'type',
    'typeEnter',
    'price',
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
