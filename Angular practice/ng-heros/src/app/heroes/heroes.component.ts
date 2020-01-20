import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[] = [];
  selectedHero: Hero;
  
  constructor(private heroService: HeroService) {
    debugger;
   }
  random = Math.random();
  ngOnInit() {
    this.getData();
  }

  getData(): void {
    const abc = this.heroService.getHeroes();
    abc.subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero, event) {
    console.log('hero....', hero, event);
    debugger;
    this.selectedHero = hero;
  }

}