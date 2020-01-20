import { Injectable,OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class ResponseService implements OnInit {
  data: {
    text: string,
    check: boolean,
    editstatus: boolean
  }[] = JSON.parse(localStorage.getItem("todo"));
  constructor() { }
  ngOnInit() {
  }
  add(text:string){
    this.data.push({text :text,check:false,editstatus:false});
    localStorage.setItem("todo",JSON.stringify(this.data));
  }
  selectUpdate(i){
    let text:string = this.data[i].text;
    let check:boolean = this.data[i].check;
    let editstatus:boolean = this.data[i].editstatus;
    this.data[i] = {
      check:!check,
      text:text,
      editstatus:editstatus
    }
    localStorage.setItem("todo",JSON.stringify(this.data));
  }
  editClicked(i){
    let text:string = this.data[i].text;
    let check:boolean = this.data[i].check;
    let editstatus:boolean = this.data[i].editstatus;
    this.data[i] = {
      check:check,
      text:text,
      editstatus: !editstatus
    }
    localStorage.setItem("todo",JSON.stringify(this.data));
  }
  saveClicked(i,value){    
    let check:boolean = this.data[i].check;
    let editstatus:boolean = this.data[i].editstatus;
    this.data[i] = {
      check:check,
      text:value,
      editstatus:!editstatus
    }
    localStorage.setItem("todo",JSON.stringify(this.data));
  }
  cancelClicked(i){
    let text:string = this.data[i].text;
    let check:boolean = this.data[i].check;
    let editstatus:boolean = this.data[i].editstatus;
    this.data[i] = {
      check:check,
      text:text,
      editstatus:!editstatus
    }
    localStorage.setItem("todo",JSON.stringify(this.data));
  }
  deleteClicked(i){
    this.data.splice(i,1);
  }
  deselectAll(){
    for(let i=0;i<this.data.length;i++){
      let text:string = this.data[i].text;
      let editstatus:boolean = this.data[i].editstatus;
      this.data[i] = {
        check:false,
        text:text,
        editstatus:editstatus
      };
    }
  }
  SelectAll(){
    for(let i=0;i<this.data.length;i++){
      let text:string = this.data[i].text;
      let editstatus:boolean = this.data[i].editstatus;
      this.data[i] = {
        check:true,
        text:text,
        editstatus:editstatus
      };
      localStorage.setItem("todo",JSON.stringify(this.data));
    }
  }
  deleteselect(){
    for(let i=0;i<this.data.length;i++){
      let check:boolean = this.data[i].check;
      if(check){
        this.data.splice(i,1);
        this.deleteselect();
      }
      localStorage.setItem("todo",JSON.stringify(this.data));
    }
  }
}
