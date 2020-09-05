import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  private URL = environment.URL;
  constructor(
    private http:HttpClient
  ) { }
  getToken(){
    return localStorage.getItem('token');
  }


  addPublication(token, publication){
    let params = JSON.stringify(publication);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken()) 
    return this.http.post(this.URL + '/publication', params, {headers: headers});
  }

  getPublications(token, page){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken()) 
    return this.http.get(this.URL + '/publications/' +page, {headers: headers});
  }
  getHomePublications(page){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json') 
    return this.http.get(this.URL + '/home-publications/' +page, {headers: headers});
  }
  

  getPublicationsUser(token, user_id, page=1){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token) 
    return this.http.get(this.URL + '/publications-user/'+user_id+'/' +page, {headers: headers});
  }
  getPublicationById(token, id){
    console.log(id)
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken())
    return this.http.get(this.URL + '/publication/'+id, {headers: headers});
  }
  getHomePublicationById(id){
    console.log(id)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
    return this.http.get(this.URL + '/home-publication/'+id, {headers: headers});
  }

  deletePublication(token, id){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken()) 
    return this.http.delete(this.URL + '/publication/' +id, {headers: headers});
  }
}
