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

  @ViewChild(GoogleMapComponent) map: GoogleMapComponent;

  private latitude: number;
  private longitude: number;

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private dataService: DataService,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.dataService.getLocation().then((location) => {
      this.map.init().then((res) => {
      if(location != null){
      this.latitude = location.latitude;
      this.longitude = location.longitude;
      this.map.changeMarker(this.latitude, this.longitude);
      }
      }, (err) => {
      console.log(err);
      });
      });
  }

  setLocation(): void {
    this.loadingCtrl.create({
      message: 'Setting current location...'
    }).then((overlay) => {
      overlay.present();
      Geolocation.getCurrentPosition().then((position) => {
        overlay.dismiss();
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.map.changeMarker(this.latitude, this.longitude);
        let data = {
          latitude: this.latitude,
          longitude: this.longitude
        };
        this.dataService.setLocation(data);
        this.alertCtrl.create({
          header: 'Location set!',
          message: 'You can now find your way back to your camp site from anywhere by clicking the button in the top right corner.',
          buttons: [
            {
              text: 'Ok'
            }
          ]
        }).then((alert) => {
          alert.present();
        });
      }, (err) => {
        console.log(err);
        overlay.dismiss();
      });
    });
  }

  takeMeHome(): void {
    if (!this.latitude || !this.longitude) {
      this.alertCtrl.create({
        header: 'Nowhere to go!',
        message: 'You need to set your camp location first.',
        buttons: [
          {
            text: 'Ok'
          }
        ]
      }).then((alert) => {
        alert.present();
      });
    } else {
      let destination = this.latitude + ',' + this.longitude;
      if (this.platform.is('ios')) {
        window.open('maps://?q=' + destination, '_system');
      } else {
        let label = encodeURI('My Campsite');
        window.open('geo:0,0?q=' + destination + '(' + label +
          ')', '_system');
      }
    }
  }

}


