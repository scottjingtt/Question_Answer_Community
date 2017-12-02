import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    // this.router.navigate(['/login']);
                    console.log(this.model.username + "  " + this.model.password +"  " + this.model.email);
                    window.location.reload();
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
        console.log(this.model.username + "  " + this.model.password +"  " + this.model.email);
    }


    users: any = [];
  
    ngOnInit() {
      this.userService.getAll().subscribe(users =>
        {
          this.users = users; 
      });
    }
    test(){
        console.log(this.model.username + "  " + this.model.password +"  " + this.model.email);
    }
}
