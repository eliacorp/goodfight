(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_animation/router.animation.ts":
/*!************************************************!*\
  !*** ./src/app/_animation/router.animation.ts ***!
  \************************************************/
/*! exports provided: routerTransition, fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ], { optional: true })
    ])
]);
var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    // route 'enter' transition
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        // styles at start of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        // styles at start of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }),
        // animation and styles at end of transition
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
    ])
    // trigger('fadeAnimation', [
    //     // route 'enter' transition
    //     transition(':enter', [
    //
    //         // styles at start of transition
    //         style({ opacity: 0 }),
    //
    //         // animation and styles at end of transition
    //         animate('0.5s', style({ opacity: 1 }))
    //     ]),
    //     transition(':leave', [   // :leave is alias to '* => void'
    //       animate('0.5s', style({ opacity: 0 }))
    //     ])
]);


/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"feed\" class=\"about\">\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal; }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\n.about {\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  background-color: #FFFFFF;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column; }\n\n.about .about-content {\n    width: 100vw;\n    height: 100vh;\n    display: block;\n    position: relative;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n\n.about .about-content img {\n      position: absolute;\n      display: block; }\n\n.about .about-content .about-title {\n      width: 400px;\n      left: 18vw;\n      top: 2vh; }\n\n.about .about-content .about-text {\n      width: 60vw;\n      left: 25vw;\n      top: 14vh; }\n\n.about .about-content .about-img {\n      height: 70vh;\n      left: 3vw;\n      top: 14vh; }\n\n@media only screen and (min-width: 1023px) and (max-width: 1280px) {\n      .about .about-content .about-title {\n        width: 300px;\n        left: 18vw;\n        top: 2vh; }\n      .about .about-content .about-text {\n        width: 60vw;\n        left: 30vw;\n        top: 12vh; }\n      .about .about-content .about-img {\n        height: 69vh;\n        left: 3vw;\n        top: 10vh; } }\n\n@media only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {\n      .about .about-content .about-title {\n        width: 300px;\n        left: 18vw;\n        top: 2vh; }\n      .about .about-content .about-text {\n        width: 60vw;\n        left: 28vw;\n        top: 12vh; }\n      .about .about-content .about-img {\n        height: 45vh;\n        left: 3vw;\n        top: 12vh; } }\n\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n      .about .about-content .about-title {\n        width: 50vw;\n        left: 8vw;\n        top: 1vh; }\n      .about .about-content .about-text {\n        width: 78vw;\n        left: 14vw;\n        top: 10vh; }\n      .about .about-content .about-img {\n        display: none; } }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/prismic.service */ "./src/app/shared/prismic.service.ts");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/variables.service */ "./src/app/shared/variables.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AboutComponent = /** @class */ (function () {
    function AboutComponent(_globalService, _feedService, document) {
        this._globalService = _globalService;
        this._feedService = _feedService;
        this.document = document;
        this.innerHeight = window.innerHeight;
        this.pageTitle = 'Product List';
        this.paginationInProcess = false;
        this.dataLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //  toggleImage(): void {
    //    this.showImage = !this.showImage;
    //  }
    AboutComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(true);
        if (!this.feed) {
            this.getPage(1);
        }
    };
    AboutComponent.prototype.getPage = function (page) {
        var _this = this;
        this._feedService.getList('about', page)
            .subscribe(function (feed) {
            if (page == 1) {
                _this.feed = feed;
                _this.dataLoaded.emit('data loaded in about component');
            }
            else {
            }
        }, function (error) {
            console.log('there was an error');
            _this.errorMessage = error;
            _this._globalService.setLoading(false);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AboutComponent.prototype, "dataLoaded", void 0);
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_shared_variables_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__["PrismicService"],
            Document])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<!-- <main [@routerTransition]=\"getState(o)\">\n  <router-outlet #o=\"outlet\"></router-outlet>\n</main> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal; }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\nhtml {\n  background-color: #000000; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/variables.service */ "./src/app/shared/variables.service.ts");
/* harmony import */ var _shared_prismic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/prismic.service */ "./src/app/shared/prismic.service.ts");
/* harmony import */ var _animation_router_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_animation/router.animation */ "./src/app/_animation/router.animation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import {}
var AppComponent = /** @class */ (function () {
    function AppComponent(_globalService, location, router) {
        var _this = this;
        this._globalService = _globalService;
        this.title = 'app works!';
        router.events.subscribe(function (val) {
            if (location.path() != '') {
                _this.route = location.path();
                console.log(_this.route);
            }
            else {
                _this.route = 'home';
            }
        });
    }
    AppComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            providers: [_shared_prismic_service__WEBPACK_IMPORTED_MODULE_2__["PrismicService"]],
            animations: [_animation_router_animation__WEBPACK_IMPORTED_MODULE_3__["routerTransition"], _animation_router_animation__WEBPACK_IMPORTED_MODULE_3__["fadeAnimation"]]
        }),
        __metadata("design:paramtypes", [_shared_variables_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _share_share_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./share/share.component */ "./src/app/share/share.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/logo/logo.component.ts");
/* harmony import */ var _logo_logotype_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./logo/logotype.component */ "./src/app/logo/logotype.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_encodeURI_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/encodeURI.pipe */ "./src/app/shared/encodeURI.pipe.ts");
/* harmony import */ var ng2_responsive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-responsive */ "./node_modules/ng2-responsive/index.js");
/* harmony import */ var ng2_responsive__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_responsive__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _press_press_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./press/press.component */ "./src/app/press/press.component.ts");
/* harmony import */ var _press_press_feed_press_feed_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./press/press-feed/press-feed.component */ "./src/app/press/press-feed/press-feed.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _projects_project_feed_project_feed_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projects/project-feed/project-feed.component */ "./src/app/projects/project-feed/project-feed.component.ts");
/* harmony import */ var _projects_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./projects/project-detail/project-detail.component */ "./src/app/projects/project-detail/project-detail.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _editorial_editorial_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./editorial/editorial.component */ "./src/app/editorial/editorial.component.ts");
/* harmony import */ var _goodlife_goodlife_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./goodlife/goodlife.component */ "./src/app/goodlife/goodlife.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"],
                _share_share_component__WEBPACK_IMPORTED_MODULE_10__["ShareComponent"],
                _logo_logo_component__WEBPACK_IMPORTED_MODULE_11__["LogoComponent"],
                _logo_logotype_component__WEBPACK_IMPORTED_MODULE_12__["LogotypeComponent"],
                _shared_encodeURI_pipe__WEBPACK_IMPORTED_MODULE_14__["EncodeURIPipe"],
                _press_press_component__WEBPACK_IMPORTED_MODULE_16__["PressComponent"],
                _press_press_feed_press_feed_component__WEBPACK_IMPORTED_MODULE_17__["PressFeedComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_18__["ProjectsComponent"],
                _projects_project_feed_project_feed_component__WEBPACK_IMPORTED_MODULE_19__["ProjectFeedComponent"],
                _projects_project_detail_project_detail_component__WEBPACK_IMPORTED_MODULE_20__["ProjectDetailComponent"],
                _editorial_editorial_component__WEBPACK_IMPORTED_MODULE_22__["EditorialComponent"],
                _goodlife_goodlife_component__WEBPACK_IMPORTED_MODULE_23__["GoodlifeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_21__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ng2_responsive__WEBPACK_IMPORTED_MODULE_15__["ResponsiveModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'goodlife', pathMatch: 'full' },
                    // about anchors to link on homepage
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], pathMatch: 'full' },
                    { path: 'goodlife', component: _goodlife_goodlife_component__WEBPACK_IMPORTED_MODULE_23__["GoodlifeComponent"], pathMatch: 'full' },
                    // contact anchors to link on homepage
                    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"], pathMatch: 'full' },
                    { path: 'editorial', component: _editorial_editorial_component__WEBPACK_IMPORTED_MODULE_22__["EditorialComponent"], data: { state: 'editorial' } },
                    // {path: 'editorial/:id', component: EditorialDetailComponent, data: { state: 'projectdetail' } },
                    { path: 'press', component: _press_press_feed_press_feed_component__WEBPACK_IMPORTED_MODULE_17__["PressFeedComponent"], pathMatch: 'full' },
                    { path: '**', redirectTo: '', pathMatch: 'full' }
                ])
            ],
            // providers: [GlobalService],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"feed\" class=\"contact\">\n  <!-- <h1>{{feed.results[\"0\"].data.contact.section_title.value[\"0\"].text}}</h1> -->\n  <!-- <ul>\n    <li\n    *ngFor=\"let item of feed.results['0'].data.contact.body.value\"\n    class=\"contact-item\"\n    >\n      <h2>{{item[\"non-repeat\"].title.value[\"0\"].text}}</h2>\n      <p>{{item[\"non-repeat\"].contact_info.value[\"0\"].text}}</p>\n    </li>\n  </ul> -->\n  <div class=\"contact-content\">\n    <div class=\"logo-wrap\">\n    </div>\n    <p></p>\n    <p></p>\n    <p></p>\n    <a href=\"mailto:info@gdfht.com\">info@gdfht.com</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal; }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\n.contact {\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: black; }\n\n.contact h2, .contact h3, .contact p {\n    color: black; }\n\n.contact-content {\n  position: relative;\n  margin: auto;\n  width: 40vw;\n  text-align: center; }\n\n.contact-content a {\n    font-size: 13px;\n    line-height: 1.7;\n    font-family: \"apercu_light\";\n    letter-spacing: 0px;\n    font-weight: 400;\n    text-align: left;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    width: 100%;\n    display: block;\n    text-align: center;\n    clear: both; }\n\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n      .contact-content a {\n        font-size: 11px;\n        line-height: 20px; } }\n\n.contact-item {\n  text-align: center;\n  margin: 3rem 0; }\n\n.contact-item p {\n    margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/prismic.service */ "./src/app/shared/prismic.service.ts");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/variables.service */ "./src/app/shared/variables.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ContactComponent = /** @class */ (function () {
    function ContactComponent(_globalService, _feedService, document) {
        this._globalService = _globalService;
        this._feedService = _feedService;
        this.document = document;
        this.innerHeight = window.innerHeight;
        this.pageTitle = 'Product List';
        this.paginationInProcess = false;
        this.dataLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //  toggleImage(): void {
    //    this.showImage = !this.showImage;
    //  }
    ContactComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(true);
        // console.log(this.feed);
        if (!this.feed) {
            this.getPage(1);
        }
    };
    ContactComponent.prototype.getPage = function (page) {
        var _this = this;
        this._feedService.getList('contact', page)
            .subscribe(function (feed) {
            if (page == 1) {
                _this.feed = feed;
                _this.dataLoaded.emit('data loaded in contact component');
                _this._globalService.setLoading(false);
            }
            else {
                console.log('in else block');
            }
        }, function (error) {
            console.log('there was an error');
            _this.errorMessage = error;
            _this._globalService.setLoading(false);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "dataLoaded", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_shared_variables_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__["PrismicService"],
            Document])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/editorial/editorial.component.html":
/*!****************************************************!*\
  !*** ./src/app/editorial/editorial.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"editorial\">\n\n</div>\n"

/***/ }),

