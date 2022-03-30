import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'app-user-validate',
  templateUrl: './user-validate.component.html',
  styleUrls: ['./user-validate.component.scss']
})
export class UserValidateComponent implements OnInit {
  textval = 'hi';
  constructor(public data : DataService) { }

  ngOnInit(): void {
  }
  validateUser() {
    console.log(this.data.userForm);
    localStorage.setItem('userToken', "123456");
  }

}
