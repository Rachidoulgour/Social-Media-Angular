import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { ReceivedComponent } from './received/received.component';
import { SendedComponent } from './sended/sended.component';

const messagesRoutes:Routes = [
    {
        path: 'mensajes',
        component: MainComponent,
        children:[
            {path: '', redirectTo:'recibidos', pathMatch: 'full'},
            {path: 'enviar/:id', component: AddComponent},
            {path: 'recibidos', component: ReceivedComponent},
            {path: 'recibidos/:page', component: ReceivedComponent},
            {path: 'enviados', component: SendedComponent},
            {path: 'enviados/:page', component: SendedComponent}
        ]
}
];

@NgModule({
    imports: [RouterModule.forChild(messagesRoutes)],
    exports: [RouterModule]
  })

export class MessagesRoutingModule { }