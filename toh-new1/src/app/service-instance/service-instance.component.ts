import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Hero2Service } from '../hero2.service';

@Component({
  selector: 'app-service-instance',
  templateUrl: './service-instance.component.html',
  styleUrls: ['./service-instance.component.css']
})
export class ServiceInstanceComponent implements OnInit {

  heroes: Hero[] = [];
  constructor( private hero2Service : Hero2Service) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.hero2Service.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.hero2Service.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.hero2Service.deleteHero(hero.id).subscribe();
  }

}
