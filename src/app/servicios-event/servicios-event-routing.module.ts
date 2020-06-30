import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosEventPage } from './servicios-event.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosEventPageRoutingModule {}
