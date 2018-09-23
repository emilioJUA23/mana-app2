import { Component, OnInit } from '@angular/core';
import { DeckService }  from '../deck.service';
import { Deck } from '../deck';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-deck-delete',
  templateUrl: './deck-delete.component.html',
  styleUrls: ['./deck-delete.component.css']
})
export class DeckDeleteComponent implements OnInit {
  identifier:number;
  constructor(private deckService: DeckService,
              private location: Location,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  deleteDeck()
  {
    let salida = this.deckService.deleteDeck(this.identifier);
    console.log(salida);
    this.location.back();
    // window.location.reload();
  }

}