/***/ "./src/app/editorial/editorial.component.scss":
/*!****************************************************!*\
  !*** ./src/app/editorial/editorial.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n"

/***/ }),

/***/ "./src/app/editorial/editorial.component.ts":
/*!**************************************************!*\
  !*** ./src/app/editorial/editorial.component.ts ***!
  \**************************************************/
/*! exports provided: EditorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorialComponent", function() { return EditorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/prismic.service */ "./src/app/shared/prismic.service.ts");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/variables.service */ "./src/app/shared/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditorialComponent = /** @class */ (function () {
    function EditorialComponent(_globalService, _prismicService) {
        this._globalService = _globalService;
        this._prismicService = _prismicService;
    }
    EditorialComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(true);
    };
    EditorialComponent.prototype.getPage = function (page) {
        var _this = this;
        this._prismicService.getList('editorial', page)
            .subscribe(function (data) {
            if (page == 1) {
                _this.editorial = data;
                console.log(data);
                _this._globalService.setLoading(false);
            }
            else {
                console.log('in else block');
            }
        }, function (error) {
            console.log('there was an error');
            _this.errorMessage = error;
            _this._globalService.setLoading(false);
        });
    };
    EditorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editorial',
            template: __webpack_require__(/*! ./editorial.component.html */ "./src/app/editorial/editorial.component.html"),
            styles: [__webpack_require__(/*! ./editorial.component.scss */ "./src/app/editorial/editorial.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_variables_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__["PrismicService"]])
    ], EditorialComponent);
    return EditorialComponent;
}());



/***/ }),

/***/ "./src/app/goodlife/goodlife.component.html":
/*!**************************************************!*\
  !*** ./src/app/goodlife/goodlife.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"goodlife\">\n <!-- *ngIf=\"goodlife\" -->\n\n\n\n <svg #svgg class=\"goodlife-svg\" width=\"60vw\" height=\"100vh\"></svg>\n\n\n\n\n<ul class=\"goodlife-interview\" *ngIf=\"goodlife\">\n  <div class=\"goodlife-intro\">\n    <h1>{{goodlife.results[selected].data.interviewee[0].text}}</h1>\n    <img class=\"goodlife-image\" src=\"{{goodlife.results[selected].data.cover[0].image.url}}\" alt=\"{{goodlife.results[selected].data.interviewee[0].text}}\">\n  </div>\n  <li class=\"goodlife-li\" *ngFor=\"let e of goodlife.results[selected].data.body\">\n    <div class=\"goodlife-question\" *ngFor=\"let q of e.items\">\n      <h3>{{q.question[0].text}}</h3>\n      <p>{{q.answer[0].text}}</p>\n    </div>\n\n  </li>\n</ul>\n\n<div class=\"goodlife-gradient\">\n  <div class=\"gradient\" [ngStyle]=\"gradientStyle\">\n  </div>\n</div>\n\n  <!-- <ul class=\"goodlife-ul\" *ngFor=\"let l of goodlife.results\">\n    <div class=\"goodlife-intro\">\n      <img src=\"{{l.data.cover[0].image.url}}\" alt=\"\">\n    </div>\n    <li class=\"goodlife-li\" *ngFor=\"let e of l.data.body\">\n      <div class=\"goodlife-question\" *ngFor=\"let q of e.items\">\n        <h3>{{q.question[0].text}}</h3>\n        <p>{{q.answer[0].text}}</p>\n      </div>\n\n    </li>\n  </ul> -->\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/goodlife/goodlife.component.scss":
/*!**************************************************!*\
  !*** ./src/app/goodlife/goodlife.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.goodlife {\n  height: auto; }\n.goodlife-image {\n  width: 30vw;\n  display: block; }\n.goodlife-ul {\n  width: 100%; }\n.goodlife-ul .goodlife-li {\n    padding-top: 150px; }\n.goodlife-ul .goodlife-li .goodlife-question {\n      margin-top: 25px; }\n.nodes {\n  width: 50vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 10vw;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  box-shadow: inset 0px 0px 40px 40px #f8f7ec; }\n.links line {\n  stroke: #999;\n  stroke-opacity: 0.6;\n  width: 100px; }\n.nodes circle {\n  stroke: #fff;\n  stroke-width: 1.5px; }\n.goodlife-interview {\n  position: fixed;\n  overflow-y: scroll;\n  left: 60vw;\n  width: 40vw;\n  height: 100vh;\n  top: 0;\n  padding-bottom: 150px; }\n.goodlife-interview h2 {\n    color: #3076BA; }\n.goodlife-interview .goodlife-li .goodlife-question {\n    margin-top: 25px; }\n:host {\n  position: relative; }\n.gradient {\n  position: absolute; }\n.content {\n  position: relative; }\n.goodlife-gradient {\n  position: fixed;\n  top: 0;\n  left: 10vw;\n  width: 50vw;\n  height: 100vh;\n  overflow: hidden;\n  z-index: -1; }\n.gradient {\n  position: absolute;\n  background: linear-gradient(#e66465, #9198e5);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  transition: width 0.2s ease, height 0.2s ease; }\n"

/***/ }),

/***/ "./src/app/goodlife/goodlife.component.ts":
/*!************************************************!*\
  !*** ./src/app/goodlife/goodlife.component.ts ***!
  \************************************************/
