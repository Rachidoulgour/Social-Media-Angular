import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';

import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { ReceivedComponent } from './received/received.component';
import { SendedComponent } from './sended/sended.component';
import { ReadmessageComponent } from './readmessage/readmessage.component';
import { MomentModule } from 'ngx-moment';

import {UserService} from '../../services/user.service';
import {UserguardService} from '../../services/userguard.service';



@NgModule({
    declarations:[
        MainComponent,
        AddComponent,
        ReceivedComponent,
        SendedComponent,
        ReadmessageComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        MessagesRoutingModule,
        MomentModule
    ],
    exports:[
        MainComponent,
        AddComponent,
        ReceivedComponent,
        SendedComponent
    ],
    providers: [
        UserService,
        UserguardService
    ]
})
export class MessagesModule { }