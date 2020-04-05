import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PublicationService} from '../../services/publication.service'
import { Publication } from 'src/app/interfaces/publication';

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

  constructor(
    private userService:UserService,
    private publicationService:PublicationService, 
    // private followSrtvice:FollowService,
    private route: ActivatedRoute,
    private router: Router
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
      //let id = params['id'];
      let id= this.identity._id
      let user_id = id;
      //let id = user._id
      console.log(params)
      this.getUser(id);
      //this.getCounters(id);
      this.getUserPublication(this.token, user_id, this.page)
    }
      
    )
  }
  getUser(id){
    this.userService.getUser(id).subscribe(
      res=>{
        console.log(res)
        this.user = res;
        console.log(this.user);
        // if(res.user){
        //   this.user = res.user

        //   if(res.following && res.following._id){
        //     this.following = true;
        //   }else{
        //     this.following = false;
        //   }

        //   if(res.followed && res.followed._id){
        //     this.followed = true;
        //   }else{
        //     this.followed = false;
        //   }
        // }else{
        //   this.status = 'error';
        // }

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
        console.log(res);
        this.total=res.total_items;
        this.pages = res.pages;
        this.publications=res.publications;
       },
       err=>{
        console.log(err);
       }
     )
   }
  

}
