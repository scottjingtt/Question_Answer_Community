import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, UserService,AuthenticationService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'admin.component.html'
})

export class AdminComponent implements OnInit {
    users:any = [];

    constructor(
        private userService: UserService,
        private alertService: AlertService) { }

    ngOnInit() {
        this.userService.getAll().subscribe(users =>
            {
              this.users = users; 
          });
    }

}
