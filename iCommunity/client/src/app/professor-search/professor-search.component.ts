import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../models/user';
import { AlertService, UserService,AuthenticationService } from '../services/index';

@Component({
    moduleId: module.id,
    selector: 'app-professor-search',
    templateUrl: './professor-search.component.html',
    styleUrls: ['./professor-search.component.css']
})

export class ProfessorSearchComponent implements OnInit {
    users:any = [];
    currentUser: User;

    constructor(
        private router:Router,
        private userService: UserService,
        private alertService: AlertService,
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
     }
    ngOnInit() {
        
            this.loadAll();


           // console.log(questions);
            
            var s= (<HTMLInputElement>document.getElementById('keywordID')).value;
            console.log("Professor Name "+s);
            let someArray = this.users;    
            var finalArray =[];          
             
                        for (let entry of someArray) {  
                          var match =(entry.firstName+" "+entry.lastName);
                          console.log(match === s);
                          if (match === s)
                          {
                          
                           finalArray.push(entry);
                           }
                        }
            
                    this.users= finalArray; 
                   // this.sortOnTime();
             
                
    }
    loadAll(){
      this.userService.getAll().subscribe(users => { this.users = users; });
    }
   

}
