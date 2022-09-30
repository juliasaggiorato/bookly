import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Libro1PageRoutingModule } from './libro1-routing.module';

import { Libro1Page } from './libro1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Libro1PageRoutingModule
  ],
  declarations: [Libro1Page]
})
export class Libro1PageModule {}
