import { Component, OnInit, HostListener, Inject, EventEmitter, Output } from '@angular/core';
import {PrismicService} from '../shared/prismic.service';
import {GlobalService} from '../shared/variables.service';
import { Location, DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
       // console.log(this.feed);
       if(!this.feed){
         this.getPage(1);
       }
     }



     getPage(page): void{
       this._feedService.getList('contact', page)
       .subscribe(
         feed=>{
           if(page==1){
             this.feed=feed;
             this.dataLoaded.emit('data loaded in contact component');
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