/*! exports provided: GoodlifeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodlifeComponent", function() { return GoodlifeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/prismic.service */ "./src/app/shared/prismic.service.ts");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/variables.service */ "./src/app/shared/variables.service.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoodlifeComponent = /** @class */ (function () {
    // elementRef: ElementRef;
    // @ViewChild('svg')
    // chartElement: ElementRef;
    function GoodlifeComponent(
    // elementRef: ElementRef,
    _globalService, _prismicService, el) {
        this._globalService = _globalService;
        this._prismicService = _prismicService;
        this.el = el;
        this.radius = 10;
        this._this = this;
        this.isGradientVisible = false;
    }
    GoodlifeComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth / 2;
        this.innerHeight = window.innerHeight;
    };
    // first function upn start
    GoodlifeComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(true);
        if (!this.goodlife) {
            this.getPage(1);
            this.innerWidth = window.innerWidth;
            this.innerHeight = window.innerHeight;
            this.selected = 0;
        }
    };
    GoodlifeComponent.prototype.ngAfterViewInit = function () {
        this.gradientRadius = this.el.nativeElement.getBoundingClientRect().width;
    };
    GoodlifeComponent.prototype.onMouseover = function () {
        var _this = this;
        return function (d, i) {
            _this.selected = d.index;
            // d3.select(d3.event.currentTarget).style({
            //     'fill': 'yellow'
            // });
            // this.logData(d);
        };
    };
    GoodlifeComponent.prototype.getPage = function (page) {
        var _this = this;
        this._prismicService.getList('goodlif', page)
            .subscribe(function (data) {
            if (page == 1) {
                _this.goodlife = data;
                console.log(data);
                _this._globalService.setLoading(false);
                _this.force(_this.goodlife.results);
            }
            else {
                console.log('in else block');
            }
        }, function (error) {
            console.log('there was an error');
            _this.errorMessage = error;
            _this._globalService.setLoading(false);
        });
    };
    GoodlifeComponent.prototype.colorMe = function () {
        d3__WEBPACK_IMPORTED_MODULE_3__["select"]('button').style('color', 'red');
    };
    GoodlifeComponent.prototype.clicked = function (index) {
        this.selected = index;
        console.log(index);
        // d3.select(event.target).append('circle')
        //   .attr('cx', event.x)
        //   .attr('cy', event.y)
        //   .attr('r', () => {
        //     return this.radius;
        //   })
        //   .attr('fill', 'red');
    };
    GoodlifeComponent.prototype.force = function (interviews) {
        var nodes_data = interviews;
        var links_data = [
            { "source": "lingchou", "target": "yukimatsuda", "type": "A", "distance": 40 },
            { "source": "yukimatsuda", "target": "noellecornelio", "type": "A", "distance": 50 },
            { "source": "noellecornelio", "target": "joshwarner", "type": "A", "distance": 70 },
            { "source": "joshwarner", "target": "aaronhutcherson", "type": "A", "distance": 50 }
            // {"source": "aaronhutcherson", "target": "lingchou", "type":"E", "distance":570}
        ];
        var svg = d3__WEBPACK_IMPORTED_MODULE_3__["select"](this.svgg.nativeElement), width = this.innerWidth / 2, height = this.innerHeight;
        // +svg.attr("width"),
        //set up the simulation
        //nodes only for now
        var simulation = d3__WEBPACK_IMPORTED_MODULE_3__["forceSimulation"]()
            .nodes(nodes_data);
        //add forces
        //we're going to add a charge to each node
        //also going to add a centering force
        simulation
            .force("charge_force", d3__WEBPACK_IMPORTED_MODULE_3__["forceManyBody"]())
            .force("center_force", d3__WEBPACK_IMPORTED_MODULE_3__["forceCenter"]((width / 2), (height / 2)));
        //draw circles for the nodes
        var node = svg
            .attr("class", "nodes")
            .selectAll("g")
            .data(nodes_data)
            .enter()
            .append("g");
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
            .text(function (d) { return d.data.interviewee[0].text; });
        //add interview
        node.append("text")
            .text(function (d) { return d.data.interviewee[0].text; });
        //Function to choose what color circle we have
        //Let's return blue for males and red for females
        function circleColour(d) {
            if (d.sex == "M") {
                return "blue";
            }
            else {
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
        function linkColour(d) {
            console.log(d);
            if (d.type == "A") {
                return "green";
            }
            else {
                return "red";
            }
        }
        function tickActions() {
            //update circle positions to reflect node updates on each tick of the simulation
            node
                .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; });
            // .attr("x", function(d:any) { return d.x; })
            // .attr("y", function(d:any) { return d.y; })
            //update link positions
            //simply tells one end of the line to follow one node around
            //and the other end of the line to follow the other node around
            link
                .attr("x1", function (d) { return d.source.x; })
                .attr("y1", function (d) { return d.source.y; })
                .attr("x2", function (d) { return d.target.x; })
                .attr("y2", function (d) { return d.target.y; });
        }
        simulation.on("tick", tickActions);
        //Create the link force
        //We need the id accessor to use named sources and targets
        var link_force = d3__WEBPACK_IMPORTED_MODULE_3__["forceLink"](links_data)
            .id(function (d) { console.log(d); return d.uid; })
            .distance(function (d) { return d.distance; }).strength(0.1);
        simulation.force("links", link_force);
        // Error: <circle> attribute cx: Expected length, "NaN".
        //drag
        var drag_handler = d3__WEBPACK_IMPORTED_MODULE_3__["drag"]()
            .on("start", drag_start)
            .on("drag", drag_drag)
            .on("end", drag_end);
        function drag_start(d) {
            if (!d3__WEBPACK_IMPORTED_MODULE_3__["event"].active)
                simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }
        function drag_drag(d) {
            d.fx = d3__WEBPACK_IMPORTED_MODULE_3__["event"].x;
            d.fy = d3__WEBPACK_IMPORTED_MODULE_3__["event"].y;
        }
        function drag_end(d) {
            if (!d3__WEBPACK_IMPORTED_MODULE_3__["event"].active)
                simulation.alphaTarget(0.1);
            d.fx = null;
            d.fy = null;
        }
        drag_handler(node);
    }; //end of d3 fn
    // gradient
    GoodlifeComponent.prototype.onMouseEnter = function () {
        this.isGradientVisible = true;
    };
    GoodlifeComponent.prototype.onMouseLeave = function () {
        this.isGradientVisible = false;
    };
    GoodlifeComponent.prototype.onMouseMove = function (event) {
        this.gradientLeft = event.pageX - this.el.nativeElement.offsetLeft;
        this.gradientTop = event.pageY - this.el.nativeElement.offsetTop;
    };
    Object.defineProperty(GoodlifeComponent.prototype, "gradientStyle", {
        get: function () {
            var top = this.gradientTop;
            var left = this.gradientLeft;
            var gradientRadius = this.isGradientVisible ? this.gradientRadius : 0;
            return {
                'height.px': gradientRadius * 1.2,
                'width.px': gradientRadius * 1.2,
                'top.px': top
                // 'left.px': left
            };
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('svgg'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GoodlifeComponent.prototype, "svgg", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], GoodlifeComponent.prototype, "onResize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GoodlifeComponent.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], GoodlifeComponent.prototype, "onMouseLeave", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], GoodlifeComponent.prototype, "onMouseMove", null);
    GoodlifeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-goodlife',
            template: __webpack_require__(/*! ./goodlife.component.html */ "./src/app/goodlife/goodlife.component.html"),
            styles: [__webpack_require__(/*! ./goodlife.component.scss */ "./src/app/goodlife/goodlife.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_variables_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__["PrismicService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], GoodlifeComponent);
    return GoodlifeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homeWrap\" id=\"container\" [@fadeAnimation] (scroll)=\"onScroll($event)\">\n\n    <app-about (dataLoaded)=\"onNotify($event)\" id=\"about\" name=\"about\"></app-about>\n    <app-projects (dataLoaded)=\"onNotify($event)\"></app-projects>\n    <app-press (dataLoaded)=\"onNotify($event)\"></app-press>\n    <div id=\"contact\" name=\"contact\">\n      <app-contact (dataLoaded)=\"onNotify($event)\"></app-contact>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal; }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\n.home-padding {\n  width: 100vw;\n  height: 150vh;\n  position: relative;\n  z-index: 0; }\n\n.footer {\n  width: 100vw;\n  height: auto; }\n\n.footer img {\n    width: 100vw;\n    display: block; }\n\n.footer .p2 {\n    width: 85vw;\n    margin: auto;\n    padding-bottom: 25px; }\n\n.about {\n  position: relative;\n  width: 100vw;\n  height: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.about-text {\n  position: relative;\n  width: 40vw;\n  margin: auto;\n  display: inline-block;\n  vertical-align: top;\n  padding: 150px 0;\n  margin-left: 50vw; }\n\n.about-text p {\n    font-size: 13px;\n    line-height: 1.7;\n    font-family: \"apercu_light\";\n    letter-spacing: 0px;\n    font-weight: 400;\n    text-align: left;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    margin-top: 25px; }\n\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n      .about-text p {\n        font-size: 11px;\n        line-height: 20px; } }\n\n.about-text p:nth-child(1) {\n      margin-top: 0; }\n\n.about-logo {\n  width: 35vw;\n  height: 60vh;\n  top: 150px;\n  display: inline-block;\n  position: fixed;\n  left: 15vw; }\n\n.about-logo svg {\n    width: 100%;\n    height: auto;\n    float: right; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/variables.service */ "./src/app/shared/variables.service.ts");
/* harmony import */ var _animation_router_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_animation/router.animation */ "./src/app/_animation/router.animation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(_globalService, location, _route, _router, document) {
        this._globalService = _globalService;
        this._route = _route;
        this._router = _router;
        this.document = document;
        this.scrollExecuted = false;
        this.counter = 0;
    }
    /**
     * Scroll to anchor
     *
     * @param {string} location Element id
     * @param {string} wait     Wait time in milliseconds
     */
    HomeComponent.prototype.scrollToAnchor = function (location, wait) {
        var element = document.querySelector('#' + location);
        console.log('inside of scroll to anchor');
        if (element) {
            setTimeout(function () {
                element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
            }, wait);
        }
    };
    HomeComponent.prototype.onNotify = function (message) {
        var _this = this;
        console.log(message);
        this.counter++;
        console.log(message, this.counter);
        if (this.counter > 4) {
            this._route.fragment
                .subscribe(function (fragment) {
                console.log('onNotify loaded fragment exists');
                if (fragment) {
                    console.log('scrolling with onNotify');
                    _this.scrollToAnchor(fragment, 800);
                }
            });
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        console.log('ng on init');
        this._globalService.isSplash = false;
        this._globalService.isHome = true;
    };
    HomeComponent.prototype.onWindowScroll = function (event) {
        this._globalService.scrollPosition = window.pageYOffset;
        this._globalService.logoOpacity = 1 - (window.pageYOffset / window.innerHeight);
        console.log("scroll");
        if (window.pageYOffset <= window.innerHeight) {
            this._globalService.isSplash = false;
        }
        else if (window.pageYOffset > window.innerHeight) {
            this._globalService.isSplash = true;
        }
        else {
            this._globalService.isSplash = true;
            console.log(this._globalService.isSplash);
        }
        //we'll do some stuff here when the window is scrolled
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:scroll", ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onWindowScroll", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")],
            // make fade in animation available to this component
            animations: [_animation_router_animation__WEBPACK_IMPORTED_MODULE_3__["routerTransition"], _animation_router_animation__WEBPACK_IMPORTED_MODULE_3__["fadeAnimation"]]
            // // attach the fade in animation to the host (root) element of this component
            // host: { '[@routerTransition]': '' }
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_shared_variables_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], Object])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/logo/logo.component.html":
/*!******************************************!*\
  !*** ./src/app/logo/logo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n        <svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        \t viewBox=\"0 0 1491.8 397.3\" style=\"enable-background:new 0 0 1491.8 397.3;\" xml:space=\"preserve\">\n        <style type=\"text/css\">\n        \t.st0{fill:#231F20;}\n        </style>\n        <g>\n        \t<path class=\"st0\" d=\"M213.4,197.2c5.4-5.9,17.3-13,28.5-15l1.9-7.2c-8.2,0.3-15.6,0.5-22.2,0.7c-6.6,0.2-12.6,0.3-17.8,0.3h-63\n        \t\tl-2.5,7.4h4c11.2,0,19,1.2,23.3,3.5c4.3,2.3,6.5,6.4,6.5,12.1c-0.1,1.3-0.3,2.8-0.5,4.4c-0.2,1.6-0.5,3.5-0.9,5.6\n        \t\tc0,0-14.2,36.5-25.1,57.7c-2.1,4.1-9.8,14.2-18.8,18.9c-7,3.7-16.4,4.8-22.1,4.8c-21.3,0-34.6-6.9-47.3-24.1\n        \t\tc-12.8-17.1-19.1-40.1-19.1-68.9c0-28,5-55.3,14.9-81.9C63.3,89,76.9,66.5,94.2,48.2c10.9-11.6,22-20.4,33.5-26.4\n        \t\tc11.5-6,22.9-8.9,34.3-8.9c17.3,0,31,5.9,41,17.8c10,11.9,15.8,29,17.3,51.3l7.5-0.4l23.7-58.4l-2-0.7c-0.8-0.2-7.1,5.7-12.3,5\n        \t\tc-11-1.5-26.4-11-36.1-14.8c-14.2-5.6-28.2-8.4-41.8-8.4c-21.3,0-41.8,5.1-61.3,15.4C78.3,29.8,60.5,44.7,44.4,64.2\n        \t\tc-14.8,17.9-25.9,37.5-33.3,58.6C3.7,144,0,166.8,0,191.3c0,35.3,10.2,62.6,30.6,81.8c20.4,19.2,49.4,28.8,87.1,28.8\n        \t\tc5.5,0,13.4-0.4,21.3-1c11.4-0.8,17.3-2.2,22.2-3.2c0,0,8-3,10.1-8.6c5.7-14.9,16.2-45.5,25.6-68.6\n        \t\tC203.2,205.1,211.6,199.1,213.4,197.2z\"/>\n        \t<path class=\"st0\" d=\"M250.4,234.5c0-13.9,2-27.6,6-40.9c4-13.3,9.8-25.9,17.4-37.7c9.5-14.6,20-25.8,31.6-33.4\n        \t\tc11.6-7.6,23.7-11.5,36.2-11.5c15.2,0,27.3,5.9,36.3,17.6c9.1,11.7,13.6,27.6,13.6,47.6c0,14.6-2.1,28.7-6.3,42.1\n        \t\tc-4.2,13.5-10.4,26.4-18.7,38.7c-9.9,14.2-20.5,24.9-31.8,32.1c-11.3,7.2-23.3,10.8-36,10.8c-14.3,0-26-6-34.9-17.9\n        \t\tC254.9,270.1,250.4,254.3,250.4,234.5z M344.4,118.6c-7.7,0-15,3.5-21.8,10.5c-6.8,7-13.7,18.2-20.6,33.6\n        \t\tc-8,17.5-14.3,35.4-19.1,53.8c-4.7,18.4-7.1,34-7.1,46.7c0,8.8,2.1,15.8,6.2,21c4.1,5.2,9.7,7.8,16.8,7.8c7.7,0,14.8-3.4,21.2-10.3\n        \t\tc6.4-6.8,13.4-18.6,20.8-35.2c7.8-17.5,14-35.1,18.6-53c4.5-17.9,6.8-33,6.8-45.5c0-9.1-2-16.2-5.9-21.5\n        \t\tC356.3,121.2,351,118.6,344.4,118.6z\"/>\n        \t<path class=\"st0\" d=\"M414.5,234.5c0-13.9,2-27.6,6-40.9c4-13.3,9.8-25.9,17.4-37.7c9.5-14.6,20-25.8,31.6-33.4\n        \t\tc11.6-7.6,23.7-11.5,36.2-11.5c15.2,0,27.3,5.9,36.3,17.6c9.1,11.7,13.6,27.6,13.6,47.6c0,14.6-2.1,28.7-6.3,42.1\n        \t\tc-4.2,13.5-10.4,26.4-18.7,38.7c-9.9,14.2-20.5,24.9-31.8,32.1c-11.3,7.2-23.3,10.8-36,10.8c-14.3,0-26-6-34.9-17.9\n        \t\tC419,270.1,414.5,254.3,414.5,234.5z M508.6,118.6c-7.7,0-15,3.5-21.8,10.5c-6.8,7-13.7,18.2-20.6,33.6\n        \t\tc-8,17.5-14.3,35.4-19.1,53.8c-4.7,18.4-7.1,34-7.1,46.7c0,8.8,2.1,15.8,6.2,21c4.1,5.2,9.7,7.8,16.8,7.8c7.7,0,14.8-3.4,21.2-10.3\n        \t\tc6.4-6.8,13.4-18.6,20.8-35.2c7.8-17.5,14-35.1,18.6-53c4.5-17.9,6.8-33,6.8-45.5c0-9.1-2-16.2-5.9-21.5\n        \t\tC520.5,121.2,515.2,118.6,508.6,118.6z\"/>\n        \t<path class=\"st0\" d=\"M676.6,229.5c-14.5,22.7-28.8,40.3-42.8,52.7c-14.1,12.4-26.7,18.6-38,18.6c-7.7,0-13.9-2.7-18.7-8.2\n        \t\tc-4.7-5.5-7.1-12.8-7.1-21.8c0-16.5,4.1-35.2,12.3-56.1c8.2-20.9,19.3-40.4,33.2-58.6c10.4-13.8,21.9-24.7,34.4-32.8\n        \t\tc12.5-8,24.1-12.1,34.6-12.1c3.5,0,7.6,0.7,12.4,2.2c4.7,1.5,7.6,2.2,8.7,2.2c1.4,0,2.4-0.4,3.1-1.2c0.7-0.8,1.5-2.5,2.3-5.1\n        \t\tl20.7-68c0.4-1.5,1-3.5,1.8-5.9c1.4-4.2,2-7.1,2-8.7c0-1.2-0.6-2.4-1.8-3.5c-1.2-1.1-3.1-2.3-5.7-3.7l-17.9-8.7l0.8-2.8\n        \t\tc5.4-1.1,12.7-2.3,21.7-3.7c2.7-0.4,4.7-0.7,6.1-1l19.9-2.8c1-0.1,1.9-0.2,2.8-0.3c0.9-0.1,2.2-0.1,3.9-0.1c2.6,0,4.5,0.3,5.7,1\n        \t\tc1.2,0.7,1.8,1.7,1.8,3c0,1.8-1,5.7-3,11.8c-0.3,0.8-0.5,1.6-0.8,2.2l-49.8,156.6c-4.9,15.3-9.1,29-12.7,41.2\n        \t\tc-3.6,12.2-6.2,21.9-7.8,29l-2.8,11.8c-0.5,2.3-0.9,4.4-1.2,6.4c-0.3,2-0.4,3.4-0.4,4.4c0,1.8,0.3,3.2,1,4.5\n        \t\tc0.7,1.2,1.6,1.8,2.6,1.8c3,0,6.5-1.4,10.5-4.3c4-2.8,8.4-7,13.3-12.4l5.5-6.3c0.8-0.9,1.9-2.2,3.2-3.9c3.8-4.3,6.8-6.5,9.1-6.5\n        \t\tc0.9,0,1.6,0.3,1.9,0.9c0.3,0.6,0.5,1.8,0.5,3.6c0,2.4-2.7,6.8-8,13.2c-5.3,6.4-12.1,12.9-20.2,19.7c-8.5,7-16.1,12.4-22.7,16.1\n        \t\tc-6.6,3.7-12.1,5.6-16.2,5.6c-4.2,0-7.3-1-9.2-3.1c-2-2.1-2.9-5.4-2.9-9.8c0-3,1.1-9.1,3.4-18.4C668.4,258.9,671.8,246,676.6,229.5\n        \t\tz M681.9,119.4c-6.6,0-13.8,3.8-21.6,11.4c-7.8,7.6-16.6,19.4-26.5,35.5c-10.7,17.5-19.1,34.3-25.3,50.6\n        \t\tc-6.2,16.2-9.2,29.4-9.2,39.4c0,5.7,1.4,10.3,4.3,13.8c2.8,3.5,6.7,5.3,11.6,5.3c6.6,0,14.8-4.2,24.4-12.6\n        \t\tc9.6-8.4,18.5-19.3,26.8-32.7c9.9-16.2,17.8-32.7,23.8-49.4c6-16.7,8.9-30.2,8.9-40.5c0-6.4-1.5-11.4-4.6-15.1\n        \t\tC691.3,121.3,687.1,119.4,681.9,119.4z\"/>\n        \t<path class=\"st0\" d=\"M813.2,130.2l-40.2,0l2-12.8l42,0c10.6-39.8,23.6-69.1,39-87.9c15.4-18.8,34.2-28.3,56.2-28.3\n        \t\tc10.7,0,39.1,2.3,45.5,6.8c6.4,4.5,9.6,10.3,9.6,17.5c0,4.8-1.7,8.7-5,11.7s-7.5,4.5-12.5,4.5c-3.9,0-7.3-1-10.2-3\n        \t\tc-2.8-2-6.9-6.8-12-14.4c-3.5-5.3-9.4-10.5-17.6-13.6c-5.4-2.1-14.7,0.5-17.2,1.5c-7.9,3.1-14.9,8.3-22.3,24.8\n        \t\tc-7.4,16.5-15.6,43.3-24.6,80.4h38.6l-2,12.8h-40.4l-22.7,90c-2.2,8-5.1,19.7-8.7,35c-13.7,55.8-26.9,92-39.6,108.8\n        \t\tc-7,9.3-15.5,16.5-25.3,21.5c-9.8,5-20.2,7.6-31.2,7.6c-7.7,0-13.9-1.8-18.5-5.2c-4.6-3.5-6.9-8-6.9-13.5c0-5.3,1.6-9.6,4.8-12.9\n        \t\tc3.2-3.3,7.3-4.9,12.3-4.9c3.2,0,6.2,0.7,8.8,2.1c2.6,1.4,5.2,3.7,7.8,6.8c0.8,0.8,2,2.2,3.7,4.3c4.6,5.8,9.1,8.7,13.4,8.7\n        \t\tc10,0,21.7-30.2,35.1-90.6c6.9-30.3,12.7-54.9,17.3-73.6L813.2,130.2z\"/>\n        \t<path class=\"st0\" d=\"M932.2,169.1l0.6-1.8c4.3-13.3,6.5-21.5,6.5-24.8c-0.1-1.8-0.4-2.9-0.9-3.6c-0.5-0.6-1.3-0.9-2.5-0.9\n        \t\tc-4.3,0-11.6,5.3-21.7,15.8l-2.4,2.4l-7.9,8.3c-2,2.2-3.8,3.7-5.4,4.6c-1.6,0.9-3.1,1.3-4.6,1.3c-0.8,0-1.4-0.3-1.8-0.9\n        \t\tc-0.4-0.6-0.6-1.4-0.6-2.5c0-0.8,0.4-1.8,1.2-3c0.8-1.2,2.5-3.2,5.1-6.1l12.8-14c9.1-10,18.3-18,27.6-24c9.3-6,17.2-8.9,23.6-8.9\n        \t\tc3.7,0,6.6,0.7,8.8,2.1c2.2,1.4,3.4,3.3,3.4,5.8c0,3.2-1.1,8.9-3.2,16.9c-2.1,8-5.7,19.7-10.8,35.1l-23.6,72.7\n        \t\tc-0.3,0.9-0.7,2.4-1.4,4.5c-3.2,9.9-4.9,16-4.9,18.5c0,2,0.3,3.5,0.8,4.4c0.5,0.9,1.4,1.3,2.6,1.3c2.8,0,6-1.2,9.4-3.6\n        \t\tc3.4-2.4,8.2-6.9,14.2-13.5l9.6-9.9c1.9-2,3.5-3.5,4.7-4.4c1.2-0.9,2.5-1.3,3.7-1.3c0.9,0,1.6,0.2,1.9,0.6c0.3,0.4,0.5,1.1,0.5,2.2\n        \t\tc0,2.3-1.7,5.8-5.2,10.5c-3.5,4.7-8.1,9.8-13.9,15.3c-12,11.4-22,19.6-29.8,24.6c-7.9,5-14.6,7.5-20.1,7.5c-4.2,0-7.4-1.2-9.6-3.5\n        \t\tc-2.2-2.3-3.4-5.6-3.4-9.9c0-2.2,0.3-4.6,0.9-7.4c0.6-2.8,1.7-6.5,3.4-11.3L932.2,169.1z\"/>\n        \t<path class=\"st0\" d=\"M1012.5,292l-11.4-6.5c-0.5-0.4-1.2-0.9-2-1.6c-4.6-3.5-6.9-7.6-6.9-12.2c0-2.6,0.9-5.3,2.6-8\n        \t\tc1.8-2.8,4.7-6.2,8.9-10.2l24.6-23c-4.5-5-7.8-10.7-10.1-17.1c-2.2-6.4-3.3-13.4-3.3-21c0-10.7,2.4-21.3,7.1-31.9\n        \t\tc4.7-10.5,11.4-20,19.9-28.4c8.7-8.4,17.8-14.8,27.3-19.2c9.5-4.4,19.2-6.6,28.9-6.6c4.9,0,9.7,0.6,14.5,1.8\n        \t\tc4.8,1.2,9.5,3.1,14.1,5.7c8-4.4,14.8-7.6,20.3-9.5c5.5-1.9,10.6-2.9,15-2.9c6.8,0,12.2,1.6,16.3,4.8c4.1,3.2,6.2,7.4,6.2,12.6\n        \t\tc0,4.4-1.4,7.9-4.3,10.6c-2.8,2.7-6.6,4.1-11.2,4.1c-4.3,0-8.7-3-13-8.9c-4.3-5.9-8.1-8.9-11.2-8.9c-0.8,0-2.6,0.6-5.5,1.7\n        \t\tc-0.7,0.3-1.2,0.5-1.4,0.6l-5.9,2.5c4.7,4.9,8.3,10.7,10.8,17.5c2.4,6.8,3.7,14.4,3.7,22.8c0,22.6-8.1,42.2-24.3,58.9\n        \t\tc-16.2,16.7-35,25-56.3,25c-4.9,0-9.9-0.7-15.1-2c-5.2-1.4-10.7-3.3-16.5-5.9c-6.2,5-10.7,9.3-13.4,12.8c-2.7,3.5-4.1,6.7-4.1,9.7\n        \t\tc0,2.8,1.9,5.6,5.7,8.1c3.8,2.6,10.8,5.9,20.9,9.9l25.4,9.5c22.3,8.5,37.2,16.1,44.7,22.8c7.4,6.6,10.3,12.7,10.3,22.3\n        \t\tc0,8.9-2.4,23.1-23.7,40.7c-6.8,5.6-16.7,12.2-28.2,16.4c-16.3,6.1-35.1,8.4-43.4,8.4c-20,0-31.8-3.4-43.5-9.7\n        \t\tc-11.7-6.3-14.9-13.7-14.9-24.1c0-3.7,1.2-14.7,7.3-26.8C985.2,321.4,997.8,303.1,1012.5,292z M1017.7,294.4\n        \t\tc-9.6,6-19.4,22.2-23.4,35.1c-2.7,8.7-4,16.3-4,19.4c0,10.1,5.3,21.8,17.5,28.8c6.6,3.8,22.8,8.7,40,7.7c6.5-0.4,13.4-1.2,19.4-3\n        \t\tc7.4-2.2,13.6-5.7,16.7-7.6c12.5-7.5,15.5-18.9,15.5-30c0-11.5-15.4-23.4-46.1-35.8l-1.8-0.8L1017.7,294.4z M1100.5,113.5\n        \t\tc-6.9,0-13.8,3.2-20.8,9.6c-7,6.4-14,16.1-21.2,29.1c-6.5,11.9-11.5,23.1-15,33.7c-3.5,10.6-5.3,19.6-5.3,27.1c0,7.5,2,13.4,6,17.7\n        \t\tc4,4.3,9.4,6.5,16.3,6.5c6.1,0,12-1.9,17.7-5.7c5.7-3.8,11.3-9.6,16.9-17.3c8.1-11,14.8-23.7,20.1-38.1c5.3-14.5,7.9-26.7,7.9-36.8\n        \t\tc0-8-2-14.3-6.1-18.9C1112.9,115.8,1107.4,113.5,1100.5,113.5z\"/>\n        \t<path class=\"st0\" d=\"M1172.4,294.8c26.3-76.5,47-139,62.3-187.5c15.3-48.5,22.9-75.8,22.9-81.9c0-2.2-2.2-4.5-6.7-6.9l-0.4-0.2\n        \t\tl-16.7-8.3l0.8-4.1c5.7-0.9,13.5-2,23.6-3c1.5-0.1,2.7-0.3,3.7-0.4l23.6-2.4h3.5c2.6,0,4.4,0.3,5.6,1c1.1,0.7,1.8,1.8,1.9,3.5\n        \t\tc0,0.8-0.1,1.7-0.4,2.6c-0.3,0.9-0.6,2-1,3l-31.9,97.9l-4.1,12.6c-9.5,28.6-16.7,50.2-21.7,64.8c16-25.2,30.9-44.1,44.8-56.9\n        \t\tc13.9-12.7,26.6-19.1,38.3-19.1c9.2,0,16.4,3.6,21.7,10.8c5.3,7.2,7.9,17,7.9,29.4c0,17.7-3.8,36.9-11.3,57.4\n        \t\tc-7.5,20.5-17.6,39.2-30.4,56.1c-8.7,11.4-18,20.5-27.9,27.3c-9.9,6.8-18.8,10.3-26.5,10.3c-6.2,0-11.1-1.7-14.7-5.2\n        \t\tc-3.6-3.5-5.4-8.2-5.4-14.1c0-5.5,1.8-10.2,5.4-13.9c3.6-3.7,8.1-5.6,13.5-5.6c5.7,0,10.5,3.4,14.3,10.3c3.9,6.8,6.3,10.3,7.2,10.3\n        \t\tc2.7,0,6.1-2.7,10.2-8.2c4.1-5.5,8.2-12.8,12.4-21.8c7.3-16.1,12.9-31.9,16.6-47.5c3.8-15.6,5.7-30.2,5.7-43.9\n        \t\tc0-8.8-1.5-15.7-4.5-20.6c-3-4.9-7-7.4-12.2-7.4c-10.7,0-24.2,10.3-40.5,30.9c-16.3,20.6-30.1,45.8-41.3,75.7l-20.9,56\n        \t\tc-2.4,0.9-4.9,1.7-7.4,2.1c-2.5,0.5-5,0.7-7.4,0.7c-2.6,0-4.9-0.3-7-0.9C1175.9,297,1174,296.1,1172.4,294.8z\"/>\n        \t<path class=\"st0\" d=\"M1387.9,227.1l33.3-106.7h-37l5.3-18h37.6l16-50.3c2.7-1.2,5.4-2.1,8-2.6c2.6-0.5,5.4-0.8,8.2-0.8\n        \t\tc2,0.2,4,0.3,5.8,0.6c1.8,0.2,3.6,0.5,5.4,0.8l-15.6,52.3h37l-4.5,18h-37.2l-40.6,133.7c-0.3,0.9-0.6,2.1-1.1,3.7\n        \t\tc-0.5,1.6-0.7,2.5-0.7,2.8c0,1.7,0.4,3.1,1.3,4.3c0.9,1.2,1.9,1.8,2.9,1.8c3,0,7-1.9,12-5.6c5-3.8,11.1-9.5,18.3-17.4l13-14.4\n        \t\tc2-2.3,3.5-3.6,4.4-4.2c0.9-0.5,1.8-0.8,2.7-0.8c1.2,0,2.1,0.3,2.7,0.9c0.6,0.6,0.9,1.5,0.9,2.7c0,1.7-1.1,4-3.5,7\n        \t\tc-0.3,0.3-0.5,0.5-0.6,0.7l-14.6,16.9c-12.2,14.3-23.8,25.4-34.7,33.3c-11,7.9-20.3,11.8-28,11.8c-3.8,0-6.6-1-8.5-3\n        \t\tc-1.9-2-2.8-5.1-2.8-9.3c0-3.8,1.3-10.7,3.9-20.7C1379.7,254.5,1383.3,242,1387.9,227.1z\"/>\n        </g>\n        </svg>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/logo/logo.component.scss":
/*!******************************************!*\
  !*** ./src/app/logo/logo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal; }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\n.logo {\n  position: relative;\n  width: 160px;\n  height: auto;\n  display: block;\n  z-index: 8;\n  margin: 0; }\n\n.logo svg {\n    display: block;\n    width: 100%;\n    height: auto;\n    margin: auto; }\n"

/***/ }),

