import { Component, OnInit } from '@angular/core';
import { DeckService }  from '../deck.service';
import { Deck } from '../deck';
import { Inject, Injectable } from '@angular/core';


@Component({
  selector: 'app-deck-delete',
  templateUrl: './deck-delete.component.html',
  styleUrls: ['./deck-delete.component.css']
})
export class DeckDeleteComponent implements OnInit {
  identifier:number;
  constructor(private deckService: DeckService) { }

  ngOnInit() {
  }

  deleteDeck()
  {
    let salida = this.deckService.deleteDeck(this.identifier);
    console.log(salida);
    window.location.reload();
  }

}
