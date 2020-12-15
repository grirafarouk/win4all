import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import { WinforallComponent } from './winforall/winforall.component';
import { AnnonceurComponent } from './annonceur/annonceur.component';


const routes: Routes = [
  { path: 'winforall', component: WinforallComponent,children:[

    { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnectionComponent},
  { path: 'home', component: HomeComponent },

  { path: '',   redirectTo: '/home', pathMatch: 'full' }

  ] },
  
  { path: 'annonceurs', component: AnnonceurComponent },


  { path: '',   redirectTo: '/winforall/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