/***/ "./src/app/logo/logo.component.ts":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/variables.service */ "./src/app/shared/variables.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoComponent = /** @class */ (function () {
    function LogoComponent(_globalService) {
        this._globalService = _globalService;
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! ./logo.component.html */ "./src/app/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.scss */ "./src/app/logo/logo.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_variables_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/logo/logotype.component.html":
/*!**********************************************!*\
  !*** ./src/app/logo/logotype.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logotype\" *ngIf=\"_globalService.pageLoading\">\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/logo/logotype.component.scss":
/*!**********************************************!*\
  !*** ./src/app/logo/logotype.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal; }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\n.logotype {\n  position: fixed;\n  width: 150px;\n  height: 60px;\n  top: 50%;\n  left: 50%;\n  margin-left: -75px;\n  margin-top: -30px;\n  z-index: 8; }\n\n.logotype svg {\n    display: block;\n    width: 100%;\n    height: 100%;\n    display: block; }\n"

/***/ }),

/***/ "./src/app/logo/logotype.component.ts":
/*!********************************************!*\
  !*** ./src/app/logo/logotype.component.ts ***!
  \********************************************/
/*! exports provided: LogotypeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogotypeComponent", function() { return LogotypeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/variables.service */ "./src/app/shared/variables.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogotypeComponent = /** @class */ (function () {
    function LogotypeComponent(_globalService) {
        this._globalService = _globalService;
    }
    LogotypeComponent.prototype.ngOnInit = function () {
    };
    LogotypeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logotype',
            template: __webpack_require__(/*! ./logotype.component.html */ "./src/app/logo/logotype.component.html"),
            styles: [__webpack_require__(/*! ./logotype.component.scss */ "./src/app/logo/logotype.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('navLiState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '0px',
                        position: 'absolute'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        height: '50px',
                        position: 'relative'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-out'))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('navUlState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({})),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({})),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_shared_variables_service__WEBPACK_IMPORTED_MODULE_1__["GlobalService"]])
    ], LogotypeComponent);
    return LogotypeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\"  >\n<!-- [@navState]=\"_globalService.navState\" -->\n\n\n<ul class=\"nav-top\">\n  <li class=\"nav-li\">\n    <a href=\"https://gdfht.com/cart\" class=\"nav-a\" routerLinkActive=\"active-link\">\n      <h2>Cart</h2>\n    </a>\n  </li>\n  <li class=\"nav-li\">\n    <a href=\"https://gdfht.com/account/login\" class=\"nav-a\" routerLinkActive=\"active-link\">\n      <h2>Login</h2>\n    </a>\n  </li>\n  <li class=\"nav-li\">\n    <a href=\"https://gdfht.com/account/register\" class=\"nav-a\" routerLinkActive=\"active-link\">\n      <h2>Create Account</h2>\n    </a>\n  </li>\n</ul>\n\n<ul class=\"nav-main\">\n  <li class=\"nav-li\">\n    <a href=\"https://gdfht.com/\" class=\"nav-a\" [class.nav_active]=\"route === '/goodlife'\" [class.blacked_text]=\"_globalService.isStyling  && !_matchMediaService.IsPhone()\">\n      <h2>Shop</h2>\n    </a>\n  </li>\n  <li class=\"nav-li\">\n    <a [routerLink]=\"['/goodlife']\" class=\"nav-a\" [class.nav_active]=\"route === '/goodlife'\" routerLinkActive=\"active-link\">\n      <h2>Goodlife</h2>\n    </a>\n  </li>\n  <!-- <li class=\"nav-li\">\n    <a [routerLink]=\"['/editorial']\" class=\"nav-a\" [class.nav_active]=\"route === '/editorial'\" routerLinkActive=\"active-link\">\n      <h2>Editorial</h2>\n    </a>\n  </li>\n  <li class=\"nav-li\">\n    <a [routerLink]=\"['/press']\" class=\"nav-a\" [class.nav_active]=\"route === '/collections'\" [class.blacked_text]=\"_globalService.isStyling  && !_matchMediaService.IsPhone()\">\n      <h2>Collections</h2>\n    </a>\n  </li> -->\n</ul>\n\n<div class=\"nav-logo\">\n  <a [routerLink]=\"['/']\" class=\"nav-a\" [class.nav_active]=\"route === '/'\" [class.blacked_text]=\"_globalService.isStyling  && !_matchMediaService.IsPhone()\">\n    <app-logo></app-logo>\n  </a>\n</div>\n\n   <ul class=\"nav-sub\">\n\n     <li class=\"nav-li\">\n       <a href=\"https://gdfht.com/pages/subscribe\" class=\"nav-a\">\n          <h2>Subscribe</h2>\n       </a>\n     </li>\n     <li class=\"nav-li\">\n       <a href=\"https://gdfht.com/pages/customer-service\" class=\"nav-a\">\n          <h2>Customer Service</h2>\n       </a>\n     </li>\n     <li class=\"nav-li\">\n       <a\n         [routerLink]=\"['/contact']\"\n         fragment=\"contact\"\n         class=\"nav-a\"\n         (click)=\"_globalService.toggleNav()\">\n         <h2>Contact</h2>\n       </a>\n     </li>\n     <li class=\"nav-li\">\n       <a href=\"https://www.instagram.com/gdfht\" target=\"_blank\">ig</a>\n     </li>\n   </ul>\n\n   <ul class=\"nav-legal\">\n\n     <li class=\"nav-li\">\n       <a href=\"https://gdfht.com/pages/terms-conditions\" class=\"nav-a\"><h2>Terms</h2></a>\n       -\n       <a href=\"https://gdfht.com/pages/privacy-policy\" class=\"nav-a\"><h2>Privacy Policy</h2></a>\n     </li>\n   </ul>\n\n\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.nav {\n  position: fixed;\n  z-index: 10;\n  width: 230px;\n  height: 100vh;\n  margin-left: 20px; }\n.nav-top {\n  width: 100%;\n  height: 20vh; }\n.nav-main {\n  width: 100%;\n  height: 20vh;\n  margin-top: 20vh; }\n.nav-logo {\n  width: 100%;\n  height: auto;\n  display: block;\n  padding: 60px 0; }\n.nav-legal {\n  margin-top: 20px; }\n.nav-legal a {\n    display: inline-block; }\n.nav-sub {\n  width: 100%;\n  display: block;\n  height: auto;\n  position: relative;\n  text-align: center;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .nav-sub {\n      width: 80vw;\n      display: block;\n      margin: auto; } }\n.nav-sub .nav-li {\n    position: relative;\n    display: block;\n    height: 28px;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n      .nav-sub .nav-li {\n        width: 100%;\n        display: block;\n        text-align: center; } }\n.nav-sub .nav-li a {\n      width: 100%;\n      display: block;\n      height: auto;\n      line-height: auto;\n      vertical-align: middle;\n      font-size: 14px;\n      line-height: 2;\n      font-family: \"apercu_regular\";\n      letter-spacing: 0px;\n      /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n        .nav-sub .nav-li a {\n          font-size: 30px;\n          line-height: 45px; } }\n.nav_active {\n  color: #3076BA; }\n.nav-ul.open {\n  display: block; }\n.nav-ul.open .nav-li {\n    position: relative; }\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/variables.service */ "./src/app/shared/variables.service.ts");
