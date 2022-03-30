import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'otpV-dialog',
  templateUrl: './otpV-dialog.component.html',
  styleUrls: ['./otpV-dialog.component.scss']
})
export class OtpVDialogComponent implements OnInit {
  code = new FormControl('');
  constructor( @Inject(MAT_DIALOG_DATA) private data: any,
  private dialogRef: MatDialogRef<OtpVDialogComponent>) { }

  ngOnInit(): void {
  }

  onVerifyCode(): void {
    //verify this.code.value
    console.log(this.code.value);
    this.dialogRef.close();
  }

  onResend(){

  }

}
