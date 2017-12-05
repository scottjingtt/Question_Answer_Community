import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {User} from '../models/user';

import { AlertService, UserService,AuthenticationService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'admin.component.html'
})

export class AdminComponent implements OnInit {
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
        if(this.currentUser.identity == 'admin'){
            this.loadAll();
        }
        else{
            this.router.navigate(['/login']);
        }
        
    }
    loadAll(){
        this.userService.getAll().subscribe(users =>
            {
              this.users = users; 
          });
    }
    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAll() });
    }

}
