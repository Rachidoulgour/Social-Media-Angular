import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private URL = 'http://localhost:3500/api'
  constructor(private http: HttpClient) { }
  addMessage(token, message){
    let params = JSON.stringify(message);
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', token);
    return this.http.post(this.URL + '/message',params, {headers: headers});
  }

  getMessages(token, page=1){
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', token);
    return this.http.get(this.URL + '/my-messages/'+page, {headers: headers});
  }
  getEmmitMessages(token, page=1){
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
                                    .set('Authorization', token);
    return this.http.get(this.URL + '/messages/'+page, {headers: headers});
  }
}
