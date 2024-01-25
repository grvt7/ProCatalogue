import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = "http://localhost:9090/users"
  constructor(private http : HttpClient) { }

  postUser(user) {
    return this.http.post(this.url,user);
  }
}
