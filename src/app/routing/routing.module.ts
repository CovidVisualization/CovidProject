import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
import { InfectedSectionComponent } from '../infected-section/infected-section.component';
import { CheckCovidComponent } from '../check-covid/check-covid.component';

const routes: Routes = [
  {path: '', redirectTo: '/infect', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }