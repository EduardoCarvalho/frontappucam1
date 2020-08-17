import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Empresa } from '../empresa';

@Injectable({
    providedIn: 'root'
})
export class EmpresaService {

    private baseUrl:string='http://localhost:8080/api';
    private headers = new Headers({'Content-type':'application/json'});
    private options = new RequestOptions({headers:this.headers});

    constructor(private _http:Http) { }

    getEmpresas() {
        return this._http.get(this.baseUrl+'/empresas', this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
    }

    getEmpresa(id:Number) {
        return this._http.get(this.baseUrl+'/empresa/'+id, this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
    }

    deleteEmpresa(id:Number) {
        return this._http.delete(this.baseUrl+'/empresa/'+id, this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
    }

    createEmpresa(empresa:Empresa) {
        return this._http.post(this.baseUrl+'/empresa',JSON.stringify(empresa), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
    }

    updateEmpresa(empresa:Empresa) {
        return this._http.put(this.baseUrl+'/empresa',JSON.stringify(empresa), this.options).map((response:Response)=>response.json()).catch(this.errorHandler);
    }

    errorHandler(error:Response) {
        return Observable.throw(error||"SERVER ERROR");
    }

    setter(empresa:Empresa){
        this.empresa = empresa;
    }

    getter(){
        return this.empresa;
    }
}
