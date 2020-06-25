import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCountPageRoutingModule } from './my-count-routing.module';

import { MyCountPage } from './my-count.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCountPageRoutingModule
  ],
  declarations: [MyCountPage]
})
export class MyCountPageModule {}
