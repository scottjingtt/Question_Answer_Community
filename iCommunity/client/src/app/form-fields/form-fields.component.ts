import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GithubSearchService } from '../services/github-search.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.css'],
  providers: [GithubSearchService]
})


export class FormFieldsComponent implements OnInit {

  constructor(
    public GHsearch:GithubSearchService,
    public cdr:ChangeDetectorRef) {
    /***
    **  the input feilds send request to GitHubSearchService 
    the response is stored in repository array
    ***/

      var
        dbTime = 1000, // milliseconds
        subFunc = repositories => {
            this.repositories = repositories.items;
            this.repoIndex = undefined;
            this.repoTotalCount = repositories.total_count;
            this.waiting = false;
        }

      this.GHform.valueChanges
      .debounceTime(dbTime)
      .distinctUntilChanged()
      .switchMap(fields => {
          this.waiting = true;
          var searchType: "users" ;
           if (this.username.value) {
            //   r:0, u:1, p:0/1
              searchType = 'users';
          } else {
            //   r:0, u:0, p:0/1
            return Observable.of({});
          }
          return this.GHsearch.search({
              searchType:searchType,
              page: fields.pageNumber,
              username: fields.username,
              
          })
      })
      .subscribe(subFunc)
   }

  ngOnInit() {
  }

  // fields
 
  username = new FormControl();
  pageNumber = new FormControl(1);
  GHform = new FormGroup({
      
      username: this.username,
      pageNumber: this.pageNumber,
  });

  //results
  repositories = [];
  
  repoIndex = undefined;
  repoTotalCount = undefined;

  // messages
  waiting = false;

 
  
}
