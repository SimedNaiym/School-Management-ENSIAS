import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementDeModule } from '../models/elementModule.models';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  url="http://127.0.0.1:8000/api/allFiliere"
  constructor(private http:HttpClient) { }
  public searchProfs_():Observable<ElementDeModule[]>{
    return this.http.get<ElementDeModule[]>(this.url)
  }
   public saveProf_(Prof: ElementDeModule):Observable<ElementDeModule>{
    return this.http.post<ElementDeModule>(this.url,Prof);
  }
  public deleteProf_(id: number): Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }
// ---------
}
