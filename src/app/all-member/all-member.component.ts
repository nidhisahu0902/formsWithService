import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-all-member',
  templateUrl: './all-member.component.html',
  styleUrls: ['./all-member.component.css']
})
export class AllMemberComponent implements OnInit {

  members=[]


  constructor(public memberService:MemberService){
      this.members=this.memberService.gelAllMembers()
  }

  ngOnInit() {
  }

}
