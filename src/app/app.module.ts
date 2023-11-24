import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AssignmentModule } from './assignment/assignment.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
];
@NgModule({
  declarations: [AppComponent, HomeComponent, AboutComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
})
export class AppModule {}
