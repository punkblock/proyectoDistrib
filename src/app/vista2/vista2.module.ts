import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Vista2Page } from './vista2.page';
import { Vista3Page } from '../vista3/vista3.page';

const routes: Routes = [
  {
    path: '',
    component: Vista2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Vista3Page,
    RouterModule.forChild(routes)
  ],
  declarations: [Vista2Page]
})
export class Vista2PageModule {}
