import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativeComponent } from './administrative/administrative.component';
import { ContentComponent } from './content/content.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegistorPageComponent } from './registor-page/registor-page.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';


const routes: Routes = [
  { path: '', redirectTo: '/header/content', pathMatch: 'full' },
  {
    path: 'header', component: HeaderComponent, children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signout', component: SignoutComponent },
      { path: 'administrative', component: AdministrativeComponent },
      { path: 'registor', component: RegistorPageComponent },
      { path: 'content', component: ContentComponent },
     
     ]
  },
  
  
  { path: 'home', component: HomeComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
