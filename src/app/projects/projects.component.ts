import { Component, OnInit, HostListener, Inject, EventEmitter, Output } from '@angular/core';
import {PrismicService} from '../shared/prismic.service';
import {GlobalService} from '../shared/variables.service';
import { Location, DOCUMENT } from '@angular/common';


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




     getPage(page): void{
       this._feedService.getList('projects_landing', page)
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
