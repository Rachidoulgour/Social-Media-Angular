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
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private publicationService: PublicationService
  ) { 
    // this.identity = this.userService.getIdentity();
    // this.user=this.identity;
    // this.token = this.userService.getToken();
    
    this.page = 1;
  }

  ngOnInit() {
    //this.getPublication(this.token,this.user._id,this.page);
  }

  // getPublication(token,user, page, adding=false){
  //   console.log(user)
  //   this.publicationService.getPublicationsUser(token,user,page).subscribe(
  //     res=>{
  //       console.log(res);
        

  //     },
  //     err=>{
  //       const errorMessage = err;
  //       console.log(errorMessage);
  //       if(errorMessage!=null){
  //         this.status= 'error'
  //       }
  //     }
  //   )
  // }


}
