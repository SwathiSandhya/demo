import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { AdministrativeComponent } from './administrative/administrative.component';
import { ContentComponent } from './content/content.component';
import { RegistorPageComponent } from './registor-page/registor-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignoutComponent,
    AdministrativeComponent,
    ContentComponent,
    RegistorPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
