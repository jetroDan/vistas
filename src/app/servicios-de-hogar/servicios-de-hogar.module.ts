import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosDeHogarPageRoutingModule } from './servicios-de-hogar-routing.module';

import { ServiciosDeHogarPage } from './servicios-de-hogar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosDeHogarPageRoutingModule
  ],
  declarations: [ServiciosDeHogarPage]
})
export class ServiciosDeHogarPageModule {}
