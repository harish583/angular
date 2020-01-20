import { Component } from '@angular/core';

@Component({
  selector: '.app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: 0,
})
export class AppComponent {
  title = 'my-dream-app';
 
  changeInput(event) {
    console.log('event....', event);
    this.title = event.target.value;
  }
 
}
