import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';


import { InfectedSectionComponent } from './infected-section/infected-section.component';
import { CheckCovidComponent } from './check-covid/check-covid.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ChartModule } from 'angular2-chartjs';
import { ChartComponent } from './chart/chart.component';
import { MapSectionComponent } from './map-section/map-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table' 
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './pages/login/login.component';
import { ContentComponent } from './pages/content/content.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: ContentComponent },
  { path: "login", component: LoginComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    InfectedSectionComponent,
    CheckCovidComponent,
    NavbarComponent,
    ChartComponent,
    MapSectionComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ChartModule,
    NgbModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    HttpClientModule,
    MatIconModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
