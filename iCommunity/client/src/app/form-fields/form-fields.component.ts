import { Component, OnInit , ChangeDetectorRef} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.css']
})
export class FormFieldsComponent implements OnInit {

  constructor(public cdr:ChangeDetectorRef) { }

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
