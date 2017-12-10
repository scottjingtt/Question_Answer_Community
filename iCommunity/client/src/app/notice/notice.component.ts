import { Component} from '@angular/core';
import { User } from '../models/user';
import { UserService,AlertService } from '../services/index';

@Component({
  selector: 'notice',
  templateUrl: './notice.component.html'
})
export class NoticeComponent {

  currentUser: User;  

  constructor(private userService: UserService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      console.log(JSON.stringify(this.currentUser));
      //localStorage.setItem('currentUser',JSON.stringify(currentUser));
  }

}
