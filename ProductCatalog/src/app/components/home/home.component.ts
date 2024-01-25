import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  search = new FormGroup({
    query : new FormControl('')
  });
  constructor(private router : Router ,private result : ResultsService) { }

  ngOnInit(): void { 
  }

  searchData(){
    this.result.findResults(this.search.get('query').value).subscribe((data)=>{
      this.result.data = data;
      this.router.navigate(['results']);
    })
  }
}
