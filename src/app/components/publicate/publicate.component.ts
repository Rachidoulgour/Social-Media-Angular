import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/User';
import { Publication} from '../../interfaces/Publication';
import { PublicationService} from '../../services/publication.service';
import { UploadService} from '../../services/upload.service';
import {MatSelectModule} from '@angular/material/select';
import { environment } from '../../../environments/environment.prod';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
interface City {
  name: string;
}
interface Genre {
  name: string;
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
  

  cities: City[] = [
    {name: 'Álava'},
    {name: 'Albacete'},
    {name: 'Alicante'},
    {name: 'Almería'},
    {name: 'Asturias'},
    {name: 'Ávila'},
    {name: 'Badajoz'},
    {name: 'Barcelona'},
    {name: 'Burgos'},
    {name: 'Cáceres'},
    {name: 'Cádiz'},
    {name: 'Cantabria'},
    {name: 'Castellón'},
    {name: 'Ciudad Real'},
    {name: 'Córdoba'},
    {name: 'Cuenca'},
    {name: 'Girona'},
    {name: 'Granada'},
    {name: 'Guadalajara'},
    {name: 'Gipuzkoa'},
    {name: 'Huelva'},
    {name: 'Huesca'},
    {name:'Jaen'},
    {name: 'A Coruña'},
    {name: 'La Rioja'},
    {name: 'Las Palmas'},
    {name: 'León'},
    {name: 'Lugo'},
    {name: 'Madrid'},
    {name: 'Malaga'},
    {name: 'Murcia'},
    {name: 'Navarra'},
    {name: 'Ourense'},
    {name: 'Palencia'},
    {name: 'Pontevedra'},
    {name: 'Salamanca'},
    {name: 'Santa Cruz de Tenerife'},
    {name: 'Segovia'},
    {name: 'Sevilla'},
    {name: 'Soria'},
    {name: 'Tarragona'},
    {name: 'Teruel'},
    {name: 'Toledo'},
    {name: 'Valencia'},
    {name: 'Valladolid'},
    {name: 'Vizcaya'},
    {name: 'Zamora'},
    {name: 'Zaragoza'}
  ];

  genres: Genre[] = [
    {name: 'Literatura Narrativa'},
    {name: 'Poesía'},
    {name: 'Teatro'},
    {name: 'Aventura'},
    {name: 'Ciencia ficción'},
    {name: 'Terror'},
    {name: 'Humor'},
    {name: 'Ciencias humanas y sociales'},
    {name: 'Politica'},
    {name: 'Hitoria'},
    {name: 'Cocina'},
    {name: 'Psiclogía y pedagogía'},
    {name: 'Autoayuda'},
    {name: 'Idiomas'},
    {name: 'Juvenil'},
    {name: 'Infantil'},
    {name: 'Escolar'},
    {name: 'Medicina y salud'},
    {name: 'Economía y derecho'},
    {name: 'Comics y manga'},
    {name: 'Otro'},
  ];

  private URL =environment.URL;
  pub: any;
  constructor(
    private userService:UserService, 
    private publicationSrtvice:PublicationService,
    private uploadService:UploadService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.identity = this.userService.getIdentity();
    this.token = this.userService.getToken();
    this.publication = {
      _id: "",
      title: "",
      text: "",
      file: "",
      genre: "",
      city: "",
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

  onSubmit($event){
    console.log(this.publication)
    this.publicationSrtvice.addPublication(this.token,this.publication).subscribe(
      res=>{
        if(this.filesToUpload && this.filesToUpload.length){
          //subir imagen
        this.uploadService.makeFileRequest(this.URL+'/upload-image-pub/'+res['publication']._id,[], this.filesToUpload, this.token, 'image')
        .then((result:any)=>{
          this.publication.file =result.image;
          console.log(result)
          this.router.navigate(['/timeline']);
          this.status = 'success';
        });
        }else{
          this.router.navigate(['/timeline']);
          this.status = 'success';
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
