import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosAutoPage } from './servicios-auto.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosAutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosAutoPageRoutingModule {}
