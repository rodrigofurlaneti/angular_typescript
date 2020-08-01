import { Component, OnInit } from '@angular/core';
import { CotacaoModel } from '../cotacao/cotacao.model';
import { CotacaoService } from '../cotacao/cotacao.service';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.css']
})

export class CotacaoComponent implements OnInit {
  
  cotacao: Array<CotacaoModel> = new Array()

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
        .subscribe(res => { if (res["error"] == "FSW-0401")
                              console.log('Erro 401!')
                            else if(res["data"][0] != null){
                              this.cotacao = res["data"][0];
                            } },
                   err => { console.log(err) })
  }
}
