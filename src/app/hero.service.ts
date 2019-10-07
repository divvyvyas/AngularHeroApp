import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROS } from './mock-heros'
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeros(): Observable<Hero[]> {
    this.messageService.addMessage("HeroService: fetched heros");
    return of(HEROS);
  }
  getHero(id): Observable<Hero> {
    return of(HEROS.find(hero => hero.id === id));
  }
  constructor(private messageService: MessageService) { }
}
