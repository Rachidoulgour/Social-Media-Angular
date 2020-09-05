import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { PublicationService} from '../../services/publication.service'
import { Publication } from 'src/app/interfaces/publication';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
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
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.token = this.userService.getToken();
    this.page = 1;
  }

  ngOnInit() {
    this.loadPage();
  }
  loadPage(){
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.getUser(id);
      this.getUserPublication(this.token, id, this.page)
    }
      
    )
  }
  getUser(id){
    this.userService.getUser(id).subscribe(
      res=>{
        this.user = res;
      },
      err=>{
        this.router.navigate(['/perfil', this.identity._id]);
      }
    )
  }
  getUserPublication(token, id, page){
    this.publicationService.getPublicationsUser(token, id, page).subscribe(
      (res:any)=>{
       this.total=res['total_items'];
       this.pages = res['pages'];
       this.publications=res.publications;
      },
      err=>{
       console.log(err);
      }
    )
  }
}
