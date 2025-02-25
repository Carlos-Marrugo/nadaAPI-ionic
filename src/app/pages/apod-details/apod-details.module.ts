import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApodDetailsPageRoutingModule } from './apod-details-routing.module';

import { ApodDetailsPage } from './apod-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApodDetailsPageRoutingModule
  ],
  declarations: [ApodDetailsPage]
})
export class ApodDetailsPageModule {}
