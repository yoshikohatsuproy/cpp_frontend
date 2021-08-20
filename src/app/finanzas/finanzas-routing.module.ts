import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { HomefinanzasComponent } from './pages/homefinanzas/homefinanzas.component';

const routes : Routes = [
  {
    path:'',
    component: HomefinanzasComponent,
  }
]

@NgModule({
  declarations: [HomefinanzasComponent],
  imports:      [RouterModule.forChild(routes)],
  exports:      [RouterModule]
})
export class FinanzasRoutingModule { }
