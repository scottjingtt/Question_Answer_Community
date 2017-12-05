import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, UserService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})

export class RegisterComponent{
    model: any = {};
    loading = false;

    emailMatches:any = [];
    usernameMatches:any = [];
    identityValidation:boolean;
    emailRegxp = new RegExp('[a-zA-Z0-9_.]+@[a-zA-Z0-9_.]+\\.[a-zA-Z]+');
    usernameRegxp = new RegExp('[a-zA-z0-9_.]');
    formValidation: boolean;
    emailValidation: boolean;
    usernameValidation: boolean;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    formValid(){
        this.emailMatches =  this.emailRegxp.exec(this.model.email);
        this.usernameMatches = this.usernameRegxp.exec(this.model.username);

        this.emailValidation = this.emailMatches != null;
        this.usernameValidation = this.usernameMatches != null;
        this.identityValidation = (this.model.identity == "Professor"|| this.model.identity == "Student");
        this.formValidation = this.emailValidation && this.identityValidation && this.usernameValidation;
        if(this.formValidation){
            return true;
        }
        else{
            return false;
        }
    }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }


    users: any = [];
  
}
