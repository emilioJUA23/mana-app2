import { Component, OnInit} from '@angular/core';
import { DeckService }  from '../deck.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-deck-delete',
  templateUrl: './deck-delete.component.html',
  styleUrls: ['./deck-delete.component.css']
})
export class DeckDeleteComponent implements OnInit {
  identifier:number;
  constructor(private deckService: DeckService,
              private location: Location) { }

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
