import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../src/environments/environment';

@Injectable()
export class AuthenticationService {

  adminLogin: string = 'a'
  adminPassword: string = 'a'
  userAuthenticated: boolean = false;
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  checkUserCredentials(userName: string, password: string): Observable<boolean>{

    let formData: FormData = new FormData();
    formData.append('userName', userName);
    formData.append('password', password);
    return this.http.post<boolean>(this.apiUrl+'/user/validateLogin',formData)
  }

  isUserAuthenticated(): boolean {
    return this.userAuthenticated;
  }

  userIsAuthenticate(): void {
    this.userAuthenticated = true;
  }

  logoutUser(): void {
    this.userAuthenticated = false;
  }



}
