import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CakeserviceService {

  baseUrl=`http://127.0.0.1:8000/api`

  constructor(private http:HttpClient) { }

  signUp(data:any){
    return this.http.post(`${this.baseUrl}/register/`,data)
   

  }

  getToken(data:any){
    return this.http.post(`${this.baseUrl}/token/`,data)
  }
grtAllCakes(){
  let token=localStorage.getItem("token")??""
  let header=new HttpHeaders({
    "Content-type":"application/json",
    "Authorization":token
  })

  return this.http.get(`${this.baseUrl}/cakes/`,{"headers":header})
}

  
  
}


// HHTPCLIENT CLIENT
// step1 add HttpClientModule in app module.ts [angular/http/common/]
// step2 import  HttpClient in service.ts[angular/http/common]
// step3  add dependency injection in constructor


// http client returns an observable  ().subscribe()
// fetch().then()
// 


//localStorage js
// localStorage.setItem(key,value)
// localStorage.getItem(key)
// localStorage.removeItem(key)
// localStorage.clear()


// for sending headers
// HttpHeader