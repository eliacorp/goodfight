import { Component, OnInit, HostListener, Inject, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import {PrismicService} from '../shared/prismic.service';
import {GlobalService} from '../shared/variables.service';
import {MatchMediaService} from '../shared/match-media.service';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import {IGoodlife } from './goodlife';
import * as d3 from "d3";

@Component({
  selector: 'app-goodlife',
  templateUrl: './goodlife.component.html',
  styleUrls: ['./goodlife.component.scss']
})
export class GoodlifeComponent implements OnInit {

//initiating variables
  errorMessage: string;
  goodlife: IGoodlife;
  radius = 10;
  public innerWidth: any;
  public innerHeight: any;
  selected:number
  @ViewChild('svgg') svgg:ElementRef;
  _this = this;
  isGradientVisible = false;
  gradientTop: number;
  gradientLeft: number;
  gradientRadius

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth/2;
    this.innerHeight = window.innerHeight;
  }

  // elementRef: ElementRef;
  // @ViewChild('svg')
  // chartElement: ElementRef;

  constructor(
    // elementRef: ElementRef,
    private _globalService: GlobalService,
    private _prismicService: PrismicService,
    public el: ElementRef<HTMLElement>,
    private _matchMediaService: MatchMediaService
  ){}
// first function upn start
  ngOnInit() {
    this._globalService.setLoading(true);
    if(!this.goodlife){
    this.getPage(1);
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    this.selected=0;
    }

  }

  ngAfterViewInit() {
    this.gradientRadius = this.el.nativeElement.getBoundingClientRect().width;
  }



  private onMouseover(): (d, i) => void {
      return (d, i) => {
        this.selected= d.index;
          // d3.select(d3.event.currentTarget).style({
          //     'fill': 'yellow'
          // });
          // this.logData(d);
      }
  }

  getPage(page): void{
    this._prismicService.getList('goodlif', page)
    .subscribe(
      data=>{
        if(page==1){
         this.goodlife=data;
         console.log(data);
          this._globalService.setLoading(false);
          this.force(this.goodlife.results);
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


    colorMe() {
      d3.select('button').style('color', 'red');
    }

    clicked(index) {
      this.selected= index;
      console.log(index);
      // d3.select(event.target).append('circle')
      //   .attr('cx', event.x)
      //   .attr('cy', event.y)
      //   .attr('r', () => {
      //     return this.radius;
      //   })
      //   .attr('fill', 'red');


    }


force(interviews){

  var nodes_data = interviews;
 var links_data = [
   {"source": "yukimatsuda", "target": "lingchou", "type":"A", "distance":100},
   {"source": "lingchou", "target": "yulinchu", "type":"A", "distance":70},
  {"source": "yulinchu", "target": "joshwarner", "type":"A", "distance":150},
    {"source": "joshwarner", "target": "jennyle", "type":"A", "distance":80},
    {"source": "jennyle", "target": "jeyperie", "type":"A", "distance":120},
    {"source": "jeyperie", "target": "aaronhutcherson", "type":"A", "distance":120}



]

if(this._matchMediaService.IsPhone()){
  width = this.innerWidth/2
  height = this.innerHeight/1.5
}else{
  width = this.innerWidth/2
  height = this.innerHeight
}

var svg = d3.select(this.svgg.nativeElement),
   width,
    height


     // +svg.attr("width"),



 //set up the simulation
//nodes only for now
var simulation = d3.forceSimulation()
              .nodes(nodes_data);

              //add forces
//we're going to add a charge to each node
//also going to add a centering force
simulation
    .force("charge_force", d3.forceManyBody())
    .force("center_force", d3.forceCenter((width/2), (height/2)));

//draw circles for the nodes

var node = svg
        .attr("class", "nodes")
        .selectAll("g")
        .data(nodes_data)
        .enter()
        .append("g")
        .attr("class", "nodes-g");




    node.on("click", this.onMouseover());

    // function(d:any){
    //
    //   this.selected= d.index;
    //   console.log(this);
    //     // d3.select(this).attr('r', 25)
    //     //     .style("fill","lightcoral")
    //     //     .style("stroke","red");
    // }



    //
    // svg.prototype.onMouseover = function () {
    //     var _this = this;
    //     return function (d, i) {
    //       _this.selected= d.index;
    //       console.log(svg);
    //     };
    // };

    // node.append("image")
    //     .attr("xlink:href",  function(d:any) { return d.data.cover[0].image.url;})
    //     .attr("width", 100)
    //     .attr("height", 100)
//add interviewee
    node.append("text")
    // .attr("x", 0 )
    // .attr("y", 0)
    // .attr("dy", ".35em")
    .text(function(d:any) { return d.data.interviewee[0].text});

//add interview
    node.append("text")
    .text(function(d:any) { return d.data.interviewee[0].text});


    //Function to choose what color circle we have
    //Let's return blue for males and red for females
    function circleColour(d){
        if(d.sex =="M"){
            return "blue";
        } else {
            return "pink";
        }
    }



    //draw lines for the links
    var link = svg.append("g")
          .attr("class", "links")
          .selectAll("line")
          .data(links_data)
          .enter().append("line")
          .attr("stroke-width", 2)
          .style("stroke", linkColour);

    //Function to choose the line colour and thickness
    //If the link type is "A" return green
    //If the link type is "E" return red
    function linkColour(d){
        console.log(d);
        if(d.type == "A"){
            return "green";
        } else {
            return "red";
        }
    }

function tickActions() {
    //update circle positions to reflect node updates on each tick of the simulation
    node
    .attr("transform", function(d:any) { return "translate("+d.x+","+d.y+")"})
        // .attr("x", function(d:any) { return d.x; })
        // .attr("y", function(d:any) { return d.y; })

    //update link positions
    //simply tells one end of the line to follow one node around
    //and the other end of the line to follow the other node around
    link
        .attr("x1", function(d:any) { return d.source.x; })
        .attr("y1", function(d:any) { return d.source.y; })
        .attr("x2", function(d:any) { return d.target.x; })
        .attr("y2", function(d:any) { return d.target.y; });
  }


  simulation.on("tick", tickActions );

  //Create the link force
//We need the id accessor to use named sources and targets
var link_force =  d3.forceLink(links_data)
                        .id(function(d:any) { console.log(d); return d.uid; })
                        .distance(function(d) {return d.distance;}).strength(0.1)

simulation.force("links",link_force)





// Error: <circle> attribute cx: Expected length, "NaN".





//drag

var drag_handler = d3.drag()
    .on("start", drag_start)
    .on("drag", drag_drag)
    .on("end", drag_end);

function drag_start(d:any) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function drag_drag(d:any) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function drag_end(d:any) {
  if (!d3.event.active) simulation.alphaTarget(0.1);
  d.fx = null;
  d.fy = null;
}

drag_handler(node);

}//end of d3 fn







// gradient


@HostListener('mouseenter')
onMouseEnter() {
  this.isGradientVisible = true;
}

@HostListener('mouseleave')
onMouseLeave() {
  this.isGradientVisible = false;
}

@HostListener('mousemove', ['$event'])
onMouseMove(event: MouseEvent) {
  this.gradientLeft = event.pageX - this.el.nativeElement.offsetLeft;
  this.gradientTop = event.pageY - this.el.nativeElement.offsetTop;
}


get gradientStyle() {
  const top = this.gradientTop;
  const left = this.gradientLeft;
  const gradientRadius = this.isGradientVisible ? this.gradientRadius : 0;

  return {
    'height.px': gradientRadius*1.2,
    'width.px': gradientRadius*1.2,
    'top.px': top
    // 'left.px': left
  };
}



}
