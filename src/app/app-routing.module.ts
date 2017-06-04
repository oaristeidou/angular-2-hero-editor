import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroListComponent} from "./hero-list/hero-list.component";

const routes: Routes = [
  {path:'heroes', component: HeroListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }