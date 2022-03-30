import { Component,Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  cur='INR';
  totalAmount = 0;
  accountNumber = 9837451124;
  date : any;

  constructor(
    public data: DataService
    ) { }

  ngOnInit(): void {
    this.date = this.data.depositForm.accountDetails.value['Date'];
    this.calTotalAmount();
    console.log(this.data);
  }

  calTotalAmount(){
    Object.entries(this.data.depositForm.denominationDetails.value).forEach(
      ([key, value]: any) => {
        if(value!==''){
        this.totalAmount += (parseInt(key) * parseInt(value));
        }
      }
    );
  }

  onGenerateQR(){
    //open OTP verification dialog
  }
  

}
