import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';

import { EmpleadoslistComponent } from './empleadoslist/empleadoslist.component';
import { EmpleadosaddComponent } from './empleadosadd/empleadosadd.component';
import { EmpleadoseditComponent } from './empleadosedit/empleadosedit.component';




@NgModule({
  declarations: [
    EmpleadoslistComponent,
    EmpleadosaddComponent,
    EmpleadoseditComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule
  ]
})
export class EmpleadosModule { }
