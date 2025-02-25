import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageCardComponent } from './components/image-card/image-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ImageCardComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ImageCardComponent
  ]
})
export class SharedModule { }