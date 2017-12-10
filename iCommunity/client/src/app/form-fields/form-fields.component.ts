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
   ) {
    /***
    **  the input feilds send request to GitHubSearchService 
    the response is stored in repository array
    ***/

    }

  ngOnInit() {
  }

  

 
  
}
