import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
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
