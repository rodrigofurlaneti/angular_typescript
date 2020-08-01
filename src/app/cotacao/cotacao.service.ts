import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Urls } from '../../helpers/Urls';
import { HeadersUtils } from '../../helpers/HeaderUtils';
import { CotacaoModel } from '../cotacao/cotacao.model'

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {

  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {

    this.httpClient = httpClient;
   
  }
  CotacaoIdEmpresa(id: string): Observable<CotacaoModel[]>{
    //let ep = Urls.ListIdEmpresa;
    let ep = 'http://cotacoes.economia.uol.com.br/ws/asset/'+ id +'/intraday?';
    console.log(ep);
    return this.httpClient.get<CotacaoModel[]>(ep, {
      headers: new HeadersUtils().getRequestHeards()
    });
  }
}
