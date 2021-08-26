import {Component,ViewChild,AfterViewInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  name: string;
  position: number;
  phone: number;
  email: string;
}

const ELEMENT_DATA: UserData[] = [
  {position: 1, name: 'Mahesh', phone: 8585747, email: 'Hmahesh@wwe.com'},
  {position: 2, name: 'Ramesh', phone: 855588, email: 'rames@wei.com'},
  {position: 3, name: 'Rahul', phone: 99696, email: 'newi@ssw.com'},
  {position: 4, name: 'Minu', phone: 965555, email: 'nieue@ww.com'},
  {position: 5, name: 'Mishu', phone: 9125477, email: 'mishu@wa.com'},
  {position: 6, name: 'Mayank', phone: 914755, email: 'mayku@wido.com'},
  {position: 7, name: 'Hiren', phone: 9425658, email: 'hortet@wwi.com'},
  {position: 8, name: 'Alex', phone: 985224, email: 'fheuuw@ww.com'},
  {position: 9, name: 'Joy', phone: 963544, email: 'itituyd@ww.com'},
  {position: 10, name: 'Ashok', phone: 854444, email: 'jeje@woodd.com'},
];

/**
 * @title Table with filtering
 */
@Component({
   selector: 'app-check-covid',
  templateUrl: './check-covid.component.html',
  styleUrls: [ './check-covid.component.css' ]
})
export class CheckCovidComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'phone', 'email'];
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