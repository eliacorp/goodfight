import { Component, OnInit, AfterViewInit, Inject, ViewChild, ElementRef, HostListener } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { GlobalService } from '../shared/variables.service';
import { Location } from '@angular/common';
import { fadeAnimation, routerTransition } from './../_animation/router.animation';
import { ActivatedRoute, Params, Router, NavigationExtras, NavigationEnd } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // make fade in animation available to this component
  animations: [routerTransition, fadeAnimation]
  // // attach the fade in animation to the host (root) element of this component
  // host: { '[@routerTransition]': '' }
})
export class HomeComponent implements OnInit{

  private fragment: string;
  private scrollExecuted: boolean = false;
  counter: number = 0;

  constructor(
    private _globalService: GlobalService,
    location: Location,
    private _route: ActivatedRoute,
    private _router: Router,
    @Inject(DOCUMENT) private document: any
  ) {}

  /**
   * Scroll to anchor
   *
   * @param {string} location Element id
   * @param {string} wait     Wait time in milliseconds
   */

  public scrollToAnchor(location: string, wait: number): void {
    const element = document.querySelector('#' + location)
    console.log('inside of scroll to anchor');
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'})
      }, wait)
    }
  }

  onNotify(message:string):void {
    console.log(message);
    this.counter++;
    console.log(message, this.counter);
    if (this.counter > 4){
      this._route.fragment
        .subscribe(
          (fragment: string) => {
            console.log('onNotify loaded fragment exists');
            if (fragment){
             console.log('scrolling with onNotify');
              this.scrollToAnchor(fragment, 800);
            }
          }
        );
    }
  }

  ngOnInit() {
    console.log('ng on init');
    this._globalService.isSplash=false;
    this._globalService.isHome=true;
  }



      @HostListener("window:scroll", ['$event'])
      onWindowScroll(event) {
        this._globalService.scrollPosition =window.pageYOffset;
        this._globalService.logoOpacity =1-(window.pageYOffset/window.innerHeight);
console.log("scroll")
        if(window.pageYOffset <= window.innerHeight){
          this._globalService.isSplash=false;
        }else if(window.pageYOffset > window.innerHeight){
          this._globalService.isSplash=true;
        }else{this._globalService.isSplash=true;console.log(this._globalService.isSplash);}
       //we'll do some stuff here when the window is scrolled
      }


}
