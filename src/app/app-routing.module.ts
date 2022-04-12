import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { MydataComponent } from './components/mydata/mydata.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sidebar', component: SidebarComponent },
  {
    path: 'merchant',
    component: MydataComponent,
    children: [
      {
        path: 'merchant-registration',
        component: MydataComponent,
      },
      {
        path: 'merchant-activation',
        component: MydataComponent,
      },
      {
        path: 'list-merchant',
        component: MydataComponent,
      },
      {
        path: 'sub-merchant',
        component: MydataComponent,
      },
      {
        path: 'list-admin-user',
        component: MydataComponent,
      },
    ],
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
