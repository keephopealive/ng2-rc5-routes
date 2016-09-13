import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent, AlphaComponent, BetaComponent, GammaComponent, PageNotFoundComponent }   from './app.component';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  imports:          [ BrowserModule, FormsModule, routing ],
  declarations:     [ AppComponent, AlphaComponent, BetaComponent, GammaComponent, PageNotFoundComponent ],
  providers:        [ appRoutingProviders ],
  bootstrap:        [ AppComponent ]
})
export class AppModule { }
