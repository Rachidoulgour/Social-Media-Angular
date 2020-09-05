import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {MessagesService} from '../../services/messages.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  token: string;
  unreed: number;
  isActive:boolean = false;


  constructor(public userService: UserService,
    private messagesService:MessagesService) {
      this.token = this.userService.getToken();
     }

  ngOnInit() {
    //this.getUnreedMessages(this.token)
  }
  // getUnreedMessages(token){
  //   this.messagesService.getUnreedMessages(token).subscribe(
  //     res=>{
  //       this.unreed = res['unviewed'];
  //     },
  //     err=>{
  //       console.log(err)
  //     }
  //   );
  // }
}
