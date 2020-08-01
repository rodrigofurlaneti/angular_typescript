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
  CotacaoIdEmpresa(id: string): Observable<any>{
    //let ep = Urls.ListIdEmpresa;
    let ep = 'http://bvmf.bmfbovespa.com.br/cotacoes2000/FormConsultaCotacoes.asp?strListaCodigos='+ id;
    var header;
    header: new HeadersUtils().getRequestHeardsIbova()
    return this.httpClient.get<any>(ep, { headers: header });
  }
}
