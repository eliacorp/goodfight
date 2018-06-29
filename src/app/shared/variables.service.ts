import {Injectable, Input, HostListener} from "@angular/core";
import { ResponsiveModule } from 'ng2-responsive';
import { MatchMediaService } from './match-media.service';
import { Router } from '@angular/router';

@Injectable()
export class GlobalService {
    public pageLoading=true;
    public isStyling=false;
    public isAbout=false;
    public isSplash: boolean;
    public scrollPosition: number = 0;
    public logoOpacity: number = 1;
    public isHome:boolean;


   @Input() navState='0';

    constructor(private _matchMediaService: MatchMediaService){}

    setLoading(val) {
      this.pageLoading = val;
    }
    setSplash(val):void{
      this.isSplash=val;
    }



    getValue(val) {
      return this.pageLoading;
    }



    toggleNav(){

      this.navState=='0' ? this.navState='1' : this.navState='0';

      // if(this._matchMediaService.IsPhone()){
      //   if(this.navState=='0'){this.navState='1'}
      //   else{this.navState='0'}
      // }else{
      //   this.navState='3';
      // }

      console.log(this.navState);
      // if(DEVICES_DIRECTIVES.devices_directives_1.isMobile){
      //
      // }

    }




}
