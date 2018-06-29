import { Component, OnInit, HostListener, Inject, EventEmitter, Output } from '@angular/core';
import {PrismicService} from '../shared/prismic.service';
import {GlobalService} from '../shared/variables.service';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import {IPress} from './press';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
  // ,animations: [fadeInAnimation],
  // // // attach the fade in animation to the host (root) element of this component
  // host: { '[@fadeInAnimation]': '' }
})
export class PressComponent implements OnInit {

    public innerHeight: number = window.innerHeight;
    pageTitle: string = 'Product List';
    paginationInProcess: boolean=false;
    listFilter: string;
    errorMessage: string;
    press: IPress;
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
         // console.log('ng on init');
         // console.log('in press component');
         if(!this.press){
           this.getPage(1);
         }
       }

       getPage(page): void{
         this._feedService.getFeed('press', page)
         .subscribe(
           press=>{
             if(page==1){
               this.press=press;
               this.dataLoaded.emit('data loaded in press component');
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
