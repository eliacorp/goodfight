import { Component, OnInit, HostListener, Inject, EventEmitter, Output } from '@angular/core';
import {PrismicService} from '../shared/prismic.service';
import {GlobalService} from '../shared/variables.service';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    public innerHeight: number = window.innerHeight;
    pageTitle: string = 'Product List';
    paginationInProcess: boolean=false;
    listFilter: string;
    errorMessage: string;
    feed: any;
    @Output() dataLoaded = new EventEmitter<string>();


       constructor(
         private _globalService: GlobalService,
         private _feedService: PrismicService,
         @Inject(DOCUMENT) private document: Document
       ){}

      //  toggleImage(): void {
      //    this.showImage = !this.showImage;
      //  }



       ngOnInit(): void{
        this._globalService.setLoading(true);
         if(!this.feed){
           this.getPage(1);
         }
       }

       getPage(page): void{
         this._feedService.getFeed('about', page)
         .subscribe(
           feed=>{
             if(page==1){
               this.feed=feed;
               this.dataLoaded.emit('data loaded in about component');
             }else{
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
