import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApodDetailsPage } from './apod-details.page';

const routes: Routes = [
  {
    path: '',
    component: ApodDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApodDetailsPageRoutingModule {}
