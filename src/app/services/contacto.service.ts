import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  URL = 'http://portfoliobackend-joaquinveraortega.koyeb.app/contacto/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Contacto[]> {
    return this.httpClient.get<Contacto[]>(this.URL + 'traer/lista');
  }

  public save(contacto: Contacto): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'agregar', contacto);
  }

  public update(id: number, contacto: Contacto): Observable<any> {
    return this.httpClient.put<any>(this.URL + `editar/${id}`, contacto);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  public getById(id: number): Observable<Contacto> {
    return this.httpClient.get<Contacto>(this.URL + `traer/${id}`)
  }

}