/* harmony import */ var ng2_responsive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-responsive */ "./node_modules/ng2-responsive/index.js");
/* harmony import */ var ng2_responsive__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_responsive__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_match_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/match-media.service */ "./src/app/shared/match-media.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavComponent = /** @class */ (function () {
    function NavComponent(route, location, router, _globalService, _responsiveModule, _matchMediaService) {
        this.route = route;
        this._globalService = _globalService;
        this._responsiveModule = _responsiveModule;
        this._matchMediaService = _matchMediaService;
        this.getSegment = function (url, index) {
            return url.replace(/^https?:\/\//, '').split('/')[index];
        };
    }
    NavComponent.prototype.doSmth = function (reachedTarget) {
        if (reachedTarget) {
            console.log('Yeah, we reached our destination');
        }
        else {
            console.log('Ohoh, something interrupted us');
        }
    };
    NavComponent.prototype.ngOnInit = function () {
        // this._globalService.toggleNav();
    };
    NavComponent.prototype.gotoHashtag = function (fragment) {
        console.log('using go to hashtag');
        var element = document.querySelector("#" + fragment);
        if (element)
            element.scrollIntoView({ behavior: 'smooth' });
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_variables_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"],
            ng2_responsive__WEBPACK_IMPORTED_MODULE_4__["ResponsiveModule"],
            _shared_match_media_service__WEBPACK_IMPORTED_MODULE_5__["MatchMediaService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/press/press-feed/press-feed.component.html":
/*!************************************************************!*\
  !*** ./src/app/press/press-feed/press-feed.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"press\" class=\"press-wrap\" [@fadeAnimation]>\n  <ul class=\"press-feed-ul\">\n    <li class=\"press-feed-li\" *ngFor=\"let item of press.results\">\n      <a class=\"press-feed-a\" [href]=\"item.data.press.url.value.url\" target=\"_blank\">\n        <h2 class=\"press-feed-h2\">{{item.data.press.title.value[\"0\"].text}}</h2>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/press/press-feed/press-feed.component.scss":
/*!************************************************************!*\
  !*** ./src/app/press/press-feed/press-feed.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal; }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\n.quote {\n  display: inline-block; }\n\n.press-feed-h2 {\n  display: inline-block;\n  transition: margin 0.5s ease;\n  -webkit-transition: margin 0.5s ease;\n  -moz-transition: margin 0.5s ease;\n  -ms-transition: margin 0.5s ease;\n  -o-transition: margin 0.5s ease;\n  width: 100%;\n  text-align: center; }\n\n.press-feed-h2:hover {\n    margin-left: 5px; }\n\n.press-wrap {\n  min-width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center; }\n\n.press-wrap .press-feed-a {\n    display: block;\n    width: 100%;\n    text-align: center; }\n"

/***/ }),

/***/ "./src/app/press/press-feed/press-feed.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/press/press-feed/press-feed.component.ts ***!
  \**********************************************************/
/*! exports provided: PressFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressFeedComponent", function() { return PressFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/prismic.service */ "./src/app/shared/prismic.service.ts");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/variables.service */ "./src/app/shared/variables.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _animation_router_animation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../_animation/router.animation */ "./src/app/_animation/router.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



