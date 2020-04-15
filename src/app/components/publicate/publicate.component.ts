import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/User';
import { Publication} from '../../interfaces/Publication';
import { PublicationService} from '../../services/publication.service';
import { UploadService} from '../../services/upload.service';

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
  private URL = 'http://localhost:3500/api';
  constructor(
    private userService:UserService, 
    private publicationSrtvice:PublicationService,
    private uploadService:UploadService,
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
        
        //console.log(res.publication._id)
        
        if(this.filesToUpload && this.filesToUpload.length){
          //subir imagen
        this.uploadService.makeFileRequest(this.URL+'/upload-image-pub/'+res.publication._id,[], this.filesToUpload, this.token, 'image')
        .then((result:any)=>{
          this.publication.file =result.image;
          console.log(result)
          this.router.navigate(['/timeline']);
          this.status = 'success';
          //this.sended.emit({send:true});
        });
        }else{
          this.router.navigate(['/timeline']);
          this.status = 'success';
          //this.sended.emit({send:true});
        }
          
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
