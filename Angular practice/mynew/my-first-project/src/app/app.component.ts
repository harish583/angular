import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponen {
  title = 'my-first-project';
  inputChange(e){
    console.log(e);
    alert(e);
  }
}
