import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService2 } from '../hero2.service';

@Component({
  selector: 'app-service-instance',
  templateUrl: './service-instance.component.html',
  styleUrls: ['./service-instance.component.css'],
  providers: [HeroService2]
})
export class ServiceInstanceComponent implements OnInit {

  heroes : Hero[] = [];
  instanceNumber : number;

  constructor( private heroService: HeroService2) { 
    this.instanceNumber = heroService.instanceNumber}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero.id).subscribe();
  // }

  // getHeroes() {
  //   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  // }

  delete(hero: Hero) {
    this.heroService.deleteHero(hero).subscribe(heroes => this.heroes = heroes);
  }
}
