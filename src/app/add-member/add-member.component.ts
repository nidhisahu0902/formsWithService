import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  name:string="";
  age=""
  constructor(public memberService:MemberService) { }

  ngOnInit() {
  }

  addname()
  {
    let NewMember = {name:this.name,age:this.age}
    this.memberService.addmember(NewMember)
   // this.members.push(NewMember);
  
    this.name=""
    this.age=""
  }

}
