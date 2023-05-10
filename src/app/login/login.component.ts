import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import{Router} from '@angular/router'
import { CakeserviceService } from '../services/cakeservice.service';

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
  constructor(private router:Router,private service:CakeserviceService){

  }

  logingin(){
    if(this.loginform.valid){
      this.router.navigateByUrl("index")
      let formData=this.loginform.value
      this.service.getToken(formData).subscribe((res:any)=>{
        localStorage.setItem("token","Token "+res.token) 
        this.router.navigateByUrl("cakes")
      
      })
      
    }
  }
}


