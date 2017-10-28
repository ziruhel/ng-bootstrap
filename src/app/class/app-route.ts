
import { Routes } from '@angular/router';
import {AccordionComponent} from "../accordion/accordion.component";
import {AlertComponent} from "../alert/alert.component";
import {BlogsComponent} from "../blogs/blogs.component";
import {HomeComponent} from "../home/home.component";
import {AirtcleComponent} from "../airtcle/airtcle.component";

export const AppRoute: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'accordion',
    component: AccordionComponent
  },
  {
    path: 'alert',
    component: AlertComponent
  },
  {
    path: 'blogs',
    component: BlogsComponent
  },

  {
    path: 'blogs/article/:id/:slug',
    component: AirtcleComponent
  }


];
