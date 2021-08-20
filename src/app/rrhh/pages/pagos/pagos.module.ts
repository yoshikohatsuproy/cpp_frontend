import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { PagosRoutingModule } from './pagos-routing.module';

import { PagoslistComponent } from './pagoslist/pagoslist.component';
import { PagosaddComponent } from './pagosadd/pagosadd.component';
import { PagoseditComponent } from './pagosedit/pagosedit.component';
import { MaterialModule } from '../../../material/material.module';


@NgModule({
  declarations: [
    PagoslistComponent,
    PagosaddComponent,
    PagoseditComponent
  ],
  imports: [
    CommonModule,
    PagosRoutingModule,
    MaterialModule
  ]
})
export class PagosModule { }
