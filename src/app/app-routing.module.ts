import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoListComponent} from './components/photo-list/photo-list.component'
import {PhotoFormComponent} from './components/photo-form/photo-form.component';
import {PhotoPreviewComponent} from './components/photo-preview/photo-preview.component';
import { SignupComponent} from './components/signup/signup.component';
import { LoginComponent} from './components/login/login.component';
import { ProfilComponent} from './components/profil/profil.component';
import { AuthenticGuard } from './authentic.guard';
import { UsersComponent } from './components/users/users.component';
import { UsereditComponent } from './components/useredit/useredit.component';
import { PublicationComponent } from './components/publication/publication.component';
import { PublicateComponent } from './components/publicate/publicate.component';
import { TimelineComponent } from './components/timeline/timeline.component';

const routes: Routes = [
  {
    path: 'photos',
    component: PhotoListComponent
  },
  {
    path:'photos/new',
    component: PhotoFormComponent
  },
  {
    path: 'photos/:id',
    component: PhotoPreviewComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'perfil',
    component: ProfilComponent,
    canActivate: [AuthenticGuard]
  },
  {
    path: 'editar-perfil',
    component: UsereditComponent,
    canActivate: [AuthenticGuard]
  },
  {
    path: 'publications',
    component: PublicationComponent,
    canActivate: [AuthenticGuard]
  },
  {
    path: 'publicar',
    component: PublicateComponent,
    canActivate: [AuthenticGuard]
  },
  {
    path: 'timeline',
    component: TimelineComponent,
    canActivate: [AuthenticGuard]
  },
  {
    path: 'usuarios',
    component: UsersComponent,
    canActivate: [AuthenticGuard]
  },
  {
    path: '',
    redirectTo: '/photos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
