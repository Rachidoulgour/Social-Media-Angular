import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private URL = 'http://localhost:3500/api';
  constructor(
    private http:HttpClient
  ) { }

  getPublicationsUser(token, user_id, page=1){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken()) 
    return this.http.get(this.URL + 'publication-user/'+user_id+'/' +page, {headers: headers});
  }
}
