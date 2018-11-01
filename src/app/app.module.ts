import { BrowserModule} from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { ShareComponent } from './share/share.component';
import { LogoComponent } from './logo/logo.component';
import { LogotypeComponent } from './logo/logotype.component';
import { HomeComponent } from './home/home.component';
// import {StylingComponent} from './styling/styling.component';
// import {StylingDetailComponent} from './styling/styling-detail/styling-detail.component';
import { GlobalService } from './shared/variables.service';
import { EncodeURIPipe } from './shared/encodeURI.pipe';
import { ResponsiveModule } from 'ng2-responsive';
import { PressComponent } from './press/press.component';
import { PressFeedComponent } from './press/press-feed/press-feed.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectFeedComponent } from './projects/project-feed/project-feed.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { SharedModule } from './shared/shared.module';
import { EditorialComponent } from './editorial/editorial.component';
import { GoodlifeComponent } from './goodlife/goodlife.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    NavComponent,
    ShareComponent,
    LogoComponent,
    LogotypeComponent,
    EncodeURIPipe,
    PressComponent,
    PressFeedComponent,
    ProjectsComponent,
    ProjectFeedComponent,
    ProjectDetailComponent,
    EditorialComponent,
    GoodlifeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ResponsiveModule,
    RouterModule.forRoot([
      {path:'', redirectTo: 'goodlife', pathMatch: 'full'},
      // about anchors to link on homepage
      {path: 'about', component: AboutComponent, pathMatch: 'full' },
      {path: 'goodlife', component: GoodlifeComponent, pathMatch: 'full' },
      // contact anchors to link on homepage
      {path: 'contact', component: ContactComponent, pathMatch: 'full' },
      {path: 'editorial', component: EditorialComponent, data: { state: 'editorial' } },
      // {path: 'editorial/:id', component: EditorialDetailComponent, data: { state: 'projectdetail' } },
      {path: 'press', component: PressFeedComponent, pathMatch: 'full' },
      {path: '**', redirectTo: '', pathMatch: 'full'}
    ])
  ],
  // providers: [GlobalService],
  bootstrap: [AppComponent]


})
export class AppModule { }
