import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isUserValidated() { return localStorage.getItem('userToken') ? true : false; }
}
