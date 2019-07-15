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
  }

  saveForm(): void {
    // this.dataService.setCampDetails(this.campDetailsForm.value)
  }

}
