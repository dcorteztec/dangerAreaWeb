import { Injectable } from '@angular/core';
import { Headers, Http,Response } from '@angular/http';

import { Datamodelmap } from './models/datamodelmap';
import {Observable} from "rxjs/Observable";

import "rxjs/Rx";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DatamodelmapService {

  private listbase = 'http://dangerareaservice.herokuapp.com/api/estatistica/furto_celular/listBase';  // URL to web API
  private listbasemap = 'http://dangerareaservice.herokuapp.com/api/estatistica/furto_celular/listBaseMap';  // URL to web API
  private listbaseLocal = 'http://localhost:8080/api/estatistica/furto_celular/listBase';  // URL to web API
  private listbasemapLocal = 'http://localhost:8080/api/estatistica/furto_celular/listBaseMap';
  private listTeste = 'https://jsonplaceholder.typicode.com/posts';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  // get all base
  getAllBase(): Promise<Datamodelmap[]>{
    return this.http.get(this.listbasemapLocal).toPromise()
    .then(response=>response.json() as Datamodelmap[])
    .catch(this.handleError);
    
  }

 getAllBaseObs(): Observable<Datamodelmap[]> {
         return this.http
             .get(this.listbasemapLocal)
             .map((response: Response) => {
                 return <Datamodelmap[]>response.json();
             })
             .catch(this.handleError);
     }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}
