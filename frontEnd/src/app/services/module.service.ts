import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Filiere } from '../models/filieres.models';
import { PageFiliere } from '../models/profPage.models';
import {ConsoleLogger} from "@angular/compiler-cli";
import { Module } from '../models/modules.models';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  url="http://127.0.0.1:8000/api/allModule"
   constructor(private http:HttpClient) { }
  public searchModules_():Observable<Module[]>{
    return this.http.get<Module[]>(this.url)
  }
   public saveModule_(Prof: Module):Observable<Module>{
    return this.http.post<Module>(this.url,Prof);
  }
  public deleteModule_(id: number): Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }
}
