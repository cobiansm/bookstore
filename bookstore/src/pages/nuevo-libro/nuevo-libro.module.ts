import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoLibroPage } from './nuevo-libro';

@NgModule({
  declarations: [
    NuevoLibroPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoLibroPage),
  ],
})
export class NuevoLibroPageModule {}
