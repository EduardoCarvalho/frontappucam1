import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../../shared_service/empresa.service';
import { Empresa } from '../../empresa';

@Component({
  selector: 'app-listempresa',
  templateUrl: './listempresa.component.html',
  styleUrls: ['./listempresa.component.css']
})
export class ListempresaComponent implements OnInit {

    private empresas:Empresa[];

    constructor(private _empresaService:EmpresaService) { }

    ngOnInit(): void {
        this._empresaService.getEmpresas().subscribe((empresas)=>{
            console.log(empresas);
            this.empresas = empresas;
        }, (error)=>{
            console.log(error);
        })
    }

}
