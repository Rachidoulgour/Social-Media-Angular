import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent} from './components/signup/signup.component';
import { LoginComponent} from './components/login/login.component';
import { ProfilComponent} from './components/profil/profil.component';
import { AuthenticGuard } from './authentic.guard';
import { UsersComponent } from './components/users/users.component';
import { UsereditComponent } from './components/useredit/useredit.component';
import { PublicationComponent } from './components/publication/publication.component';
import { PublicateComponent } from './components/publicate/publicate.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { UserComponent } from './components/user/user.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import {UserguardService} from './services/userguard.service'
import { TermsComponent } from './components/terms/terms.component';
import { PrivatepoliticsComponent } from './components/privatepolitics/privatepolitics.component';
import { HomeComponent } from './components/home/home.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { HomepublicationComponent } from './components/homepublication/homepublication.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'politics',
    component: PrivatepoliticsComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'cookies',
    component: CookiesComponent
  },
  {
    path: 'usuario/:id',
    component: UserComponent,
    canActivate: [UserguardService]
  },
  {
    path: 'perfil',
    component: ProfilComponent,
    canActivate: [UserguardService]
  },
  {
    path: 'editar-perfil',
    component: UsereditComponent,
    canActivate: [UserguardService]
  },
  {
    path: 'publicacion/:id',
    component: PublicationComponent,
    canActivate: [AuthenticGuard]
  },
  {
    path: 'home-publicacion/:id',
    component: HomepublicationComponent
    // canActivate: [AuthenticGuard]
  },
  {
    path: 'publicar',
    component: PublicateComponent,
    canActivate: [UserguardService]
  },
  {
    path: 'timeline',
    component: TimelineComponent,
    canActivate: [UserguardService]
  },
  {
    path: 'usuarios',
    component: UsersComponent,
    canActivate: [UserguardService]
  },
  {
    path: '*',
    component: NotfoundComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
