import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { PagosaddComponent } from './pagosadd/pagosadd.component';
import { PagoslistComponent } from './pagoslist/pagoslist.component';
import { PagoseditComponent } from './pagosedit/pagosedit.component';

const routes : Routes = [
  {
    path:'',
    children:[
      {path: '', component: PagoslistComponent},
      {path: 'add', component: PagosaddComponent},
      {path: 'edit', component: PagoseditComponent},
      {path: '**', redirectTo: ''}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PagosRoutingModule { }
