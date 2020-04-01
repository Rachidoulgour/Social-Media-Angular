
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';

import { PublicationService} from '../../services/publication.service';
import { User } from '../../interfaces/User';


import { Publication} from '../../interfaces/Publication';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  identity;
  token;
  url: string;
  status: string;
  page;
  total;
  pages;
  itemsPerPage: any;
  publications: Publication[];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private publicationService: PublicationService
  ) { 
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    
    this.page = 1;
  }

  ngOnInit() {
    this.getPublications(this.page);
  }
  getPublications(page){
    this.publicationService.getPublications(page).subscribe(
      res=>{
        console.log(res)
      },
      err=>{

      }
    )
  }

}
