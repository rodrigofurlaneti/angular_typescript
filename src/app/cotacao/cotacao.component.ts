import { Component, OnInit } from '@angular/core';
import { CotacaoModel } from '../cotacao/cotacao.model';
import { CotacaoService } from '../cotacao/cotacao.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { xml2json } from 'xml-js';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})

export class CotacaoComponent implements OnInit {
  strRes: string = '';
  cotacao: CotacaoModel = new CotacaoModel()

  constructor(private cotacaoService: CotacaoService) {
    this.cotacaoService = cotacaoService;
  }

  ngOnInit(){
    let pathname = window.location.pathname;
    let id = pathname.replace("/cotacao/","")
    this.cotacaoIdEmpresa(id);
    
  }

  cotacaoIdEmpresa(id: string){
    this.cotacaoService
        .CotacaoIdEmpresa(id)
        .subscribe(res => { console.log(res) },
                   err => { this.strRes = err['error']['text'];
                            this.popularObj(this.serializarXmlToJson(this.strRes));
                            console.log(this.cotacao);
                          })
  }
  serializarXmlToJson(xml: string){
      var result = xml2json(xml, {compact: true, spaces: 4});
      return result;
  }
  popularObj(json: string){
    var obj = JSON.parse(json);
    this.cotacao.Abertura = obj.ComportamentoPapeis.Papel._attributes.Abertura;
    this.cotacao.Codigo = obj.ComportamentoPapeis.Papel._attributes.Codigo;
    this.cotacao.Data = obj.ComportamentoPapeis.Papel._attributes.Data;
    this.cotacao.Maximo = obj.ComportamentoPapeis.Papel._attributes.Maximo;
    this.cotacao.Medio = obj.ComportamentoPapeis.Papel._attributes.Medio;
    this.cotacao.Minimo = obj.ComportamentoPapeis.Papel._attributes.Minimo;
    this.cotacao.Nome = obj.ComportamentoPapeis.Papel._attributes.Nome;
    this.cotacao.Oscilacao = obj.ComportamentoPapeis.Papel._attributes.Oscilacao;
    this.cotacao.Ultimo = obj.ComportamentoPapeis.Papel._attributes.Ultimo;
    return this.cotacao;
  }
}
