import { Component, OnInit } from '@angular/core';
import {Hero} from "../app.hero";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  hero: Hero;


  constructor() {
    this.hero = {
      id: 1,
      name: 'Windstorm'
    };
  }

}
