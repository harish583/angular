import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-test';
  constructor(private httpClient: HttpClient){}
  ngOnInit() {
    // console.log('ngOnInlit');
    const req = this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
    req.subscribe((res) => {
      // console.log('........');
      // console.log(res);
    })
  }
}
