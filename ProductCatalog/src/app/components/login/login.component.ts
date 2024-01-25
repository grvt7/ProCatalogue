import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userData : any;
  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(16)])
  });

  constructor(private router : Router, private login : LoginService, private snackBar : MatSnackBar) {    
  }

  register(){
    this.router.navigate(['register'])
  }

  userLogin() {
    this.login.checkUser(this.loginForm.get('email').value).subscribe((data)=>{
      if(data){
        this.login.loginControl(this.loginForm.get('email').value).subscribe((logData)=>{
          this.userData = logData;
          if(this.userData.password !== this.loginForm.get('password').value){
            this.snackBar.open("Password Does Not Match. Enter Again")._dismissAfter(1500);
            this.loginForm.get('password').setValue('');
          }
          else{
            this.login.isLoggedIn = true;
            this.router.navigate(['']);
          }
        });
      }
      else{
        this.snackBar.open("User Account Does Not Exist. Enter a Valid Account")._dismissAfter(1500);
        this.loginForm.get('email').setValue('');
        this.loginForm.get('password').setValue('');
      }
    });
  }

  ngOnInit(): void {
  }

}
