import { Inject,Injectable } from '@angular/core';
import { Deck } from './deck';
import { DECKS } from './mock-decks';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { SESSION_STORAGE, StorageService,StorageServiceModule } from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  getDecks(): Observable<Deck[]>
  {
    // this.messageService.add('DeckService: fetched decks');
    // return of(DECKS);
    // this.storage.set('decklist', DECKS);
    // console.log(this.storage.get('decklist'));
    return of(this.storage.get('decklist') || []);
  }
  getDeck(id: number): Observable<Deck> {
    // TODO: send the message _after_ fetching the hero
    // this.messageService.add(`DeckService: fetched deck id=${id}`);
    // return of(DECKS.find(deck => deck.id === id));
    let key = 'decklist';
    let currentDeckList = this.storage.get(key) || [];
    return of(currentDeckList.find(deck=> deck.id===id))
  }


  createDeck(deck:Deck): Observable<Deck[]> {
    let key = 'decklist';
    //show previous state of LocalStorage
    console.log(this.storage.get(key) || 'LocaL storage is empty');
   //get array of tasks from local storage
   let currentDeckList = this.storage.get(key) || [];

   // push new task to array
   currentDeckList.push(deck);

   this.storage.set(key, currentDeckList);
   //verify storage
   console.log(this.storage.get(key) || 'LocaL storage is empty');

   return this.storage.get(key) || [];

  }

  updateDeck(deck:Deck): Observable<Deck[]> {
    let key = 'decklist';
   //get array of decks from local storage
    let currentDeckList = this.storage.get(key) || [];

   // find old deck and replace it
    let index = currentDeckList.findIndex(obj => obj.id===deck.id);
    if (index !== -1) {
        currentDeckList[index] = deck;
    }

    this.storage.set(key, currentDeckList);
    //verify storage
    console.log(this.storage.get(key) || 'LocaL storage is empty');

    return this.storage.get(key) || [];

  }

  deleteDeck(id:number): Observable<Deck[]> {
    let key = 'decklist';
   //get array of decks from local storage
    let currentDeckList = this.storage.get(key) || [];
   // find old deck and replace it
    let index = currentDeckList.findIndex(obj => obj.id==id);
    if (index !== -1) {
        currentDeckList[index].show=false;
    }

    this.storage.set(key, currentDeckList);
    //verify storage
    console.log(this.storage.get(key) || 'LocaL storage is empty');
    return this.storage.get(key) || [];

  }

  constructor(private messageService: MessageService,
              @Inject(SESSION_STORAGE) private storage:StorageService) { }
}
