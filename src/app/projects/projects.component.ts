import { Component, OnInit, HostListener, Inject, EventEmitter, Output } from '@angular/core';
import {PrismicService} from '../shared/prismic.service';
import {GlobalService} from '../shared/variables.service';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public innerHeight: number = window.innerHeight;
  pageTitle: string = 'Product List';
  paginationInProcess: boolean=false;
  listFilter: string;
  errorMessage: string;
  feed: any;
  private svgs = [{val:0,id:'/assets/images/chair.svg',xpos:0},{val:1,id:'/assets/images/light.svg',xpos:1},{val:2,id:'/assets/images/statue.svg',xpos:2}];
  // [{img:'/assets/images/chair.svg'},{img:'/assets/images/light.svg'},{img:'/assets/images/statue.svg'}]
  @Output() dataLoaded = new EventEmitter<string>();


     constructor(
       private _globalService: GlobalService,
       private _feedService: PrismicService,
       @Inject(DOCUMENT) private document: Document
     ){}

     ngOnInit(): void{
      this._globalService.setLoading(true);
       if(!this.feed){
         this.getPage(1);
       }
     }

     getAbsPos(index){
        console.log(index);
        return {left:index*20+'vw'};
      }

    swap(){
       var a= this.svgs[0];
       var c = this.svgs[2];

       //reorder the array first, since xpos did not change, no animation will be triggered
       this.svgs[0] = c;
       this.svgs[2] = a;

       //update the xpos value in async, which will trigger an animation
       setTimeout(() => {
         var tempX = a.xpos;
         a.xpos = c.xpos;
         c.xpos = tempX;
       }, 10);

     }

     getPage(page): void{
       this._feedService.getFeed('projects_landing', page)
       .subscribe(
         feed=>{
           if(page==1){
             this.feed=feed;
            this.dataLoaded.emit('data loaded in projects component');
             // console.log('in projects landing feed');
             // console.log(this.feed);
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
