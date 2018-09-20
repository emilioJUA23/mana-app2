import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeckComponent } from './deck/deck.component';
import { FormsModule } from '@angular/forms';
import { DeckDetailComponent } from './deck-detail/deck-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { DeckCreateComponent } from './deck-create/deck-create.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    DeckDetailComponent,
    MessagesComponent,
    DashboardComponent,
    DeckCreateComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule,
  StorageServiceModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
