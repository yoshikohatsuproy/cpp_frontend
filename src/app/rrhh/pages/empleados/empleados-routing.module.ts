import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { EmpleadoslistComponent } from './empleadoslist/empleadoslist.component';
import { EmpleadosaddComponent } from './empleadosadd/empleadosadd.component';
import { EmpleadoseditComponent } from './empleadosedit/empleadosedit.component';

const routes : Routes = [
  {
    path:'',
    children:[
      {
        path: '', component: EmpleadoslistComponent
      },
      {
        path: 'add', component: EmpleadosaddComponent
      },
      {
        path: 'edit', component: EmpleadoseditComponent
      },
      {
        path: '**', redirectTo: ''
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class EmpleadosRoutingModule { }
