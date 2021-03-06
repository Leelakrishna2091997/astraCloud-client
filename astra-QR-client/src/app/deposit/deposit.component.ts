import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
  highlight: any;
  highlightCopy: any;
  username = '';
  currentDate = new Date();
  accounts = [

    {

      "accountId": "01010TY26900000",

      "accountName": "JOHN",

      "currency": "USD",

      "customerType": "PERSON",

      "accountType": "CACC",

      "accountStatus": "ENABLED",

      "accountOwnership": "SOLE",

      "postingsRestriction": "NONE"

    },

    {

      "accountId": "01010TY26900001",

      "accountName": "SCENARIO1",

      "currency": "USD",

      "customerType": "PERSON",

      "accountType": "CACC",

      "accountStatus": "ENABLED",

      "accountOwnership": "SOLE",

      "postingsRestriction": "NONE"

    }

  ]
  constructor(
    private router: Router,
    public data: DataService
  ) { }

  ngOnInit(): void {
    this.username = this.data.userForm.value.firstName;
  }

  onLinkClick(event: any) {
    this.removeSelected();
    this.highlight = event;
    if (!event.target.classList.contains('highlight')) {
      event.target.classList.add('highlight');
      this.highlightCopy = this.highlight;
    }
  }
  removeSelected() {
    if (this.highlightCopy != null)
      this.highlightCopy.target.classList.remove('highlight');
  }
  setAccountOption(option: string) {
    this.data.depositForm.accountDetails.controls['depositOption'].setValue(option);
  }

}
