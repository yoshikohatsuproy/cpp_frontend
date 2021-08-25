import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomerrhhComponent } from './pages/homerrhh/homerrhh.component';
import { DashrrhhComponent } from './pages/dashrrhh/dashrrhh.component';

const routes : Routes = [
  {
    path:'',
    component: HomerrhhComponent,
    children:[
      {path: 'pagos', loadChildren: () => import('./pages/pagos/pagos.module').then(m => m.PagosModule)},
      {path: 'empleados', loadChildren: () => import('./pages/empleados/empleados.module').then(m => m.EmpleadosModule)},
      {path: 'dashboard', component: DashrrhhComponent},
      {path: '**', redirectTo: 'dashboard'}
    ]
  }
]

@NgModule({

  imports:      [RouterModule.forChild(routes)],
  exports:      [RouterModule]
})
export class RrhhRoutingModule { }
