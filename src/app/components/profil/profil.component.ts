import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PublicationService} from '../../services/publication.service'
import { Publication } from 'src/app/interfaces/publication';
import { MessagesService } from 'src/app/services/messages.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user: any;
  following: boolean;
  followed: boolean;
  status: string;
  identity: any;
  token: string;
  page: number;
  total: any;
  pages: any;
  publications:Publication[];
  unreed: number;
  URL =environment.URL;

  constructor(
    private userService:UserService,
    private publicationService:PublicationService, 
    private route: ActivatedRoute,
    private router: Router,
    private messagesService:MessagesService
  ) { 
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    this.page = 1;
  }

  ngOnInit() {
    this.loadPage();
  }
  loadPage(){
    this.route.params.subscribe(params=>{
      let id= this.identity._id
      let user_id = id;
      this.getUser(id);
      this.getUserPublication(this.token, user_id, this.page)
    }
      
    )
    this.getUnreedMessages(this.token);
  }
  getUser(id){
    this.userService.getUser(id).subscribe(
      res=>{
        console.log(res)
        this.user = res;
      },
      err=>{
        console.log(err);
        this.router.navigate(['/perfil', this.identity._id]);
      }
    )
  }
   getUserPublication(token, user_id, page){
     this.publicationService.getPublicationsUser(token, user_id, page).subscribe(
       (res:any)=>{
        this.total=res.total_items;
        this.pages = res['pages'];
        this.publications=res.publications;
       },
       err=>{
        console.log(err);
       }
     )
   }
   getUnreedMessages(token){
    this.messagesService.getUnreedMessages(token).subscribe(
      res=>{
        this.unreed = +res['unviewed'];
      },
      err=>{
        console.log(err)
      }
    );
  }

}
