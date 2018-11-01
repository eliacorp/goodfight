import { Component, OnInit} from '@angular/core';
import {PrismicService} from '../shared/prismic.service';
import {GlobalService} from '../shared/variables.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.scss']
})
export class EditorialComponent implements OnInit {

  editorial:any
  errorMessage:any

  constructor(
    private _globalService: GlobalService,
    private _prismicService: PrismicService,
  ) { }

  ngOnInit() {
    this._globalService.setLoading(true);
  }

  getPage(page): void{
    this._prismicService.getList('editorial', page)
    .subscribe(
      data=>{
        if(page==1){
         this.editorial=data;
         console.log(data);
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
