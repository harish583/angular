import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(public http: HttpClient) { 
  // this.http.get("https://jsonplaceholder.typicode.com/todos/")
  // .subscribe(function(response) {
  //   this.products = response;
  // });
  };
  products:Object[]=[
    {
      name:"produc0",
      desc:"desc0",
      price:"10",
      count:'0'
    },
    {
      name:"produc1",
      desc:"desc1",
      price:"100",
      count:'1'
    },
    {
      name:"produc2",
      desc:"desc2",
      price:"200",
      count:'2'
    },
    {
      name:"produc3",
      desc:"desc3",
      price:"300",
      count:'3'
    },
    {
      name:"produc4",
      desc:"desc4",
      price:"400",
      count:'4'
    },
  ];
  addProduct(i){
    this.products[i]={
      ...this.products[i],count:1
    }
  }
  plusProduct(i){
    this.products[i]={
      ...this.products[i],count:JSON.parse(this.products[i].count)+1
    }
  }
  minusProduct(i){
    this.products[i]={
      ...this.products[i],count:JSON.parse(this.products[i].count)-1
    }
  }
}
