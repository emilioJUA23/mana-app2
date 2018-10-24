import { Inject,Injectable } from '@angular/core';
import { Deck,Deck_cache } from './deck';
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
      var req = new XMLHttpRequest();
      req.open('GET', 'http://localhost:3000/api/v1/deck/', false);
      req.send(null);
      if (req.status == 200)
      {
        var jsonArray = JSON.parse(req.responseText);
        return of(jsonArray);
      }
      else
      {
        return of([]);
      }

  }
  getDeck(id: string): Observable<Deck> {
    var req = new XMLHttpRequest();
    req.open('GET', 'http://localhost:3000/api/v1/deck/'+id, false);
    req.send(null);
    if (req.status == 200)
    {
      var json = JSON.parse(req.responseText);
      console.log(json);
      return of(json);
    }
    else
    {
      return of();
    }
  }


  createDeck(deck:Deck_cache): Observable<Deck[]> {
   var req = new XMLHttpRequest();
   req.open('POST', 'http://localhost:3000/api/v1/deck/', true);
   req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   req.send(JSON.stringify(deck));
   return of([]);
  }

  updateDeck(deck:Deck): Observable<Deck[]> {
   var _id = deck._id;
   delete deck._id;
   var req = new XMLHttpRequest();
   req.open('PUT', 'http://localhost:3000/api/v1/deck/'+_id, true);
   req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   req.send(JSON.stringify(deck));
   return of([]);

  }

  deleteDeck(id:string): Observable<Deck[]> {
    var req = new XMLHttpRequest();
    req.open('DELETE', 'http://localhost:3000/api/v1/deck/'+id, false);
    req.send(null);
    if (req.status == 200)
    {
      return of();
    }
    else
    {
      return of();
    }
  }

  constructor(private messageService: MessageService,
              @Inject(SESSION_STORAGE) private storage:StorageService) { }
}
