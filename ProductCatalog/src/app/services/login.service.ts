import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn : boolean = false;
  showLogin : boolean = false;
  showLogout : boolean = false;
  url : string = 'http://localhost:9090/users/'
  checkUserExist : string = 'http://localhost:9090/uCheck/'
  constructor(private http : HttpClient) { }

  checkUser(id:string) {
    return this.http.get(this.checkUserExist + id);
  }

  loginControl(id : string) {
    return this.http.get(this.url + id);
  }
}
