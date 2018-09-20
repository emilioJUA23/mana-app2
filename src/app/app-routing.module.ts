import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckComponent }      from './deck/deck.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { DeckDetailComponent }  from './deck-detail/deck-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: DeckDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'decks', component: DeckComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
