import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MessagesService } from 'src/app/services/messages.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from 'src/app/interfaces/Message';

@Component({
  selector: 'app-readmessage',
  templateUrl: './readmessage.component.html',
  styleUrls: ['./readmessage.component.scss']
})
export class ReadmessageComponent implements OnInit {
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
  id: any;
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
    this.loadPage()
  }
  loadPage(){
    this.route.params.subscribe(params=>{
      let id = params['emitterid'];
      console.log("ID",id)
      this.getMessagesByEmitter(this.token,id, this.page)
    }
      
    )
  }
  getMessagesByEmitter(token, id, page){
    console.log(id)
    this.messagesService.getMessagesByEmitter(token,id,page).subscribe(
      res=>{
        
        if(!res.messages){
          
          
        }else{
          console.log(res)
          this.messages = res.messages;
          console.log(this.messages)
          this.total = res.total;
          this.pages = res.pages;
        }
      },
      err=>{
        console.log(err)
      }
    );
  }
}
