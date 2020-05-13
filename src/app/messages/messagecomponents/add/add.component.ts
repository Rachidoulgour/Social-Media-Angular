import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/Message';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MessagesService } from 'src/app/services/messages.service';
import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
   message: Message;
   identity;
   token;
   user;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private messagesService: MessagesService,
    private userService: UserService
  ) { 
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    this.message =  {_id:'',text:'',viewed:'',created_id:'',emitter:this.identity._id,receiver:""};
  }

  ngOnInit(): void {
    this.loadPage();
  }
  loadPage(){
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.getUser(id);
    }
      
    )
  }
  getUser(id){
    this.userService.getUser(id).subscribe(
      res=>{
        console.log(res)
        this.user=res
        
      },
      err=>{
        console.log(err);
        this.router.navigate(['/perfil', this.identity._id]);
      }
    )
  }
  onSubmit(){
    console.log(this.message);
    this.messagesService.addMessage(this.token, this.message).subscribe(
      res=>{
        if(res){
          console.log(res)
        }
      },
      err=>{
        console.log(err)
      }
    )
  }
}
