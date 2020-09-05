import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';
import { PublicationService} from '../../services/publication.service';
import { Publication} from '../../interfaces/publication';

@Component({
  selector: 'app-homepublication',
  templateUrl: './homepublication.component.html',
  styleUrls: ['./homepublication.component.scss']
})
export class HomepublicationComponent implements OnInit {
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
    this.page = 1;
   }

  ngOnInit(): void {
    this.loadPage();
  }
  loadPage(){
    this.route.params.subscribe(params=>{
      let id = params['id'];
      this.getHomePublicationById(id)
    })
  }
  getHomePublicationById(id){
    console.log(id)
    this.publicationService.getHomePublicationById(id).subscribe(
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