// import {IFeed}from './feed';

// import fade in animation

var PressFeedComponent = /** @class */ (function () {
    function PressFeedComponent(_globalService, _feedService, document) {
        this._globalService = _globalService;
        this._feedService = _feedService;
        this.document = document;
        this.innerHeight = window.innerHeight;
        this.pageTitle = 'Product List';
        this.paginationInProcess = false;
    }
    PressFeedComponent.prototype.ngOnInit = function () {
        this._globalService.isHome = false;
        this._globalService.setLoading(true);
        console.log('ng on init');
        console.log(this.press);
        if (!this.press) {
            this.getPage(1);
        }
    };
    PressFeedComponent.prototype.getPage = function (page) {
        var _this = this;
        this._feedService.getList('press', page)
            .subscribe(function (press) {
            if (page == 1) {
                _this.press = press;
                console.log('in feed');
                console.log(_this.press);
                _this._globalService.setLoading(false);
            }
            else {
                console.log('in else block');
            }
        }, function (error) {
            console.log('there was an error');
            _this.errorMessage = error;
            _this._globalService.setLoading(false);
        });
    };
    PressFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./press-feed.component.html */ "./src/app/press/press-feed/press-feed.component.html"),
            styles: [__webpack_require__(/*! ./press-feed.component.scss */ "./src/app/press/press-feed/press-feed.component.scss")],
            // make fade in animation available to this component
            animations: [_animation_router_animation__WEBPACK_IMPORTED_MODULE_4__["routerTransition"], _animation_router_animation__WEBPACK_IMPORTED_MODULE_4__["fadeAnimation"]],
            // // attach the fade in animation to the host (root) element of this component
            host: { '[@routerTransition]': '' }
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_shared_variables_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__["PrismicService"],
            Document])
    ], PressFeedComponent);
    return PressFeedComponent;
}());



/***/ }),

/***/ "./src/app/press/press.component.html":
/*!********************************************!*\
  !*** ./src/app/press/press.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a [routerLink]=\"['/', 'press']\" class=\"press-a\" *ngIf=\"press\">\n  <div class=\"press-wrap\">\n    <!-- <div class=\"press-background\" [ngStyle]=\"{'background':'url('+ feed.results['0'].data.press_landing.img.value.main.url + ')'}\">\n    </div> -->\n\n    <div class=\"press-content\">\n\n      <img class=\"press-camera\" src=\"/assets/images/camera.svg\" alt=\"camera\">\n      <h3 class=\"press-header\">Press</h3>\n      <!-- <ul class=\"press-content-ul\">\n        <li class=\"press-content-li\" *ngFor=\"let p of press.results | slice:0:2; let i=index\">\n          <div class=\"press-content-li-img\"\n          [ngStyle]=\"{'background':'url('+ p?.data.press.image.value.main.url + ')'}\">\n          </div>\n           <h3 class=\"press-content-li-name\"><span>{{p.data.press.title.value[\"0\"].text}}</span></h3>\n        </li>\n      </ul> -->\n\n    </div>\n\n\n  </div>\n</a>\n"

/***/ }),

