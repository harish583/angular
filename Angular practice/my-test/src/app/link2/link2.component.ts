import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Link4Component } from '../link4/link4.component';

@Component({
  selector: 'app-link2',
  templateUrl: './link2.component.html',
  styleUrls: ['./link2.component.scss']
})
export class Link2Component {
  // profileForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]),
  //   lastName: new FormControl('', {
  //     validators: [Validators.required, Validators.minLength(10)],
      
  //   }),
  //   checkbox:new FormControl('')
  // });
  // onSubmit() {
  //   console.log(this.profileForm.value);
  // }
  // constructor(private ele:ElementRef){
    
  // }

  // change(x:Object){
  //   console.log("ccgfvfvef......",this.profileForm);
  // }
  // ngOnInit(){
  //   this.profileForm.get('checkbox').valueChanges
  //   .subscribe((val)=>{
  //     console.log("val.... ",val);
  //     const n = this.profileForm.get('name');
  //     const p = this.profileForm;
  //     if(val){ 
  //       n.setValidators([Validators.required, Validators.minLength(1)]);
  //       n.setValue(n.value);
  //     }else{
  //       n.setValidators([Validators.required, Validators.minLength(5)]);
  //       n.setValue(n.value);
  //     }
  //   })
  // }
constructor(private ele:ElementRef){}
  keyup(e){
    debugger;
  }
  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

model = new Link4Component(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;

onSubmit() { this.submitted = true; }

  // ngAfterContentInit() {
  //   console.log('this....', this, this.ele);
  //   document.body.appendChild(this.ele.nativeElement);
  // }

}
