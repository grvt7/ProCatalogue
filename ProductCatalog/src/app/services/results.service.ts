import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  url : string = "http://localhost:9090/product/";
  detailsUrl : string = "http://localhost:9090/products/";
  data = {};
  selectedProductId : number;

  constructor(private http : HttpClient) { }
  findResults(query : string) {
    return this.http.get(this.url + query);
  }

  findDetails() {
    return this.http.get(this.detailsUrl + this.selectedProductId);
  }
}
