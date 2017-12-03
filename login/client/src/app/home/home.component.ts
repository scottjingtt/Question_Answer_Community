import { Component, OnInit } from '@angular/core';

import { User } from '../models/user';
import { UserService,AlertService } from '../services/index';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    alertService:AlertService;
    private route: ActivatedRoute;
    private router: Router;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        // this.alertService.error("return URL: " + this.route.snapshot.queryParams['returnUrl']);
    }

    deleteUser(_id: string) {
        this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}