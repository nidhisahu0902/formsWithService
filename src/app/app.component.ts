import { Component } from '@angular/core';
import { stringify } from 'querystring';
import { MemberService } from './services/member.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

constructor(public db1:AngularFirestore){

  this.getmembers()
}
getmembers()
{
  this.db1.collection("members").valueChanges().subscribe(res=>{
    console.log(res)

  })
}


}
