import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Urls } from '../../helpers/Urls';
import { HeadersUtils } from '../../helpers/HeaderUtils';
import { ListAcoesModel } from './list-acoes.model'

@Injectable({
  providedIn: 'root'
})
export class ListAcoesService {
  
  httpClient: HttpClient;
  
  constructor(httpClient: HttpClient) { 
  
    this.httpClient = httpClient; 
  
  }
  
  ListAllAcoes(): Observable<ListAcoesModel[]>{
      let ep = Urls.ListAllAcoes;
      return this.httpClient.get<ListAcoesModel[]>(ep, {
        headers: new HeadersUtils().getRequestHeards()
      });
  }
 
}
