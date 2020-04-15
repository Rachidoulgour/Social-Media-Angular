import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { User } from '../../interfaces/User';
import { UserService } from '../../services/user.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {
  title: string;
  user:User;
  identity;
  token;
  status: string;
  private URL = 'http://localhost:3500/api';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private uploadService:UploadService,
  ) { 
      this.user=<User><unknown>userService.getIdentity();
      this.identity=this.user;
      this.token=userService.getToken();
  }

  ngOnInit() {
  }
    userEdit(){
    console.log(this.user)
     this.userService.updateUser(this.user).subscribe(
       res=>{
         console.log(res)
        if(!res){
          this.status = 'error';
          
        }else{
          this.status = 'success';
          localStorage.setItem('user', JSON.stringify(this.user));
          this.identity= this.user;
          console.log(this.identity)
          this.uploadService.makeFileRequest(this.URL+'/update-avatar/'+this.user._id, [], this.filesToUpload, this.token, 'avatar')
                    .then((result:any)=>{
                      console.log(result);
                      this.user.avatar = result.user.avatar;
                      localStorage.setItem('identity', JSON.stringify(this.user));
                      this.router.navigate(['/perfil', this.identity._id]);
                    })

        }

       },
      err=>{
        const messageError = err;
        console.log(messageError);
        if(messageError != null){
          this.status = 'error'
        }
      }
     )
   }
   filesToUpload: Array<File>;
  fileChangeEvent(fileInput:any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
