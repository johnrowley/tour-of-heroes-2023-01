import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HEROES } from 'src/app/models/mock-heroes';
import { HeroService } from 'src/app/services/hero.service';
import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }



  selectedHero?:Hero;
  
  onSelect(hero:Hero) : void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  }
}



