import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { ProfileComponent } from './profile/profile.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UnderconstructionComponent } from './underconstruction/underconstruction.component';
import { AboutComponent } from './about/about.component';
//import { homedir } from 'os';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { 
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'games', 
    component: UnderconstructionComponent
  },
  { 
    path: 'members', 
    component: MembersComponent
  },
  { 
    //path: 'members/:profile', 
    path: 'profile',
    component: ProfileComponent
  },
  { 
    path: 'about', 
    component: AboutComponent
  },
  { 
    path: '**', 
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }