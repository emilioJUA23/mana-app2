import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DeckService }  from '../deck.service';
import { Deck,Deck_cache } from '../deck';


@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.css']
})
export class DeckCreateComponent implements OnInit {
  deck:Deck_cache;
  decks:Deck[];
  name:string;
  red:number;black:number;white:number;green:number;blue:number;lands:number;
  constructor(private location: Location,
              private deckService: DeckService)
  {}

  goBack(): void {
    this.location.back();
  }

  createDeck(): void{
    // let deck Deck;
    this.deckService.getDecks()
      .subscribe(decks => this.decks = decks);
    this.deck = {
      name: this.name,
      red:this.red,white:this.white,
      black:this.black,blue:this.blue,
      green:this.green,lands:this.lands,
    };
    let salida = this.deckService.createDeck(this.deck);
    this.goBack();
    console.log(salida);
  }


  ngOnInit() {
  }

}
