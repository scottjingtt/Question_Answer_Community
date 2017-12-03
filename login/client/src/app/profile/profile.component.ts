import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../models/user';
import { UserService,AlertService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
    currentUser: User;

    constructor(private userService: UserService,
        private router: Router,
        private alertService: AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        // this.loadAllUsers();
    }

    // deleteUser(_id: string) {
        // this.userService.delete(_id).subscribe(() => { this.loadAllUsers() });
    // }

    // private loadAllUsers() {
    //     this.userService.getAll().subscribe(users => { this.users = users; });
    // }
    model: any = {};
    loading = false;

    update() {
        this.model._id = this.currentUser._id;
        this.loading = true;
        this.userService.update(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Update successful', true);
                    this.router.navigate(['/home']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}