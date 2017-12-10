import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService,AlertService } from '../services/index';
import {Router} from '@angular/router';


@Component({
  selector: 'app-notice-edit',
  templateUrl: './notice-edit.component.html',
  styleUrls: ['./notice-edit.component.css']
})
export class NoticeEditComponent implements OnInit {

  currentUser: User;
  tempemail:String;
  model:any={};
  users:any = [];

  constructor(private userService: UserService,
      private router: Router,
      private alertService: AlertService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.model = this.currentUser;
  }

  ngOnInit() {
       this.loadAllUsers();
  }
  loading = false;

  update() {
    this.model._id = this.currentUser._id;
    this.loading = true;
            let someArray = this.users;               
            for (let entry of someArray) {                
              entry.notice=this.currentUser.notice;              
              this.userService.update(entry)
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
  
loadAllUsers() {
  this.userService.getAll().subscribe(users => { this.users = users; });
}

loadAll(){
  this.userService.getAll().subscribe(users =>
      {
        this.users = users; 
    });
}


}

