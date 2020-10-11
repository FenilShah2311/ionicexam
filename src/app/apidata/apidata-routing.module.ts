import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApidataPage } from './apidata.page';

const routes: Routes = [
  {
    path: '',
    component: ApidataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApidataPageRoutingModule {}
