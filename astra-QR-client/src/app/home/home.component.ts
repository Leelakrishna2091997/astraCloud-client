import { Component,Inject, Input, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username ='ASTRA1';
  constructor(private data: DataService
    ) { }

  ngOnInit(): void {
    this.username = this.data.userForm.value.firstName;
  }
  

}
