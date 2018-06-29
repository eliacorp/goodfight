import { Component, OnInit, HostListener, Inject, ElementRef, ViewChild} from '@angular/core';
import {PrismicService} from '../../shared/prismic.service';
import {GlobalService} from '../../shared/variables.service';
// import {IFeed}from './feed';
import { DOCUMENT } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { fadeAnimation, routerTransition } from './../../_animation/router.animation';

// import fade in animation
// import { fadeInAnimation } from './../../_animation/index';

@Component({
  // selector: 'app-feed',
  templateUrl: './project-feed.component.html',
  styleUrls: ['./project-feed.component.scss'],
  // ,
  // make fade in animation available to this component
  animations: [routerTransition, fadeAnimation]
  //
  // // attach the fade in animation to the host (root) element of this component
  // host: { '[@routerTransition]': '' }
})

export class ProjectFeedComponent implements OnInit {



 public container;
  public innerHeight: number = window.innerHeight;
  pageTitle: string = 'Product List';
  paginationInProcess: boolean=false;
  listFilter: string;
  errorMessage: string;
  feed: any;
  private scroll = 0;
  imgloading: boolean = true



     constructor(
       private _globalService: GlobalService,
       private _feedService: PrismicService,
       @Inject(DOCUMENT) private document: Document,
       private router: Router
     ){}


     ngOnInit(): void{
      this._globalService.setLoading(true);
       console.log('ng on init');
       console.log(this.feed);
       if(!this.feed){
         this.getPage(1);
       }
       this.router.events.subscribe(() => {
        window.scrollTo(0, 0);
      });
     }

     ngAfterViewInit(){
       this._globalService.isHome=false;
     }

     getPage(page): void{
       this.paginationInProcess=true;
       this._feedService.getFeed('projects', page)
       .subscribe(
         feed=>{
           if(page==1){
             this.feed=feed;
             this._globalService.setLoading(false);
           }else{this.concatResults(feed)}
           this.paginationInProcess=false;
         },
         error=>{
           console.log('there was an error');
           this.errorMessage=error;
           this._globalService.setLoading(false);
         }
       );
     }


     concatResults(obj): void{
       console.log("concat results")
      this.feed.results= this.feed.results.concat(obj.results);
      this.feed.page=obj.page;
      this.feed.total_pages=obj.total_pages;
      this.feed.prev_page=obj.prev_page;

      console.log(this.feed);
     }

     onLoad() {
      this.imgloading = false;
     }

  scrollHorizontal(value, id, e):void{
    e.preventDefault();
    console.log(id);
    let containerWidth = window.innerWidth - 100;
      // @ViewChild('container')  container: ElementRef;
    // this.container.nativeElement.scrollLeft( 300 );
    // this.container.nativeElement.animate({
    //   scrollLeft: window.innerWidth
    // },800);
    this.container = document.getElementById("container-"+id);
    console.log(this.container.scrollLeft);
    this.scroll=this.container.scrollLeft;

  if(value==0){
    this.scroll-=containerWidth;
    console.log(0);
  }else if(value==1){
    this.scroll+=containerWidth;
    console.log(1);
  }

    this.container.scrollTo({ left: this.scroll, top: 0, behavior: 'smooth' });
  }



  @HostListener("window:scroll", [])
   onWindowScroll() {
     let number = this.document.body.scrollTop;
     console.log(window.innerHeight);
     var body = document.body, html = document.documentElement;
     var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
     var windowBottom = window.innerHeight + window.pageYOffset;
     if ((windowBottom >= docHeight) &&(this.paginationInProcess==false)) {
         // alert('bottom reached');
         if(this.feed){
           if((this.feed.page+1)<this.feed.total_pages){
             this.getPage(this.feed.page+1);
           }
         }
     }
   }



}
