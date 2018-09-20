import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  decks: Deck[] = [];

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.getDecks();
  }

  getDecks(): void {
    this.deckService.getDecks()
      .subscribe(decks => this.decks = decks);
  }
}
