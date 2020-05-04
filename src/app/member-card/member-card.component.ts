import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../services/member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css']
})
export class MemberCardComponent implements OnInit {

  @Input("member") member;
  @Input("index") index;
  constructor(public memberservice:MemberService,public router:Router) { }

  ngOnInit() {
  }

del(){
    this.memberservice.delMember(this.index)
}
edit(){
 // this.memberservice.selectedIndex=this.index
  this.router.navigateByUrl("/edit-member/"+this.index)
}

}
