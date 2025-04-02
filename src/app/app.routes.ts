import { Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AddEntryComponent } from './add-entry/add-entry.component';
import { AboutThisPageComponent } from './about-this-page/about-this-page.component';
import { AboutTheAuthorComponent } from './about-the-author/about-the-author.component';

export const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    title: 'Search Page',
  },
  {
    path: 'add',
    component: AddEntryComponent,
    title: 'Add Entry Page',
  },
  {
    path: 'about',
    component: AboutThisPageComponent,
    title: 'About this page',
  },
  {
    path: 'dev',
    component: AboutTheAuthorComponent,
    title: 'About the dev',
  },
];
