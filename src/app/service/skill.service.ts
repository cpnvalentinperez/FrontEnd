import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  
  private URL: string;

 //URL = 'https://portfolio-backend-rvh4.onrender.com/skill/';

 // URL = environment.URL + 'skill/';
 
  constructor(private httpClient: HttpClient) { 
    
  if (environment.production){
      this.URL = environment.URLP + 'skill/'; 
    }else {
      {this.URL = environment.URLT + 'skill/';}
    }}

  public lista(): Observable<Skill[]>{
    
    return this.httpClient.get<Skill[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.URL + `detail/${id}`);   
  } 

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post(this.URL + 'create', skill);
  }

  public update(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
