import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HeroesComponent } from './heroe/heroes.component';


const routes: Routes = [
  { path: 'heroe', component: HeroesComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
