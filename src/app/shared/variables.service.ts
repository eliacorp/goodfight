import { Injectable, Input, HostListener, Directive } from "@angular/core";
import { ResponsiveModule } from 'ng2-responsive';
import { MatchMediaService } from './match-media.service';
import { Router } from '@angular/router';

@Directive()
@Injectable()
export class GlobalService {
    public pageLoading=true;
    public isStyling=false;
    public isAbout=false;
    public isSplash: boolean;
    public scrollPosition: number = 0;
    public logoOpacity: number = 1;
    public isHome:boolean;
   @Input() isNav='0';

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

        if(this._matchMediaService.IsPhone()){
          if(this.isNav=='0'){this.isNav='1'}
          else{this.isNav='0'}
        }else{
          this.isNav='3';
        }

        console.log(this.isNav);
        // if(DEVICES_DIRECTIVES.devices_directives_1.isMobile){
        //
        // }

      }




}
