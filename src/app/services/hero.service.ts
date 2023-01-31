import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { HEROES } from '../models/mock-heroes';
import {Observable, of } from  'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  // getHeroes(): Observable<Hero[]> {
  //   const heroes =  of(HEROES);
  //   this.messageService.add('HeroService: fetched Heroes');
  //   return heroes;
  // }

  // getHero(id: number): Observable<Hero> {
  //   const hero = HEROES.find(h => h.id === id)!
  //   this.messageService.add(`Hero Service: fetched hero id = ${id}`);
  //   return of(hero);


  // }


  getHeroes(): Observable<Hero[]> {
    const endpointUrl = `https://my-json-server.typicode.com/johnrowley/demojson/heroes`;
    this.messageService.add('HeroService: fetched Heroes');
    return this.http.get<Hero[]>(endpointUrl).pipe();
  }

  getHero(id: number): Observable<Hero> {
    const endpointUrl = `https://my-json-server.typicode.com/johnrowley/demojson/heroes/${id}`;
    this.messageService.add(`Hero Service: fetched hero id = ${id}`);
    return this.http.get<Hero>(endpointUrl).pipe();


  }
}
