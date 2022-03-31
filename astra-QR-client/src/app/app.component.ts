import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'astra-QR-client';
  elementType = 'url';
  value = 'Techiediaries';
  constructor(
    public router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }
  goBack() {
    this.location.back();
  }
  logoutUser() {
    localStorage.clearItem('userToken');
  }
}
