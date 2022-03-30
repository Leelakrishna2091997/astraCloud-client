import { Component,Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from '../core/services/data.service';
import { OtpVDialogComponent } from '../otpVerification/otpV-dialog.component';

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
    public data: DataService,
    private dialog: MatDialog
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.closeOnNavigation = false;
    dialogConfig.disableClose = true;
    dialogConfig.hasBackdrop = true;
    dialogConfig.autoFocus = false;
    dialogConfig.width = 'max-content';
    dialogConfig.data = this.data.userForm.value.mobileNumber;
    const dialogRef = this.dialog.open(OtpVDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      //go To QR Screen
    });
  }
  

}
