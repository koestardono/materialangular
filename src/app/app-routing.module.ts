import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MylogactivityComponent } from './components/mydata/mylogactivity/mylogactivity.component';
import { MyprofileComponent } from './components/mydata/myprofile/myprofile.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sidebar', component: SidebarComponent },
  // otherwise redirect to home
  // { path: '**', redirectTo: '' },
  {
    path: 'my-data',
    loadChildren: () => import('../app/components/mydata/mydata.module').then(m => m.MyDataModule)
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
