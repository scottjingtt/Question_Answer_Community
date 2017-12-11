import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { User } from '../models/user';
import { AlertService, UserService,AuthenticationService } from '../services/index';



@Component({
  selector: 'nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  currentUser: any = null;

  constructor(
    private authenticationService: AuthenticationService) { }



  ngOnInit() {
    if(localStorage.getItem('currentUser') != null){
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }else{
      this.currentUser = null;
    }
  }
  logout(){
    console.log("logout click");
    this.currentUser = null;
    this.authenticationService.logout();
    location.reload();
  }

  @Output()
  notify: EventEmitter<string> = new EventEmitter<string>();

  showPictureWall():void{
      this.notify.emit("picture-wall");
  }

}
