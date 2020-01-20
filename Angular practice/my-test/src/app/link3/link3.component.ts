import { Component, OnInit, Input } from '@angular/core';
import  ResponseService  from '../response.service';
@Component({
  selector: 'app-link3',
  templateUrl: './link3.component.html',
  styleUrls: ['./link3.component.scss']
})
export class Link3Component implements OnInit {
@Input() data:object[] = this.responseService.data;
  constructor(private responseService:ResponseService) {  }
  value1 = false;
  ngOnInit() {
  }
  // datalist:object[];
  inputChange(e){
    if(e.target.value && e.keyCode==13){
      this.responseService.add(e.target.value);
      e.target.value = '';
      this.data = this.responseService.data;
      // return this.responseService.data;
    }
  }
  checkchange(i){
    this.responseService.selectUpdate(i);
  }
  editClicked(i){
    this.responseService.editClicked(i);
    console.log('this.responseService.data...', this.responseService.data);
  }
  saveClicked(i){
    // var valuee= document.querySelectorAll(".text-flied")[i].value;
    // this.responseService.saveClicked(i,valuee);
    console.log(i);
  }
  cancelClicked(i){
    this.responseService.cancelClicked(i);
  }
  deleteClicked(i){
    this.responseService.deleteClicked(i);
  }
  SelectAll(){
    this.responseService.SelectAll();
  }
  deselectAll(){
    this.responseService.deselectAll();
  }
  deleteselect(){
    this.responseService.deleteselect();
  }

}
