import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css']
})
export class EditMemberComponent implements OnInit {


 member:{name:string,age:string}=null
index=null;
  constructor(public memberService:MemberService,public router:Router,public route:ActivatedRoute) { 

  }

  ngOnInit() {
   // this.index=this.memberService.selectedIndex
   console.log(this.route.snapshot.paramMap.get("id"))
   this.index=this.route.snapshot.paramMap.get("id")
    this.member=this.memberService.getMember(this.index)
  }
  save(){
    this.memberService.editMember(this.index,this.member)
    this.router.navigateByUrl("")
  }

}
