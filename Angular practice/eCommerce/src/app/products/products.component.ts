import { Component, OnInit, Input } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
// @Input products:Object[]=[];
products=this.serviceService.products;
  constructor(private serviceService:ServiceService) {
    console.log("serviceService",serviceService);

  }
  ngOnInit() {
  }
  addProduct(i){
    this.serviceService.addProduct(i);
  }
  minusProduct(i){
    this.serviceService.minusProduct(i);
  }
  plusProduct(i){
    this.serviceService.plusProduct(i);
  }
}
