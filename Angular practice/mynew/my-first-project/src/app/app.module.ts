import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponen } from './app.component';
import { HomeComponent } from './home/home.component';
import { Link1Component } from './link1/link1.component';

@NgModule({
  declarations: [
    AppComponen,
    HomeComponent,
    Link1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponen]
})
export class AppModule {
  inputChange(e){
    console.log(e.target.value);
  }
}
