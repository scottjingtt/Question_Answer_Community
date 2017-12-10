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
  userData: any;
  repoData: any[];
  username: string;

  constructor(private githubService: GithubSearchService) {

    this.userData = false;
    }

    searchUser(){
      this.githubService.updateUser(this.username);

      this.githubService.getUserData()
      .subscribe(
        users =>{
        this.userData = users;
        console.log(users);
      }
      );

      this.githubService.getRepoData()
      .subscribe(
        repos =>{
          this.repoData=repos;
          console.log(repos);
        }
      );
      
    }

  ngOnInit() {
  }

  

 
  
}
