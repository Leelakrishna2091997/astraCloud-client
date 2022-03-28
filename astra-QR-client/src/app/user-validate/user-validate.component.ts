import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-validate',
  templateUrl: './user-validate.component.html',
  styleUrls: ['./user-validate.component.scss']
})
export class UserValidateComponent implements OnInit {
  userForm = new FormGroup({
    customerId: new FormControl('', { validators: [Validators.required], updateOn: "change" }),
    firstName: new FormControl('', { validators: [Validators.required], updateOn: "change" }),
    mobileNumber: new FormControl('', { validators: [Validators.required], updateOn: "change" }),
    dob: new FormControl(new Date(), { validators: [Validators.required], updateOn: "change" })
  });
  textval = 'hi';
  constructor() { }

  ngOnInit(): void {
  }
  validateUser() {
    console.log(this.userForm);
    localStorage.setItem('userToken', "123456");
  }

}
