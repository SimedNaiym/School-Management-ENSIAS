import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { PageDepartment } from '../models/profPage.models';
import { Departement } from '../models/departement.models';
import { Filiere } from '../models/filieres.models';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  public searchDepartments_(): Observable<Departement[]> {
    return this.http.get<Departement[]>(`http://127.0.0.1:8000/api/allDepartement`);
  }
  public saveDepartment_(department: Departement): Observable<Departement> {
    return this.http.post<Departement>(`http://127.0.0.1:8000/api/allDepartement`, department);
  }
  public deleteDepartment_(id: number): Observable<any> {
    return this.http.delete(`http://127.0.0.1:8000/api/allDepartement/${id}`);
  }
  public updateDepartment_(id: number, department: Departement): Observable<Departement> {
    return this.http.put<Departement>(`http://127.0.0.1:8000/api/allDepartement/${id}`, department);
  }
// ------------  
  public searchDepartments(keyword: string, page: number, size: number): Observable<PageDepartment> {
    return this.http.get<PageDepartment>(`${environment.backendHost}/departements/search?keyword=${keyword}&page=${page}&size=${size}`);
  }

  public saveDepartment(department: Departement): Observable<Departement> {
    return this.http.post<Departement>(`${environment.backendHost}/departements`, department);
  }

  public updateDepartment(id: number, department: Departement): Observable<Departement> {
    return this.http.put<Departement>(`${environment.backendHost}/departements/${id}`, department);
  }

  public getDepartment(id: number): Observable<Departement> {
    return this.http.get<Departement>(`${environment.backendHost}/departements/${id}`);
  }
  public getDepartements(): Observable<Departement[]> {
    return this.http.get<Departement[]>(`${environment.backendHost}/departements`);
  }

  public deleteDepartment(id: number): Observable<any> {
    return this.http.delete(`${environment.backendHost}/departements/${id}`);
  }

  public getFilieres(id: number): Observable<Filiere[]> {
    return this.http.get<Filiere[]>(`${environment.backendHost}/departements/${id}/filieres`);
  }
}
