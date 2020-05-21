import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {MessagesService} from '../../services/messages.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
