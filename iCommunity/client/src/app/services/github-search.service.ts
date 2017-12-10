import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http,Headers, Response } from '@angular/http';

interface GitHubReq {
  searchType: 'users',
  page?: number,
 
  username?: string
}


@Injectable()
export class GithubSearchService {

  constructor(public http:Http) { }

 public search(req: GitHubReq) {
    
            var
                link = "http://api.github.com/search/"+req.searchType,
                params: any = {};
            // defaults
            if (!req.page) req.page=1;
           
            if (!req.username) req.username='';
    
            switch (req.searchType) {
                
               
                case 'users':
                    link = `https://api.github.com/${req.searchType}/${req.username}/repos`;
                    params.page=req.page;
                    break;
                default:
                    return;
            }
    
            return this.http
            .get(link, {params:params})
            .map((response:Response)=>{
                switch (req.searchType) {
                   
                    case 'users':
                        var jSON = response.json();
                        return {
                            items: jSON,
                            total_count: jSON.length
                        };
                }
            })
            .catch(err=>{
                //   check if err message arrived
                if (err.json() && err.json().message) {
                    //   check if err message is not in list
                    if (
                        ["Validation Failed", "Not Found"]
                        .indexOf(err.json().message) === -1
                    ){
                        alert(err.json().message);
                    } else {
                        //   err message was in list
                    }
                } else {
                    alert(err);
                }
    
                return Observable.of({});
            })
            ;
        }
  
}
