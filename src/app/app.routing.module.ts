// @ts-ignore

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BodyComponent} from "./body/body.component";
import {ListaPokeComponent} from "./lista-poke/lista-poke.component";
import {SliderComponent} from "./slider/slider.component";

const routes: Routes=[
  {path:'', component: ListaPokeComponent},
  {path:'body', component: BodyComponent},
  {path:'slider/:id', component: SliderComponent}
]

@NgModule({
  declarations:[],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule{}
