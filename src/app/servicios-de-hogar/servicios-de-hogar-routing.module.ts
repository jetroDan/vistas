import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosDeHogarPage } from './servicios-de-hogar.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosDeHogarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosDeHogarPageRoutingModule {}
