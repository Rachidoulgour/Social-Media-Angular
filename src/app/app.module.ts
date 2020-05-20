import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { MomentModule } from 'ngx-moment';

import { AppRoutingModule } from './app-routing.module';
import { MessagesModule } from './messages/messagecomponents/messages.module'
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';

import { AuthenticGuard } from './authentic.guard';
import {TokenService} from './services/token.service';
import { UsersComponent } from './components/users/users.component';
import { UsereditComponent } from './components/useredit/useredit.component';
import { PublicationComponent } from './components/publication/publication.component';
import { PublicateComponent } from './components/publicate/publicate.component';
import { TimelineComponent, Delete } from './components/timeline/timeline.component';
import { UserComponent } from './components/user/user.component'
import { MatDialogModule } from '@angular/material/dialog';
import {OverlayModule} from '@angular/cdk/overlay';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddComponent } from './messages/messagecomponents/add/add.component';
import { MainComponent } from './messages/messagecomponents/main/main.component';
import { ReceivedComponent } from './messages/messagecomponents/received/received.component';
import { SendedComponent } from './messages/messagecomponents/sended/sended.component';
import { ReadmessageComponent } from './messages/messagcomponents/readmessage/readmessage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PhotoFormComponent,
    PhotoPreviewComponent,
    PhotoListComponent,
    SignupComponent,
    LoginComponent,
    ProfilComponent,
    UsersComponent,
    UsereditComponent,
    PublicationComponent,
    PublicateComponent,
    TimelineComponent,
    Delete,
    UserComponent,
    //ReadmessageComponent,
    // AddComponent,
    // MainComponent,
    // ReceivedComponent,
    // SendedComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    OverlayModule,
    BrowserAnimationsModule,
    MessagesModule,
    MomentModule
  ],
  providers: [
    AuthenticGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents:[Delete]
})
export class AppModule { }
