import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import {FeedModule} from './feed/feed.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { ShareComponent } from './share/share.component';
import { LogoComponent } from './logo/logo.component';
import { LogotypeComponent } from './logo/logotype.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
// import {StylingComponent} from './styling/styling.component';
// import {StylingDetailComponent} from './styling/styling-detail/styling-detail.component';
import {FeedDetailComponent} from './feed/feed-detail/feed-detail.component';
import { GlobalService } from './shared/variables.service';
import { EncodeURIPipe } from './shared/encodeURI.pipe';
import { ResponsiveModule } from 'ng2-responsive';
import { PressComponent } from './press/press.component';
import { PressFeedComponent } from './press/press-feed/press-feed.component';
import { SplashGraphicComponent } from './splash-graphic/splash-graphic.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectFeedComponent } from './projects/project-feed/project-feed.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import {ArrowComponent} from './shared/arrow/arrow.component';
import {SharedModule} from './shared/shared.module';

const appRoutes: Routes= [
  {path:'', component: HomeComponent, pathMatch: 'full'},
  // about anchors to link on homepage
  {path: 'about', component: AboutComponent, data: { state: 'about'} },
  {path: 'home', redirectTo: '', pathMatch: 'full' },
  // contact anchors to link on homepage
  {path: 'contact', component: ContactComponent, data: { state: 'contact'} },
  {path: 'projects', component: ProjectFeedComponent, data: { state: 'projectfeed' } },
  {path: 'projects/:id', component: ProjectDetailComponent, data: { state: 'projectdetail' } },
  {path: 'press', component: PressFeedComponent, data: { state: 'pressfeed' } },
  {path: '**', redirectTo: '', pathMatch: 'full'}
]

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
    SplashGraphicComponent,
    ProjectsComponent,
    ProjectFeedComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    FeedModule,
    BrowserAnimationsModule,
    ResponsiveModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
