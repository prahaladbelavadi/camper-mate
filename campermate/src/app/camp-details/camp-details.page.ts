import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-camp-details',
  templateUrl: './camp-details.page.html',
  styleUrls: ['./camp-details.page.scss'],
})
export class CampDetailsPage implements OnInit {

  public campDetailsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.campDetailsForm = formBuilder.group({
      gateAccessCode: [''],
      amenitiesCode: [''],
      wifiPassword: [''],
      phoneNumber: [''],
      departure: [''],
      notes: ['']
    });
  }

  ngOnInit() {
    this.dataService.getCampDetails().then((details) => {
      let formControls: any = this.campDetailsForm.controls;
      if (details != null) {
        formControls.gateAccessCode.setValue(details.gateAccessCode);
        formControls.ammenitiesCode.setValue(details.ammenitiesCode);
        formControls.wifiPassword.setValue(details.wifiPassword);
        formControls.phoneNumber.setValue(details.phoneNumber);
        formControls.departure.setValue(details.departure);
        formControls.notes.setValue(details.notes);
      }
    });

  }

  saveForm(): void {
    this.dataService.setCampDetails(this.campDetailsForm.value);
  }

}
