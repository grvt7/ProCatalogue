import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchBar = new FormGroup({
    searchQuery: new FormControl()
  });
  showLogin : boolean;
  showLogout : boolean;
  constructor(private router : Router, private login : LoginService, private result : ResultsService) {
    if(!login.isLoggedIn){
      this.showLogin = true;
    }
    else if(login.isLoggedIn){
      this.showLogout = true;
    }
  }

  ngOnInit(): void {
  }

  reloadComponent() {
    let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }

  userLogout(){
    this.login.isLoggedIn=false;
    this.reloadComponent();
  }

  searchBarSubmit(){
    this.result.findResults(this.searchBar.get('searchQuery').value).subscribe((data) => {
      this.result.data = data;
      if(this.router.url === '/results'){
        this.reloadComponent()
      }else{
        this.router.navigate(['results']);
      }     
    });
  }

  userLogin() {
    this.router.navigate(['login']);
  }
}
