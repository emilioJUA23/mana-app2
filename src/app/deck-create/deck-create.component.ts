import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeckService }  from '../deck.service';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService,StorageServiceModule } from 'angular-webstorage-service';


@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.css']
})
export class DeckCreateComponent implements OnInit {

  constructor(@Inject(SESSION_STORAGE) private storage:StorageService)
  {}

  public storeOnLocalStorage(): void {
    let key = 'decklist';
    //show previous state of LocalStorage
    console.log(this.storage.get(key) || 'LocaL storage is empty');
   //get array of tasks from local storage
   let currentDeckList = this.storage.get(key) || [];

   // push new task to array
   currentDeckList.push({ id: 11, name: 'Aggro',
     red:0,white:0,black:0,blue:0,green:0,lands:0});

   this.storage.set(key, currentDeckList);
   //verify storage
   console.log(this.storage.get(key) || 'LocaL storage is empty');

  }


  ngOnInit() {
  }

}