/***/ "./src/app/press/press.component.scss":
/*!********************************************!*\
  !*** ./src/app/press/press.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal; }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\n.press-wrap {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  position: relative; }\n\n.press-wrap .press-content {\n    width: 100vw; }\n\n.press-wrap .press-content .press-header {\n      height: 2;\n      line-height: 2;\n      text-align: center; }\n\n.press-wrap .press-content .press-content-ul {\n      width: 100vw; }\n\n.press-wrap .press-content .press-content-ul .press-content-li {\n        display: inline-block;\n        position: relative;\n        width: 50vw; }\n\n.press-wrap .press-content .press-content-ul .press-content-li h3 {\n          width: 100%;\n          padding: 0%;\n          transition: 1s ease;\n          -webkit-transition: 1s ease;\n          -moz-transition: 1s ease;\n          -ms-transition: 1s ease;\n          -o-transition: 1s ease; }\n\n.press-wrap .press-content .press-content-ul .press-content-li span {\n          position: absolute;\n          right: 0;\n          text-align: center; }\n\n.press-wrap .press-content .press-content-ul .press-content-li:hover {\n          padding: 0%; }\n\n.press-wrap .press-content .press-content-ul .press-content-li:hover span {\n            text-align: center; }\n\n.press-wrap .press-content .press-content-ul .press-content-li .press-content-li-img {\n          width: 50vw;\n          height: 50vh;\n          display: block;\n          background-repeat: no-repeat;\n          background-position: center;\n          background-size: cover; }\n\n.press-wrap .press-content .press-content-ul .press-content-li .press-content-li-name {\n          width: 50vw;\n          display: block; }\n\n.press-wrap .press-content {\n    width: 60vw;\n    position: relative;\n    margin: auto; }\n\n.press-wrap .press-content .press-camera {\n      position: relative;\n      width: 30vw;\n      z-index: 8; }\n\n.press-wrap .press-content .press-h3 {\n      width: 100%;\n      z-index: 8;\n      position: absolute;\n      bottom: -50px;\n      text-align: right;\n      width: 100%; }\n\n.press-background {\n  width: 100vw;\n  height: 100vh;\n  display: block;\n  position: absolute;\n  z-index: 7;\n  top: 0;\n  left: 0;\n  opacity: 0.3;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(black), to(rgba(0, 0, 0, 0))); }\n\nimg:hover {\n  /* Start the shake animation and make the animation last for 0.5 seconds */\n  animation: shake 0.5s;\n  -webkit-animation: shake 0.5s;\n  -moz-animation: shake 0.5s;\n  -ms-animation: shake 0.5s;\n  -o-animation: shake 0.5s;\n  /* When the animation is finished, start again */\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n@-webkit-keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg); }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg); }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg); }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg); }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg); }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg); }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg); }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg); }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg); }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg); } }\n\n@keyframes shake {\n  0% {\n    -webkit-transform: translate(1px, 1px) rotate(0deg);\n            transform: translate(1px, 1px) rotate(0deg); }\n  10% {\n    -webkit-transform: translate(-1px, -2px) rotate(-1deg);\n            transform: translate(-1px, -2px) rotate(-1deg); }\n  20% {\n    -webkit-transform: translate(-3px, 0px) rotate(1deg);\n            transform: translate(-3px, 0px) rotate(1deg); }\n  30% {\n    -webkit-transform: translate(3px, 2px) rotate(0deg);\n            transform: translate(3px, 2px) rotate(0deg); }\n  40% {\n    -webkit-transform: translate(1px, -1px) rotate(1deg);\n            transform: translate(1px, -1px) rotate(1deg); }\n  50% {\n    -webkit-transform: translate(-1px, 2px) rotate(-1deg);\n            transform: translate(-1px, 2px) rotate(-1deg); }\n  60% {\n    -webkit-transform: translate(-3px, 1px) rotate(0deg);\n            transform: translate(-3px, 1px) rotate(0deg); }\n  70% {\n    -webkit-transform: translate(3px, 1px) rotate(-1deg);\n            transform: translate(3px, 1px) rotate(-1deg); }\n  80% {\n    -webkit-transform: translate(-1px, -1px) rotate(1deg);\n            transform: translate(-1px, -1px) rotate(1deg); }\n  90% {\n    -webkit-transform: translate(1px, 2px) rotate(0deg);\n            transform: translate(1px, 2px) rotate(0deg); }\n  100% {\n    -webkit-transform: translate(1px, -2px) rotate(-1deg);\n            transform: translate(1px, -2px) rotate(-1deg); } }\n"

/***/ }),

/***/ "./src/app/press/press.component.ts":
/*!******************************************!*\
  !*** ./src/app/press/press.component.ts ***!
  \******************************************/
/*! exports provided: PressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PressComponent", function() { return PressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/prismic.service */ "./src/app/shared/prismic.service.ts");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/variables.service */ "./src/app/shared/variables.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var PressComponent = /** @class */ (function () {
    function PressComponent(_globalService, _feedService, document) {
        this._globalService = _globalService;
        this._feedService = _feedService;
        this.document = document;
        this.innerHeight = window.innerHeight;
        this.pageTitle = 'Product List';
        this.paginationInProcess = false;
        this.dataLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    //  toggleImage(): void {
    //    this.showImage = !this.showImage;
    //  }
    PressComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(true);
        // console.log('ng on init');
        // console.log('in press component');
        if (!this.press) {
            this.getPage(1);
        }
    };
    PressComponent.prototype.getPage = function (page) {
        var _this = this;
        this._feedService.getList('press', page)
            .subscribe(function (press) {
            if (page == 1) {
                _this.press = press;
                _this._globalService.setLoading(false);
            }
            else {
                console.log('in else block');
            }
        }, function (error) {
            console.log('there was an error');
            _this.errorMessage = error;
            _this._globalService.setLoading(false);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PressComponent.prototype, "dataLoaded", void 0);
    PressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-press',
            template: __webpack_require__(/*! ./press.component.html */ "./src/app/press/press.component.html"),
            styles: [__webpack_require__(/*! ./press.component.scss */ "./src/app/press/press.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_shared_variables_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__["PrismicService"],
            Document])
    ], PressComponent);
    return PressComponent;
}());



/***/ }),

/***/ "./src/app/projects/project-detail/project-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/projects/project-detail/project-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"detail\">\n\n</div>\n"

/***/ }),

/***/ "./src/app/projects/project-detail/project-detail.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/projects/project-detail/project-detail.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal; }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n\n.wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 0; }\n\n.wrapper .project-info {\n    position: fixed;\n    left: 30px;\n    top: 30px;\n    z-index: 9; }\n\n.wrapper .project-info h2 {\n      font-size: 18px; }\n\n.wrapper .project-info h3 {\n      font-size: 13px;\n      line-height: 23px; }\n\n.wrapper .project-detail-wrap {\n    width: 100vw;\n    position: relative;\n    display: block; }\n\n.wrapper .project-detail-wrap li {\n      margin: 5rem 0;\n      width: 90vw;\n      margin-left: 30px;\n      display: block; }\n\n.wrapper .project-detail-wrap li img {\n        max-width: 100%; }\n"

/***/ }),

/***/ "./src/app/projects/project-detail/project-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/projects/project-detail/project-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProjectDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailComponent", function() { return ProjectDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/prismic.service */ "./src/app/shared/prismic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectDetailComponent = /** @class */ (function () {
    function ProjectDetailComponent(_route, _router, _feedService) {
        this._route = _route;
        this._router = _router;
        this._feedService = _feedService;
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.params['id'];
        var type = this._route.snapshot.url["0"].path;
        // console.log(type, id);
        this._feedService.getSingle(type, id)
            .subscribe(function (data) { return _this.detail = data; }, function (error) { return _this.error = error; });
        // console.log(this.detail);
        // console.log('how did we do?');
    };
    ProjectDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__(/*! ./project-detail.component.html */ "./src/app/projects/project-detail/project-detail.component.html"),
            styles: [__webpack_require__(/*! ./project-detail.component.scss */ "./src/app/projects/project-detail/project-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__["PrismicService"]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "./src/app/projects/project-feed/project-feed.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/projects/project-feed/project-feed.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"feed\" class=\"wrapper\" [@fadeAnimation]>\n\n</div>\n"

/***/ }),

/***/ "./src/app/projects/project-feed/project-feed.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/projects/project-feed/project-feed.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n"

/***/ }),

/***/ "./src/app/projects/project-feed/project-feed.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/projects/project-feed/project-feed.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectFeedComponent", function() { return ProjectFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/prismic.service */ "./src/app/shared/prismic.service.ts");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/variables.service */ "./src/app/shared/variables.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animation_router_animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../_animation/router.animation */ "./src/app/_animation/router.animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



// import {IFeed}from './feed';



// import fade in animation
// import { fadeInAnimation } from './../../_animation/index';
var ProjectFeedComponent = /** @class */ (function () {
    function ProjectFeedComponent(_globalService, _feedService, document, router) {
        this._globalService = _globalService;
        this._feedService = _feedService;
        this.document = document;
        this.router = router;
        this.innerHeight = window.innerHeight;
        this.pageTitle = 'Product List';
        this.paginationInProcess = false;
        this.scroll = 0;
        this.imgloading = true;
    }
    ProjectFeedComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(true);
        console.log('ng on init');
        console.log(this.feed);
        if (!this.feed) {
            this.getPage(1);
        }
        this.router.events.subscribe(function () {
            window.scrollTo(0, 0);
        });
    };
    ProjectFeedComponent.prototype.ngAfterViewInit = function () {
        this._globalService.isHome = false;
    };
    ProjectFeedComponent.prototype.getPage = function (page) {
        var _this = this;
        this.paginationInProcess = true;
        this._feedService.getList('projects', page)
            .subscribe(function (feed) {
            if (page == 1) {
                _this.feed = feed;
                _this._globalService.setLoading(false);
            }
            else {
                _this.concatResults(feed);
            }
            _this.paginationInProcess = false;
        }, function (error) {
            console.log('there was an error');
            _this.errorMessage = error;
            _this._globalService.setLoading(false);
        });
    };
    ProjectFeedComponent.prototype.concatResults = function (obj) {
        console.log("concat results");
        this.feed.results = this.feed.results.concat(obj.results);
        this.feed.page = obj.page;
        this.feed.total_pages = obj.total_pages;
        this.feed.prev_page = obj.prev_page;
        console.log(this.feed);
    };
    ProjectFeedComponent.prototype.onLoad = function () {
        this.imgloading = false;
    };
    ProjectFeedComponent.prototype.onWindowScroll = function () {
        var number = this.document.body.scrollTop;
        console.log(window.innerHeight);
        var body = document.body, html = document.documentElement;
        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var windowBottom = window.innerHeight + window.pageYOffset;
        if ((windowBottom >= docHeight) && (this.paginationInProcess == false)) {
            // alert('bottom reached');
            if (this.feed) {
                if ((this.feed.page + 1) < this.feed.total_pages) {
                    this.getPage(this.feed.page + 1);
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ProjectFeedComponent.prototype, "onWindowScroll", null);
    ProjectFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./project-feed.component.html */ "./src/app/projects/project-feed/project-feed.component.html"),
            styles: [__webpack_require__(/*! ./project-feed.component.scss */ "./src/app/projects/project-feed/project-feed.component.scss")],
            // ,
            // make fade in animation available to this component
            animations: [_animation_router_animation__WEBPACK_IMPORTED_MODULE_5__["routerTransition"], _animation_router_animation__WEBPACK_IMPORTED_MODULE_5__["fadeAnimation"]]
            //
            // // attach the fade in animation to the host (root) element of this component
            // host: { '[@routerTransition]': '' }
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_shared_variables_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__["PrismicService"],
            Document,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProjectFeedComponent);
    return ProjectFeedComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-projects\" *ngIf=\"feed\">\n\n</div>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.scss":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal; }\n\n/*....................................SCSS VARIABLES..................................*/\n\n/*....................................................................................*/\n\n/*.................................................................................*/\n\n/*$break-large-desktop: 2500px;*/\n\n/*$break-infinite: 500000px;*/\n\n/*....................................SCSS MIXINS..................................*/\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/prismic.service */ "./src/app/shared/prismic.service.ts");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/variables.service */ "./src/app/shared/variables.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(_globalService, _feedService, document) {
        this._globalService = _globalService;
        this._feedService = _feedService;
        this.document = document;
        this.innerHeight = window.innerHeight;
        this.pageTitle = 'Product List';
        this.paginationInProcess = false;
        // [{img:'/assets/images/chair.svg'},{img:'/assets/images/light.svg'},{img:'/assets/images/statue.svg'}]
        this.dataLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this._globalService.setLoading(true);
        if (!this.feed) {
            this.getPage(1);
        }
    };
    ProjectsComponent.prototype.getPage = function (page) {
        var _this = this;
        this._feedService.getList('projects_landing', page)
            .subscribe(function (feed) {
            if (page == 1) {
                _this.feed = feed;
                _this.dataLoaded.emit('data loaded in projects component');
                // console.log('in projects landing feed');
                // console.log(this.feed);
                _this._globalService.setLoading(false);
            }
            else {
                console.log('in else block');
            }
        }, function (error) {
            console.log('there was an error');
            _this.errorMessage = error;
            _this._globalService.setLoading(false);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectsComponent.prototype, "dataLoaded", void 0);
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/projects/projects.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_shared_variables_service__WEBPACK_IMPORTED_MODULE_2__["GlobalService"],
            _shared_prismic_service__WEBPACK_IMPORTED_MODULE_1__["PrismicService"],
            Document])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/share/share.component.html":
