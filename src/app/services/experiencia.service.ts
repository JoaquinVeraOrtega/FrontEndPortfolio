import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  URL = 'http://localhost:8080/experiencia/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL + 'traer/lista');
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'agregar', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, experiencia);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  public getById(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.URL + `traer/${id}`)
  }

}
