import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroListComponent} from "./hero-list/hero-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SelectedHeroComponent} from "./selected-hero/selected-hero.component";

const routes: Routes = [
  {path:'heroes', component: HeroListComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'detail/:id', component: SelectedHeroComponent},
  {path:'', redirectTo:'/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
