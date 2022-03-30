import { Component,Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'denomination',
  templateUrl: './denomination.component.html',
  styleUrls: ['./denomination.component.scss']
})
export class DenominationComponent implements OnInit {
  denominationMap =
    {'INR': [2000, 500, 200, 100, 50 ,20, 10]};
  denominationOp = [];
  

  constructor(public data: DataService
    ) { }

  ngOnInit(): void {
    this.denominationMap[this.data.depositForm.accountDetails.value.ccy].forEach(element => {
      this.data.depositForm.denominationDetails.addControl(element, new FormControl(''));
    });
    this.denominationOp = this.denominationMap[this.data.depositForm.accountDetails.value.ccy];
    console.log(this.data);
  }
  

}
