import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { ReceivedComponent } from './received/received.component';
import { SendedComponent } from './sended/sended.component';
import { ReadmessageComponent } from './readmessage/readmessage.component';

import {UserguardService} from '../../services/userguard.service';

const messagesRoutes:Routes = [
    {
        path: 'mensajes',
        component: MainComponent,
        children:[
            {path: '', redirectTo:'recibidos', pathMatch: 'full'},
            {path: 'enviar/:id', component: AddComponent, canActivate: [UserguardService]},
            {path: 'recibidos', component: ReceivedComponent, canActivate: [UserguardService]},
            {path: 'recibidos/:page', component: ReceivedComponent, canActivate: [UserguardService]},
            {path: 'enviados', component: SendedComponent, canActivate: [UserguardService]},
            {path: 'enviados/:page', component: SendedComponent, canActivate: [UserguardService]},
            {path: 'leer-mensajes/:emitterid', component: ReadmessageComponent, canActivate: [UserguardService]}
        ]
}
];

@NgModule({
    imports: [RouterModule.forChild(messagesRoutes)],
    exports: [RouterModule]
  })

export class MessagesRoutingModule { }