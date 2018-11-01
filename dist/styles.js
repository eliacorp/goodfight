(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/app/styles.scss":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/app/styles.scss ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\nbody {\n  line-height: 1; }\nol, ul {\n  list-style: none; }\nblockquote, q {\n  quotes: none; }\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n@font-face {\n  font-family: apercu_regular;\n  src: url(\"/assets/fonts/apercu-regular.woff2\") format(\"woff2\");\n  font-weight: normal;\n  font-style: normal; }\n@font-face {\n  font-family: apercu_light;\n  src: url(\"/assets/fonts/apercu-light.woff2\") format(\"woff2\");\n  font-weight: light;\n  font-style: normal; }\n/*....................................SCSS VARIABLES..................................*/\n/*....................................................................................*/\n/*.................................................................................*/\n/*$break-large-desktop: 2500px;*/\n/*$break-infinite: 500000px;*/\n/*....................................SCSS MIXINS..................................*/\n/*....................................General settings..................................*/\n/*.....................TEXT MARK STYLES......................*/\n::-moz-selection {\n  background: transparent;\n  text-shadow: none; }\n::selection {\n  background: transparent;\n  text-shadow: none; }\n/*.....................ACTIVE CLASSES......................*/\n.active {\n  opacity: 0.1; }\n.active-link {\n  color: #3076BA !important; }\narrow {\n  display: block;\n  width: 50px;\n  height: 50px;\n  transition: all ease 0.5s;\n  -webkit-transition: all ease 0.5s;\n  -moz-transition: all ease 0.5s;\n  -ms-transition: all ease 0.5s;\n  -o-transition: all ease 0.5s; }\narrow svg {\n    position: absolute;\n    top: 5px;\n    left: 5px; }\n.arrow-right:hover {\n  transform: translateX(15px);\n  -ms-transform: translateX(15px);\n  /* IE 9 */\n  -webkit-transform: translateX(15px);\n  /* Safari */\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n.arrow-right svg {\n  left: auto;\n  right: 5px; }\n.arrow-down:hover {\n  transform: translateY(-15px);\n  -ms-transform: translateY(-15px);\n  /* IE 9 */\n  -webkit-transform: translateY(-15px);\n  /* Safari */\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n.arrow-down svg {\n  transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  /* IE 9 */\n  -webkit-transform: rotate(90deg);\n  /* Safari */\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%; }\n.arrow-left:hover {\n  transform: translateX(-15px);\n  -ms-transform: translateX(-15px);\n  /* IE 9 */\n  -webkit-transform: translateX(-15px);\n  /* Safari */\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0; }\n.arrow-left svg {\n  transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  /* IE 9 */\n  -webkit-transform: rotate(180deg);\n  /* Safari */\n  -webkit-transform-origin: 0 0;\n          transform-origin: 0 0;\n  -webkit-transform-origin: 50% 50%;\n          transform-origin: 50% 50%; }\n.blacked_text {\n  color: #FFFFFF; }\n.blacked_path {\n  fill: #FFFFFF; }\n.blacked_background {\n  background-color: #000000; }\n/*....................HIDING SCROLLBAR.....................*/\n::-webkit-scrollbar {\n  display: none; }\n* {\n  -webkit-overflow-scrolling: touch; }\n*, *:before, *:after {\n  box-sizing: inherit;\n  outline: 0; }\n/*.....................GENERAL STYLES......................*/\nhtml {\n  font-family: helvetica;\n  width: 100%;\n  margin: 0, 0;\n  padding: 0, 0;\n  box-sizing: border-box;\n  background-color: transparent; }\nbody {\n  width: 100vw;\n  height: auto;\n  margin: 0, 0;\n  padding: 0, 0;\n  display: block;\n  position: relative;\n  background: #f8f7ec;\n  color: #000000; }\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\np, a, li {\n  font-size: 13px;\n  list-style-type: none;\n  letter-spacing: 0px;\n  color: #000000; }\ninput, textarea, select, a, li {\n  text-decoration: none; }\na {\n  cursor: pointer;\n  font-size: 13px;\n  line-height: 1.7;\n  font-family: \"apercu_light\";\n  letter-spacing: 0px;\n  font-weight: 400;\n  text-align: left;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n  color: #000000;\n  transition: color 0.4s ease;\n  -webkit-transition: color 0.4s ease;\n  -moz-transition: color 0.4s ease;\n  -ms-transition: color 0.4s ease;\n  -o-transition: color 0.4s ease; }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    a {\n      font-size: 11px;\n      line-height: 20px; } }\na:hover {\n    color: #3076BA;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-device-width: 767px) {\n      a:hover {\n        color: #000000 !important; } }\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: portrait) {\n      a:hover {\n        color: #000000 !important; } }\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: landscape) {\n      a:hover {\n        color: #000000 !important; } }\n.a-hover {\n  color: #000000;\n  transition: color 0.4s ease;\n  -webkit-transition: color 0.4s ease;\n  -moz-transition: color 0.4s ease;\n  -ms-transition: color 0.4s ease;\n  -o-transition: color 0.4s ease; }\n.a-hover:hover {\n    color: #F5F5F5;\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/\n    /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-device-width: 767px) {\n      .a-hover:hover {\n        color: #000000 !important; } }\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: portrait) {\n      .a-hover:hover {\n        color: #000000 !important; } }\n@media only screen and (min-device-width: 768px) and (max-device-width: 1022px) and (orientation: landscape) {\n      .a-hover:hover {\n        color: #000000 !important; } }\np {\n  font-size: 13px;\n  line-height: 1.7;\n  font-family: \"apercu_light\";\n  letter-spacing: 0px;\n  font-weight: 400;\n  text-align: left;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    p {\n      font-size: 11px;\n      line-height: 20px; } }\n.p2 {\n  font-size: 7px;\n  line-height: 1.7;\n  font-family: \"apercu_light\", serif;\n  font-weight: 400;\n  letter-spacing: 0px;\n  text-align: left;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    .p2 {\n      font-size: 7px;\n      line-height: 15px; } }\nh1 {\n  font-size: 25px;\n  line-height: 2;\n  font-family: \"apercu_regular\";\n  font-weight: bold;\n  letter-spacing: 0px;\n  font-weight: bold;\n  color: #3076BA;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    h1 {\n      font-size: 18px; } }\nh2 {\n  font-size: 14px;\n  line-height: 2;\n  font-family: \"apercu_regular\";\n  letter-spacing: 0px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    h2 {\n      font-size: 30px;\n      line-height: 45px; } }\nh3 {\n  font-size: 13px;\n  line-height: 2;\n  font-family: \"apercu_regular\";\n  letter-spacing: 0px;\n  /*  @if $media == large-desktop {\n    @media only screen and (min-width: $break-large-desktop + 1) and (max-width: $break-infinite) { @content; }\n  }*/ }\n@media only screen and (min-width: 0px) and (max-width: 767px) {\n    h3 {\n      font-size: 14px;\n      line-height: 30px; } }\n.pop {\n  position: fixed;\n  width: 100vw;\n  height: 50px;\n  position: fixed;\n  bottom: 0;\n  z-index: 14;\n  border-top: 1px solid black;\n  background: rgba(255, 255, 255, 0.2); }\n.nav-icon {\n  top: 30px;\n  right: 30px;\n  position: fixed;\n  width: 80px;\n  height: 80px;\n  z-index: 13;\n  cursor: pointer; }\n.nav-icon img {\n    display: block;\n    width: 100%;\n    margin: auto; }\n/*.........................MAIN............................*/\ntable {\n  width: 100vw;\n  height: 100vh; }\ntable tr td {\n    vertical-align: middle; }\n/* entire container, keeps perspective */\n.flip-container {\n  -webkit-perspective: 1000px;\n          perspective: 1000px; }\n/* flip the pane when hovered */\n.flip-container:hover .flipper, .flip-container.hover .flipper {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n.flip-container, .front, .back {\n  width: 320px;\n  height: 480px; }\n/* flip speed goes here */\n.flipper {\n  transition: 0.6s;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  position: relative; }\n/* hide back of pane during swap */\n.front, .back {\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0; }\n/* front pane, placed above back */\n.front {\n  z-index: 2;\n  /* for firefox 31 */\n  -webkit-transform: rotateY(0deg);\n          transform: rotateY(0deg); }\n/* back, initially hidden pane */\n.back {\n  -webkit-transform: rotateY(180deg);\n          transform: rotateY(180deg); }\n#eyeopen {\n  position: absolute;\n  top: 0;\n  z-index: 9; }\n.blink-infinite {\n  animation: blink 4s steps(1, end) infinite;\n  -webkit-animation: blink 4s steps(1, end) infinite;\n  -moz-animation: blink 4s steps(1, end) infinite;\n  -ms-animation: blink 4s steps(1, end) infinite;\n  -o-animation: blink 4s steps(1, end) infinite;\n  color: #000000; }\n.blink-infinite-r {\n  animation: blinkR 4s steps(1, end) infinite;\n  -webkit-animation: blinkR 4s steps(1, end) infinite;\n  -moz-animation: blinkR 4s steps(1, end) infinite;\n  -ms-animation: blinkR 4s steps(1, end) infinite;\n  -o-animation: blinkR 4s steps(1, end) infinite;\n  color: #000000; }\n.blink {\n  animation: blink 0.2s steps(5, start) 3;\n  -webkit-animation: blink 0.2s steps(5, start) 3;\n  -moz-animation: blink 0.2s steps(5, start) 3;\n  -ms-animation: blink 0.2s steps(5, start) 3;\n  -o-animation: blink 0.2s steps(5, start) 3; }\n.blink-once {\n  animation: blink 0.2s steps(5, start) 1;\n  -webkit-animation: blink 0.2s steps(5, start) 1;\n  -moz-animation: blink 0.2s steps(5, start) 1;\n  -ms-animation: blink 0.2s steps(5, start) 1;\n  -o-animation: blink 0.2s steps(5, start) 1; }\n@keyframes blink {\n  0% {\n    visibility: visible; }\n  20% {\n    visibility: hidden; }\n  25% {\n    visibility: visible; }\n  70% {\n    visibility: hidden; }\n  75% {\n    visibility: visible; }\n  90% {\n    visibility: hidden; }\n  95% {\n    visibility: visible; }\n  100% {\n    visibility: visible; } }\n@-webkit-keyframes blink {\n  0% {\n    visibility: visible; }\n  20% {\n    visibility: hidden; }\n  25% {\n    visibility: visible; }\n  70% {\n    visibility: hidden; }\n  75% {\n    visibility: visible; }\n  90% {\n    visibility: hidden; }\n  95% {\n    visibility: visible; }\n  100% {\n    visibility: visible; } }\n@-webkit-keyframes blinkR {\n  0% {\n    visibility: hidden; }\n  20% {\n    visibility: visible; }\n  25% {\n    visibility: hidden; }\n  70% {\n    visibility: visible; }\n  75% {\n    visibility: hidden; }\n  90% {\n    visibility: visible; }\n  95% {\n    visibility: hidden; }\n  100% {\n    visibility: hidden; } }\n@keyframes blinkR {\n  0% {\n    visibility: hidden; }\n  20% {\n    visibility: visible; }\n  25% {\n    visibility: hidden; }\n  70% {\n    visibility: visible; }\n  75% {\n    visibility: hidden; }\n  90% {\n    visibility: visible; }\n  95% {\n    visibility: hidden; }\n  100% {\n    visibility: hidden; } }\n"

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

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
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
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
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

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

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


var content = __webpack_require__(/*! !../../node_modules/raw-loader!../../node_modules/postcss-loader/lib??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/app/styles.scss");

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