import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';

import { MaterialModule } from './material/material.module';
import { InfectedSectionComponent } from './infected-section/infected-section.component';
import { CheckCovidComponent } from './check-covid/check-covid.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    InfectedSectionComponent,
    CheckCovidComponent,
    NavbarComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
