(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/app/styles.scss":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--13-3!./src/app/styles.scss ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal;\n}\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n/*....................................General settings..................................*/\n/*.....................TEXT MARK STYLES......................*/\n::-moz-selection {\n  background: transparent;\n  text-shadow: none;\n}\n::selection {\n  background: transparent;\n  text-shadow: none;\n}\n/*.....................ACTIVE CLASSES......................*/\n.active {\n  opacity: 0.1;\n}\n.active-link {\n  color: #3076BA !important;\n}\narrow {\n  display: block;\n  width: 50px;\n  height: 50px;\n  transition: all ease 0.5s;\n  -webkit-transition: all ease 0.5s;\n  -moz-transition: all ease 0.5s;\n  -ms-transition: all ease 0.5s;\n  -o-transition: all ease 0.5s;\n}\narrow svg {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n.arrow-right:hover {\n  transform: translateX(15px);\n  -ms-transform: translateX(15px);\n  /* IE 9 */\n  -webkit-transform: translateX(15px);\n  /* Safari */\n  transform-origin: 0 0;\n}\n.arrow-right svg {\n  left: auto;\n  right: 5px;\n}\n.arrow-down:hover {\n  transform: translateY(-15px);\n  -ms-transform: translateY(-15px);\n  /* IE 9 */\n  -webkit-transform: translateY(-15px);\n  /* Safari */\n  transform-origin: 0 0;\n}\n.arrow-down svg {\n  transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  /* IE 9 */\n  -webkit-transform: rotate(90deg);\n  /* Safari */\n  transform-origin: 0 0;\n  transform-origin: 50% 50%;\n}\n.arrow-left:hover {\n  transform: translateX(-15px);\n  -ms-transform: translateX(-15px);\n  /* IE 9 */\n  -webkit-transform: translateX(-15px);\n  /* Safari */\n  transform-origin: 0 0;\n}\n.arrow-left svg {\n  transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  /* IE 9 */\n  -webkit-transform: rotate(180deg);\n  /* Safari */\n  transform-origin: 0 0;\n  transform-origin: 50% 50%;\n}\n.blacked_text {\n  color: #FFFFFF;\n}\n.blacked_path {\n  fill: #FFFFFF;\n}\n.blacked_background {\n  background-color: #000000;\n}\n/*....................HIDING SCROLLBAR.....................*/\n::-webkit-scrollbar {\n  display: none;\n}\n* {\n  -webkit-overflow-scrolling: touch;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n  outline: 0;\n}\n/*.....................GENERAL STYLES......................*/\nhtml {\n  font-family: helvetica;\n  width: 100%;\n  margin: 0, 0;\n  padding: 0, 0;\n  box-sizing: border-box;\n  background-color: transparent;\n}\nbody {\n  width: 100vw;\n  height: auto;\n  margin: 0, 0;\n  padding: 0, 0;\n  display: block;\n  position: relative;\n  background: #f8f7ec;\n  color: #000000;\n}\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\np, a, li {\n  font-size: 13px;\n  list-style-type: none;\n  letter-spacing: 0px;\n  color: #000000;\n}\ninput, textarea, select, a, li {\n  text-decoration: none;\n}\na {\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 1.7;\n  font-family: \"apercu_light\";\n  letter-spacing: 0px;\n  font-weight: 400;\n  text-align: left;\n  color: #000000;\n  transition: color 0.4s ease;\n  -webkit-transition: color 0.4s ease;\n  -moz-transition: color 0.4s ease;\n  -ms-transition: color 0.4s ease;\n  -o-transition: color 0.4s ease;\n}\na:hover {\n  color: #3076BA;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n@media only screen and (min-width: 0px) and (max-device-width: 767px) {\n  a:hover {\n    color: #000000 !important;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: portrait) {\n  a:hover {\n    color: #000000 !important;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: landscape) {\n  a:hover {\n    color: #000000 !important;\n  }\n}\n.a-hover {\n  color: #000000;\n  transition: color 0.4s ease;\n  -webkit-transition: color 0.4s ease;\n  -moz-transition: color 0.4s ease;\n  -ms-transition: color 0.4s ease;\n  -o-transition: color 0.4s ease;\n}\n.a-hover:hover {\n  color: #F5F5F5;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n@media only screen and (min-width: 0px) and (max-device-width: 767px) {\n  .a-hover:hover {\n    color: #000000 !important;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: portrait) {\n  .a-hover:hover {\n    color: #000000 !important;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: landscape) {\n  .a-hover:hover {\n    color: #000000 !important;\n  }\n}\np {\n  font-size: 13px;\n  line-height: 1.7;\n  font-family: \"apercu_light\";\n  letter-spacing: 0px;\n  font-weight: 400;\n  text-align: left;\n}\n.p2 {\n  font-size: 9px;\n  line-height: 1.7;\n  font-family: \"apercu_light\", serif;\n  font-weight: 400;\n  letter-spacing: 0px;\n  text-align: left;\n}\nh1 {\n  font-size: 25px;\n  line-height: 2;\n  font-family: \"apercu_regular\";\n  font-weight: bold;\n  letter-spacing: 0px;\n  font-weight: bold;\n  color: #3076BA;\n}\nh2 {\n  font-size: 14px;\n  line-height: 2;\n  font-family: \"apercu_regular\";\n  letter-spacing: 0px;\n}\nh3 {\n  font-size: 13px;\n  line-height: 2;\n  font-family: \"apercu_regular\";\n  letter-spacing: 0px;\n}\n.pop {\n  position: fixed;\n  width: 100vw;\n  height: 7vh;\n  position: fixed;\n  bottom: 0;\n  left: 0px;\n  z-index: 14;\n  border-top: 1px solid black;\n  background: rgba(255, 255, 255, 0.8);\n  font-size: 10px;\n}\n.nav-icon {\n  top: 30px;\n  right: 30px;\n  position: fixed;\n  width: 80px;\n  height: 80px;\n  z-index: 13;\n  cursor: pointer;\n}\n.nav-icon img {\n  display: block;\n  width: 100%;\n  margin: auto;\n}\n/*.........................MAIN............................*/\ntable {\n  width: 100vw;\n  height: 100vh;\n}\ntable tr td {\n  vertical-align: middle;\n}\n/* entire container, keeps perspective */\n.flip-container {\n  perspective: 1000px;\n}\n/* flip the pane when hovered */\n.flip-container:hover .flipper, .flip-container.hover .flipper {\n  transform: rotateY(180deg);\n}\n.flip-container, .front, .back {\n  width: 320px;\n  height: 480px;\n}\n/* flip speed goes here */\n.flipper {\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n}\n/* hide back of pane during swap */\n.front, .back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/* front pane, placed above back */\n.front {\n  z-index: 2;\n  /* for firefox 31 */\n  transform: rotateY(0deg);\n}\n/* back, initially hidden pane */\n.back {\n  transform: rotateY(180deg);\n}\n#eyeopen {\n  position: absolute;\n  top: 0;\n  z-index: 9;\n}\n.blink-infinite {\n  animation: blink 4s steps(1, end) infinite;\n  -webkit-animation: blink 4s steps(1, end) infinite;\n  -moz-animation: blink 4s steps(1, end) infinite;\n  -ms-animation: blink 4s steps(1, end) infinite;\n  -o-animation: blink 4s steps(1, end) infinite;\n  color: #000000;\n}\n.blink-infinite-r {\n  animation: blinkR 4s steps(1, end) infinite;\n  -webkit-animation: blinkR 4s steps(1, end) infinite;\n  -moz-animation: blinkR 4s steps(1, end) infinite;\n  -ms-animation: blinkR 4s steps(1, end) infinite;\n  -o-animation: blinkR 4s steps(1, end) infinite;\n  color: #000000;\n}\n.blink {\n  animation: blink 0.2s steps(5, start) 3;\n  -webkit-animation: blink 0.2s steps(5, start) 3;\n  -moz-animation: blink 0.2s steps(5, start) 3;\n  -ms-animation: blink 0.2s steps(5, start) 3;\n  -o-animation: blink 0.2s steps(5, start) 3;\n}\n.blink-once {\n  animation: blink 0.2s steps(5, start) 1;\n  -webkit-animation: blink 0.2s steps(5, start) 1;\n  -moz-animation: blink 0.2s steps(5, start) 1;\n  -ms-animation: blink 0.2s steps(5, start) 1;\n  -o-animation: blink 0.2s steps(5, start) 1;\n}\n@keyframes blink {\n  0% {\n    visibility: visible;\n  }\n  20% {\n    visibility: hidden;\n  }\n  25% {\n    visibility: visible;\n  }\n  70% {\n    visibility: hidden;\n  }\n  75% {\n    visibility: visible;\n  }\n  90% {\n    visibility: hidden;\n  }\n  95% {\n    visibility: visible;\n  }\n  100% {\n    visibility: visible;\n  }\n}\n@-webkit-keyframes blink {\n  0% {\n    visibility: visible;\n  }\n  20% {\n    visibility: hidden;\n  }\n  25% {\n    visibility: visible;\n  }\n  70% {\n    visibility: hidden;\n  }\n  75% {\n    visibility: visible;\n  }\n  90% {\n    visibility: hidden;\n  }\n  95% {\n    visibility: visible;\n  }\n  100% {\n    visibility: visible;\n  }\n}\n@-webkit-keyframes blinkR {\n  0% {\n    visibility: hidden;\n  }\n  20% {\n    visibility: visible;\n  }\n  25% {\n    visibility: hidden;\n  }\n  70% {\n    visibility: visible;\n  }\n  75% {\n    visibility: hidden;\n  }\n  90% {\n    visibility: visible;\n  }\n  95% {\n    visibility: hidden;\n  }\n  100% {\n    visibility: hidden;\n  }\n}\n@keyframes blinkR {\n  0% {\n    visibility: hidden;\n  }\n  20% {\n    visibility: visible;\n  }\n  25% {\n    visibility: hidden;\n  }\n  70% {\n    visibility: visible;\n  }\n  75% {\n    visibility: hidden;\n  }\n  90% {\n    visibility: visible;\n  }\n  95% {\n    visibility: hidden;\n  }\n  100% {\n    visibility: hidden;\n  }\n}\n", "",{"version":3,"sources":["/Users/elia/Documents/web/goodfight/src/app/styles/reset.scss","styles.scss","/Users/elia/Documents/web/goodfight/src/app/styles/fonts.scss","/Users/elia/Documents/web/goodfight/src/app/styles/variables.scss","/Users/elia/Documents/web/goodfight/src/app/styles/mixins.scss","/Users/elia/Documents/web/goodfight/src/app/styles/general.scss"],"names":[],"mappings":"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","file":"styles.scss","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n","/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal;\n}\n\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n/*....................................General settings..................................*/\n/*.....................TEXT MARK STYLES......................*/\n::-moz-selection {\n  background: transparent;\n  text-shadow: none;\n}\n\n::selection {\n  background: transparent;\n  text-shadow: none;\n}\n\n/*.....................ACTIVE CLASSES......................*/\n.active {\n  opacity: 0.1;\n}\n\n.active-link {\n  color: #3076BA !important;\n}\n\narrow {\n  display: block;\n  width: 50px;\n  height: 50px;\n  transition: all ease 0.5s;\n  -webkit-transition: all ease 0.5s;\n  -moz-transition: all ease 0.5s;\n  -ms-transition: all ease 0.5s;\n  -o-transition: all ease 0.5s;\n}\n\narrow svg {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n}\n\n.arrow-right:hover {\n  transform: translateX(15px);\n  -ms-transform: translateX(15px);\n  /* IE 9 */\n  -webkit-transform: translateX(15px);\n  /* Safari */\n  transform-origin: 0 0;\n}\n\n.arrow-right svg {\n  left: auto;\n  right: 5px;\n}\n\n.arrow-down:hover {\n  transform: translateY(-15px);\n  -ms-transform: translateY(-15px);\n  /* IE 9 */\n  -webkit-transform: translateY(-15px);\n  /* Safari */\n  transform-origin: 0 0;\n}\n\n.arrow-down svg {\n  transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  /* IE 9 */\n  -webkit-transform: rotate(90deg);\n  /* Safari */\n  transform-origin: 0 0;\n  transform-origin: 50% 50%;\n}\n\n.arrow-left:hover {\n  transform: translateX(-15px);\n  -ms-transform: translateX(-15px);\n  /* IE 9 */\n  -webkit-transform: translateX(-15px);\n  /* Safari */\n  transform-origin: 0 0;\n}\n\n.arrow-left svg {\n  transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  /* IE 9 */\n  -webkit-transform: rotate(180deg);\n  /* Safari */\n  transform-origin: 0 0;\n  transform-origin: 50% 50%;\n}\n\n.blacked_text {\n  color: #FFFFFF;\n}\n\n.blacked_path {\n  fill: #FFFFFF;\n}\n\n.blacked_background {\n  background-color: #000000;\n}\n\n/*....................HIDING SCROLLBAR.....................*/\n::-webkit-scrollbar {\n  display: none;\n}\n\n* {\n  -webkit-overflow-scrolling: touch;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n  outline: 0;\n}\n\n/*.....................GENERAL STYLES......................*/\nhtml {\n  font-family: helvetica;\n  width: 100%;\n  margin: 0, 0;\n  padding: 0, 0;\n  box-sizing: border-box;\n  background-color: transparent;\n}\n\nbody {\n  width: 100vw;\n  height: auto;\n  margin: 0, 0;\n  padding: 0, 0;\n  display: block;\n  position: relative;\n  background: #f8f7ec;\n  color: #000000;\n}\n\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\np, a, li {\n  font-size: 13px;\n  list-style-type: none;\n  letter-spacing: 0px;\n  color: #000000;\n}\n\ninput, textarea, select, a, li {\n  text-decoration: none;\n}\n\na {\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 1.7;\n  font-family: \"apercu_light\";\n  letter-spacing: 0px;\n  font-weight: 400;\n  text-align: left;\n  color: #000000;\n  transition: color 0.4s ease;\n  -webkit-transition: color 0.4s ease;\n  -moz-transition: color 0.4s ease;\n  -ms-transition: color 0.4s ease;\n  -o-transition: color 0.4s ease;\n}\n\na:hover {\n  color: #3076BA;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n\n@media only screen and (min-width: 0px) and (max-device-width: 767px) {\n  a:hover {\n    color: #000000 !important;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: portrait) {\n  a:hover {\n    color: #000000 !important;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: landscape) {\n  a:hover {\n    color: #000000 !important;\n  }\n}\n\n.a-hover {\n  color: #000000;\n  transition: color 0.4s ease;\n  -webkit-transition: color 0.4s ease;\n  -moz-transition: color 0.4s ease;\n  -ms-transition: color 0.4s ease;\n  -o-transition: color 0.4s ease;\n}\n\n.a-hover:hover {\n  color: #F5F5F5;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n}\n\n@media only screen and (min-width: 0px) and (max-device-width: 767px) {\n  .a-hover:hover {\n    color: #000000 !important;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: portrait) {\n  .a-hover:hover {\n    color: #000000 !important;\n  }\n}\n\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: landscape) {\n  .a-hover:hover {\n    color: #000000 !important;\n  }\n}\n\np {\n  font-size: 13px;\n  line-height: 1.7;\n  font-family: \"apercu_light\";\n  letter-spacing: 0px;\n  font-weight: 400;\n  text-align: left;\n}\n\n.p2 {\n  font-size: 9px;\n  line-height: 1.7;\n  font-family: \"apercu_light\", serif;\n  font-weight: 400;\n  letter-spacing: 0px;\n  text-align: left;\n}\n\nh1 {\n  font-size: 25px;\n  line-height: 2;\n  font-family: \"apercu_regular\";\n  font-weight: bold;\n  letter-spacing: 0px;\n  font-weight: bold;\n  color: #3076BA;\n}\n\nh2 {\n  font-size: 14px;\n  line-height: 2;\n  font-family: \"apercu_regular\";\n  letter-spacing: 0px;\n}\n\nh3 {\n  font-size: 13px;\n  line-height: 2;\n  font-family: \"apercu_regular\";\n  letter-spacing: 0px;\n}\n\n.pop {\n  position: fixed;\n  width: 100vw;\n  height: 7vh;\n  position: fixed;\n  bottom: 0;\n  left: 0px;\n  z-index: 14;\n  border-top: 1px solid black;\n  background: rgba(255, 255, 255, 0.8);\n  font-size: 10px;\n}\n\n.nav-icon {\n  top: 30px;\n  right: 30px;\n  position: fixed;\n  width: 80px;\n  height: 80px;\n  z-index: 13;\n  cursor: pointer;\n}\n\n.nav-icon img {\n  display: block;\n  width: 100%;\n  margin: auto;\n}\n\n/*.........................MAIN............................*/\ntable {\n  width: 100vw;\n  height: 100vh;\n}\n\ntable tr td {\n  vertical-align: middle;\n}\n\n/* entire container, keeps perspective */\n.flip-container {\n  perspective: 1000px;\n}\n\n/* flip the pane when hovered */\n.flip-container:hover .flipper, .flip-container.hover .flipper {\n  transform: rotateY(180deg);\n}\n\n.flip-container, .front, .back {\n  width: 320px;\n  height: 480px;\n}\n\n/* flip speed goes here */\n.flipper {\n  transition: 0.6s;\n  transform-style: preserve-3d;\n  position: relative;\n}\n\n/* hide back of pane during swap */\n.front, .back {\n  backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* front pane, placed above back */\n.front {\n  z-index: 2;\n  /* for firefox 31 */\n  transform: rotateY(0deg);\n}\n\n/* back, initially hidden pane */\n.back {\n  transform: rotateY(180deg);\n}\n\n#eyeopen {\n  position: absolute;\n  top: 0;\n  z-index: 9;\n}\n\n.blink-infinite {\n  animation: blink 4s steps(1, end) infinite;\n  -webkit-animation: blink 4s steps(1, end) infinite;\n  -moz-animation: blink 4s steps(1, end) infinite;\n  -ms-animation: blink 4s steps(1, end) infinite;\n  -o-animation: blink 4s steps(1, end) infinite;\n  color: #000000;\n}\n\n.blink-infinite-r {\n  animation: blinkR 4s steps(1, end) infinite;\n  -webkit-animation: blinkR 4s steps(1, end) infinite;\n  -moz-animation: blinkR 4s steps(1, end) infinite;\n  -ms-animation: blinkR 4s steps(1, end) infinite;\n  -o-animation: blinkR 4s steps(1, end) infinite;\n  color: #000000;\n}\n\n.blink {\n  animation: blink 0.2s steps(5, start) 3;\n  -webkit-animation: blink 0.2s steps(5, start) 3;\n  -moz-animation: blink 0.2s steps(5, start) 3;\n  -ms-animation: blink 0.2s steps(5, start) 3;\n  -o-animation: blink 0.2s steps(5, start) 3;\n}\n\n.blink-once {\n  animation: blink 0.2s steps(5, start) 1;\n  -webkit-animation: blink 0.2s steps(5, start) 1;\n  -moz-animation: blink 0.2s steps(5, start) 1;\n  -ms-animation: blink 0.2s steps(5, start) 1;\n  -o-animation: blink 0.2s steps(5, start) 1;\n}\n\n@keyframes blink {\n  0% {\n    visibility: visible;\n  }\n  20% {\n    visibility: hidden;\n  }\n  25% {\n    visibility: visible;\n  }\n  70% {\n    visibility: hidden;\n  }\n  75% {\n    visibility: visible;\n  }\n  90% {\n    visibility: hidden;\n  }\n  95% {\n    visibility: visible;\n  }\n  100% {\n    visibility: visible;\n  }\n}\n\n@-webkit-keyframes blink {\n  0% {\n    visibility: visible;\n  }\n  20% {\n    visibility: hidden;\n  }\n  25% {\n    visibility: visible;\n  }\n  70% {\n    visibility: hidden;\n  }\n  75% {\n    visibility: visible;\n  }\n  90% {\n    visibility: hidden;\n  }\n  95% {\n    visibility: visible;\n  }\n  100% {\n    visibility: visible;\n  }\n}\n\n@-moz-keyframes blink {\n  0% {\n    visibility: visible;\n  }\n  20% {\n    visibility: hidden;\n  }\n  25% {\n    visibility: visible;\n  }\n  70% {\n    visibility: hidden;\n  }\n  75% {\n    visibility: visible;\n  }\n  90% {\n    visibility: hidden;\n  }\n  95% {\n    visibility: visible;\n  }\n  100% {\n    visibility: visible;\n  }\n}\n\n@-o-keyframes blink {\n  0% {\n    visibility: visible;\n  }\n  20% {\n    visibility: hidden;\n  }\n  25% {\n    visibility: visible;\n  }\n  70% {\n    visibility: hidden;\n  }\n  75% {\n    visibility: visible;\n  }\n  90% {\n    visibility: hidden;\n  }\n  95% {\n    visibility: visible;\n  }\n  100% {\n    visibility: visible;\n  }\n}\n\n@keyframes blinkR {\n  0% {\n    visibility: hidden;\n  }\n  20% {\n    visibility: visible;\n  }\n  25% {\n    visibility: hidden;\n  }\n  70% {\n    visibility: visible;\n  }\n  75% {\n    visibility: hidden;\n  }\n  90% {\n    visibility: visible;\n  }\n  95% {\n    visibility: hidden;\n  }\n  100% {\n    visibility: hidden;\n  }\n}\n","@font-face {\n    font-family: apercu_regular;\n    src: url('/assets/fonts/apercu-regular.woff2') format('woff2');\n    font-weight: normal;\n    font-style: normal;\n    // , url('/assets/fonts/didot/Didot.otf') format('otf')\n}\n\n@font-face {\n    font-family: apercu_light;\n    src: url('/assets/fonts/apercu-light.woff2') format('woff2');\n    // , url('/assets/fonts/didot/Didot.otf') format('otf')\n    font-weight: light;\n    font-style: normal;\n}\n","/*....................................SCSS VARIABLES..................................*/\n\n\n// ........................................................FONT WEIGHTS\n$font-weight-light: 300;\n$font-weight-regular: 400;\n$font-weight-heavy: 900;\n\n\n// ........................................................FONT SIZES\n$font-size-h1:25px;\n$font-size-h2:14px;\n$font-size-h3:13px;\n$font-size-p: 13px;\n$font-size-p2: 9px;\n\n$font-size-h1-mobile: 18px;\n$font-size-h2-mobile: 30px;\n$font-size-h3-mobile: 14px;\n$font-size-p-mobile: 11px;\n$font-size-p2-mobile: 7px;\n\n// ........................................................FONT FAMILIES\n$font-family-h1: 'apercu_regular';\n$font-family-h2: 'apercu_regular';\n$font-family-h3: 'apercu_regular';\n$font-family-p: 'apercu_light';\n$font-family-p2: 'apercu_light', serif;\n\n\n// ........................................................FONT LINEHEIGHTS\n$line-height-h1: 2;\n$line-height-h2: 2;\n$line-height-h3: 2;\n$line-height-p: 1.7;\n$line-height-p2:1.7;\n\n$line-height-h1-mobile: 20px;\n$line-height-h2-mobile: 45px;\n$line-height-h3-mobile: 30px;\n$line-height-p-mobile: 20px;\n$line-height-p2-mobile: 15px;\n\n\n$letter-spacing: 0px;\n$letter-spacing-h1: 0px;\n$letter-spacing-h2: 0px;\n$letter-spacing-h3: 0px;\n$letter-spacing-p:0px;\n$letter-spacing-p2:0px;\n\n// ........................................................COLORS\n$black: #000000;\n$white: #FFFFFF;\n$blue: #3076BA;\n$cream: #f8f7ec;\n$grey: #a8a8a8;\n$light-grey:#F5F5F5;\n\n\n// ........................................................MARGINS\n$margin-sides: 30px;\n$margin-bottom: 35px;\n$margin-top: 150px;\n$margin-sides-mobile:10px;\n$margin-left-paragraph:5px;\n$margin-top-li:150px;\n$margin-top-p:25px;\n\n// ........................................................TRANSITION TIMINGS\n$transition-extreme-slow: 1.4s;\n$transition-slow: .6s;\n$transition-medium: .4s;\n$transition-fast: .2s;\n\n\n\n// ........................................................Z-INDEXES\n$z-loader:15;\n$z-pop:14;\n$z-nav-icon:13;\n$z-share:13;\n\n$z-clickOut: 12;\n$z-nav:10;\n$z-info:9;\n$z-splash:9;\n$z-logo:8;\n$z-projects-arrows:9;\n$z-credits:8;\n$z-press-camera:8;\n$z-press-h:8;\n$z-press-background:7;\n$z-feed:7;\n$z-detail-li:4;\n$z-detail-cover:3;\n\n\n/*....................................................................................*/\n","/*.................................................................................*/\n//---------------------------------------------------------------MEDIA QUERIES---------------------------------------------------------------------\n$break-phone: 767px;\n$break-phone-landscape: 767px;\n$break-tablet: 1022px;\n$break-tablet-landscape: 1024px;\n$break-laptop-small: 1280px;\n$break-laptop-medium: 1440px;\n$break-laptop-large: 1920px;\n$break-desktop: 50000px;\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n\n@mixin respond-to($media) {\n/*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  @if $media == desktop {\n    @media only screen and (min-width: $break-laptop-large + 1) and (max-width: $break-desktop) { @content; }\n  }\n  @else if $media == laptop-large {\n    @media only screen and (min-width: $break-laptop-medium + 1) and (max-width: $break-laptop-large) { @content; }\n  }\n  @else if $media == laptop-medium {\n    @media only screen and (min-width: $break-laptop-small + 1) and (max-width: $break-laptop-medium) { @content; }\n  }\n  @else if $media == laptop-small {\n    @media only screen and (min-width: $break-tablet + 1) and (max-width: $break-laptop-small) { @content; }\n  }\n\n  ////////////|||||||||||..just changed the tablet media query below because it was not reading the landscape view: 1024px is the tablet landscape width..||||||||||||||\\\\\\\\\\\\\\\\\\\\\n\n  @else if $media == tablet-landscape {\n    @media only screen and (min-width: $break-phone + 1) and (max-width: $break-tablet-landscape) and (orientation: landscape) { @content; }\n  }\n  @else if $media == tablet-portrait {\n    @media only screen and (min-width: $break-phone + 1) and (max-width: $break-tablet) and (orientation: portrait) { @content; }\n  }\n  @else if $media == phone {\n    @media only screen and (min-width: 0px) and (max-width: $break-phone) { @content; }\n  }\n\n  //These are only for the real device\n  @else if $media == tablet-landscape-device {\n    @media only screen and (min-device-width: $break-phone + 1) and (max-device-width: $break-tablet) and (orientation: landscape) { @content; }\n  }\n  @else if $media == tablet-portrait-device {\n    @media only screen and (min-device-width: $break-phone + 1) and (max-device-width: $break-tablet) and (orientation: portrait) { @content; }\n  }\n  @else if $media == phone-device {\n    @media only screen and (min-width: 0px) and (max-device-width: $break-phone) { @content; }\n  }\n  @else if $media == phone-landscape-device {\n        @media only screen and (min-width: 0px) and (max-width: $break-phone) and (orientation: landscape) { @content; }\n      }\n}\n\n\n\n\n\n\n\n\n\n@mixin hover-effect-fill($color, $hover, $type){\n\n\n  @if $type == 'fill' {\n\n    svg, g, path, rect, line{\n      fill: $color;\n      transition:         fill $transition-medium ease;\n      -webkit-transition: fill $transition-medium ease;\n      -moz-transition:    fill $transition-medium ease;\n      -ms-transition:     fill $transition-medium ease;\n      -o-transition:      fill $transition-medium ease;\n\n    }\n\n    &:hover {\n        svg, g, path, rect, line{\n          fill: $hover;\n          @include respond-to(phone-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-portrait-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-landscape-device) {\n              fill: $color !important;\n          }\n        }\n    }\n\n  } @else if $type == 'stroke' {\n      svg, g, path, rect, line{\n        stroke: $color;\n        transition:         stroke $transition-medium ease;\n        -webkit-transition: stroke $transition-medium ease;\n        -moz-transition:    stroke $transition-medium ease;\n        -ms-transition:     stroke $transition-medium ease;\n        -o-transition:      stroke $transition-medium ease;\n      }\n\n      &:hover {\n          svg, g, path, rect, line{\n            stroke: $hover;\n            @include respond-to(phone-device) {\n                stroke: $color !important;\n            }\n            @include respond-to(tablet-portrait-device) {\n                stroke: $color !important;\n            }\n            @include respond-to(tablet-landscape-device) {\n                stroke: $color !important;\n            }\n          }\n      }\n  }\n  @else if $type == 'g' {\n\n    svg{\n      g{\n        g{\n          path{\n            fill: $color;\n            transition:         fill $transition-medium ease;\n            -webkit-transition: fill $transition-medium ease;\n            -moz-transition:    fill $transition-medium ease;\n            -ms-transition:     fill $transition-medium ease;\n            -o-transition:      fill $transition-medium ease;\n          }\n        }\n      }\n    }\n\n    &:hover {\n      svg{\n        g{\n          g{\n            path{\n              fill: $hover !important;\n              @include respond-to(phone-device) {\n                  fill: $color !important;\n              }\n              @include respond-to(tablet-portrait-device) {\n                  fill: $color !important;\n              }\n              @include respond-to(tablet-landscape-device) {\n                  fill: $color !important;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n  @else if $type == 'facebook' {\n\n    svg{\n      #Blue_1_{\n        fill: $color;\n        transition:         fill $transition-medium ease;\n        -webkit-transition: fill $transition-medium ease;\n        -moz-transition:    fill $transition-medium ease;\n        -ms-transition:     fill $transition-medium ease;\n        -o-transition:      fill $transition-medium ease;\n      }\n    }\n\n\n    &:hover {\n      svg{\n        #Blue_1_{\n          fill: $hover;\n          @include respond-to(phone-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-portrait-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-landscape-device) {\n              fill: $color !important;\n          }\n        }\n      }\n    }\n  }\n  @else if $type == 'itunes' {\n\n    svg{\n      #background{\n        fill: $color;\n        transition:         fill $transition-medium ease;\n        -webkit-transition: fill $transition-medium ease;\n        -moz-transition:    fill $transition-medium ease;\n        -ms-transition:     fill $transition-medium ease;\n        -o-transition:      fill $transition-medium ease;\n      }\n    }\n\n    &:hover {\n        svg{\n          #background{\n            fill: $hover !important;\n            @include respond-to(phone-device) {\n                fill: $color !important;\n            }\n            @include respond-to(tablet-portrait-device) {\n                fill: $color !important;\n            }\n            @include respond-to(tablet-landscape-device) {\n                fill: $color !important;\n            }\n          }\n        }\n    }\n  }\n  @else if $type == 'twitter' {\n\n    svg{\n      path{\n        fill: $color;\n        transition:         fill $transition-medium ease;\n        -webkit-transition: fill $transition-medium ease;\n        -moz-transition:    fill $transition-medium ease;\n        -ms-transition:     fill $transition-medium ease;\n        -o-transition:      fill $transition-medium ease;\n      }\n    }\n\n\n    &:hover {\n      svg{\n        path{\n          fill: $hover !important;\n          @include respond-to(phone-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-portrait-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-landscape-device) {\n              fill: $color !important;\n          }\n        }\n      }\n    }\n  }\n  @else if $type == 'youtube' {\n\n    svg{\n      #The_Sharpness{\n        fill: $color;\n        transition:         fill $transition-medium ease;\n        -webkit-transition: fill $transition-medium ease;\n        -moz-transition:    fill $transition-medium ease;\n        -ms-transition:     fill $transition-medium ease;\n        -o-transition:      fill $transition-medium ease;\n      }\n    }\n\n\n    &:hover {\n      svg{\n        #The_Sharpness{\n          fill: $hover !important;\n          @include respond-to(phone-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-portrait-device) {\n              fill: $color !important;\n          }\n          @include respond-to(tablet-landscape-device) {\n              fill: $color !important;\n          }\n        }\n      }\n    }\n  }\n}\n\n\n\n$transition-slow: 1s;\n\n/*....................................SCSS MIXINS..................................*/\n\n\n@mixin hover-effect-opacity($opacity: 1, $hover: .2){\n  opacity: $opacity;\n  transition:         all $transition-medium ease;\n  -webkit-transition: all $transition-medium ease;\n  -moz-transition:    all $transition-medium ease;\n  -ms-transition:     all $transition-medium ease;\n  -o-transition:      all $transition-medium ease;\n\n\n  &:hover {\n    opacity: $hover;\n\n    @include respond-to(phone-device) {\n        opacity: $opacity !important;\n    }\n    @include respond-to(tablet-portrait-device) {\n        opacity: $opacity !important;\n    }\n    @include respond-to(tablet-landscape-device) {\n        opacity: $opacity !important;\n    }\n  }\n}\n\n@mixin hover-effect-fade($px){\n\n  filter: blur(0px);\n  -webkit-filter:blur(0px);\n  -o-filter: blur(0px);\n  -moz-filter: blur(0px);\n  transition:         all $transition-slow ease;\n  -webkit-transition: all $transition-slow ease;\n  -moz-transition:    all $transition-slow ease;\n  -ms-transition:     all $transition-slow ease;\n  -o-transition:      all $transition-slow ease;\n\n\n  &:hover {\n    filter: blur($px);\n    -webkit-filter: blur($px);\n    -o-filter: blur($px);\n    -moz-filter: blur($px);\n\n    @include respond-to(phone-device) {\n      filter: blur(0);\n      -webkit-filter: blur(0);\n      -o-filter: blur(0);\n      -moz-filter: blur(0);\n    }\n    @include respond-to(tablet-portrait-device) {\n      filter: blur(0);\n      -webkit-filter: blur(0);\n      -o-filter: blur(0);\n      -moz-filter: blur(0);\n    }\n    @include respond-to(tablet-landscape-device) {\n      filter: blur(0);\n      -webkit-filter: blur(0);\n      -o-filter: blur(0);\n      -moz-filter: blur(0);\n    }\n  }\n}\n\n\n\n@mixin hover-effect-saturation($initial, $final){\n\n  filter:grayscale($initial);\n  -webkit-filter:grayscale($initial);\n  -o-filter: grayscale($initial);\n  -moz-filter: grayscale($initial);\n  transition:         all $transition-medium ease;\n  -webkit-transition: all $transition-medium ease;\n  -moz-transition:    all $transition-medium ease;\n  -ms-transition:     all $transition-medium ease;\n  -o-transition:      all $transition-medium ease;\n\n\n  &:hover {\n    filter: grayscale($final);\n    -webkit-filter: grayscale($final);\n    -o-filter: grayscale($final);\n    -moz-filter: grayscale($final);\n\n    @include respond-to(phone-device) {\n      filter: grayscale($initial);\n      -webkit-filter: grayscale($initial);\n      -o-filter: grayscale($initial);\n      -moz-filter: grayscale($initial);\n    }\n    @include respond-to(tablet-portrait-device) {\n      filter: grayscale($initial);\n      -webkit-filter: grayscale($initial);\n      -o-filter: grayscale($initial);\n      -moz-filter: grayscale($initial);\n    }\n    @include respond-to(tablet-landscape-device) {\n      filter: grayscale($initial);\n      -webkit-filter: grayscale($initial);\n      -o-filter: grayscale($initial);\n      -moz-filter: grayscale($initial);\n    }\n  }\n}\n\n@mixin hover-shifright(){\n  transition: margin 0.5s ease;\n  -webkit-transition: margin 0.5s ease;\n  -moz-transition: margin 0.5s ease;\n  -ms-transition: margin 0.5s ease;\n  -o-transition: margin 0.5s ease;\n  ;\n  &:hover{\n    margin-left: 5px;\n  }\n}\n\n\n\n@mixin hover-shifttext(){\n\n  h3{\n    width: 100%;\n    padding:0%;\n    transition: 1s ease;\n    -webkit-transition:1s ease;\n    -moz-transition:1s ease;\n    -ms-transition:1s ease;\n    -o-transition:1s ease;\n  }\n\n    span{\n      position: absolute;\n      right: 0;\n      text-align: center;\n\n    }\n    &:hover {\n      padding:0%;\n      span{\n        text-align: center;\n        // transform: translateX(-50%);\n        // -webkit-transform: translateX(-50%);\n        // -moz-transform: translateX(-50%);\n        // -ms-transform: translateX(-50%);\n\n      }\n    }\n}\n\n\n\n\n\n@mixin hover-effect-background-color($color, $hover){\n  background-color: $color;\n  transition:         background-color $transition-medium ease;\n  -webkit-transition: background-color $transition-medium ease;\n  -moz-transition:    background-color $transition-medium ease;\n  -ms-transition:     background-color $transition-medium ease;\n  -o-transition:      background-color $transition-medium ease;\n\n  &:hover {\n    background-color: $hover;\n    @include respond-to(phone-device) {\n        background-color: $color !important;\n    }\n    @include respond-to(tablet-portrait-device) {\n        background-color: $color !important;\n    }\n    @include respond-to(tablet-landscape-device) {\n        background-color: $color !important;\n    }\n  }\n}\n\n\n@mixin hover-effect-color($color, $hover){\n  color: $color;\n  transition:         color $transition-medium ease;\n  -webkit-transition: color $transition-medium ease;\n  -moz-transition:    color $transition-medium ease;\n  -ms-transition:     color $transition-medium ease;\n  -o-transition:      color $transition-medium ease;\n  // opacity: $hover;\n\n  &:hover {\n    color: $hover;\n    @include respond-to(phone-device) {\n        color: $color !important;\n    }\n    @include respond-to(tablet-portrait-device) {\n        color: $color !important;\n    }\n    @include respond-to(tablet-landscape-device) {\n        color: $color !important;\n    }\n  }\n}\n\n@mixin transform-transition($duration: $transition-slow){\n  transition:         transform $duration ease-in-out;\n  -webkit-transition: -webkit-transform $duration ease-in-out;\n  -moz-transition:    -moz-transform $duration ease-in-out;\n  -ms-transition:     -ms-transform $duration ease-in-out;\n  -o-transition:      -o-transform $duration ease-in-out;\n}\n\n@mixin transform-element($coordinate){\n  transform: $coordinate;\n  -ms-transform: $coordinate; /* IE 9 */\n \t-webkit-transform: $coordinate; /* Safari */\n  transform-origin: 0 0;\n}\n\n\n@mixin transform-position($position: -100%){\n  transform: translateX($position);\n  -webkit-transform:  translateX($position);\n  -moz-transform:     translateX($position);\n  -ms-transform:      translateX($position);\n  -o-transform:       translateX($position);\n}\n\n\n@mixin center-transform($left, $top){\n  transform: translate3d($left,$top, 0);\n  -webkit-transform:  translate3d($left,$top, 0);\n  -moz-transform:     translate3d($left,$top, 0);\n  -ms-transform:      translate3d($left,$top, 0);\n  -o-transform:       translate3d($left,$top, 0);\n}\n\n\n@mixin transform-origin($coordinates){\n  transform-origin: $coordinates;\n  -webkit-transform-origin:  $coordinates;\n  -moz-transform-origin:     $coordinates;\n  -ms-transform-origin:      $coordinates;\n  -o-transform-origin:       $coordinates;\n}\n\n\n\n\n\n@mixin h1(){\n  font-size: $font-size-h1;\n  line-height: $line-height-h1;\n  font-family: $font-family-h1;\n  font-weight: bold;\n  letter-spacing: $letter-spacing-h1;\n  font-weight: bold;\n  color:$blue;\n  // text-transform: uppercase;\n  // @include respond-to(phone){\n  //   font-size: $font-size-h1-mobile;\n  // }\n}\n@mixin h2(){\n  font-size: $font-size-h2;\n  line-height: $line-height-h2;\n  font-family: $font-family-h2;\n  letter-spacing: $letter-spacing-h2;\n  // text-transform: uppercase;\n  // font-weight: 400!important;\n  // @include respond-to(phone){\n  //   font-size: $font-size-h2-mobile;\n  //   line-height: $line-height-h2-mobile;\n  // }\n}\n\n@mixin h3(){\n  font-size: $font-size-h3;\n  line-height: $line-height-h3;\n  font-family: $font-family-h3;\n  letter-spacing: $letter-spacing-h3;\n  // text-transform: uppercase;\n  // font-weight: 400!important;\n  // @include respond-to(phone){\n  //   font-size: $font-size-h3-mobile;\n  //   line-height: $line-height-h3-mobile;\n  // }\n}\n\n@mixin p(){\n  font-size: $font-size-p;\n  line-height: $line-height-p;\n  font-family: $font-family-p;\n  // font-weight: light;\n  letter-spacing: $letter-spacing-p;\n  font-weight: 400;\n  text-align: left;\n  // @include respond-to(phone){\n  //   font-size: $font-size-p-mobile;\n  //   line-height: $line-height-p-mobile;\n  // }\n}\n\n@mixin p2(){\n  font-size: $font-size-p2;\n  line-height: $line-height-p2;\n  font-family: $font-family-p2;\n  font-weight: 400;\n  letter-spacing: $letter-spacing-p2;\n  text-align: left;\n  // @include respond-to(phone){\n  //   font-size: $font-size-p2-mobile;\n  //   line-height: $line-height-p2-mobile;\n  // }\n}\n\n@mixin fullpageflex($color){\n  width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  background-color: $color;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n@mixin raised($opacity, $horizontal-initial: 2px, $vertical-initial:2px,$horizontal-final: 6px, $vertical-final:6px, $thickness-initial:10px, $thickness-final:10px){\n\n  box-shadow: $horizontal-initial $vertical-initial $thickness-initial 0 rgba(0, 0, 0, $opacity);\n  transition:         all 0.4s ease-in-out;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition:    all 0.4s ease-in-out;\n  -ms-transition:     all 0.4s ease-in-out;\n  -o-transition:      all 0.4s ease-in-out;\n  &:hover {\n    box-shadow: $horizontal-final $vertical-final $thickness-final 0 rgba(0, 0, 0, $opacity);\n  }\n}\n\n@mixin raised-grey($horizontal-shift, $vertical-shift, $thickness, $opacity){\n  box-shadow: $horizontal-shift $vertical-shift $thickness 0 rgba(255, 255, 255, $opacity);\n  transition:         all 0.4s ease-in-out;\n  -webkit-transition: all 0.4s ease-in-out;\n  -moz-transition:    all 0.4s ease-in-out;\n  -ms-transition:     all 0.4s ease-in-out;\n  -o-transition:      all 0.4s ease-in-out;\n}\n\n@mixin transform-keyframe($name, $initial, $final){\n\n  // -webkit-transform: $final;\n  // transform: $final;\n  // -ms-transform: $final;\n  // -moz-transform: $final;\n  // -o-transform: $final;\n  transform-origin: center 100% !important;\n\n  @keyframes $name{\n    from{\n      -webkit-transform: $initial;\n      transform: $initial;\n    }\n    to{\n      -webkit-transform: $final;\n      transform: $final;\n    }\n  }\n  @-webkit-keyframes $name{\n    from{\n      -webkit-transform: $initial;\n      transform: $initial;\n    }\n    to{\n      -webkit-transform: $final;\n      transform: $final;\n    }\n  }\n  @-ms-keyframes $name{\n    from{\n      -ms-transform: $initial;\n    }\n    to{\n      -ms-transform: $final;\n    }\n  }\n  @-moz-keyframes $name{\n    from{\n      -moz-transform: $initial;\n    }\n    to{\n      -moz-transform: $final;\n    }\n  }\n  @-o-keyframes $name{\n    from{\n      -o-transform: $initial;\n    }\n    to{\n      -o-transform: $final;\n    }\n  }\n}\n","/*....................................General settings..................................*/\n\n\n\n\n/*.....................TEXT MARK STYLES......................*/\n\n::-moz-selection {\n    background: transparent;\n    text-shadow: none;\n}\n\n\n::selection {\n    background: transparent;\n    text-shadow: none;\n}\n\n\n\n\n\n\n/*.....................ACTIVE CLASSES......................*/\n\n.active{\n  opacity:0.1;\n}\n.active-link{\n  color:$blue!important;\n}\n\na:active{\n\n}\n\n\narrow{\n  display: block;\n  width: 50px;\n  height: 50px;\n  transition: all ease 0.5s;\n  -webkit-transition: all ease 0.5s;\n  -moz-transition: all ease 0.5s;\n  -ms-transition: all ease 0.5s;\n  -o-transition: all ease 0.5s;\n  svg{\n    position: absolute;\n    top:5px;\n    left:5px;\n  }\n}\n\n.arrow-right{\n  &:hover{\n    @include transform-element(translateX(15px));\n  }\n  svg{\n    left:auto;\n    right:5px;\n  }\n}\n\n.arrow-down{\n  &:hover{\n    @include transform-element(translateY(-15px));\n  }\n  svg{\n    @include transform-element(rotate(90deg));\n    transform-origin: 50% 50%;\n  }\n}\n\n.arrow-left{\n  &:hover{\n    @include transform-element(translateX(-15px));\n  }\n  svg{\n    @include transform-element(rotate(180deg));\n    transform-origin: 50% 50%;\n  }\n}\n\n\n\n\n.blacked_text{\n  color:$white;\n}\n\n.blacked_path{\n  fill:$white;\n}\n.blacked_background{\n  background-color: $black;\n}\n\n\n\n\n\n/*....................HIDING SCROLLBAR.....................*/\n\n::-webkit-scrollbar {\n    display: none;\n}\n\n*{\n  -webkit-overflow-scrolling: touch;\n}\n\n*, *:before, *:after {\n  box-sizing: inherit;\n  outline:0;\n}\n\n\n\n\n/*.....................GENERAL STYLES......................*/\n\nhtml{\n  font-family: helvetica;\n  width: 100%;\n  margin: 0, 0;\n  padding: 0, 0;\n  box-sizing: border-box;\n  background-color: transparent;\n}\n\n\nbody {\n  width: 100vw;\n  height: auto;\n  margin: 0, 0;\n  padding: 0, 0;\n  display: block;\n  position: relative;\n  background: $cream;\n  color: $black;\n\n}\n*{\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\np, a, li {\n  font-size: $font-size-p;\n  list-style-type: none;\n  letter-spacing:$letter-spacing;\n  color: $black;\n}\n\n\ninput, textarea, select, a, li {\n  text-decoration: none;\n}\n\na{\n  cursor:pointer;\n  @include p();\n  @include hover-effect-color($black, $blue);\n}\n\n.a-hover{\n  @include hover-effect-color($black, $light-grey);\n}\n\np{\n  @include p();\n}\n\n.p2{\n  @include p2();\n}\n\nh1{\n  @include h1();\n}\n\nh2{\n  @include h2();\n}\n\nh3{\n  @include h3();\n}\n\n\n\n.pop{\n  position: fixed;\n  width: 100vw;\n  height: 7vh;\n  position: fixed;\n  bottom: 0;\n  left: 0px;\n  z-index:$z-pop;\n  border-top: 1px solid black;\n  background: rgba(255,255,255,0.8);\n  font-size: 10px;\n}\n\n\n.nav-icon{\n  top: $margin-sides;\n  right: $margin-sides;\n  position: fixed;\n  width: 80px;\n  height: 80px;\n  z-index: $z-nav-icon;\n  cursor: pointer;\n  img{\n    display: block;\n    width: 100%;\n    margin:auto\n  }\n\n}\n\n\n/*.........................MAIN............................*/\n// main {\n//   height: 100vh;\n//   width:100vw;\n//   position: relative;\n//   display: block;\n//   list-style-type: none;\n//   display: block;\n//   overflow-x: scroll;\n//   overflow-y: hidden;\n// }\n\n\n\n\n\ntable{\n  width: 100vw;\n  height: 100vh;\n  tr{\n    td{\n      vertical-align: middle;\n    }\n  }\n}\n\n\n\n\n\n/* entire container, keeps perspective */\n.flip-container {\n\tperspective: 1000px;\n}\n\t/* flip the pane when hovered */\n\t.flip-container:hover .flipper, .flip-container.hover .flipper {\n\t\ttransform: rotateY(180deg);\n\t}\n\n.flip-container, .front, .back {\n\twidth: 320px;\n\theight: 480px;\n}\n\n/* flip speed goes here */\n.flipper {\n\ttransition: 0.6s;\n\ttransform-style: preserve-3d;\n\n\tposition: relative;\n}\n\n/* hide back of pane during swap */\n.front, .back {\n\tbackface-visibility: hidden;\n\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n}\n\n/* front pane, placed above back */\n.front {\n\tz-index: 2;\n\t/* for firefox 31 */\n\ttransform: rotateY(0deg);\n}\n\n/* back, initially hidden pane */\n.back {\n\ttransform: rotateY(180deg);\n}\n\n\n\n\n\n#eyeopen {\n  position: absolute;\n  top:0;\n  z-index:9;\n}\n\n.blink-infinite {\n  animation: blink 4s steps(1, end) infinite;\n  -webkit-animation: blink 4s steps(1, end) infinite;\n  -moz-animation: blink 4s steps(1, end) infinite;\n  -ms-animation: blink 4s steps(1, end) infinite;\n  -o-animation: blink 4s steps(1, end) infinite;\n  color: $black;\n}\n\n.blink-infinite-r{\n  animation: blinkR 4s steps(1, end) infinite;\n  -webkit-animation: blinkR 4s steps(1, end) infinite;\n  -moz-animation: blinkR 4s steps(1, end) infinite;\n  -ms-animation: blinkR 4s steps(1, end) infinite;\n  -o-animation: blinkR 4s steps(1, end) infinite;\n  color: $black;\n}\n\n\n\n\n.blink {\n  animation: blink .2s steps(5, start) 3;\n  -webkit-animation: blink .2s steps(5, start) 3;\n  -moz-animation: blink .2s steps(5, start) 3;\n  -ms-animation: blink .2s steps(5, start) 3;\n  -o-animation: blink .2s steps(5, start) 3;\n}\n\n.blink-once {\n  animation: blink .2s steps(5, start) 1;\n  -webkit-animation: blink .2s steps(5, start) 1;\n  -moz-animation: blink .2s steps(5, start) 1;\n  -ms-animation: blink .2s steps(5, start) 1;\n  -o-animation: blink .2s steps(5, start) 1;\n}\n\n// .dollar-contents.blink{\n//   color: #FFFFFF !important;\n// }\n\n\n@keyframes blink {\n  0%{visibility: visible;}\n  20% {visibility: hidden;}\n  25% {visibility: visible;}\n  70% {visibility: hidden;}\n  75% {visibility: visible;}\n  90% {visibility: hidden;}\n  95% {visibility: visible;}\n  100%{visibility: visible;}\n}\n\n@-webkit-keyframes blink {\n  0%{visibility: visible;}\n  20% {visibility: hidden;}\n  25% {visibility: visible;}\n  70% {visibility: hidden;}\n  75% {visibility: visible;}\n  90% {visibility: hidden;}\n  95% {visibility: visible;}\n  100%{visibility: visible;}\n}\n\n@-moz-keyframes blink {\n  0%{visibility: visible;}\n  20% {visibility: hidden;}\n  25% {visibility: visible;}\n  70% {visibility: hidden;}\n  75% {visibility: visible;}\n  90% {visibility: hidden;}\n  95% {visibility: visible;}\n  100%{visibility: visible;}\n}\n\n@-o-keyframes blink {\n  0%{visibility: visible;}\n  20% {visibility: hidden;}\n  25% {visibility: visible;}\n  70% {visibility: hidden;}\n  75% {visibility: visible;}\n  90% {visibility: hidden;}\n  95% {visibility: visible;}\n  100%{visibility: visible;}\n}\n\n\n\n@keyframes blinkR {\n  0%{visibility: hidden;}\n  20% {visibility: visible;}\n  25% {visibility: hidden;}\n  70% {visibility: visible;}\n  75% {visibility: hidden;}\n  90% {visibility: visible;}\n  95% {visibility: hidden;}\n  100%{visibility: hidden;}\n\n\n\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/app/styles.scss":
/*!*****************************!*\
  !*** ./src/app/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--13-1!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/dist/cjs.js??ref--13-3!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/app/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./src/app/styles.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/elia/Documents/web/goodfight/src/app/styles.scss */"./src/app/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map