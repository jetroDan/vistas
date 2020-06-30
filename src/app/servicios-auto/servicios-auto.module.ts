import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosAutoPageRoutingModule } from './servicios-auto-routing.module';

import { ServiciosAutoPage } from './servicios-auto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosAutoPageRoutingModule
  ],
  declarations: [ServiciosAutoPage]
})
export class ServiciosAutoPageModule {}
