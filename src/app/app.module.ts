import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import {MatSelectModule} from '@angular/material/select';



import { AppRoutingModule } from './app-routing.module';
import { MessagesModule } from './messages/messagecomponents/messages.module'
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
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

import {UserService} from './services/user.service'
import {UserguardService} from './services/userguard.service';
import { TermsComponent } from './components/terms/terms.component';
import { PrivatepoliticsComponent } from './components/privatepolitics/privatepolitics.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CookiesComponent } from './components/cookies/cookies.component'
import { MaterialModule } from './material/material.module';
import { HomepublicationComponent } from './components/homepublication/homepublication.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
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
    TermsComponent,
    PrivatepoliticsComponent,
    HeaderComponent,
    HomeComponent,
    NotfoundComponent,
    CookiesComponent,
    HomepublicationComponent,
    
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
    MomentModule,
    MatSelectModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    UserService,
    UserguardService,
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
