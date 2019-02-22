import { Component, Input, OnInit, OnChanges, HostListener} from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { GlobalService } from '../shared/variables.service';
import { ResponsiveModule } from 'ng2-responsive';
import { RESPONSIVE_DIRECTIVE } from 'ng2-responsive/responsive';
import {MatchMediaService} from '../shared/match-media.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('navState', [
      state('0', style({
        top:'0'
      })),
      state('1',   style({
        top:'90vh'
      })),
      state('3',   style({
        top:'auto'
      })),
      transition('0 => 1', animate('500ms ease-in')),
      transition('1 => 0', animate('500ms ease-out'))
    ]),
    trigger('navUlState', [
      state('0', style({
      })),
      state('1',   style({
      })),
      transition('0 => 1', animate('500ms ease-in')),
      transition('1 => 0', animate('500ms ease-out'))
    ])
  ]
})

export class NavComponent implements OnInit {

     // route: string;
     private fragment: string;

     getSegment: Function= (url, index) =>{
       return url.replace(/^https?:\/\//, '').split('/')[index];
    };

    doSmth(reachedTarget: boolean): void {
     if (reachedTarget) {
         console.log('Yeah, we reached our destination');
     } else {
         console.log('Ohoh, something interrupted us');
     }
   }

     constructor(
       private route: ActivatedRoute,
       location: Location,
       router: Router,
       public _globalService: GlobalService,
       public _responsiveModule: ResponsiveModule,
       public _matchMediaService: MatchMediaService) { }


      ngOnInit() {
        this._globalService.toggleNav();
      }

      gotoHashtag(fragment: string) {
        console.log('using go to hashtag');
        const element = document.querySelector("#" + fragment);
        if (element) element.scrollIntoView({behavior: 'smooth'});
      }


      // @HostListener('window:resize', ['$event'])
      // onResize(event) {
      //   console.log(event);
      //   event.target.innerWidth;
      //   this._globalService.toggleNav();
      // }












}
