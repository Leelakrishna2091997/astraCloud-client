import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-qr-dialog',
  templateUrl: './qr-dialog.component.html',
  styleUrls: ['./qr-dialog.component.scss']
})
export class QrDialogComponent implements OnInit {

  constructor(private dataService: DataService, private dialogRef: MatDialogRef<QrDialogComponent>) { }
  title = 'astra-QR-client';
  elementType = 'url';
  value = 'Techiediaries';
  public wrkingObj = {
    "Amount": "2500",
    "Account": "010100299260001"
  };
  ngOnInit(): void {
    this.setQrValue();
  }

  setQrValue() {
    this.value = "hello";
    this.value = JSON.stringify(this.wrkingObj);
    // this.value = JSON.stringify({ accountNumber: this.dataService.depositForm.accountDetails.get('Account Number').value, amount: this.dataService.totalAmtVal });
  }
  download() {
    window.print();
  }
  closeDialog() {
    this.dialogRef.close();

  }
}
