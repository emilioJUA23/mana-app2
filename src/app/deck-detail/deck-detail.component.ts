import { Component, OnInit, Input } from '@angular/core';
import { Deck } from '../deck';
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
    private location: Location,
    @Inject(SESSION_STORAGE) private storage:StorageService) { }

  ngOnInit(): void {
    this.getDeck();
  }

  getDeck(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deckService.getDeck(id)
      .subscribe(deck => this.deck = deck);
  }

  // public storeOnLocalStorage(): void {
  //   let key = 'decklist';
  //   //show previous state of LocalStorage
  //   console.log(this.storage.get(key) || 'LocaL storage is empty');
  //  //get array of tasks from local storage
  //  let currentDeckList = this.storage.get(key) || [];
  //
  //  // push new task to array
  //  currentDeckList.push({ id: 11, name: 'Aggro',
  //    red:0,white:0,black:0,blue:0,green:0,lands:0});
  //
  //  this.storage.set(key, currentDeckList);
  //  //verify storage
  //  console.log(this.storage.get(key) || 'LocaL storage is empty');
  //
  // }

  goBack(): void {
    // console.log("display of previous stage and new stage.");
    // this.storeOnLocalStorage();
    this.location.back();
  }

}
