import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import {AppRoute} from './class/app-route';
import { AlertComponent } from './alert/alert.component';
import { FooterComponent } from './footer/footer.component';
import { BlogsComponent } from './blogs/blogs.component';
import {BlogsService} from './pl-blog/blogs.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AirtcleComponent } from './airtcle/airtcle.component';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    SidenavComponent,
    AlertComponent,
    FooterComponent,
    BlogsComponent,
    HomeComponent,
    AirtcleComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(AppRoute),
    HttpClientModule
  ],
  providers: [BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
