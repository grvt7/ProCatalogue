import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  public sort : string;
  data : any;
  constructor(private router : Router, private result : ResultsService) {
    this.data = result.data;
  }

  ngOnInit(): void {
  }

  sortProduct(sort : string) {
    if(sort === 'price'){
      this.data.sort(function(a, b) {
        return a.price - b.price;
      });
    }
    
  }

  openDetails(id : number) {
    this.result.selectedProductId = id;
    this.router.navigate(['details'])
  }

}
