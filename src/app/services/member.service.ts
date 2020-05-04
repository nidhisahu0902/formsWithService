import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  members=[]
//  selectedIndex=null
  constructor() { 
  
  }


  addmember(member:{name:string,age:string}){
    this.members.push(member)
    console.log(this.members)

  }
  delMember(i){
    this.members.splice(i,1)

  }
  gelAllMembers(){
      return this.members
  }
  editMember(index,member:{name:string,age:string}){
    this.members[index]=member
  }
  getMember(index){
    if(this.members[index])
    {
      return this.members[index]
    }
    else
    {
      return false
    }

  }
}
