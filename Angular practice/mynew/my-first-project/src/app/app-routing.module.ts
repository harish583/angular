import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Link1Component } from './link1/link1.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'link1',component:Link1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
