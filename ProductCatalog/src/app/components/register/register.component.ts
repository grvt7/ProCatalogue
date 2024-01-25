import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user : object = {};
  fullName : string;
  register = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    firstName:new FormControl('',[Validators.required]),
    lastName:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
    confirmPass: new FormControl('',[Validators.required, Validators.minLength(8), Validators.maxLength(16)])
  });

  constructor(private router : Router, private snackBar : MatSnackBar, private service : RegisterService) { }

  ngOnInit(): void {
  }

  matchPassword() : boolean{
    if(this.register.get('password').value !== this.register.get('confirmPass').value){
      return true;
    }
    else 
      return false;
  }

  registerUser() {
    if(this.matchPassword()) {
      this.snackBar.open("The Passwords Do Not Match! Enter Again")._dismissAfter(2000)
      this.register.get('password').setValue('')
      this.register.get('confirmPass').setValue('')
    } 
    this.fullName = this.register.get('firstName').value + ' ' + this.register.get('lastName').value;
    this.user = {
      email:this.register.get('email').value,
      firstName:this.register.get('firstName').value,
      lastName:this.register.get('lastName').value,
      fullName:this.fullName,
      password:this.register.get('password').value
    }  
    this.service.postUser(this.user).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['']);
    })
  }
}
