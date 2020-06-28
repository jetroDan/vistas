import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitacionesContratacionesPage } from './invitaciones-contrataciones.page';

const routes: Routes = [
  {
    path: '',
    component: InvitacionesContratacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitacionesContratacionesPageRoutingModule {}
