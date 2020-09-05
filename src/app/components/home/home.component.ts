import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';

import { PublicationService} from '../../services/publication.service';
import {MessagesService} from '../../services/messages.service';
import { User } from '../../interfaces/User';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

import { Publication} from '../../interfaces/Publication';
import { environment } from '../../../environments/environment.prod';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
  durationInSeconds = 5;
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private publicationService: PublicationService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { 
    this.identity = this.userService.getIdentity();
    
    this.page = 1;
  }

  ngOnInit() {
    this.getHomePublications(this.page);
    this.openSnackBar();
  }
  openSnackBar() {
    this._snackBar.openFromComponent(CovidAlertComponent, {
      duration: this.durationInSeconds * 1000,
      verticalPosition: this.verticalPosition,
    });
  }
  
  getHomePublications(page, adding=false){
    this.publicationService.getHomePublications(page).subscribe(
      (res:any)=>{
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
    if (this.publications.length === this.total){
      this.noMore = true;
    }else{
      this.page+=1;
    }
    this.getHomePublications(this.page, true);
  }
  refresh($event=null){
    this.getHomePublications(this.page);
  }
 
  
}
@Component({
  selector: 'snack-bar-component',
  templateUrl: 'snack-bar-component.html',
  styles: [`
    .covid-message {
      color: hotpink;
    }
  `],
})
export class CovidAlertComponent {}
