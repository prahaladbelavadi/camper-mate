import { Component, ViewChild, OnInit } from '@angular/core';
import { AlertController, LoadingController, Platform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
import { GoogleMapComponent } from '../components/google-map/google-map.component';
import { DataService } from '../services/data.service';
const { Geolocation } = Plugins;

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  // @ViewChild(GoogleMapComponent) map: GoogleMapComponent;

  private latitude: number;
  private longitude: number;

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private dataService: DataService,
    private platform: Platform
  ) { }

  ngOnInit() {
  }

  setLocation(): void {

  }

  takeMeHome(): void {

  }

}
