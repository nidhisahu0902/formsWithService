import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMemberComponent } from './all-member/all-member.component';
import { EditMemberComponent } from './edit-member/edit-member.component';


const routes: Routes = [
  {path:"",component:AllMemberComponent},
  {path:"edit-member/:id",component:EditMemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
