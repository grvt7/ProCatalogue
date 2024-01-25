import { Component, OnInit } from '@angular/core';
import { DeliverService } from 'src/app/services/deliver.service';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  productDetails : any;
  pinData : any;
  isDeliverable = false;
  notDeliver = false;
  constructor(private result : ResultsService, private deliver : DeliverService) {
  }

  ngOnInit(): void {
    this.result.findDetails().subscribe((data)=>{
      this.productDetails = data;
    })
  }

  searchPinCode(pinData) {
    this.deliver.checkDelivery(pinData.pin).subscribe((data)=>{
      if(data){
        this.deliver.getDelivery(pinData.pin).subscribe((data)=>{    
          this.pinData = data;
          if(this.pinData.days > 1){
            this.isDeliverable = true;
            this.notDeliver=false;
          }  
          else{
            this.isDeliverable=false;
            this.notDeliver=true;
          }
        });
      }
    });
  }
}
