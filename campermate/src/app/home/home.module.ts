import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing-module';
import { LocationPageModule } from '../location/location.module';
import { CampDetailsPageModule } from '../camp-details/camp-details.module';
import { MyDetailsPageModule } from '../my-details/my-details.module';

@NgModule({
imports: [
CommonModule,
FormsModule,
IonicModule,
HomePageRoutingModule,
LocationPageModule,
CampDetailsPageModule,
MyDetailsPageModule
],
declarations: [HomePage]
})
export class HomePageModule {}