import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URL = 'http://localhost:8080/persona/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + 'traer/lista');
  }

  public save(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'agregar', persona);
  }

  public update(id: number, persona: Persona): Observable<any>{
    return this.httpClient.put<any>(this.URL + `editar/${id}`, persona);
  }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  public getById(id: number): Observable<Persona>{
    return this.httpClient.get<Persona>(this.URL + `traer/${id}`)
  }

}
