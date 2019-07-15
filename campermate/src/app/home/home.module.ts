import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing-module';
import { LocationPageModule } from '../location/location.module';
import { CampDetailsPage } from '../camp-details/camp-details.page';
import { MyDetailsPage } from '../my-details/my-details.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,HomePageRoutingModule,
    LocationPageModule,
    CampDetailsPage,
    MyDetailsPage,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
