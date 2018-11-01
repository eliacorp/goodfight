import { Component, OnInit, HostListener, Inject } from '@angular/core';
import {PrismicService} from '../../shared/prismic.service';
import {GlobalService} from '../../shared/variables.service';
// import {IFeed}from './feed';
import { DOCUMENT } from '@angular/platform-browser';
// import fade in animation
import { fadeAnimation, routerTransition } from './../../_animation/router.animation';

@Component({
  // selector: 'app-feed',
  templateUrl: './press-feed.component.html',
  styleUrls: ['./press-feed.component.scss'],
  // make fade in animation available to this component
  animations: [routerTransition, fadeAnimation],
  // // attach the fade in animation to the host (root) element of this component
  host: { '[@routerTransition]': '' }
})
export class PressFeedComponent implements OnInit {

  public innerHeight: number = window.innerHeight;
  pageTitle: string = 'Product List';
  paginationInProcess: boolean=false;
  listFilter: string;
  errorMessage: string;
  press: any;


     constructor(
       private _globalService: GlobalService,
       private _feedService: PrismicService,
       @Inject(DOCUMENT) private document: Document
     ){}


     ngOnInit(): void{
       this._globalService.isHome=false;
      this._globalService.setLoading(true);
       console.log('ng on init');
       console.log(this.press);
       if(!this.press){
         this.getPage(1);
       }
     }

     getPage(page): void{
       this._feedService.getList('press', page)
       .subscribe(
         press=>{
           if(page==1){
             this.press=press;
             console.log('in feed');
             console.log(this.press);
             this._globalService.setLoading(false);
           }else{
             console.log('in else block');
          }
         },
         error=>{
           console.log('there was an error');
           this.errorMessage=error;
           this._globalService.setLoading(false);
         }
       );
     }


}
