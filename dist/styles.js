(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/app/styles.scss":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/app/styles.scss ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal; }\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n/*....................................General settings..................................*/\n/*.....................TEXT MARK STYLES......................*/\n::-moz-selection {\n  background: transparent;\n  text-shadow: none; }\n::selection {\n  background: transparent;\n  text-shadow: none; }\n/*.....................ACTIVE CLASSES......................*/\n.active {\n  opacity: 0.1; }\n.active-link {\n  color: #3076BA !important; }\narrow {\n  display: block;\n  width: 50px;\n  height: 50px;\n  transition: all ease 0.5s;\n  -webkit-transition: all ease 0.5s;\n  -moz-transition: all ease 0.5s;\n  -ms-transition: all ease 0.5s;\n  -o-transition: all ease 0.5s; }\narrow svg {\n    position: absolute;\n    top: 5px;\n    left: 5px; }\n.arrow-right:hover {\n  transform: translateX(15px);\n  -ms-transform: translateX(15px);\n  /* IE 9 */\n  -webkit-transform: translateX(15px);\n  /* Safari */\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n.arrow-right svg {\n  left: auto;\n  right: 5px; }\n.arrow-down:hover {\n  transform: translateY(-15px);\n  -ms-transform: translateY(-15px);\n  /* IE 9 */\n  -webkit-transform: translateY(-15px);\n  /* Safari */\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n.arrow-down svg {\n  transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  /* IE 9 */\n  -webkit-transform: rotate(90deg);\n  /* Safari */\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%; }\n.arrow-left:hover {\n  transform: translateX(-15px);\n  -ms-transform: translateX(-15px);\n  /* IE 9 */\n  -webkit-transform: translateX(-15px);\n  /* Safari */\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n.arrow-left svg {\n  transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  /* IE 9 */\n  -webkit-transform: rotate(180deg);\n  /* Safari */\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%; }\n.blacked_text {\n  color: #FFFFFF; }\n.blacked_path {\n  fill: #FFFFFF; }\n.blacked_background {\n  background-color: #000000; }\n/*....................HIDING SCROLLBAR.....................*/\n::-webkit-scrollbar {\n  display: none; }\n* {\n  -webkit-overflow-scrolling: touch; }\n*, *:before, *:after {\n  box-sizing: inherit;\n  outline: 0; }\n/*.....................GENERAL STYLES......................*/\nhtml {\n  font-family: helvetica;\n  width: 100%;\n  margin: 0, 0;\n  padding: 0, 0;\n  box-sizing: border-box;\n  background-color: transparent; }\nbody {\n  width: 100vw;\n  height: auto;\n  margin: 0, 0;\n  padding: 0, 0;\n  display: block;\n  position: relative;\n  background: #f8f7ec;\n  color: #000000; }\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\np, a, li {\n  font-size: 13px;\n  list-style-type: none;\n  letter-spacing: 0px;\n  color: #000000; }\ninput, textarea, select, a, li {\n  text-decoration: none; }\na {\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 1.7;\n  font-family: \"apercu_light\";\n  letter-spacing: 0px;\n  font-weight: 400;\n  text-align: left;\n  color: #000000;\n  transition: color 0.4s ease;\n  -webkit-transition: color 0.4s ease;\n  -moz-transition: color 0.4s ease;\n  -ms-transition: color 0.4s ease;\n  -o-transition: color 0.4s ease; }\na:hover {\n    color: #3076BA;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-device-width: 767px) {\n      a:hover {\n        color: #000000 !important; } }\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: portrait) {\n      a:hover {\n        color: #000000 !important; } }\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: landscape) {\n      a:hover {\n        color: #000000 !important; } }\n.a-hover {\n  color: #000000;\n  transition: color 0.4s ease;\n  -webkit-transition: color 0.4s ease;\n  -moz-transition: color 0.4s ease;\n  -ms-transition: color 0.4s ease;\n  -o-transition: color 0.4s ease; }\n.a-hover:hover {\n    color: #F5F5F5;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-device-width: 767px) {\n      .a-hover:hover {\n        color: #000000 !important; } }\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: portrait) {\n      .a-hover:hover {\n        color: #000000 !important; } }\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: landscape) {\n      .a-hover:hover {\n        color: #000000 !important; } }\np {\n  font-size: 13px;\n  line-height: 1.7;\n  font-family: \"apercu_light\";\n  letter-spacing: 0px;\n  font-weight: 400;\n  text-align: left; }\n.p2 {\n  font-size: 9px;\n  line-height: 1.7;\n  font-family: \"apercu_light\", serif;\n  font-weight: 400;\n  letter-spacing: 0px;\n  text-align: left; }\nh1 {\n  font-size: 25px;\n  line-height: 2;\n  font-family: \"apercu_regular\";\n  font-weight: bold;\n  letter-spacing: 0px;\n  font-weight: bold;\n  color: #3076BA; }\nh2 {\n  font-size: 14px;\n  line-height: 2;\n  font-family: \"apercu_regular\";\n  letter-spacing: 0px; }\nh3 {\n  font-size: 13px;\n  line-height: 2;\n  font-family: \"apercu_regular\";\n  letter-spacing: 0px; }\n.pop {\n  position: fixed;\n  width: 100vw;\n  height: 7vh;\n  position: fixed;\n  bottom: 0;\n  left: 0px;\n  z-index: 14;\n  border-top: 1px solid black;\n  background: rgba(255, 255, 255, 0.8);\n  font-size: 10px; }\n.nav-icon {\n  top: 30px;\n  right: 30px;\n  position: fixed;\n  width: 80px;\n  height: 80px;\n  z-index: 13;\n  cursor: pointer; }\n.nav-icon img {\n    display: block;\n    width: 100%;\n    margin: auto; }\n/*.........................MAIN............................*/\ntable {\n  width: 100vw;\n  height: 100vh; }\ntable tr td {\n    vertical-align: middle; }\n/* entire container, keeps perspective */\n.flip-container {\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n/* flip the pane when hovered */\n.flip-container:hover .flipper, .flip-container.hover .flipper {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n.flip-container, .front, .back {\n  width: 320px;\n  height: 480px; }\n/* flip speed goes here */\n.flipper {\n  transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative; }\n/* hide back of pane during swap */\n.front, .back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0; }\n/* front pane, placed above back */\n.front {\n  z-index: 2;\n  /* for firefox 31 */\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg); }\n/* back, initially hidden pane */\n.back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n#eyeopen {\n  position: absolute;\n  top: 0;\n  z-index: 9; }\n.blink-infinite {\n  animation: blink 4s steps(1, end) infinite;\n  -webkit-animation: blink 4s steps(1, end) infinite;\n  -moz-animation: blink 4s steps(1, end) infinite;\n  -ms-animation: blink 4s steps(1, end) infinite;\n  -o-animation: blink 4s steps(1, end) infinite;\n  color: #000000; }\n.blink-infinite-r {\n  animation: blinkR 4s steps(1, end) infinite;\n  -webkit-animation: blinkR 4s steps(1, end) infinite;\n  -moz-animation: blinkR 4s steps(1, end) infinite;\n  -ms-animation: blinkR 4s steps(1, end) infinite;\n  -o-animation: blinkR 4s steps(1, end) infinite;\n  color: #000000; }\n.blink {\n  animation: blink 0.2s steps(5, start) 3;\n  -webkit-animation: blink 0.2s steps(5, start) 3;\n  -moz-animation: blink 0.2s steps(5, start) 3;\n  -ms-animation: blink 0.2s steps(5, start) 3;\n  -o-animation: blink 0.2s steps(5, start) 3; }\n.blink-once {\n  animation: blink 0.2s steps(5, start) 1;\n  -webkit-animation: blink 0.2s steps(5, start) 1;\n  -moz-animation: blink 0.2s steps(5, start) 1;\n  -ms-animation: blink 0.2s steps(5, start) 1;\n  -o-animation: blink 0.2s steps(5, start) 1; }\n@keyframes blink {\n  0% {\n    visibility: visible; }\n  20% {\n    visibility: hidden; }\n  25% {\n    visibility: visible; }\n  70% {\n    visibility: hidden; }\n  75% {\n    visibility: visible; }\n  90% {\n    visibility: hidden; }\n  95% {\n    visibility: visible; }\n  100% {\n    visibility: visible; } }\n@-webkit-keyframes blink {\n  0% {\n    visibility: visible; }\n  20% {\n    visibility: hidden; }\n  25% {\n    visibility: visible; }\n  70% {\n    visibility: hidden; }\n  75% {\n    visibility: visible; }\n  90% {\n    visibility: hidden; }\n  95% {\n    visibility: visible; }\n  100% {\n    visibility: visible; } }\n@-webkit-keyframes blinkR {\n  0% {\n    visibility: hidden; }\n  20% {\n    visibility: visible; }\n  25% {\n    visibility: hidden; }\n  70% {\n    visibility: visible; }\n  75% {\n    visibility: hidden; }\n  90% {\n    visibility: visible; }\n  95% {\n    visibility: hidden; }\n  100% {\n    visibility: hidden; } }\n@keyframes blinkR {\n  0% {\n    visibility: hidden; }\n  20% {\n    visibility: visible; }\n  25% {\n    visibility: hidden; }\n  70% {\n    visibility: visible; }\n  75% {\n    visibility: hidden; }\n  90% {\n    visibility: visible; }\n  95% {\n    visibility: hidden; }\n  100% {\n    visibility: hidden; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhL0RvY3VtZW50cy93ZWIvZ29vZGZpZ2h0L3NyYy9hcHAvc3R5bGVzL3Jlc2V0LnNjc3MiLCJzcmMvYXBwL3N0eWxlcy5zY3NzIiwiL1VzZXJzL2VsaWEvRG9jdW1lbnRzL3dlYi9nb29kZmlnaHQvc3JjL2FwcC9zdHlsZXMvZm9udHMuc2NzcyIsIi9Vc2Vycy9lbGlhL0RvY3VtZW50cy93ZWIvZ29vZGZpZ2h0L3NyYy9hcHAvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2VsaWEvRG9jdW1lbnRzL3dlYi9nb29kZmlnaHQvc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3MiLCIvVXNlcnMvZWxpYS9Eb2N1bWVudHMvd2ViL2dvb2RmaWdodC9zcmMvYXBwL3N0eWxlcy9nZW5lcmFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztDQ0dDO0FERUQ7Ozs7Ozs7Ozs7Ozs7RUFhQyxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QixFQUFBO0FBRXpCLGdEQUFBO0FBQ0E7O0VBRUMsY0FBYyxFQUFBO0FBRWY7RUFDQyxjQUFjLEVBQUE7QUFFZjtFQUNDLGdCQUFnQixFQUFBO0FBRWpCO0VBQ0MsWUFBWSxFQUFBO0FBRWI7O0VBRUMsV0FBVztFQUNYLGFBQWEsRUFBQTtBQUVkO0VBQ0MseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBO0FFOUNsQjtFQUNJLDJCQUEyQjtFQUMzQiw4REFBOEQ7RUFDOUQsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBO0FBSXRCO0VBQ0kseUJBQXlCO0VBQ3pCLDREQUE0RDtFQUU1RCxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUNidEIsdUZBQUE7QUFrR0EsdUZBQUE7QUNsR0Esb0ZBQUE7QUFVQSxnQ0FBQTtBQUNBLDZCQUFBO0FBb1JBLG9GQUFBO0FDL1JBLHlGQUFBO0FBS0EsOERBQUE7QUFFQTtFQUNJLHVCQUF1QjtFQUN2QixpQkFB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QUFLLGtCQUFrQixFQUFBO0VBQ3ZCO0lBQUssbUJBQW1CLEVBQUE7RUFDeEI7SUFBSyxtQkFBbUIsRUFBQSxFQUFBO0FBRzFCO0VBQ0U7SUFBRyxtQkFBbUIsRUFBQTtFQUN0QjtJQUFLLGtCQUFrQixFQUFBO0VBQ3ZCO0lBQUssbUJBQW1CLEVBQUE7RUFDeEI7SUFBSyxrQkFBa0IsRUFBQTtFQUN2QjtJQUFLLG1CQUFtQixFQUFBO0VBQ3hCO0lBQUssa0JBQWtCLEVBQUE7RUFDdkI7SUFBSyxtQkFBbUIsRUFBQTtFQUN4QjtJQUFLLG1CQUFtQixFQUFBLEVBQUE7QUEyQjFCO0VBQ0U7SUFBRyxrQkFBa0IsRUFBQTtFQUNyQjtJQUFLLG1CQUFtQixFQUFBO0VBQ3hCO0lBQUssa0JBQWtCLEVBQUE7RUFDdkI7SUFBSyxtQkFBbUIsRUFBQTtFQUN4QjtJQUFLLGtCQUFrQixFQUFBO0VBQ3ZCO0lBQUssbUJBQW1CLEVBQUE7RUFDeEI7SUFBSyxrQkFBa0IsRUFBQTtFQUN2QjtJQUFLLGtCQUFrQixFQUFBLEVBQUE7QUFSekI7RUFDRTtJQUFHLGtCQUFrQixFQUFBO0VBQ3JCO0lBQUssbUJBQW1CLEVBQUE7RUFDeEI7SUFBSyxrQkFBa0IsRUFBQTtFQUN2QjtJQUFLLG1CQUFtQixFQUFBO0VBQ3hCO0lBQUssa0JBQWtCLEVBQUE7RUFDdkI7SUFBSyxtQkFBbUIsRUFBQTtFQUN4QjtJQUFLLGtCQUFrQixFQUFBO0VBQ3ZCO0lBQUssa0JBQWtCLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG4iLCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cblxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTsgfVxuXG5vbCwgdWwge1xuICBsaXN0LXN0eWxlOiBub25lOyB9XG5cbmJsb2NrcXVvdGUsIHEge1xuICBxdW90ZXM6IG5vbmU7IH1cblxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBjb250ZW50OiBub25lOyB9XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBhcGVyY3VfcmVndWxhcjtcbiAgc3JjOiB1cmwoXCIvYXNzZXRzL2ZvbnRzL2FwZXJjdS1yZWd1bGFyLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBhcGVyY3VfbGlnaHQ7XG4gIHNyYzogdXJsKFwiL2Fzc2V0cy9mb250cy9hcGVyY3UtbGlnaHQud29mZjJcIikgZm9ybWF0KFwid29mZjJcIik7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodDtcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XG5cbi8qLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uU0NTUyBWQVJJQUJMRVMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uKi9cbi8qLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uKi9cbi8qLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uKi9cbi8qJGJyZWFrLWxhcmdlLWRlc2t0b3A6IDI1MDBweDsqL1xuLyokYnJlYWstaW5maW5pdGU6IDUwMDAwMHB4OyovXG4vKi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlNDU1MgTUlYSU5TLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiovXG4vKi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLkdlbmVyYWwgc2V0dGluZ3MuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uKi9cbi8qLi4uLi4uLi4uLi4uLi4uLi4uLi4uVEVYVCBNQVJLIFNUWUxFUy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4qL1xuOjotbW96LXNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTsgfVxuXG46OnNlbGVjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogbm9uZTsgfVxuXG4vKi4uLi4uLi4uLi4uLi4uLi4uLi4uLkFDVElWRSBDTEFTU0VTLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiovXG4uYWN0aXZlIHtcbiAgb3BhY2l0eTogMC4xOyB9XG5cbi5hY3RpdmUtbGluayB7XG4gIGNvbG9yOiAjMzA3NkJBICFpbXBvcnRhbnQ7IH1cblxuYXJyb3cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCBlYXNlIDAuNXM7XG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xuICAtby10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzOyB9XG4gIGFycm93IHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDsgfVxuXG4uYXJyb3ctcmlnaHQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG4gIC8qIElFIDkgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG4gIC8qIFNhZmFyaSAqL1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7IH1cblxuLmFycm93LXJpZ2h0IHN2ZyB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiA1cHg7IH1cblxuLmFycm93LWRvd246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgLyogSUUgOSAqL1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7XG4gIC8qIFNhZmFyaSAqL1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7IH1cblxuLmFycm93LWRvd24gc3ZnIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAvKiBJRSA5ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAvKiBTYWZhcmkgKi9cbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlOyB9XG5cbi5hcnJvdy1sZWZ0OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTVweCk7XG4gIC8qIElFIDkgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1cHgpO1xuICAvKiBTYWZhcmkgKi9cbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwOyB9XG5cbi5hcnJvdy1sZWZ0IHN2ZyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAvKiBJRSA5ICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLyogU2FmYXJpICovXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTsgfVxuXG4uYmxhY2tlZF90ZXh0IHtcbiAgY29sb3I6ICNGRkZGRkY7IH1cblxuLmJsYWNrZWRfcGF0aCB7XG4gIGZpbGw6ICNGRkZGRkY7IH1cblxuLmJsYWNrZWRfYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7IH1cblxuLyouLi4uLi4uLi4uLi4uLi4uLi4uLkhJRElORyBTQ1JPTExCQVIuLi4uLi4uLi4uLi4uLi4uLi4uLi4qL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuKiB7XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxuXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIG91dGxpbmU6IDA7IH1cblxuLyouLi4uLi4uLi4uLi4uLi4uLi4uLi5HRU5FUkFMIFNUWUxFUy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4qL1xuaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAsIDA7XG4gIHBhZGRpbmc6IDAsIDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG5cbmJvZHkge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwLCAwO1xuICBwYWRkaW5nOiAwLCAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjhmN2VjO1xuICBjb2xvcjogIzAwMDAwMDsgfVxuXG4qIHtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7IH1cblxucCwgYSwgbGkge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA7IH1cblxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGEsIGxpIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgZm9udC1mYW1pbHk6IFwiYXBlcmN1X2xpZ2h0XCI7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgMC40cyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogY29sb3IgMC40cyBlYXNlOyB9XG4gIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzA3NkJBO1xuICAgIC8qICBAaWYgJG1lZGlhID09IGxhcmdlLWRlc2t0b3Age1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlLWRlc2t0b3AgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWluZmluaXRlKSB7IEBjb250ZW50OyB9XG4gIH0qL1xuICAgIC8qICBAaWYgJG1lZGlhID09IGxhcmdlLWRlc2t0b3Age1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlLWRlc2t0b3AgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWluZmluaXRlKSB7IEBjb250ZW50OyB9XG4gIH0qL1xuICAgIC8qICBAaWYgJG1lZGlhID09IGxhcmdlLWRlc2t0b3Age1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlLWRlc2t0b3AgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWluZmluaXRlKSB7IEBjb250ZW50OyB9XG4gIH0qLyB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzY3cHgpIHtcbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50OyB9IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDIycHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDsgfSB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyMnB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50OyB9IH1cblxuLmEtaG92ZXIge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC40cyBlYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBjb2xvciAwLjRzIGVhc2U7XG4gIC1tcy10cmFuc2l0aW9uOiBjb2xvciAwLjRzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIDAuNHMgZWFzZTsgfVxuICAuYS1ob3Zlcjpob3ZlciB7XG4gICAgY29sb3I6ICNGNUY1RjU7XG4gICAgLyogIEBpZiAkbWVkaWEgPT0gbGFyZ2UtZGVza3RvcCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFyZ2UtZGVza3RvcCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstaW5maW5pdGUpIHsgQGNvbnRlbnQ7IH1cbiAgfSovXG4gICAgLyogIEBpZiAkbWVkaWEgPT0gbGFyZ2UtZGVza3RvcCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFyZ2UtZGVza3RvcCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstaW5maW5pdGUpIHsgQGNvbnRlbnQ7IH1cbiAgfSovXG4gICAgLyogIEBpZiAkbWVkaWEgPT0gbGFyZ2UtZGVza3RvcCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFyZ2UtZGVza3RvcCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstaW5maW5pdGUpIHsgQGNvbnRlbnQ7IH1cbiAgfSovIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjdweCkge1xuICAgICAgLmEtaG92ZXI6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50OyB9IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDIycHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAuYS1ob3Zlcjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7IH0gfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjJweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAuYS1ob3Zlcjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7IH0gfVxuXG5wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS43O1xuICBmb250LWZhbWlseTogXCJhcGVyY3VfbGlnaHRcIjtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDsgfVxuXG4ucDIge1xuICBmb250LXNpemU6IDlweDtcbiAgbGluZS1oZWlnaHQ6IDEuNztcbiAgZm9udC1mYW1pbHk6IFwiYXBlcmN1X2xpZ2h0XCIsIHNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjtcbiAgZm9udC1mYW1pbHk6IFwiYXBlcmN1X3JlZ3VsYXJcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMwNzZCQTsgfVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGZvbnQtZmFtaWx5OiBcImFwZXJjdV9yZWd1bGFyXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7IH1cblxuaDMge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBmb250LWZhbWlseTogXCJhcGVyY3VfcmVndWxhclwiO1xuICBsZXR0ZXItc3BhY2luZzogMHB4OyB9XG5cbi5wb3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA3dmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwcHg7XG4gIHotaW5kZXg6IDE0O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgZm9udC1zaXplOiAxMHB4OyB9XG5cbi5uYXYtaWNvbiB7XG4gIHRvcDogMzBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgei1pbmRleDogMTM7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICAubmF2LWljb24gaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87IH1cblxuLyouLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uTUFJTi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4qL1xudGFibGUge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7IH1cbiAgdGFibGUgdHIgdGQge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLyogZW50aXJlIGNvbnRhaW5lciwga2VlcHMgcGVyc3BlY3RpdmUgKi9cbi5mbGlwLWNvbnRhaW5lciB7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7IH1cblxuLyogZmxpcCB0aGUgcGFuZSB3aGVuIGhvdmVyZWQgKi9cbi5mbGlwLWNvbnRhaW5lcjpob3ZlciAuZmxpcHBlciwgLmZsaXAtY29udGFpbmVyLmhvdmVyIC5mbGlwcGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cblxuLmZsaXAtY29udGFpbmVyLCAuZnJvbnQsIC5iYWNrIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDQ4MHB4OyB9XG5cbi8qIGZsaXAgc3BlZWQgZ29lcyBoZXJlICovXG4uZmxpcHBlciB7XG4gIHRyYW5zaXRpb246IDAuNnM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4vKiBoaWRlIGJhY2sgb2YgcGFuZSBkdXJpbmcgc3dhcCAqL1xuLmZyb250LCAuYmFjayB7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7IH1cblxuLyogZnJvbnQgcGFuZSwgcGxhY2VkIGFib3ZlIGJhY2sgKi9cbi5mcm9udCB7XG4gIHotaW5kZXg6IDI7XG4gIC8qIGZvciBmaXJlZm94IDMxICovXG4gIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTsgfVxuXG4vKiBiYWNrLCBpbml0aWFsbHkgaGlkZGVuIHBhbmUgKi9cbi5iYWNrIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7IH1cblxuI2V5ZW9wZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTsgfVxuXG4uYmxpbmstaW5maW5pdGUge1xuICBhbmltYXRpb246IGJsaW5rIDRzIHN0ZXBzKDEsIGVuZCkgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayA0cyBzdGVwcygxLCBlbmQpIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogYmxpbmsgNHMgc3RlcHMoMSwgZW5kKSBpbmZpbml0ZTtcbiAgLW1zLWFuaW1hdGlvbjogYmxpbmsgNHMgc3RlcHMoMSwgZW5kKSBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBibGluayA0cyBzdGVwcygxLCBlbmQpIGluZmluaXRlO1xuICBjb2xvcjogIzAwMDAwMDsgfVxuXG4uYmxpbmstaW5maW5pdGUtciB7XG4gIGFuaW1hdGlvbjogYmxpbmtSIDRzIHN0ZXBzKDEsIGVuZCkgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGlua1IgNHMgc3RlcHMoMSwgZW5kKSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJsaW5rUiA0cyBzdGVwcygxLCBlbmQpIGluZmluaXRlO1xuICAtbXMtYW5pbWF0aW9uOiBibGlua1IgNHMgc3RlcHMoMSwgZW5kKSBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBibGlua1IgNHMgc3RlcHMoMSwgZW5kKSBpbmZpbml0ZTtcbiAgY29sb3I6ICMwMDAwMDA7IH1cblxuLmJsaW5rIHtcbiAgYW5pbWF0aW9uOiBibGluayAwLjJzIHN0ZXBzKDUsIHN0YXJ0KSAzO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgMC4ycyBzdGVwcyg1LCBzdGFydCkgMztcbiAgLW1vei1hbmltYXRpb246IGJsaW5rIDAuMnMgc3RlcHMoNSwgc3RhcnQpIDM7XG4gIC1tcy1hbmltYXRpb246IGJsaW5rIDAuMnMgc3RlcHMoNSwgc3RhcnQpIDM7XG4gIC1vLWFuaW1hdGlvbjogYmxpbmsgMC4ycyBzdGVwcyg1LCBzdGFydCkgMzsgfVxuXG4uYmxpbmstb25jZSB7XG4gIGFuaW1hdGlvbjogYmxpbmsgMC4ycyBzdGVwcyg1LCBzdGFydCkgMTtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rIDAuMnMgc3RlcHMoNSwgc3RhcnQpIDE7XG4gIC1tb3otYW5pbWF0aW9uOiBibGluayAwLjJzIHN0ZXBzKDUsIHN0YXJ0KSAxO1xuICAtbXMtYW5pbWF0aW9uOiBibGluayAwLjJzIHN0ZXBzKDUsIHN0YXJ0KSAxO1xuICAtby1hbmltYXRpb246IGJsaW5rIDAuMnMgc3RlcHMoNSwgc3RhcnQpIDE7IH1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDAlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gIDIwJSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gIDI1JSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICA3MCUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICA3NSUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgOTAlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgOTUlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gIDEwMCUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH0gfVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xuICAwJSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAyMCUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICAyNSUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgNzAlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgNzUlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gIDkwJSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gIDk1JSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAxMDAlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9IH1cblxuQC1tb3ota2V5ZnJhbWVzIGJsaW5rIHtcbiAgMCUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgMjAlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgMjUlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gIDcwJSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gIDc1JSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICA5MCUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICA5NSUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgMTAwJSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfSB9XG5cbkAtby1rZXlmcmFtZXMgYmxpbmsge1xuICAwJSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAyMCUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICAyNSUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgNzAlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgNzUlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gIDkwJSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gIDk1JSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAxMDAlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9IH1cblxuQGtleWZyYW1lcyBibGlua1Ige1xuICAwJSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gIDIwJSB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAyNSUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICA3MCUge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgNzUlIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgOTAlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gIDk1JSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gIDEwMCUge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfSB9XG4iLCJAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogYXBlcmN1X3JlZ3VsYXI7XG4gICAgc3JjOiB1cmwoJy9hc3NldHMvZm9udHMvYXBlcmN1LXJlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgLy8gLCB1cmwoJy9hc3NldHMvZm9udHMvZGlkb3QvRGlkb3Qub3RmJykgZm9ybWF0KCdvdGYnKVxufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogYXBlcmN1X2xpZ2h0O1xuICAgIHNyYzogdXJsKCcvYXNzZXRzL2ZvbnRzL2FwZXJjdS1saWdodC53b2ZmMicpIGZvcm1hdCgnd29mZjInKTtcbiAgICAvLyAsIHVybCgnL2Fzc2V0cy9mb250cy9kaWRvdC9EaWRvdC5vdGYnKSBmb3JtYXQoJ290ZicpXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiIsIi8qLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uU0NTUyBWQVJJQUJMRVMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uKi9cblxuXG4vLyAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLkZPTlQgV0VJR0hUU1xuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XG4kZm9udC13ZWlnaHQtcmVndWxhcjogNDAwO1xuJGZvbnQtd2VpZ2h0LWhlYXZ5OiA5MDA7XG5cblxuLy8gLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5GT05UIFNJWkVTXG4kZm9udC1zaXplLWgxOjI1cHg7XG4kZm9udC1zaXplLWgyOjE0cHg7XG4kZm9udC1zaXplLWgzOjEzcHg7XG4kZm9udC1zaXplLXA6IDEzcHg7XG4kZm9udC1zaXplLXAyOiA5cHg7XG5cbiRmb250LXNpemUtaDEtbW9iaWxlOiAxOHB4O1xuJGZvbnQtc2l6ZS1oMi1tb2JpbGU6IDMwcHg7XG4kZm9udC1zaXplLWgzLW1vYmlsZTogMTRweDtcbiRmb250LXNpemUtcC1tb2JpbGU6IDExcHg7XG4kZm9udC1zaXplLXAyLW1vYmlsZTogN3B4O1xuXG4vLyAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLkZPTlQgRkFNSUxJRVNcbiRmb250LWZhbWlseS1oMTogJ2FwZXJjdV9yZWd1bGFyJztcbiRmb250LWZhbWlseS1oMjogJ2FwZXJjdV9yZWd1bGFyJztcbiRmb250LWZhbWlseS1oMzogJ2FwZXJjdV9yZWd1bGFyJztcbiRmb250LWZhbWlseS1wOiAnYXBlcmN1X2xpZ2h0JztcbiRmb250LWZhbWlseS1wMjogJ2FwZXJjdV9saWdodCcsIHNlcmlmO1xuXG5cbi8vIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uRk9OVCBMSU5FSEVJR0hUU1xuJGxpbmUtaGVpZ2h0LWgxOiAyO1xuJGxpbmUtaGVpZ2h0LWgyOiAyO1xuJGxpbmUtaGVpZ2h0LWgzOiAyO1xuJGxpbmUtaGVpZ2h0LXA6IDEuNztcbiRsaW5lLWhlaWdodC1wMjoxLjc7XG5cbiRsaW5lLWhlaWdodC1oMS1tb2JpbGU6IDIwcHg7XG4kbGluZS1oZWlnaHQtaDItbW9iaWxlOiA0NXB4O1xuJGxpbmUtaGVpZ2h0LWgzLW1vYmlsZTogMzBweDtcbiRsaW5lLWhlaWdodC1wLW1vYmlsZTogMjBweDtcbiRsaW5lLWhlaWdodC1wMi1tb2JpbGU6IDE1cHg7XG5cblxuJGxldHRlci1zcGFjaW5nOiAwcHg7XG4kbGV0dGVyLXNwYWNpbmctaDE6IDBweDtcbiRsZXR0ZXItc3BhY2luZy1oMjogMHB4O1xuJGxldHRlci1zcGFjaW5nLWgzOiAwcHg7XG4kbGV0dGVyLXNwYWNpbmctcDowcHg7XG4kbGV0dGVyLXNwYWNpbmctcDI6MHB4O1xuXG4vLyAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLkNPTE9SU1xuJGJsYWNrOiAjMDAwMDAwO1xuJHdoaXRlOiAjRkZGRkZGO1xuJGJsdWU6ICMzMDc2QkE7XG4kY3JlYW06ICNmOGY3ZWM7XG4kZ3JleTogI2E4YThhODtcbiRsaWdodC1ncmV5OiNGNUY1RjU7XG5cblxuLy8gLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5NQVJHSU5TXG4kbWFyZ2luLXNpZGVzOiAzMHB4O1xuJG1hcmdpbi1ib3R0b206IDM1cHg7XG4kbWFyZ2luLXRvcDogMTUwcHg7XG4kbWFyZ2luLXNpZGVzLW1vYmlsZToxMHB4O1xuJG1hcmdpbi1sZWZ0LXBhcmFncmFwaDo1cHg7XG4kbWFyZ2luLXRvcC1saToxNTBweDtcbiRtYXJnaW4tdG9wLXA6MjVweDtcblxuLy8gLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5UUkFOU0lUSU9OIFRJTUlOR1NcbiR0cmFuc2l0aW9uLWV4dHJlbWUtc2xvdzogMS40cztcbiR0cmFuc2l0aW9uLXNsb3c6IC42cztcbiR0cmFuc2l0aW9uLW1lZGl1bTogLjRzO1xuJHRyYW5zaXRpb24tZmFzdDogLjJzO1xuXG5cblxuLy8gLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5aLUlOREVYRVNcbiR6LWxvYWRlcjoxNTtcbiR6LXBvcDoxNDtcbiR6LW5hdi1pY29uOjEzO1xuJHotc2hhcmU6MTM7XG5cbiR6LWNsaWNrT3V0OiAxMjtcbiR6LW5hdjoxMDtcbiR6LWluZm86OTtcbiR6LXNwbGFzaDo5O1xuJHotbG9nbzo4O1xuJHotcHJvamVjdHMtYXJyb3dzOjk7XG4kei1jcmVkaXRzOjg7XG4kei1wcmVzcy1jYW1lcmE6ODtcbiR6LXByZXNzLWg6ODtcbiR6LXByZXNzLWJhY2tncm91bmQ6NztcbiR6LWZlZWQ6NztcbiR6LWRldGFpbC1saTo0O1xuJHotZGV0YWlsLWNvdmVyOjM7XG5cblxuLyouLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4qL1xuIiwiLyouLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4qL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1NRURJQSBRVUVSSUVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kYnJlYWstcGhvbmU6IDc2N3B4O1xuJGJyZWFrLXBob25lLWxhbmRzY2FwZTogNzY3cHg7XG4kYnJlYWstdGFibGV0OiAxMDIycHg7XG4kYnJlYWstdGFibGV0LWxhbmRzY2FwZTogMTAyNHB4O1xuJGJyZWFrLWxhcHRvcC1zbWFsbDogMTI4MHB4O1xuJGJyZWFrLWxhcHRvcC1tZWRpdW06IDE0NDBweDtcbiRicmVhay1sYXB0b3AtbGFyZ2U6IDE5MjBweDtcbiRicmVhay1kZXNrdG9wOiA1MDAwMHB4O1xuLyokYnJlYWstbGFyZ2UtZGVza3RvcDogMjUwMHB4OyovXG4vKiRicmVhay1pbmZpbml0ZTogNTAwMDAwcHg7Ki9cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4vKiAgQGlmICRtZWRpYSA9PSBsYXJnZS1kZXNrdG9wIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZS1kZXNrdG9wICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1pbmZpbml0ZSkgeyBAY29udGVudDsgfVxuICB9Ki9cbiAgQGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXB0b3AtbGFyZ2UgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWRlc2t0b3ApIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhcmdlIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXB0b3AtbWVkaXVtICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3AtbGFyZ2UpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLW1lZGl1bSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFwdG9wLXNtYWxsICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3AtbWVkaXVtKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1zbWFsbCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3Atc21hbGwpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuXG4gIC8vLy8vLy8vLy8vL3x8fHx8fHx8fHx8Li5qdXN0IGNoYW5nZWQgdGhlIHRhYmxldCBtZWRpYSBxdWVyeSBiZWxvdyBiZWNhdXNlIGl0IHdhcyBub3QgcmVhZGluZyB0aGUgbGFuZHNjYXBlIHZpZXc6IDEwMjRweCBpcyB0aGUgdGFibGV0IGxhbmRzY2FwZSB3aWR0aC4ufHx8fHx8fHx8fHx8fHxcXFxcXFxcXFxcXFxcXFxcXFxcXFxuXG4gIEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1waG9uZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0LWxhbmRzY2FwZSkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstcGhvbmUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gcGhvbmUge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXBob25lKSB7IEBjb250ZW50OyB9XG4gIH1cblxuICAvL1RoZXNlIGFyZSBvbmx5IGZvciB0aGUgcmVhbCBkZXZpY2VcbiAgQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUtZGV2aWNlIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAkYnJlYWstcGhvbmUgKyAxKSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6ICRicmVhay10YWJsZXQpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQtZGV2aWNlIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAkYnJlYWstcGhvbmUgKyAxKSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6ICRicmVhay10YWJsZXQpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IHBob25lLWRldmljZSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogJGJyZWFrLXBob25lKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IHBob25lLWxhbmRzY2FwZS1kZXZpY2Uge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDBweCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1waG9uZSkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7IEBjb250ZW50OyB9XG4gICAgICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gaG92ZXItZWZmZWN0LWZpbGwoJGNvbG9yLCAkaG92ZXIsICR0eXBlKXtcblxuXG4gIEBpZiAkdHlwZSA9PSAnZmlsbCcge1xuXG4gICAgc3ZnLCBnLCBwYXRoLCByZWN0LCBsaW5le1xuICAgICAgZmlsbDogJGNvbG9yO1xuICAgICAgdHJhbnNpdGlvbjogICAgICAgICBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiAgICBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgLW1zLXRyYW5zaXRpb246ICAgICBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgLW8tdHJhbnNpdGlvbjogICAgICBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuXG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHN2ZywgZywgcGF0aCwgcmVjdCwgbGluZXtcbiAgICAgICAgICBmaWxsOiAkaG92ZXI7XG4gICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhwaG9uZS1kZXZpY2UpIHtcbiAgICAgICAgICAgICAgZmlsbDogJGNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8odGFibGV0LXBvcnRyYWl0LWRldmljZSkge1xuICAgICAgICAgICAgICBmaWxsOiAkY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byh0YWJsZXQtbGFuZHNjYXBlLWRldmljZSkge1xuICAgICAgICAgICAgICBmaWxsOiAkY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgfSBAZWxzZSBpZiAkdHlwZSA9PSAnc3Ryb2tlJyB7XG4gICAgICBzdmcsIGcsIHBhdGgsIHJlY3QsIGxpbmV7XG4gICAgICAgIHN0cm9rZTogJGNvbG9yO1xuICAgICAgICB0cmFuc2l0aW9uOiAgICAgICAgIHN0cm9rZSAkdHJhbnNpdGlvbi1tZWRpdW0gZWFzZTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBzdHJva2UgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogICAgc3Ryb2tlICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgICAtbXMtdHJhbnNpdGlvbjogICAgIHN0cm9rZSAkdHJhbnNpdGlvbi1tZWRpdW0gZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogICAgICBzdHJva2UgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICAgIHN2ZywgZywgcGF0aCwgcmVjdCwgbGluZXtcbiAgICAgICAgICAgIHN0cm9rZTogJGhvdmVyO1xuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhwaG9uZS1kZXZpY2UpIHtcbiAgICAgICAgICAgICAgICBzdHJva2U6ICRjb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byh0YWJsZXQtcG9ydHJhaXQtZGV2aWNlKSB7XG4gICAgICAgICAgICAgICAgc3Ryb2tlOiAkY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8odGFibGV0LWxhbmRzY2FwZS1kZXZpY2UpIHtcbiAgICAgICAgICAgICAgICBzdHJva2U6ICRjb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuICBAZWxzZSBpZiAkdHlwZSA9PSAnZycge1xuXG4gICAgc3Zne1xuICAgICAgZ3tcbiAgICAgICAgZ3tcbiAgICAgICAgICBwYXRoe1xuICAgICAgICAgICAgZmlsbDogJGNvbG9yO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogICAgICAgICBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiAgICBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246ICAgICBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjogICAgICBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgc3Zne1xuICAgICAgICBne1xuICAgICAgICAgIGd7XG4gICAgICAgICAgICBwYXRoe1xuICAgICAgICAgICAgICBmaWxsOiAkaG92ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhwaG9uZS1kZXZpY2UpIHtcbiAgICAgICAgICAgICAgICAgIGZpbGw6ICRjb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8odGFibGV0LXBvcnRyYWl0LWRldmljZSkge1xuICAgICAgICAgICAgICAgICAgZmlsbDogJGNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byh0YWJsZXQtbGFuZHNjYXBlLWRldmljZSkge1xuICAgICAgICAgICAgICAgICAgZmlsbDogJGNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQGVsc2UgaWYgJHR5cGUgPT0gJ2ZhY2Vib29rJyB7XG5cbiAgICBzdmd7XG4gICAgICAjQmx1ZV8xX3tcbiAgICAgICAgZmlsbDogJGNvbG9yO1xuICAgICAgICB0cmFuc2l0aW9uOiAgICAgICAgIGZpbGwgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAkdHJhbnNpdGlvbi1tZWRpdW0gZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAgICBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgICAtbXMtdHJhbnNpdGlvbjogICAgIGZpbGwgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246ICAgICAgZmlsbCAkdHJhbnNpdGlvbi1tZWRpdW0gZWFzZTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgICY6aG92ZXIge1xuICAgICAgc3Zne1xuICAgICAgICAjQmx1ZV8xX3tcbiAgICAgICAgICBmaWxsOiAkaG92ZXI7XG4gICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhwaG9uZS1kZXZpY2UpIHtcbiAgICAgICAgICAgICAgZmlsbDogJGNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8odGFibGV0LXBvcnRyYWl0LWRldmljZSkge1xuICAgICAgICAgICAgICBmaWxsOiAkY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byh0YWJsZXQtbGFuZHNjYXBlLWRldmljZSkge1xuICAgICAgICAgICAgICBmaWxsOiAkY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQGVsc2UgaWYgJHR5cGUgPT0gJ2l0dW5lcycge1xuXG4gICAgc3Zne1xuICAgICAgI2JhY2tncm91bmR7XG4gICAgICAgIGZpbGw6ICRjb2xvcjtcbiAgICAgICAgdHJhbnNpdGlvbjogICAgICAgICBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogICAgZmlsbCAkdHJhbnNpdGlvbi1tZWRpdW0gZWFzZTtcbiAgICAgICAgLW1zLXRyYW5zaXRpb246ICAgICBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgICAtby10cmFuc2l0aW9uOiAgICAgIGZpbGwgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHN2Z3tcbiAgICAgICAgICAjYmFja2dyb3VuZHtcbiAgICAgICAgICAgIGZpbGw6ICRob3ZlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhwaG9uZS1kZXZpY2UpIHtcbiAgICAgICAgICAgICAgICBmaWxsOiAkY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8odGFibGV0LXBvcnRyYWl0LWRldmljZSkge1xuICAgICAgICAgICAgICAgIGZpbGw6ICRjb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byh0YWJsZXQtbGFuZHNjYXBlLWRldmljZSkge1xuICAgICAgICAgICAgICAgIGZpbGw6ICRjb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICBAZWxzZSBpZiAkdHlwZSA9PSAndHdpdHRlcicge1xuXG4gICAgc3Zne1xuICAgICAgcGF0aHtcbiAgICAgICAgZmlsbDogJGNvbG9yO1xuICAgICAgICB0cmFuc2l0aW9uOiAgICAgICAgIGZpbGwgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAkdHJhbnNpdGlvbi1tZWRpdW0gZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAgICBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgICAtbXMtdHJhbnNpdGlvbjogICAgIGZpbGwgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246ICAgICAgZmlsbCAkdHJhbnNpdGlvbi1tZWRpdW0gZWFzZTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgICY6aG92ZXIge1xuICAgICAgc3Zne1xuICAgICAgICBwYXRoe1xuICAgICAgICAgIGZpbGw6ICRob3ZlciAhaW1wb3J0YW50O1xuICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8ocGhvbmUtZGV2aWNlKSB7XG4gICAgICAgICAgICAgIGZpbGw6ICRjb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKHRhYmxldC1wb3J0cmFpdC1kZXZpY2UpIHtcbiAgICAgICAgICAgICAgZmlsbDogJGNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8odGFibGV0LWxhbmRzY2FwZS1kZXZpY2UpIHtcbiAgICAgICAgICAgICAgZmlsbDogJGNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIEBlbHNlIGlmICR0eXBlID09ICd5b3V0dWJlJyB7XG5cbiAgICBzdmd7XG4gICAgICAjVGhlX1NoYXJwbmVzc3tcbiAgICAgICAgZmlsbDogJGNvbG9yO1xuICAgICAgICB0cmFuc2l0aW9uOiAgICAgICAgIGZpbGwgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAkdHJhbnNpdGlvbi1tZWRpdW0gZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAgICBmaWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAgICAgICAtbXMtdHJhbnNpdGlvbjogICAgIGZpbGwgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246ICAgICAgZmlsbCAkdHJhbnNpdGlvbi1tZWRpdW0gZWFzZTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgICY6aG92ZXIge1xuICAgICAgc3Zne1xuICAgICAgICAjVGhlX1NoYXJwbmVzc3tcbiAgICAgICAgICBmaWxsOiAkaG92ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKHBob25lLWRldmljZSkge1xuICAgICAgICAgICAgICBmaWxsOiAkY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byh0YWJsZXQtcG9ydHJhaXQtZGV2aWNlKSB7XG4gICAgICAgICAgICAgIGZpbGw6ICRjb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKHRhYmxldC1sYW5kc2NhcGUtZGV2aWNlKSB7XG4gICAgICAgICAgICAgIGZpbGw6ICRjb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuJHRyYW5zaXRpb24tc2xvdzogMXM7XG5cbi8qLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uU0NTUyBNSVhJTlMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uKi9cblxuXG5AbWl4aW4gaG92ZXItZWZmZWN0LW9wYWNpdHkoJG9wYWNpdHk6IDEsICRob3ZlcjogLjIpe1xuICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgdHJhbnNpdGlvbjogICAgICAgICBhbGwgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246ICAgIGFsbCAkdHJhbnNpdGlvbi1tZWRpdW0gZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246ICAgICBhbGwgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246ICAgICAgYWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuXG5cbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogJGhvdmVyO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhwaG9uZS1kZXZpY2UpIHtcbiAgICAgICAgb3BhY2l0eTogJG9wYWNpdHkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byh0YWJsZXQtcG9ydHJhaXQtZGV2aWNlKSB7XG4gICAgICAgIG9wYWNpdHk6ICRvcGFjaXR5ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8odGFibGV0LWxhbmRzY2FwZS1kZXZpY2UpIHtcbiAgICAgICAgb3BhY2l0eTogJG9wYWNpdHkgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGhvdmVyLWVmZmVjdC1mYWRlKCRweCl7XG5cbiAgZmlsdGVyOiBibHVyKDBweCk7XG4gIC13ZWJraXQtZmlsdGVyOmJsdXIoMHB4KTtcbiAgLW8tZmlsdGVyOiBibHVyKDBweCk7XG4gIC1tb3otZmlsdGVyOiBibHVyKDBweCk7XG4gIHRyYW5zaXRpb246ICAgICAgICAgYWxsICR0cmFuc2l0aW9uLXNsb3cgZWFzZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgJHRyYW5zaXRpb24tc2xvdyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246ICAgIGFsbCAkdHJhbnNpdGlvbi1zbG93IGVhc2U7XG4gIC1tcy10cmFuc2l0aW9uOiAgICAgYWxsICR0cmFuc2l0aW9uLXNsb3cgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogICAgICBhbGwgJHRyYW5zaXRpb24tc2xvdyBlYXNlO1xuXG5cbiAgJjpob3ZlciB7XG4gICAgZmlsdGVyOiBibHVyKCRweCk7XG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoJHB4KTtcbiAgICAtby1maWx0ZXI6IGJsdXIoJHB4KTtcbiAgICAtbW96LWZpbHRlcjogYmx1cigkcHgpO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhwaG9uZS1kZXZpY2UpIHtcbiAgICAgIGZpbHRlcjogYmx1cigwKTtcbiAgICAgIC13ZWJraXQtZmlsdGVyOiBibHVyKDApO1xuICAgICAgLW8tZmlsdGVyOiBibHVyKDApO1xuICAgICAgLW1vei1maWx0ZXI6IGJsdXIoMCk7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8odGFibGV0LXBvcnRyYWl0LWRldmljZSkge1xuICAgICAgZmlsdGVyOiBibHVyKDApO1xuICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMCk7XG4gICAgICAtby1maWx0ZXI6IGJsdXIoMCk7XG4gICAgICAtbW96LWZpbHRlcjogYmx1cigwKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byh0YWJsZXQtbGFuZHNjYXBlLWRldmljZSkge1xuICAgICAgZmlsdGVyOiBibHVyKDApO1xuICAgICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMCk7XG4gICAgICAtby1maWx0ZXI6IGJsdXIoMCk7XG4gICAgICAtbW96LWZpbHRlcjogYmx1cigwKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbkBtaXhpbiBob3Zlci1lZmZlY3Qtc2F0dXJhdGlvbigkaW5pdGlhbCwgJGZpbmFsKXtcblxuICBmaWx0ZXI6Z3JheXNjYWxlKCRpbml0aWFsKTtcbiAgLXdlYmtpdC1maWx0ZXI6Z3JheXNjYWxlKCRpbml0aWFsKTtcbiAgLW8tZmlsdGVyOiBncmF5c2NhbGUoJGluaXRpYWwpO1xuICAtbW96LWZpbHRlcjogZ3JheXNjYWxlKCRpbml0aWFsKTtcbiAgdHJhbnNpdGlvbjogICAgICAgICBhbGwgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246ICAgIGFsbCAkdHJhbnNpdGlvbi1tZWRpdW0gZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246ICAgICBhbGwgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246ICAgICAgYWxsICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuXG5cbiAgJjpob3ZlciB7XG4gICAgZmlsdGVyOiBncmF5c2NhbGUoJGZpbmFsKTtcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKCRmaW5hbCk7XG4gICAgLW8tZmlsdGVyOiBncmF5c2NhbGUoJGZpbmFsKTtcbiAgICAtbW96LWZpbHRlcjogZ3JheXNjYWxlKCRmaW5hbCk7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHBob25lLWRldmljZSkge1xuICAgICAgZmlsdGVyOiBncmF5c2NhbGUoJGluaXRpYWwpO1xuICAgICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgkaW5pdGlhbCk7XG4gICAgICAtby1maWx0ZXI6IGdyYXlzY2FsZSgkaW5pdGlhbCk7XG4gICAgICAtbW96LWZpbHRlcjogZ3JheXNjYWxlKCRpbml0aWFsKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byh0YWJsZXQtcG9ydHJhaXQtZGV2aWNlKSB7XG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgkaW5pdGlhbCk7XG4gICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKCRpbml0aWFsKTtcbiAgICAgIC1vLWZpbHRlcjogZ3JheXNjYWxlKCRpbml0aWFsKTtcbiAgICAgIC1tb3otZmlsdGVyOiBncmF5c2NhbGUoJGluaXRpYWwpO1xuICAgIH1cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHRhYmxldC1sYW5kc2NhcGUtZGV2aWNlKSB7XG4gICAgICBmaWx0ZXI6IGdyYXlzY2FsZSgkaW5pdGlhbCk7XG4gICAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKCRpbml0aWFsKTtcbiAgICAgIC1vLWZpbHRlcjogZ3JheXNjYWxlKCRpbml0aWFsKTtcbiAgICAgIC1tb3otZmlsdGVyOiBncmF5c2NhbGUoJGluaXRpYWwpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItc2hpZnJpZ2h0KCl7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjVzIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogbWFyZ2luIDAuNXMgZWFzZTtcbiAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4gMC41cyBlYXNlO1xuICAtbXMtdHJhbnNpdGlvbjogbWFyZ2luIDAuNXMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogbWFyZ2luIDAuNXMgZWFzZTtcbiAgO1xuICAmOmhvdmVye1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbn1cblxuXG5cbkBtaXhpbiBob3Zlci1zaGlmdHRleHQoKXtcblxuICBoM3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOjAlO1xuICAgIHRyYW5zaXRpb246IDFzIGVhc2U7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOjFzIGVhc2U7XG4gICAgLW1vei10cmFuc2l0aW9uOjFzIGVhc2U7XG4gICAgLW1zLXRyYW5zaXRpb246MXMgZWFzZTtcbiAgICAtby10cmFuc2l0aW9uOjFzIGVhc2U7XG4gIH1cblxuICAgIHNwYW57XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIHBhZGRpbmc6MCU7XG4gICAgICBzcGFue1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgLy8gLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgIC8vIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAvLyAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gICAgICB9XG4gICAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBob3Zlci1lZmZlY3QtYmFja2dyb3VuZC1jb2xvcigkY29sb3IsICRob3Zlcil7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgdHJhbnNpdGlvbjogICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogICAgYmFja2dyb3VuZC1jb2xvciAkdHJhbnNpdGlvbi1tZWRpdW0gZWFzZTtcbiAgLW1zLXRyYW5zaXRpb246ICAgICBiYWNrZ3JvdW5kLWNvbG9yICR0cmFuc2l0aW9uLW1lZGl1bSBlYXNlO1xuICAtby10cmFuc2l0aW9uOiAgICAgIGJhY2tncm91bmQtY29sb3IgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8ocGhvbmUtZGV2aWNlKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvciAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHRhYmxldC1wb3J0cmFpdC1kZXZpY2UpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8odGFibGV0LWxhbmRzY2FwZS1kZXZpY2UpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cblxuQG1peGluIGhvdmVyLWVmZmVjdC1jb2xvcigkY29sb3IsICRob3Zlcil7XG4gIGNvbG9yOiAkY29sb3I7XG4gIHRyYW5zaXRpb246ICAgICAgICAgY29sb3IgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogICAgY29sb3IgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gIC1tcy10cmFuc2l0aW9uOiAgICAgY29sb3IgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246ICAgICAgY29sb3IgJHRyYW5zaXRpb24tbWVkaXVtIGVhc2U7XG4gIC8vIG9wYWNpdHk6ICRob3ZlcjtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJGhvdmVyO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8ocGhvbmUtZGV2aWNlKSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byh0YWJsZXQtcG9ydHJhaXQtZGV2aWNlKSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3IgIWltcG9ydGFudDtcbiAgICB9XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byh0YWJsZXQtbGFuZHNjYXBlLWRldmljZSkge1xuICAgICAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0tdHJhbnNpdGlvbigkZHVyYXRpb246ICR0cmFuc2l0aW9uLXNsb3cpe1xuICB0cmFuc2l0aW9uOiAgICAgICAgIHRyYW5zZm9ybSAkZHVyYXRpb24gZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gJGR1cmF0aW9uIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246ICAgIC1tb3otdHJhbnNmb3JtICRkdXJhdGlvbiBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246ICAgICAtbXMtdHJhbnNmb3JtICRkdXJhdGlvbiBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogICAgICAtby10cmFuc2Zvcm0gJGR1cmF0aW9uIGVhc2UtaW4tb3V0O1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtLWVsZW1lbnQoJGNvb3JkaW5hdGUpe1xuICB0cmFuc2Zvcm06ICRjb29yZGluYXRlO1xuICAtbXMtdHJhbnNmb3JtOiAkY29vcmRpbmF0ZTsgLyogSUUgOSAqL1xuIFx0LXdlYmtpdC10cmFuc2Zvcm06ICRjb29yZGluYXRlOyAvKiBTYWZhcmkgKi9cbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xufVxuXG5cbkBtaXhpbiB0cmFuc2Zvcm0tcG9zaXRpb24oJHBvc2l0aW9uOiAtMTAwJSl7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgkcG9zaXRpb24pO1xuICAtd2Via2l0LXRyYW5zZm9ybTogIHRyYW5zbGF0ZVgoJHBvc2l0aW9uKTtcbiAgLW1vei10cmFuc2Zvcm06ICAgICB0cmFuc2xhdGVYKCRwb3NpdGlvbik7XG4gIC1tcy10cmFuc2Zvcm06ICAgICAgdHJhbnNsYXRlWCgkcG9zaXRpb24pO1xuICAtby10cmFuc2Zvcm06ICAgICAgIHRyYW5zbGF0ZVgoJHBvc2l0aW9uKTtcbn1cblxuXG5AbWl4aW4gY2VudGVyLXRyYW5zZm9ybSgkbGVmdCwgJHRvcCl7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoJGxlZnQsJHRvcCwgMCk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiAgdHJhbnNsYXRlM2QoJGxlZnQsJHRvcCwgMCk7XG4gIC1tb3otdHJhbnNmb3JtOiAgICAgdHJhbnNsYXRlM2QoJGxlZnQsJHRvcCwgMCk7XG4gIC1tcy10cmFuc2Zvcm06ICAgICAgdHJhbnNsYXRlM2QoJGxlZnQsJHRvcCwgMCk7XG4gIC1vLXRyYW5zZm9ybTogICAgICAgdHJhbnNsYXRlM2QoJGxlZnQsJHRvcCwgMCk7XG59XG5cblxuQG1peGluIHRyYW5zZm9ybS1vcmlnaW4oJGNvb3JkaW5hdGVzKXtcbiAgdHJhbnNmb3JtLW9yaWdpbjogJGNvb3JkaW5hdGVzO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46ICAkY29vcmRpbmF0ZXM7XG4gIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogICAgICRjb29yZGluYXRlcztcbiAgLW1zLXRyYW5zZm9ybS1vcmlnaW46ICAgICAgJGNvb3JkaW5hdGVzO1xuICAtby10cmFuc2Zvcm0tb3JpZ2luOiAgICAgICAkY29vcmRpbmF0ZXM7XG59XG5cblxuXG5cblxuQG1peGluIGgxKCl7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1oMTtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1oMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmctaDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjokYmx1ZTtcbiAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLy8gQGluY2x1ZGUgcmVzcG9uZC10byhwaG9uZSl7XG4gIC8vICAgZm9udC1zaXplOiAkZm9udC1zaXplLWgxLW1vYmlsZTtcbiAgLy8gfVxufVxuQG1peGluIGgyKCl7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMjtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1oMjtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1oMjtcbiAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXItc3BhY2luZy1oMjtcbiAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLy8gZm9udC13ZWlnaHQ6IDQwMCFpbXBvcnRhbnQ7XG4gIC8vIEBpbmNsdWRlIHJlc3BvbmQtdG8ocGhvbmUpe1xuICAvLyAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMi1tb2JpbGU7XG4gIC8vICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1oMi1tb2JpbGU7XG4gIC8vIH1cbn1cblxuQG1peGluIGgzKCl7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMztcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1oMztcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1oMztcbiAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXItc3BhY2luZy1oMztcbiAgLy8gdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLy8gZm9udC13ZWlnaHQ6IDQwMCFpbXBvcnRhbnQ7XG4gIC8vIEBpbmNsdWRlIHJlc3BvbmQtdG8ocGhvbmUpe1xuICAvLyAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMy1tb2JpbGU7XG4gIC8vICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1oMy1tb2JpbGU7XG4gIC8vIH1cbn1cblxuQG1peGluIHAoKXtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXA7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtcDtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1wO1xuICAvLyBmb250LXdlaWdodDogbGlnaHQ7XG4gIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmctcDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLy8gQGluY2x1ZGUgcmVzcG9uZC10byhwaG9uZSl7XG4gIC8vICAgZm9udC1zaXplOiAkZm9udC1zaXplLXAtbW9iaWxlO1xuICAvLyAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtcC1tb2JpbGU7XG4gIC8vIH1cbn1cblxuQG1peGluIHAyKCl7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1wMjtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1wMjtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1wMjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXItc3BhY2luZy1wMjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLy8gQGluY2x1ZGUgcmVzcG9uZC10byhwaG9uZSl7XG4gIC8vICAgZm9udC1zaXplOiAkZm9udC1zaXplLXAyLW1vYmlsZTtcbiAgLy8gICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LXAyLW1vYmlsZTtcbiAgLy8gfVxufVxuXG5AbWl4aW4gZnVsbHBhZ2VmbGV4KCRjb2xvcil7XG4gIHdpZHRoOiAxMDB2dztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbkBtaXhpbiByYWlzZWQoJG9wYWNpdHksICRob3Jpem9udGFsLWluaXRpYWw6IDJweCwgJHZlcnRpY2FsLWluaXRpYWw6MnB4LCRob3Jpem9udGFsLWZpbmFsOiA2cHgsICR2ZXJ0aWNhbC1maW5hbDo2cHgsICR0aGlja25lc3MtaW5pdGlhbDoxMHB4LCAkdGhpY2tuZXNzLWZpbmFsOjEwcHgpe1xuXG4gIGJveC1zaGFkb3c6ICRob3Jpem9udGFsLWluaXRpYWwgJHZlcnRpY2FsLWluaXRpYWwgJHRoaWNrbmVzcy1pbml0aWFsIDAgcmdiYSgwLCAwLCAwLCAkb3BhY2l0eSk7XG4gIHRyYW5zaXRpb246ICAgICAgICAgYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogICAgYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1tcy10cmFuc2l0aW9uOiAgICAgYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246ICAgICAgYWxsIDAuNHMgZWFzZS1pbi1vdXQ7XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6ICRob3Jpem9udGFsLWZpbmFsICR2ZXJ0aWNhbC1maW5hbCAkdGhpY2tuZXNzLWZpbmFsIDAgcmdiYSgwLCAwLCAwLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuQG1peGluIHJhaXNlZC1ncmV5KCRob3Jpem9udGFsLXNoaWZ0LCAkdmVydGljYWwtc2hpZnQsICR0aGlja25lc3MsICRvcGFjaXR5KXtcbiAgYm94LXNoYWRvdzogJGhvcml6b250YWwtc2hpZnQgJHZlcnRpY2FsLXNoaWZ0ICR0aGlja25lc3MgMCByZ2JhKDI1NSwgMjU1LCAyNTUsICRvcGFjaXR5KTtcbiAgdHJhbnNpdGlvbjogICAgICAgICBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW1vei10cmFuc2l0aW9uOiAgICBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246ICAgICBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgLW8tdHJhbnNpdGlvbjogICAgICBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cblxuQG1peGluIHRyYW5zZm9ybS1rZXlmcmFtZSgkbmFtZSwgJGluaXRpYWwsICRmaW5hbCl7XG5cbiAgLy8gLXdlYmtpdC10cmFuc2Zvcm06ICRmaW5hbDtcbiAgLy8gdHJhbnNmb3JtOiAkZmluYWw7XG4gIC8vIC1tcy10cmFuc2Zvcm06ICRmaW5hbDtcbiAgLy8gLW1vei10cmFuc2Zvcm06ICRmaW5hbDtcbiAgLy8gLW8tdHJhbnNmb3JtOiAkZmluYWw7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciAxMDAlICFpbXBvcnRhbnQ7XG5cbiAgQGtleWZyYW1lcyAkbmFtZXtcbiAgICBmcm9te1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06ICRpbml0aWFsO1xuICAgICAgdHJhbnNmb3JtOiAkaW5pdGlhbDtcbiAgICB9XG4gICAgdG97XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogJGZpbmFsO1xuICAgICAgdHJhbnNmb3JtOiAkZmluYWw7XG4gICAgfVxuICB9XG4gIEAtd2Via2l0LWtleWZyYW1lcyAkbmFtZXtcbiAgICBmcm9te1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06ICRpbml0aWFsO1xuICAgICAgdHJhbnNmb3JtOiAkaW5pdGlhbDtcbiAgICB9XG4gICAgdG97XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogJGZpbmFsO1xuICAgICAgdHJhbnNmb3JtOiAkZmluYWw7XG4gICAgfVxuICB9XG4gIEAtbXMta2V5ZnJhbWVzICRuYW1le1xuICAgIGZyb217XG4gICAgICAtbXMtdHJhbnNmb3JtOiAkaW5pdGlhbDtcbiAgICB9XG4gICAgdG97XG4gICAgICAtbXMtdHJhbnNmb3JtOiAkZmluYWw7XG4gICAgfVxuICB9XG4gIEAtbW96LWtleWZyYW1lcyAkbmFtZXtcbiAgICBmcm9te1xuICAgICAgLW1vei10cmFuc2Zvcm06ICRpbml0aWFsO1xuICAgIH1cbiAgICB0b3tcbiAgICAgIC1tb3otdHJhbnNmb3JtOiAkZmluYWw7XG4gICAgfVxuICB9XG4gIEAtby1rZXlmcmFtZXMgJG5hbWV7XG4gICAgZnJvbXtcbiAgICAgIC1vLXRyYW5zZm9ybTogJGluaXRpYWw7XG4gICAgfVxuICAgIHRve1xuICAgICAgLW8tdHJhbnNmb3JtOiAkZmluYWw7XG4gICAgfVxuICB9XG59XG4iLCIvKi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLkdlbmVyYWwgc2V0dGluZ3MuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uKi9cblxuXG5cblxuLyouLi4uLi4uLi4uLi4uLi4uLi4uLi5URVhUIE1BUksgU1RZTEVTLi4uLi4uLi4uLi4uLi4uLi4uLi4uLiovXG5cbjo6LW1vei1zZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHRleHQtc2hhZG93OiBub25lO1xufVxuXG5cbjo6c2VsZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cblxuXG5cblxuXG5cbi8qLi4uLi4uLi4uLi4uLi4uLi4uLi4uQUNUSVZFIENMQVNTRVMuLi4uLi4uLi4uLi4uLi4uLi4uLi4uKi9cblxuLmFjdGl2ZXtcbiAgb3BhY2l0eTowLjE7XG59XG4uYWN0aXZlLWxpbmt7XG4gIGNvbG9yOiRibHVlIWltcG9ydGFudDtcbn1cblxuYTphY3RpdmV7XG5cbn1cblxuXG5hcnJvd3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNXM7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xuICAtbXMtdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcbiAgLW8tdHJhbnNpdGlvbjogYWxsIGVhc2UgMC41cztcbiAgc3Zne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6NXB4O1xuICAgIGxlZnQ6NXB4O1xuICB9XG59XG5cbi5hcnJvdy1yaWdodHtcbiAgJjpob3ZlcntcbiAgICBAaW5jbHVkZSB0cmFuc2Zvcm0tZWxlbWVudCh0cmFuc2xhdGVYKDE1cHgpKTtcbiAgfVxuICBzdmd7XG4gICAgbGVmdDphdXRvO1xuICAgIHJpZ2h0OjVweDtcbiAgfVxufVxuXG4uYXJyb3ctZG93bntcbiAgJjpob3ZlcntcbiAgICBAaW5jbHVkZSB0cmFuc2Zvcm0tZWxlbWVudCh0cmFuc2xhdGVZKC0xNXB4KSk7XG4gIH1cbiAgc3Zne1xuICAgIEBpbmNsdWRlIHRyYW5zZm9ybS1lbGVtZW50KHJvdGF0ZSg5MGRlZykpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gIH1cbn1cblxuLmFycm93LWxlZnR7XG4gICY6aG92ZXJ7XG4gICAgQGluY2x1ZGUgdHJhbnNmb3JtLWVsZW1lbnQodHJhbnNsYXRlWCgtMTVweCkpO1xuICB9XG4gIHN2Z3tcbiAgICBAaW5jbHVkZSB0cmFuc2Zvcm0tZWxlbWVudChyb3RhdGUoMTgwZGVnKSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgfVxufVxuXG5cblxuXG4uYmxhY2tlZF90ZXh0e1xuICBjb2xvcjokd2hpdGU7XG59XG5cbi5ibGFja2VkX3BhdGh7XG4gIGZpbGw6JHdoaXRlO1xufVxuLmJsYWNrZWRfYmFja2dyb3VuZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xufVxuXG5cblxuXG5cbi8qLi4uLi4uLi4uLi4uLi4uLi4uLi5ISURJTkcgU0NST0xMQkFSLi4uLi4uLi4uLi4uLi4uLi4uLi4uKi9cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuKntcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIG91dGxpbmU6MDtcbn1cblxuXG5cblxuLyouLi4uLi4uLi4uLi4uLi4uLi4uLi5HRU5FUkFMIFNUWUxFUy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4qL1xuXG5odG1se1xuICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLCAwO1xuICBwYWRkaW5nOiAwLCAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuXG5ib2R5IHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbjogMCwgMDtcbiAgcGFkZGluZzogMCwgMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogJGNyZWFtO1xuICBjb2xvcjogJGJsYWNrO1xuXG59XG4qe1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxucCwgYSwgbGkge1xuICBmb250LXNpemU6ICRmb250LXNpemUtcDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBsZXR0ZXItc3BhY2luZzokbGV0dGVyLXNwYWNpbmc7XG4gIGNvbG9yOiAkYmxhY2s7XG59XG5cblxuaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGEsIGxpIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5he1xuICBjdXJzb3I6cG9pbnRlcjtcbiAgQGluY2x1ZGUgcCgpO1xuICBAaW5jbHVkZSBob3Zlci1lZmZlY3QtY29sb3IoJGJsYWNrLCAkYmx1ZSk7XG59XG5cbi5hLWhvdmVye1xuICBAaW5jbHVkZSBob3Zlci1lZmZlY3QtY29sb3IoJGJsYWNrLCAkbGlnaHQtZ3JleSk7XG59XG5cbnB7XG4gIEBpbmNsdWRlIHAoKTtcbn1cblxuLnAye1xuICBAaW5jbHVkZSBwMigpO1xufVxuXG5oMXtcbiAgQGluY2x1ZGUgaDEoKTtcbn1cblxuaDJ7XG4gIEBpbmNsdWRlIGgyKCk7XG59XG5cbmgze1xuICBAaW5jbHVkZSBoMygpO1xufVxuXG5cblxuLnBvcHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogN3ZoO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMHB4O1xuICB6LWluZGV4OiR6LXBvcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuXG4ubmF2LWljb257XG4gIHRvcDogJG1hcmdpbi1zaWRlcztcbiAgcmlnaHQ6ICRtYXJnaW4tc2lkZXM7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgei1pbmRleDogJHotbmF2LWljb247XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaW1ne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjphdXRvXG4gIH1cblxufVxuXG5cbi8qLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLk1BSU4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uKi9cbi8vIG1haW4ge1xuLy8gICBoZWlnaHQ6IDEwMHZoO1xuLy8gICB3aWR0aDoxMDB2dztcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuLy8gICBvdmVyZmxvdy15OiBoaWRkZW47XG4vLyB9XG5cblxuXG5cblxudGFibGV7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJ7XG4gICAgdGR7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbi8qIGVudGlyZSBjb250YWluZXIsIGtlZXBzIHBlcnNwZWN0aXZlICovXG4uZmxpcC1jb250YWluZXIge1xuXHRwZXJzcGVjdGl2ZTogMTAwMHB4O1xufVxuXHQvKiBmbGlwIHRoZSBwYW5lIHdoZW4gaG92ZXJlZCAqL1xuXHQuZmxpcC1jb250YWluZXI6aG92ZXIgLmZsaXBwZXIsIC5mbGlwLWNvbnRhaW5lci5ob3ZlciAuZmxpcHBlciB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG5cdH1cblxuLmZsaXAtY29udGFpbmVyLCAuZnJvbnQsIC5iYWNrIHtcblx0d2lkdGg6IDMyMHB4O1xuXHRoZWlnaHQ6IDQ4MHB4O1xufVxuXG4vKiBmbGlwIHNwZWVkIGdvZXMgaGVyZSAqL1xuLmZsaXBwZXIge1xuXHR0cmFuc2l0aW9uOiAwLjZzO1xuXHR0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLyogaGlkZSBiYWNrIG9mIHBhbmUgZHVyaW5nIHN3YXAgKi9cbi5mcm9udCwgLmJhY2sge1xuXHRiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IDA7XG59XG5cbi8qIGZyb250IHBhbmUsIHBsYWNlZCBhYm92ZSBiYWNrICovXG4uZnJvbnQge1xuXHR6LWluZGV4OiAyO1xuXHQvKiBmb3IgZmlyZWZveCAzMSAqL1xuXHR0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XG59XG5cbi8qIGJhY2ssIGluaXRpYWxseSBoaWRkZW4gcGFuZSAqL1xuLmJhY2sge1xuXHR0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuXG5cblxuXG4jZXllb3BlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOjA7XG4gIHotaW5kZXg6OTtcbn1cblxuLmJsaW5rLWluZmluaXRlIHtcbiAgYW5pbWF0aW9uOiBibGluayA0cyBzdGVwcygxLCBlbmQpIGluZmluaXRlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogYmxpbmsgNHMgc3RlcHMoMSwgZW5kKSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJsaW5rIDRzIHN0ZXBzKDEsIGVuZCkgaW5maW5pdGU7XG4gIC1tcy1hbmltYXRpb246IGJsaW5rIDRzIHN0ZXBzKDEsIGVuZCkgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogYmxpbmsgNHMgc3RlcHMoMSwgZW5kKSBpbmZpbml0ZTtcbiAgY29sb3I6ICRibGFjaztcbn1cblxuLmJsaW5rLWluZmluaXRlLXJ7XG4gIGFuaW1hdGlvbjogYmxpbmtSIDRzIHN0ZXBzKDEsIGVuZCkgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGlua1IgNHMgc3RlcHMoMSwgZW5kKSBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJsaW5rUiA0cyBzdGVwcygxLCBlbmQpIGluZmluaXRlO1xuICAtbXMtYW5pbWF0aW9uOiBibGlua1IgNHMgc3RlcHMoMSwgZW5kKSBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBibGlua1IgNHMgc3RlcHMoMSwgZW5kKSBpbmZpbml0ZTtcbiAgY29sb3I6ICRibGFjaztcbn1cblxuXG5cblxuLmJsaW5rIHtcbiAgYW5pbWF0aW9uOiBibGluayAuMnMgc3RlcHMoNSwgc3RhcnQpIDM7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAuMnMgc3RlcHMoNSwgc3RhcnQpIDM7XG4gIC1tb3otYW5pbWF0aW9uOiBibGluayAuMnMgc3RlcHMoNSwgc3RhcnQpIDM7XG4gIC1tcy1hbmltYXRpb246IGJsaW5rIC4ycyBzdGVwcyg1LCBzdGFydCkgMztcbiAgLW8tYW5pbWF0aW9uOiBibGluayAuMnMgc3RlcHMoNSwgc3RhcnQpIDM7XG59XG5cbi5ibGluay1vbmNlIHtcbiAgYW5pbWF0aW9uOiBibGluayAuMnMgc3RlcHMoNSwgc3RhcnQpIDE7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGluayAuMnMgc3RlcHMoNSwgc3RhcnQpIDE7XG4gIC1tb3otYW5pbWF0aW9uOiBibGluayAuMnMgc3RlcHMoNSwgc3RhcnQpIDE7XG4gIC1tcy1hbmltYXRpb246IGJsaW5rIC4ycyBzdGVwcyg1LCBzdGFydCkgMTtcbiAgLW8tYW5pbWF0aW9uOiBibGluayAuMnMgc3RlcHMoNSwgc3RhcnQpIDE7XG59XG5cbi8vIC5kb2xsYXItY29udGVudHMuYmxpbmt7XG4vLyAgIGNvbG9yOiAjRkZGRkZGICFpbXBvcnRhbnQ7XG4vLyB9XG5cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDAle3Zpc2liaWxpdHk6IHZpc2libGU7fVxuICAyMCUge3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gIDI1JSB7dmlzaWJpbGl0eTogdmlzaWJsZTt9XG4gIDcwJSB7dmlzaWJpbGl0eTogaGlkZGVuO31cbiAgNzUlIHt2aXNpYmlsaXR5OiB2aXNpYmxlO31cbiAgOTAlIHt2aXNpYmlsaXR5OiBoaWRkZW47fVxuICA5NSUge3Zpc2liaWxpdHk6IHZpc2libGU7fVxuICAxMDAle3Zpc2liaWxpdHk6IHZpc2libGU7fVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmxpbmsge1xuICAwJXt2aXNpYmlsaXR5OiB2aXNpYmxlO31cbiAgMjAlIHt2aXNpYmlsaXR5OiBoaWRkZW47fVxuICAyNSUge3Zpc2liaWxpdHk6IHZpc2libGU7fVxuICA3MCUge3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gIDc1JSB7dmlzaWJpbGl0eTogdmlzaWJsZTt9XG4gIDkwJSB7dmlzaWJpbGl0eTogaGlkZGVuO31cbiAgOTUlIHt2aXNpYmlsaXR5OiB2aXNpYmxlO31cbiAgMTAwJXt2aXNpYmlsaXR5OiB2aXNpYmxlO31cbn1cblxuQC1tb3ota2V5ZnJhbWVzIGJsaW5rIHtcbiAgMCV7dmlzaWJpbGl0eTogdmlzaWJsZTt9XG4gIDIwJSB7dmlzaWJpbGl0eTogaGlkZGVuO31cbiAgMjUlIHt2aXNpYmlsaXR5OiB2aXNpYmxlO31cbiAgNzAlIHt2aXNpYmlsaXR5OiBoaWRkZW47fVxuICA3NSUge3Zpc2liaWxpdHk6IHZpc2libGU7fVxuICA5MCUge3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gIDk1JSB7dmlzaWJpbGl0eTogdmlzaWJsZTt9XG4gIDEwMCV7dmlzaWJpbGl0eTogdmlzaWJsZTt9XG59XG5cbkAtby1rZXlmcmFtZXMgYmxpbmsge1xuICAwJXt2aXNpYmlsaXR5OiB2aXNpYmxlO31cbiAgMjAlIHt2aXNpYmlsaXR5OiBoaWRkZW47fVxuICAyNSUge3Zpc2liaWxpdHk6IHZpc2libGU7fVxuICA3MCUge3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gIDc1JSB7dmlzaWJpbGl0eTogdmlzaWJsZTt9XG4gIDkwJSB7dmlzaWJpbGl0eTogaGlkZGVuO31cbiAgOTUlIHt2aXNpYmlsaXR5OiB2aXNpYmxlO31cbiAgMTAwJXt2aXNpYmlsaXR5OiB2aXNpYmxlO31cbn1cblxuXG5cbkBrZXlmcmFtZXMgYmxpbmtSIHtcbiAgMCV7dmlzaWJpbGl0eTogaGlkZGVuO31cbiAgMjAlIHt2aXNpYmlsaXR5OiB2aXNpYmxlO31cbiAgMjUlIHt2aXNpYmlsaXR5OiBoaWRkZW47fVxuICA3MCUge3Zpc2liaWxpdHk6IHZpc2libGU7fVxuICA3NSUge3Zpc2liaWxpdHk6IGhpZGRlbjt9XG4gIDkwJSB7dmlzaWJpbGl0eTogdmlzaWJsZTt9XG4gIDk1JSB7dmlzaWJpbGl0eTogaGlkZGVuO31cbiAgMTAwJXt2aXNpYmlsaXR5OiBoaWRkZW47fVxuXG5cblxufVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/app/styles.scss":
/*!*****************************!*\
  !*** ./src/app/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/app/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** multi ./src/app/styles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/elia/Documents/web/goodfight/src/app/styles.scss */"./src/app/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map