import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class UploadService {
  identity: string;
  token: string;
  stats: any;
  private URL = environment.URL;
  constructor() { }
  makeFileRequest(url:string, params:Array<string>, files:Array<File>,token: string, name:string){
    return new Promise(function(resolve, reject){
      const formData:any = new FormData();
      const xhr = new XMLHttpRequest();
      for(let i = 0; i < files.length; i++){
        formData.append(name, files[i], files[i].name)
      }
      xhr.onreadystatechange= function(){
        if(xhr.readyState == 4){
          if(xhr.status==200){
            resolve(JSON.parse(xhr.response));
          }else{
            reject(xhr.response)
          }
        }
      }
      xhr.open('POST',url, true);
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);
    })
    
  }
}
