import { Component, OnInit, NgModule } from '@angular/core';
import { Home1Component } from '../home1/home1.component';
@NgModule({
  imports:[],
  declarations:[Home1Component],
  bootstrap:[HomeComponent]
})
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
