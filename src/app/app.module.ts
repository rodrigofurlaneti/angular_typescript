import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAcoesComponent } from './list-acoes/list-acoes.component';
import { CotacaoComponent } from './cotacao/cotacao.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAcoesComponent,
    CotacaoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
