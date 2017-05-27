import { Component } from '@angular/core';
import {Hero} from './app.hero'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String;
  hero: Hero;


  constructor (){
    this.title = 'Tour of Heroes';
    this.hero = {
      id: 1,
      name: 'Windstorm'
    };
  }
}
