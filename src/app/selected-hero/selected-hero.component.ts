import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../app.hero";
import {HeroService} from "../hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common';



@Component({
  selector: 'app-selected-hero',
  templateUrl: './selected-hero.component.html',
  styleUrls: ['./selected-hero.component.css']
})
export class SelectedHeroComponent implements OnInit {
  @Input() selectedHero:Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.selectedHero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}
