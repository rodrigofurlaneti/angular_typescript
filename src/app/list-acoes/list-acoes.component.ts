import { Component, OnInit } from '@angular/core';
import { ListAcoesModel } from './list-acoes.model';
import { ListAcoesService } from './list-acoes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-acoes',
  templateUrl: './list-acoes.component.html',
  styleUrls: ['./list-acoes.component.css']
})

export class ListAcoesComponent implements OnInit {
  filtroCodigo = '';
  filtroNome = '';
  filtroEmpresa = '';
  txtDigitado: string = '';
  
  list: Array<ListAcoesModel> = new Array()
  listBackup: Array<ListAcoesModel> = new Array()
  quantCotacao: number = 0;

  constructor(private listAcoesService: ListAcoesService, private router: Router) {
    this.listAcoesService = listAcoesService;
   }

  ngOnInit(){
    this.listAllAcoes();
  }

  listAllAcoes(){
    this.listAcoesService
        .ListAllAcoes()
        .subscribe(res => { this.list = res['data'];
                            this.listBackup = res['data'];
                            this.list.map(l => l.code = this.normalizarCodigo(l.code));
                            this.listBackup.map(l => l.code = this.normalizarCodigo(l.code));
                          },
                   err => { console.log(err) })
  }
  removerAcento(txt: string){
    return txt.normalize("NFD")
              .replace(/[^a-zA-Zs]/g, "");
  }
  filtrarNome(txtDigitado: string){
    this.txtDigitado = this.removerAcento(txtDigitado);
    this.list = this.listBackup.filter(f => {
      let idt = f.idt.toString();
      let nome = this.removerAcento(f.name.toString()) ? this.removerAcento(f.name).toUpperCase().trim() : '';
      if(idt.includes(this.txtDigitado) || nome.includes(this.txtDigitado.toUpperCase()) || this.txtDigitado == ''){
        let mostrarRegistro = f.name;
        return mostrarRegistro
      }
    });
  }
  filtrarEmpresa(txtDigitado: string){
    this.txtDigitado = this.removerAcento(txtDigitado);
    this.list = this.listBackup.filter(f => {
      let idt = f.idt.toString();
      let empresa = this.removerAcento(f.companyName.toString()) ? this.removerAcento(f.companyName).toUpperCase().trim() : '';
      if(idt.includes(this.txtDigitado) || empresa.includes(this.txtDigitado.toUpperCase()) || this.txtDigitado == ''){
        let mostrarRegistro = f.companyName;
        return mostrarRegistro
      }
    });
  }
  filtrarCodigo(txtDigitado: string){
    this.txtDigitado = this.removerAcento(txtDigitado);
    this.list = this.listBackup.filter(f => {
      let idt = f.idt.toString();
      let codigo = this.removerAcento(f.code.toString()) ? this.removerAcento(f.code).toUpperCase().trim() : '';
      if(idt.includes(this.txtDigitado) || codigo.includes(this.txtDigitado.toUpperCase()) || this.txtDigitado == ''){
        let mostrarRegistro = f.code;
        return mostrarRegistro
      }
    });
  }
  normalizarCodigo(str){
    var regex = /.SA/gi; 
    return str.replace(regex, ""); 
  }
  aparecerFiltro(idElement: string){
    let id = idElement;
    return ((<HTMLSelectElement>document.getElementById(id)).style.display = 'block');
  }
  desaparecerFiltro(idElement: string){
    let id = idElement;
    return ((<HTMLSelectElement>document.getElementById(id)).style.display = 'none');
  }
  cotacao(code: string){
    this.router.navigate(['/cotacao/' + code])
  }
}