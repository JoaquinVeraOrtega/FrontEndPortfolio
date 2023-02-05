import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = 'http://localhost:8080/educacion/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + 'traer/lista');
  }

  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'agregar', educacion);
  }

  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, educacion);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  public getById(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL + `traer/${id}`)
  }

}
