import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { GithubSearchService } from '../services/github-search.service';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.css'],
  providers: [GithubSearchService]
})
export class FormFieldsComponent implements OnInit {

  constructor(public GHsearch:GithubSearchService,
    public cdr:ChangeDetectorRef) { }

  ngOnInit() {
  }
  

}
