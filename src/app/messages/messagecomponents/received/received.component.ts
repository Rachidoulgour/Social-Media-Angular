import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MessagesService } from 'src/app/services/messages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'src/app/interfaces/Message';

@Component({
  selector: 'app-received',
  templateUrl: './received.component.html',
  styleUrls: ['./received.component.scss']
})
export class ReceivedComponent implements OnInit {
  message: Message;
  identity;
  token;
  url: string;
  status: string;
  messages:Message[];
  page;
  pages;
  next_page;
  prev_page;
  total;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private messagesService: MessagesService,
    private userService: UserService
  ) { 
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
  }

  ngOnInit(): void {
    this.actualPage();
  }
  actualPage(){
    this.route.params.subscribe(params =>{
      
      let page = +params['page'];
      this.page = page;
      if(!params['page']){
        page=1
      }
      if(!page){
        page = 1
      }else{
        this.next_page=page+1;
        this.prev_page=page-1;
        if(this.prev_page<=0){
          this.prev_page=1;
        }
      }
      this.getMessages(this.token, this.page);
    });
  }
  getMessages(token, page){
    this.messagesService.getMessages(token, page).subscribe(
      res=>{
        
        if(!res['messages']){
        this.status="error"
          
        }else{
          this.messages = res['messages'];
          this.total = res['total'];
          this.pages = res['pages'];
        }
      },
      err=>{
        console.log(err)
      }
    );
  }
}
