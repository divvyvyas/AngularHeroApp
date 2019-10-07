import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HEROS } from '../mock-heros';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  hero: Hero = {
    id: 101,
    name: "WindStorm"
  }

  selectedHero: Hero;
  heros = [];

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeros().subscribe(
      data => this.heros = data
    );
  }
}
