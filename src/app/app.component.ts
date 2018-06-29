import { Component, HostBinding, HostListener, OnInit} from '@angular/core';
import { GlobalService } from './shared/variables.service';
import { PrismicService } from './shared/prismic.service';
import { routerTransition, fadeAnimation } from './_animation/router.animation';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

// import {}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[PrismicService],
  animations: [ routerTransition, fadeAnimation]

})
export class AppComponent{
  title = 'app works!';
  route: string;
  constructor(private _globalService: GlobalService, location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path();
        console.log(this.route);
      }
      else {
        this.route = 'home'
      }
    });
  }

getState(outlet) {
  return outlet.activatedRouteData.state;
}




  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display')   display = 'block';
  // @HostBinding('style.position')  position = 'absolute';
}
