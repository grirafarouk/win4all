import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import { AnnonceurComponent } from './annonceur/annonceur.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomheaderDirective } from './customheader.directive';
import { WinforallComponent } from './winforall/winforall.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscriptionComponent,
    ConnectionComponent,
    AnnonceurComponent,
    CustomheaderDirective,
    WinforallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
