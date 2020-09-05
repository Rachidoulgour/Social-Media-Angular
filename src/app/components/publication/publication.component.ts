import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';
import { PublicationService} from '../../services/publication.service';
import { Publication} from '../../interfaces/publication';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  public identity;
  public token;
  public url: string;
  public status: string;
  public page;
  public total;
  public pages;
  public itemsPerPage;
  public publications: Publication[];
  error500;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private publicationService: PublicationService
  ) { 
    this.identity = this.userService.getIdentity();
    this.page = 1;
  }

  ngOnInit() {
    this.loadPage();
  }
   loadPage(){
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.getPublicationById(this.token, id)
    }
      
    )
  }
  
  getPublicationById(token, id){
    console.log(id)
    this.publicationService.getPublicationById(token, id).subscribe(
      (res:any)=>{
       console.log(res);
        this.publications=res['publication'];
      },
      err=>{
       console.log(err);
       if(err.status ===500){
        console.log("error awi")
        this.error500=err.status
      }
      }
    )
  }
}




