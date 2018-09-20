import { Injectable } from '@angular/core';
import { Deck } from './deck';
import { DECKS } from './mock-decks';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  getDecks(): Observable<Deck[]>
  {
    this.messageService.add('DeckService: fetched decks');
    return of(DECKS);
  }
  getDeck(id: number): Observable<Deck> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`DeckService: fetched deck id=${id}`);
    return of(DECKS.find(deck => deck.id === id));
  }

  constructor(private messageService: MessageService) { }
}
