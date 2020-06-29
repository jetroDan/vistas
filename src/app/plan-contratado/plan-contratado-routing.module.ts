import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanContratadoPage } from './plan-contratado.page';

const routes: Routes = [
  {
    path: '',
    component: PlanContratadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanContratadoPageRoutingModule {}
