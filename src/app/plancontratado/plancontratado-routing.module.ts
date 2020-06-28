import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlancontratadoPage } from './plancontratado.page';

const routes: Routes = [
  {
    path: '',
    component: PlancontratadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlancontratadoPageRoutingModule {}
