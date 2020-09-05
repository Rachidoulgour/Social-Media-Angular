
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';

import { PublicationService} from '../../services/publication.service';
import {MessagesService} from '../../services/messages.service';
import { User } from '../../interfaces/User';
import {MatDialog} from '@angular/material/dialog';

import { Publication} from '../../interfaces/Publication';
import { environment } from '../../../environments/environment.prod';

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
  private URL = environment.URL;
  unreed: number;
  error500;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private publicationService: PublicationService,
    private messagesService:MessagesService,
    public dialog: MatDialog
  ) { 
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    
    this.page = 1;
  }

  ngOnInit() {
    this.getPublications(this.page);
    this.getUnreedMessages(this.token);
  }
  
  getPublications(page, adding=false){
    this.publicationService.getPublications(this.token, page).subscribe(
      (res:any)=>{
        console.log(res)
        this.total=res['total_items'];
        this.pages = res['pages'];
        this.itemsPerPage=res['items_per_page'];
        if (!adding){
          this.publications=res['publications'];
        }else{
          let arrayA=this.publications;
          let arrayB=res['publications'];
          this.publications=arrayA.concat(arrayB);
        }
        if(page>this.pages){
        }
      },
      err=>{
        console.log(err)
        if(err.status ===500){
          this.error500=err.status
        }
      }
    )
  }
  noMore=false;
  viewMore(){
    if (this.publications.length == this.total){
      this.noMore = true;
    }else{
      this.page+=1;
    }
    this.getPublications(this.page, true);
  }
  refresh($event=null){
    this.getPublications(this.page);
    this.getUnreedMessages(this.token);
  }
  deletePublication(id){
      const dialogRef = this.dialog.open(Delete);
  
      dialogRef.afterClosed().subscribe(result => {
        if(result){
          this.publicationService.deletePublication(this.token, id).subscribe(
            res=>{
              this.refresh()
            },
            err=>{
              console.log(err);
            }
          )
        }
      });
   
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
@Component({
  selector: 'delete',
  templateUrl: 'delete.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class Delete {
  
}