import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../models/categorie.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  url="http://127.0.0.1:8000/api/allCategorie"
  constructor(private http:HttpClient) { }
  public searchCats_():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.url)
  }
}
