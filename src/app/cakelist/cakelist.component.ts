import { Component, OnInit } from '@angular/core';
import { CakeserviceService } from '../services/cakeservice.service';

@Component({
  selector: 'app-cakelist',
  templateUrl: './cakelist.component.html',
  styleUrls: ['./cakelist.component.css']
})
export class CakelistComponent implements OnInit {

  cakes:any
  constructor(private service:CakeserviceService){
    
  }
  ngOnInit(): void {
    this.service.grtAllCakes().subscribe(res=>this.cakes=res)
  }

}
