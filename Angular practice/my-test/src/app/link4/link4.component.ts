import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link4',
  templateUrl: './link4.component.html',
  styleUrls: ['./link4.component.scss']
})
export class Link4Component {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }



}
