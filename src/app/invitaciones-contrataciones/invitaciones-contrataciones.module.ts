import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvitacionesContratacionesPageRoutingModule } from './invitaciones-contrataciones-routing.module';

import { InvitacionesContratacionesPage } from './invitaciones-contrataciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvitacionesContratacionesPageRoutingModule
  ],
  declarations: [InvitacionesContratacionesPage]
})
export class InvitacionesContratacionesPageModule {}
