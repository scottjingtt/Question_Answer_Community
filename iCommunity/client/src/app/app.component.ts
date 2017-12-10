import { Component } from '@angular/core';
import { User } from './models/user';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'app';
  currentUser: User;
  constructor(private userService: UserService) {
    if(localStorage.getItem('currentUser') != null){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }else{
      this.currentUser = null;
    }
}

  ngOnInit() {
    // this.loadAllUsers();
    this.loadUser();
    // this.alertService.error("return URL: " + this.route.snapshot.queryParams['returnUrl']);
}
loadUser(){
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}
}
