import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private URL: string;

 //URL = 'https://portfolio-backend-rvh4.onrender.com/proyecto/';
  
 // URL = environment.URL + 'proyecto/';

  constructor(private httpClient: HttpClient) { 
    
    if (environment.production){
      this.URL = environment.URLP + 'proyecto/'; 
    }else {
      this.URL = environment.URLT + 'proyecto/';
    }}

  public lista(): Observable<Proyecto[]>{
    
    return this.httpClient.get<Proyecto[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URL + `detail/${id}`);   
  } 

  public save(proyecto: Proyecto): Observable<any>{
    return this.httpClient.post(this.URL + 'create', proyecto);
  }

  public update(id: number, proyecto: Proyecto): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyecto);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  } 
}
