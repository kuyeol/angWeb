import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { eroesComponent } from './heroe/heroes.component';


const routes: Routes = [
  { path: 'heroe', component: eroesComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
