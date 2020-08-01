import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAcoesComponent } from './list-acoes/list-acoes.component';
import { CotacaoComponent } from './cotacao/cotacao.component';

const routes: Routes = [
  { path: 'listacao', component: ListAcoesComponent },
  { path: 'cotacao/:id' , component: CotacaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
