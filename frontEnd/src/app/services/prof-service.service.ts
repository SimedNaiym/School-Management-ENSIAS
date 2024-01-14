import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prof } from '../models/prof.models';
import {environment} from "../../environments/environment";
import { PageProf } from '../models/profPage.models';

@Injectable({
  providedIn: 'root'
})
export class ProfServiceService {
  url="http://127.0.0.1:8000/api/allProfesseur"
   constructor(private http:HttpClient) { }
  public searchProfs_():Observable<Prof[]>{
    return this.http.get<Prof[]>(this.url)
  }
   public saveProf_(Prof: Prof):Observable<Prof>{
    return this.http.post<Prof>(this.url,Prof);
  }
  public deleteProf_(id: number): Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }
  public updateProf_(id: number,Prof: Prof):Observable<Prof>{
    return this.http.put<Prof>("http://127.0.0.1:8000/api/allProfesseur/"+id,Prof);
  }
// ---------
   public getProfs(page: number, size: number): Observable<PageProf> {
    return this.http.get<PageProf>(environment.backendHost + "/enseignants?page=" + page + "&size=" + size);
  }
  public searchProfs(keyword : string,page: number, size: number):Observable<PageProf>{
    return this.http.get<PageProf>(environment.backendHost+"/enseignants/search?keyword="+keyword+"&page=" + page + "&size=" + size)
  }
  public saveProf(Prof: Prof):Observable<Prof>{
    return this.http.post<Prof>(environment.backendHost+"/enseignants",Prof);
  }
  public updateProf(id: number,Prof: Prof):Observable<Prof>{
    return this.http.put<Prof>(environment.backendHost+"/enseignants/"+id,Prof);
  }
  public getProf(id: number):Observable<Prof>{
    return this.http.get<Prof>(environment.backendHost+"/enseignants/"+id);
  }
  public deleteProf(id: number): Observable<any>{
    return this.http.delete(environment.backendHost+"/enseignants/"+id);
  }
}
