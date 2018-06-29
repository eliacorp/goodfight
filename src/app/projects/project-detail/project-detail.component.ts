import { Component, OnInit } from '@angular/core';
import {PrismicService} from '../../shared/prismic.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  detail: Object;
  error: Object;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _feedService: PrismicService
  ) { }

  ngOnInit() {
    let id = this._route.snapshot.params['id'];
    let type = this._route.snapshot.url["0"].path;
    // console.log(type, id);

     this._feedService.getSingle(type,id)
     .subscribe(
       data=>this.detail=data,
       error=>this.error=<any>error
     );

     // console.log(this.detail);
     // console.log('how did we do?');
  }

}
