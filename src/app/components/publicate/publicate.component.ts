import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/User';
import { Publication} from '../../interfaces/Publication';
import { PublicationService} from '../../services/publication.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-publicate',
  templateUrl: './publicate.component.html',
  styleUrls: ['./publicate.component.scss']
})
export class PublicateComponent implements OnInit {
  
  public identity;
  public token;
  public status;
  file: File;
  photoSelected: string | ArrayBuffer;
  public publication:Publication;
  constructor(
    private userService:UserService, 
    private publicationSrtvice:PublicationService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    //this.stats = this.userService.getStats();
    //this.publication = Publication('', '', '', "", this.identity._id);
    this.publication = {
      _id: "",
      text: "",
      file: "",
      created_at: "",
      user: this.identity._id
    }
  }

  ngOnInit() {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
    
  }
  // uploadPhoto(title: HTMLInputElement, description: HTMLTextAreaElement): boolean{
  //   console.log(title.value)
  //   // console.log(description.value)
  //   this.publicationSrtvice.addPublication(title.value, description.value, this.file, this.token)
  //   .subscribe(res => {this.router.navigate(['/photos']);
  //   }, err => console.log(err));
  //   return false;
  // }

  onSubmit($event){
    console.log(this.publication)
    this.publicationSrtvice.addPublication(this.token,this.publication).subscribe(
      res=>{

        //   
      },
      err=>{
        const errorMessage = err;
        console.log(errorMessage);
        if(errorMessage!=null){
          this.status= 'error'
        }
      }
    )
  }

  public filesToUpload:Array<File>;
  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }


}
