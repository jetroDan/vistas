import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosHogarPage } from './servicios-hogar.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosHogarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosHogarPageRoutingModule {}
