import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { RrhhRoutingModule } from './rrhh-routing.module';

import { DashrrhhComponent } from './pages/dashrrhh/dashrrhh.component';
import { HomerrhhComponent } from './pages/homerrhh/homerrhh.component';

@NgModule({
  declarations:[
    HomerrhhComponent,
    DashrrhhComponent,


  ],
  imports: [
    CommonModule,
    RrhhRoutingModule,
    MaterialModule
  ]
})
export class RrhhModule { }
