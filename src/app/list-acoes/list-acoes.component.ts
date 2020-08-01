import { Component, OnInit } from '@angular/core';
import { ListAcoesModel } from './list-acoes.model';
import { ListAcoesService } from './list-acoes.service';

@Component({
  selector: 'app-list-acoes',
  templateUrl: './list-acoes.component.html',
  styleUrls: ['./list-acoes.component.css']
})

export class ListAcoesComponent implements OnInit {

  list: Array<ListAcoesModel> = new Array()
  quantCotacao: number = 0;

  constructor(private listAcoesService: ListAcoesService) {
    this.listAcoesService = listAcoesService;
   }

  ngOnInit(){
    this.listAllAcoes();
  }

  listAllAcoes(){
    this.listAcoesService
        .ListAllAcoes()
        .subscribe(res => { this.list = res['data'] },
                   err => { console.log(err) })
  }
 

}
