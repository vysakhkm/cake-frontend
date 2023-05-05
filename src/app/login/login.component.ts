import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform=new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  })
  get username(){
    return this.loginform.get("username")
  }
  get password(){
    return this.loginform.get("password")
  }

  logingin(){
    if(this.loginform.valid){
      console.log(this.loginform.value);
      
    }
  }
}
