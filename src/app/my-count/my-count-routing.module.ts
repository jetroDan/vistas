import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCountPage } from './my-count.page';

const routes: Routes = [
  {
    path: '',
    component: MyCountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCountPageRoutingModule {}
