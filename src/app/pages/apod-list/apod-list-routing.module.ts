import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApodListPage } from './apod-list.page';

const routes: Routes = [
  {
    path: '',
    component: ApodListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApodListPageRoutingModule {}
