import { Component, OnInit, Input } from '@angular/core';
import { Deck, Deck_cache } from '../deck';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService,StorageServiceModule } from 'angular-webstorage-service';
import { DeckService }  from '../deck.service';

@Component({
  selector: 'app-deck-detail',
  templateUrl: './deck-detail.component.html',
  styleUrls: ['./deck-detail.component.css']
})
export class DeckDetailComponent implements OnInit {
  @Input() deck:Deck;
  constructor(
    private route: ActivatedRoute,
    private deckService: DeckService,
    private location: Location) { }

  ngOnInit(): void {
    this.getDeck();
  }

  getDeck(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    this.deckService.getDeck(id)
      .subscribe(deck => this.deck = deck);
  }

  goBack(): void {
    this.location.back();
  }

  updateDeck(): void {
    this.deckService.updateDeck(this.deck);
    // alert("This Decks has been updated!");
  }

  deleteDeck()
  {
    let salida = this.deckService.deleteDeck(this.deck._id);
    this.location.back();
  }

}
