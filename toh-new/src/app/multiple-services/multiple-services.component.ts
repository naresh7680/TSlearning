import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-multiple-services',
  templateUrl: './multiple-services.component.html',
  styleUrls: ['./multiple-services.component.css']
})
export class MultipleServicesComponent implements OnInit {

  heroes : Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

}
