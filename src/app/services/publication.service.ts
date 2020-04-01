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
  getToken(){
    return localStorage.getItem('token');
  }

  // addPublication(title: string, description: string, photo: File, token){
  //   const fdata = new FormData();
  //   fdata.append('title', title);
  //   fdata.append('description', description);
  //   fdata.append('image', photo);
  //   return this.http.post(this.URL+'/publication', fdata);
  // }

  addPublication(token, publication){
    let params = JSON.stringify(publication);
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken()) 
    return this.http.post(this.URL + '/publication', params, {headers: headers});
  }

  getPublications(token, page=1){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken()) 
    return this.http.get(this.URL + '/publications/' +page, {headers: headers});
  }

  getPublicationsUser(token, user_id, page=1){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', token) 
    return this.http.get(this.URL + '/publications-user/'+user_id+'/' +page, {headers: headers});
  }

  deletePublication(token, id){
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.getToken()) 
    return this.http.delete(this.URL + 'publication/' +id, {headers: headers});
  }
}
