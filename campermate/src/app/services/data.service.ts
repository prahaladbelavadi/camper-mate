import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) { }

  setMyDetails(data): void {
    this.storage.set('mydetails', data);
  }

  setCampDetails(data): void {
    this.storage.set('campdetails', data);
  }

  setLocation(data): void {
    this.storage.set('location', data);
  }

  getMyDetails(): Promise<any> {
    return this.storage.get('mydetails');
  }

  getCampDetails(): Promise<any> {
    return this.storage.get('campdetails');
  }

  getLocation(): Promise<any> {
    return this.storage.get('location');
  }

}
