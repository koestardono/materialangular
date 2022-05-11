import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/_helpers/auth.guard';
import { MyprofileComponent } from './myprofile/myprofile.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [
      {
        path: 'my-profile',
        component: MyprofileComponent,
        canActivate: [AuthGuard],
        data: {
          title: 'My Profile'
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyDataRoutingModule { }
