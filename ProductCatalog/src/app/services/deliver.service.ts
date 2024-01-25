import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeliverService {
  url:string = 'http://localhost:9090/deliver/'
  checkUrl:string = 'http://localhost:9090/delivery/'
  constructor(private http : HttpClient) { }

  checkDelivery(pin){
    return this.http.get(this.checkUrl + pin);
  }

  getDelivery(pin){
    return this.http.get(this.url + pin);
  }
}
