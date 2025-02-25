import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApodListPageRoutingModule } from './apod-list-routing.module';

import { ApodListPage } from './apod-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApodListPageRoutingModule
  ],
  declarations: [ApodListPage]
})
export class ApodListPageModule {}
