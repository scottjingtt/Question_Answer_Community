import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, UserService,AuthenticationService } from '../services/index';
import { window } from 'rxjs/operators/window';

@Component({
    selector: "login",
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    users:any = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/questions';
        // this.returnUrl = '/home';
    }

    login() {		
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/questions';
                    this.alertService.error("returnURL: " + this.returnUrl);
                    // this.router.navigate([this.returnUrl]);
                    this.router.navigateByUrl(this.returnUrl);
                    location.reload();
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        
    }

}
