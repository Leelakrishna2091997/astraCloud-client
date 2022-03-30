import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public userForm = new FormGroup({
    customerId: new FormControl('', { validators: [Validators.required], updateOn: "change" }),
    firstName: new FormControl('', { validators: [Validators.required], updateOn: "change" }),
    mobileNumber: new FormControl('', { validators: [Validators.required], updateOn: "change" }),
    dob: new FormControl('', { validators: [Validators.required], updateOn: "change" })
  });
  public depositForm = {
    accountDetails: this.formBuilder.group({
      'ccy': 'INR',
      'depositOption': '',
      'Account Number': '',
      'Date': '',
      'totalAmt': 0
    }),
    denominationDetails: this.formBuilder.group({
    })
  }
  constructor(public formBuilder: FormBuilder) { }
  
}