/*!********************************************!*\
  !*** ./src/app/share/share.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"share\">\n  <h2 class=\"share-button\" (click)=\"openShare()\" [class.blacked_text]=\"_globalService.isStyling\">share</h2>\n\n  <ul [class.share_open]=\"isShare\" [@shareState]=\"isShare\" class=\"share-ul\">\n    <li class=\"share-li\" (click)=\"openShare()\">\n      <a [attr.href]=\"'https://twitter.com/intent/tweet?url='+encodedRoute\" target=\"_blank\" [class.blacked_text]=\"_globalService.isStyling\">tw</a>\n    </li>\n    <li class=\"share-li\" (click)=\"openShare()\">\n      <a [attr.href]=\"'http://www.tumblr.com/share/link?url='+encodedRoute\" target=\"_blank\" [class.blacked_text]=\"_globalService.isStyling\">tm</a>\n    </li>\n    <li class=\"share-li\" (click)=\"openShare()\">\n      <a [attr.href]=\"'https://www.facebook.com/sharer/sharer.php?u='+encodedRoute\" target=\"_blank\" [class.blacked_text]=\"_globalService.isStyling\">fb</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/share/share.component.scss":
/*!********************************************!*\
  !*** ./src/app/share/share.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n.share {\n  position: fixed;\n  top: 30px;\n  left: 30px;\n  z-index: 13;\n  width: 200px; }\n.share-button {\n  cursor: pointer; }\n.share-ul {\n  position: absolute;\n  left: -200px; }\n.share-ul .share-li {\n    display: inline-block; }\n.share-ul .share-li a {\n      font-size: 14px;\n      line-height: 2;\n      font-family: \"apercu_regular\";\n      letter-spacing: 0px;\n      /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n        .share-ul .share-li a {\n          font-size: 30px;\n          line-height: 45px; } }\n.share-ul.share_open {\n  left: 0; }\n"

/***/ }),

/***/ "./src/app/share/share.component.ts":
/*!******************************************!*\
  !*** ./src/app/share/share.component.ts ***!
  \******************************************/
/*! exports provided: ShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_variables_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/variables.service */ "./src/app/shared/variables.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { EncodeURIPipe } from './../shared/encodeURI.pipe';

var ShareComponent = /** @class */ (function () {
    function ShareComponent(location, router, _globalService) {
        var _this = this;
        this._globalService = _globalService;
        router.events.subscribe(function (val) {
            _this.encodedRoute = encodeURI('http://alealimay.com' + location.path());
        });
    }
    ShareComponent.prototype.ngOnInit = function () {
        this.isShare = false;
    };
    ShareComponent.prototype.openShare = function () {
        this.isShare = !this.isShare;
    };
    ShareComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share',
            template: __webpack_require__(/*! ./share.component.html */ "./src/app/share/share.component.html"),
            styles: [__webpack_require__(/*! ./share.component.scss */ "./src/app/share/share.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('shareState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        left: '-200px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        left: '0px'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('0 => 1', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms ease-in')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('1 => 0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('500ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_variables_service__WEBPACK_IMPORTED_MODULE_3__["GlobalService"]])
    ], ShareComponent);
    return ShareComponent;
}());



/***/ }),

/***/ "./src/app/shared/encodeURI.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/shared/encodeURI.pipe.ts ***!
  \******************************************/
/*! exports provided: EncodeURIPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodeURIPipe", function() { return EncodeURIPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
var EncodeURIPipe = /** @class */ (function () {
    function EncodeURIPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EncodeURIPipe.prototype.transform = function (value) {
        console.log(value);
        var url = encodeURI(value);
        console.log(url);
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    EncodeURIPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'encodeURI' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], EncodeURIPipe);
    return EncodeURIPipe;
}());



/***/ }),

/***/ "./src/app/shared/match-media.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/match-media.service.ts ***!
  \***********************************************/
/*! exports provided: MatchMediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchMediaService", function() { return MatchMediaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MatchMediaService = /** @class */ (function () {
    function MatchMediaService() {
        this.rules = {
            print: "print",
            screen: "screen",
            phone: '(max-width: 767px)',
            tablet: '(min-width: 768px) and (max-width: 1024px)',
            desktop: '(min-width: 1025px)',
            portrait: '(orientation: portrait)',
            landscape: '(orientation: landscape)',
            retina: '(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)'
        };
        this.Check = function (mq) {
            if (!mq) {
                return;
            }
            return window.matchMedia(mq).matches;
        };
        this.IsTablet = function () {
            return window.matchMedia(this.rules.tablet).matches;
        };
        this.IsDesktop = function () {
            return window.matchMedia(this.rules.desktop).matches;
        };
        this.IsPortrait = function () {
            return window.matchMedia(this.rules.portrait).matches;
        };
        this.IsLandscape = function () {
            return window.matchMedia(this.rules.landscape).matches;
        };
        this.IsRetina = function () {
            return window.matchMedia(this.rules.retina).matches;
        };
    }
    /**********************************************
        METHODS FOR CHECKING TYPE
     **********************************************/
    MatchMediaService.prototype.IsPhone = function () {
        return window.matchMedia(this.rules.phone).matches;
    };
    ;
    /**********************************************
        EVENT LISTENERS BY TYPE
     **********************************************/
    MatchMediaService.prototype.OnPhone = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.phone);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService.prototype.OnTablet = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.tablet);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService.prototype.OnDesktop = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.desktop);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService.prototype.OnPortrait = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.portrait);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService.prototype.OnLandscape = function (callBack) {
        if (typeof callBack === 'function') {
            var mql = window.matchMedia(this.rules.landscape);
            mql.addListener(function (mql) {
                if (mql.matches) {
                    callBack(mql);
                }
            });
        }
    };
    ;
    MatchMediaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MatchMediaService);
    return MatchMediaService;
}());



/***/ }),

/***/ "./src/app/shared/prismic.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/prismic.service.ts ***!
  \*******************************************/
/*! exports provided: PrismicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrismicService", function() { return PrismicService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {Http, Response} from '@angular/http';

// import {Feed} from './feed';




var PrismicService = /** @class */ (function () {
    // constructor(private _http:Http) { }
    function PrismicService(_http) {
        this._http = _http;
        this._getUrl = 'api/prismic/get/all';
    }
    PrismicService.prototype.getList = function (type, page) {
        //console.log(type, page)
        return this._http.get('/api/prismic/get/all' + '?page=' + page + '&type=' + type);
        // return this._http.get('/api/prismic/get/all'+'?page='+page+'&type='+type)
        //   .do(data => console.log("prismic",data))
        //   .catch(this.handleError);
    };
    PrismicService.prototype.getSingle = function (type, uid) {
        // console.log('in prismic service');
        return this._http.get('/api/prismic/get/single?type=' + type + '&uid=' + uid);
        // .map((response: Response)=> <any> response.json())
        // .do(data => console.log(data))
        // .catch(this.handleError);
    };
    PrismicService.prototype.handleError = function (error) {
        console.log("error", error);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.json().error || 'Server error');
    };
    PrismicService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PrismicService);
    return PrismicService;
}());



/***/ }),

/***/ "./src/app/shared/safeUrl.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/shared/safeUrl.pipe.ts ***!
  \****************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _prismic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prismic.service */ "./src/app/shared/prismic.service.ts");
/* harmony import */ var _variables_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variables.service */ "./src/app/shared/variables.service.ts");
/* harmony import */ var _match_media_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./match-media.service */ "./src/app/shared/match-media.service.ts");
/* harmony import */ var _safeUrl_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./safeUrl.pipe */ "./src/app/shared/safeUrl.pipe.ts");
/* harmony import */ var _youtubeEmbed_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./youtubeEmbed.pipe */ "./src/app/shared/youtubeEmbed.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _safeUrl_pipe__WEBPACK_IMPORTED_MODULE_6__["SafePipe"],
                _youtubeEmbed_pipe__WEBPACK_IMPORTED_MODULE_7__["YoutubeEmbedPipe"]
            ],
            providers: [_prismic_service__WEBPACK_IMPORTED_MODULE_3__["PrismicService"], _variables_service__WEBPACK_IMPORTED_MODULE_4__["GlobalService"], _match_media_service__WEBPACK_IMPORTED_MODULE_5__["MatchMediaService"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _safeUrl_pipe__WEBPACK_IMPORTED_MODULE_6__["SafePipe"],
                _youtubeEmbed_pipe__WEBPACK_IMPORTED_MODULE_7__["YoutubeEmbedPipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/variables.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/variables.service.ts ***!
  \*********************************************/
/*! exports provided: GlobalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalService", function() { return GlobalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _match_media_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./match-media.service */ "./src/app/shared/match-media.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalService = /** @class */ (function () {
    function GlobalService(_matchMediaService) {
        this._matchMediaService = _matchMediaService;
        this.pageLoading = true;
        this.isStyling = false;
        this.isAbout = false;
        this.scrollPosition = 0;
        this.logoOpacity = 1;
        this.navState = '0';
    }
    GlobalService.prototype.setLoading = function (val) {
        this.pageLoading = val;
    };
    GlobalService.prototype.setSplash = function (val) {
        this.isSplash = val;
    };
    GlobalService.prototype.getValue = function (val) {
        return this.pageLoading;
    };
    GlobalService.prototype.toggleNav = function () {
        this.navState == '0' ? this.navState = '1' : this.navState = '0';
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
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GlobalService.prototype, "navState", void 0);
    GlobalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_match_media_service__WEBPACK_IMPORTED_MODULE_1__["MatchMediaService"]])
    ], GlobalService);
    return GlobalService;
}());



/***/ }),

/***/ "./src/app/shared/youtubeEmbed.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/youtubeEmbed.pipe.ts ***!
  \*********************************************/
/*! exports provided: YoutubeEmbedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeEmbedPipe", function() { return YoutubeEmbedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var YoutubeEmbedPipe = /** @class */ (function () {
    function YoutubeEmbedPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    YoutubeEmbedPipe.prototype.transform = function (id) {
        var url = 'https://www.youtube.com/embed/' + id;
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    YoutubeEmbedPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'youtubeEmbed' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], YoutubeEmbedPipe);
    return YoutubeEmbedPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/elia/Documents/web/goodfight/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map