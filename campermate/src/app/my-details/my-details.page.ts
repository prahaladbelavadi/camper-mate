import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.page.html',
  styleUrls: ['./my-details.page.scss'],
})
export class MyDetailsPage implements OnInit {

  public myDetailsForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService) {

    this.myDetailsForm = formBuilder.group({
      carRegistration: [''],
      trailerRegistration: [''],
      trailerDimensions: [''],
      phoneNumber: [''],
      notes: ['']
    });
  }

  ngOnInit() {
    this.dataService.getMyDetails().then((details) => {
      let formControls: any = this.myDetailsForm.controls;
      if (details != null) {
        formControls.carRegistration.setValue(details.carRegistration);
        formControls.trailerRegistration.setValue(details.trailerRegistration);
        formControls.trailerDimensions.setValue(details.trailerDimensions);
        formControls.phoneNumber.setValue(details.phoneNumber);
        formControls.notes.setValue(details.notes);
      }
    });
  }

  saveForm(): void {
    this.dataService.setMyDetails(this.myDetailsForm.value);
  }
}

