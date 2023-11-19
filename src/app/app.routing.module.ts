// @ts-ignore

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BodyComponent} from "./body/body.component";
import {ListaPokeComponent} from "./lista-poke/lista-poke.component";

const routes: Routes=[
  {path:'', component: BodyComponent},
]

@NgModule({
  declarations:[],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule{}
