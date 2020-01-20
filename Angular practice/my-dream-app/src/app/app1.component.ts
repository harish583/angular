import { Component } from '@angular/core';

@Component({
  selector: 'app1-root',
  templateUrl: './app1.component.html',
  styleUrls: ['./app1.component.scss'],
})
export class App1Component {
  title = 'my-dream-app';
 
  changeInput(event) {
    console.log('event....', event);
    this.title = event.target.value;
  } 
}
