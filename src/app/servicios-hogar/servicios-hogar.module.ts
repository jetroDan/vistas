import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosHogarPageRoutingModule } from './servicios-hogar-routing.module';

import { ServiciosHogarPage } from './servicios-hogar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosHogarPageRoutingModule
  ],
  declarations: [ServiciosHogarPage]
})
export class ServiciosHogarPageModule {}
