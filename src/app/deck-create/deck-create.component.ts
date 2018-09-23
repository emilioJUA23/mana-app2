import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeckService }  from '../deck.service';
import { Deck } from '../deck';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService,StorageServiceModule } from 'angular-webstorage-service';


@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.css']
})
export class DeckCreateComponent implements OnInit {
  deck:Deck;
  decks:Deck[];
  name:string;
  red:number;black:number;white:number;green:number;blue:number;lands:number;
  constructor(@Inject(SESSION_STORAGE) private storage:StorageService,
              private location: Location,
              private deckService: DeckService,
              private route: ActivatedRoute)
  {}

  goBack(): void {
    this.location.back();
  }

  createDeck(): void{
    // let deck Deck;
    this.deckService.getDecks()
      .subscribe(decks => this.decks = decks);
    this.deck = {
      id: this.decks.length+1, name: this.name,
      red:this.red,white:this.white,
      black:this.black,blue:this.blue,
      green:this.green,lands:this.lands,
      show:true
    };
    let salida = this.deckService.createDeck(this.deck);
    this.goBack();
    console.log(salida);
  }


  ngOnInit() {
  }

}
