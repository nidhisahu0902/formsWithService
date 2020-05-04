import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { TransformPipe } from './pipes/transform.pipe';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { AllMemberComponent } from './all-member/all-member.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    AddMemberComponent,
    MemberCardComponent,
    TransformPipe,
    EditMemberComponent,
    
    AllMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
