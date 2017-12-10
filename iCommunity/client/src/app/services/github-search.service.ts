import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class GithubSearchService {

    private url = 'http://api.github.com/users/';
    private username: string;
    private client_id = '25702c09d4347396e5c6';
    private client_sec = 'e0979501b631424769e45afddf295051442293fc';

  constructor(public http:HttpClient) { 
    this.username = 'guravashish';
  }

  getUserData(){
    return this.http.get(this.url+this.username+'?client_id='+this.client_id+'&client_sec='+this.client_sec)
                    
                    .catch(this.handleError);
  }

  getRepoData(){
    return this.http.get(this.url+this.username+'/repos?client_id='+this.client_id+'&client_sec='+this.client_sec)
                    
                    .catch(this.handleError);
  }

  updateUser(username: string){
    this.username = username;
  }

  private extractData(res: Response) {
  let body = res.json();
  return body.data || {  };
  }

  private handleError (error: Response | any) {
  
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
