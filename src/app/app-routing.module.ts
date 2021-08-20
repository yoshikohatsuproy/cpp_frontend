import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './shared/menu/menu.component';
import { ErrorComponent } from './shared/error/error.component';

const routes : Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '404', component: ErrorComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'rrhh', loadChildren: () => import('./rrhh/rrhh.module').then(m => m.RrhhModule)},
  {path: 'finanzas', loadChildren: () => import('./finanzas/finanzas.module').then(m => m.FinanzasModule)},
  {path: '**', redirectTo: '404'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
