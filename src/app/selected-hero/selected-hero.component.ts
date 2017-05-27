import {Component, Input} from '@angular/core';
import {Hero} from "../app.hero";

@Component({
  selector: 'app-selected-hero',
  templateUrl: './selected-hero.component.html',
  styleUrls: ['./selected-hero.component.css']
})
export class SelectedHeroComponent{
  @Input() selectedHero:Hero;

  constructor() {
  }

}
