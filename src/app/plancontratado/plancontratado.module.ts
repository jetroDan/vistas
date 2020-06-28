import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlancontratadoPageRoutingModule } from './plancontratado-routing.module';

import { PlancontratadoPage } from './plancontratado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlancontratadoPageRoutingModule
  ],
  declarations: [PlancontratadoPage]
})
export class PlancontratadoPageModule {}
