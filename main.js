(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-container\">\n  <main>\n      <div class=\"wrapper\">\n        <router-outlet *ngIf=\"hasConnection; else errorPage\"></router-outlet>\n        <ng-template #errorPage><error></error></ng-template>\n        <preloader *ngIf=\"isPreloader | async\" class=\"preloader\"></preloader>\n      </div>\n  </main>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category-carousel/category-carousel-item/category-carousel-item.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category-carousel/category-carousel-item/category-carousel-item.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section\n  class=\"category-carousel-item\"\n  tabindex=\"0\"\n  navButton\n  [style.background-color]=\"isActive ? getTagColor(tag) : 'rgba(88, 88, 88, 0.4)'\"\n>\n  <span class=\"category-carousel-item__side-frame\" [style.background-color]=\"getTagColor(tag)\"></span>\n  <span class=\"category-carousel-item__title\">{{tag}} Workout</span>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/category-carousel/category-carousel.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/category-carousel/category-carousel.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section\n  class=\"category-carousel clearfix\"\n  [style.left.px]=\"tagContainerLeftPos\"\n>\n  <div class=\"category-carousel__visibility-mask clearfix\"  navGrid>\n    <category-carousel-item\n      *ngFor=\"let tag of tags;trackBy: trackByFn;let i = index\"\n      [tag]=\"tag\"\n      [routerLink]=\"['/'+CATEGORIES_ROUTE, tag]\"\n      #categoryCarouselItem\n    ></category-carousel-item>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header-nav/header-nav.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header-nav/header-nav.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"header-nav\"\n     navGrid\n     (focusin)=\"activateNav()\"\n     (focusout)=\"activateNav(false)\"\n     [class.navActive] = \"isFocused\"\n>\n  <a class=\"header-nav__btn\" navButton routerLinkActive=\"active\" [routerLink]=\"['/'+HOME_ROUTE]\">Home</a>\n  <a class=\"header-nav__btn\" navButton routerLinkActive=\"active\" [routerLink]=\"['/'+CATEGORIES_ROUTE]\">Categories</a>\n  <a class=\"header-nav__btn\" navButton routerLinkActive=\"active\" [routerLink]=\"['/'+FAVOURITES_ROUTE]\">Favorites</a>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"categories clearfix\" [style.background-image]=\"getBackgroundPoster(activeVideo)\">\n    <button *ngIf=\"activeVideo\"\n            class=\"categories__back-to-categories\"\n            [style.background-color]=\"getTagColor(activeVideo.tags[0])\"\n            (focusin)=\"setFocusBtnBack()\"\n            (focusout)=\"setUnfocusBtnBack()\"\n            (click)=\"back()\"\n            navButton>\n      <p *ngIf=\"isFocusBtnBack\" class=\"categories__back-to-categories__text\" >Back To Categories</p>\n    </button>\n    <header-nav *ngIf=\"!activeVideo\"></header-nav>\n    <category-carousel *ngIf=\"!activeVideo\">\n    </category-carousel>\n    <category-details\n      *ngIf=\"!!activeTag && !activeVideo\"\n      [activeTag]=\"activeTag\">\n    </category-details>\n    <video-details\n      *ngIf=\"activeVideo\"\n      [activeVideo] = \"activeVideo\">\n    </video-details>\n    <video-carousel>\n    </video-carousel>\n  <section class=\"categories__filter\" *ngIf=\"!activeVideo\">\n  </section>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/category-details/category-details.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/category-details/category-details.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"category-details\">\n  <h1 class=\"category-details__title\">{{activeTag}} Workout</h1>\n  <h1 class=\"category-details__description\">{{getTagDescription(activeTag)}}</h1>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"error\">\n  <h1 class=\"error__title\">Something went wrong.</h1>\n  <p class=\"error__description\">It looks like one of our servers is down, but we're working to resolve the issue as soon as possible. We're sorry for the inconvenience and appreciate your patience while we get everything straightened out.</p>\n  <button class=\"error__try-again-btn\" navButton (click)=\"redirectToHome()\">Try Again</button>\n  <div class=\"lds-roller\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites-carousel/favorites-carousel.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites-carousel/favorites-carousel.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"favorites-carousel\">\n  <div class=\"favorites-carousel__item\"></div>\n  <div class=\"favorites-carousel__item\"></div>\n  <div class=\"favorites-carousel__item\"></div>\n  <div class=\"favorites-carousel__item\"></div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites-description/favorites-description.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites-description/favorites-description.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"favorites-description\">\n  <p class=\"favorites-description__text\">This is your book of favorite workout.<br>Please browse Сategories to add your favorite workouts. Create your perfect workout!</p>\n  <button class=\"favorites-description__find-exercise-btn\" navButton (click)=\"openHomePage()\">Find Exercise</button>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"favorites\" [style.background-image]=\"getBackgroundPoster(activeVideo)\">\n  <header-nav></header-nav>\n  <favorites-description *ngIf=\"!activeVideo\"></favorites-description>\n  <video-details\n    *ngIf=\"activeVideo\"\n    [activeVideo] = \"activeVideo\">\n  </video-details>\n  <video-carousel>\n  </video-carousel>\n  <favorites-carousel *ngIf=\"isFavoritesEmpty\">\n  </favorites-carousel>\n  <section class=\"favorites__filter\"></section>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"home\" [style.background-image]=\"getBackgroundPoster(activeVideo)\">\n  <header-nav></header-nav>\n  <video-details\n    *ngIf=\"activeVideo\"\n    [activeVideo] = \"activeVideo\">\n  </video-details>\n  <video-carousel>\n  </video-carousel>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/preloader/preloader.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/preloader/preloader.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"preloader\">\n  <span class=\"preloader__title\">{{title}}</span>\n  <img class=\"preloader__image\" [src]=\"image\">\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-carousel/video-carousel-item/video-carousel-item.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-carousel/video-carousel-item/video-carousel-item.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section\n  navButton\n  [style.background-image]=\"getVideoPoster(video)\"\n  class=\"video-carousel-item\">\n  <div class=\"video-carousel-item__side-frame\" [style.background-color]=\"getTagColor(video.tags[MAIN_TAG_POS])\"></div>\n  <p class=\"video-carousel-item__tag\" [style.background-color]=\"getTagColor(video.tags[MAIN_TAG_POS])\">{{video.tags[MAIN_TAG_POS]}}</p>\n  <p class=\"video-carousel-item__title\">{{video.title}}</p>\n  <p class=\"video-carousel-item__duration\">{{video.duration}}</p>\n</section>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-carousel/video-carousel.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-carousel/video-carousel.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section\n  *ngIf=\"videoList\"\n  class=\"video-carousel clearfix\"\n  [style.left.px]=\"videoContainerLeftPos\"\n>\n  <div class=\"video-carousel__visibility-mask\" navGrid>\n    <video-carousel-item\n      *ngFor=\"let video of videoList;trackBy: trackByFn;let i = index\"\n      class=\"video-carousel__visibility-mask__carousel-item\"\n      [class.active]=\"activeVideoIndex === i\"\n      [video]=\"video\"\n      [routerLink]=\"['/'+activeRoute, video.id]\"\n      #videoCarouselItem\n      >\n    </video-carousel-item>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-details/video-details.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-details/video-details.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"video-details\">\n  <h1 class=\"video-details__title\">{{activeVideo.title}}</h1>\n  <p class=\"video-details__tag\" [style.background-color]=\"getTagContainerColor(activeVideo.tags[MAIN_TAG_POS])\">\n    {{activeVideo.tags[MAIN_TAG_POS]}}\n  </p>\n  <p class=\"video-details__duration\">{{activeVideo.duration}}</p>\n  <p class=\"video-details__description\">{{activeVideo.description}}</p>\n  <button class=\"video-details__play-btn\" (click)=\"openPlayer(activeVideo.id)\" navButton navDefault></button>\n  <button class=\"video-details__favorite-btn\" (click)=\"changeFavorite(activeVideo.id)\" navButton>\n    <div *ngIf=\"!isFavorite(activeVideo.id); else addedBlock\">\n      <p class=\"video-details__favorite-btn__title\">Add to Favorites</p>\n      <i class=\"video-details__favorite-btn__icon\"></i>\n    </div>\n    <ng-template #addedBlock>\n      <p class=\"video-details__favorite-btn__title\" >Added to Favorites</p>\n      <i class=\"video-details__favorite-btn__red-icon\"></i>\n    </ng-template>\n  </button>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-player/video-player.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/video-player/video-player.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"player\">\n  <button class=\"player__back-btn\" navButton (click)=\"back()\"></button>\n  <div class=\"player__container\">\n    <p class=\"player__container__title\">{{activeVideo.title}}</p>\n  </div>\n  <div class=\"player__wrapper\">\n    <div class=\"player__wrapper__frame-container\">\n      <div id=\"player\"></div>\n    </div>\n  </div>\n  <div [class.player__play-btn-onPlay]=\"isPaused\" [class.player__play-btn-onPause]=\"!isPaused\" (click)=\"pauseVideo()\" navButton navDefault></div>\n  <span class=\"player__play\">Play</span>\n  <div class=\"player__timeStrip\" navButton #timeStrip>\n    <div [style.margin-left.px]=\"stripPointerPosition\" class=\"player__timeStrip__pointer\" #timeStripPointer></div>\n  </div>\n  <p class=\"player__video-duration\">{{getTimeToFinish()}}</p>\n  <div class=\"player__next-video\" (click)=\"openNextVideoLink()\">\n    <div class=\"player__next-video__item\"\n         navButton\n         [style.background-image]=\"getVideoPoster(nextVideo)\">\n      <img src=\"assets/images/Next.png\" class=\"player__next-video__item__next-icon\">\n      <div class=\"player__next-video__item__side-frame\" [style.background-color]=\"getTagColor(nextVideo.tags[MAIN_TAG_POS])\"></div>\n    </div>\n    <p class=\"player__next-video__title\">{{nextVideo.title}}</p>\n    <p class=\"player__next-video__tag\" [style.background-color]=\"getTagColor(nextVideo.tags[MAIN_TAG_POS])\">{{nextVideo.tags[MAIN_TAG_POS]}}</p>\n  </div>\n</section>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, tvConfig, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"fitness\",\"version\":\"0.0.0\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve --proxy-config proxy.conf.json\",\"start-tv\":\"ng serve --host=$npm_package_tvConfig_host --public-host=$npm_package_tvConfig_host:$npm_package_tvConfig_port --live-reload --proxy-config proxy.conf.json\",\"build\":\"ng build --prod --build-optimizer --output-hashing none\",\"analyze-build\":\"ng build --stats-json --build-optimizer --output-hashing none\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"tvConfig\":{\"host\":\"10.208.10.197\",\"port\":\"4200\"},\"private\":true,\"dependencies\":{\"@alignedcode/tvbase\":\"^1.3.9\",\"@angular/animations\":\"~8.2.14\",\"@angular/common\":\"~8.2.14\",\"@angular/compiler\":\"~8.2.14\",\"@angular/core\":\"~8.2.14\",\"@angular/forms\":\"~8.2.14\",\"@angular/platform-browser\":\"~8.2.14\",\"@angular/platform-browser-dynamic\":\"~8.2.14\",\"@angular/router\":\"~8.2.14\",\"axios\":\"^0.19.2\",\"hls.js\":\"^0.13.2\",\"rxjs\":\"~6.4.0\",\"tslib\":\"^1.10.0\",\"zone.js\":\"~0.9.1\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~0.803.21\",\"@angular-devkit/build-optimizer\":\"^0.803.21\",\"@angular/cli\":\"~8.3.21\",\"@angular/compiler-cli\":\"~8.2.14\",\"@angular/language-service\":\"~8.2.14\",\"@types/jasmine\":\"~3.3.8\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"~8.9.4\",\"codelyzer\":\"^5.0.0\",\"jasmine-core\":\"~3.4.0\",\"jasmine-spec-reporter\":\"~4.2.1\",\"karma\":\"~4.1.0\",\"karma-chrome-launcher\":\"~2.2.0\",\"karma-coverage-istanbul-reporter\":\"~2.0.1\",\"karma-jasmine\":\"~2.0.1\",\"karma-jasmine-html-reporter\":\"^1.4.0\",\"protractor\":\"~5.4.0\",\"ts-node\":\"~7.0.0\",\"tslint\":\"~5.15.0\",\"typescript\":\"~3.5.3\",\"webpack-bundle-analyzer\":\"^3.6.1\"}}");

/***/ }),

/***/ "./src/app/app-paths.ts":
/*!******************************!*\
  !*** ./src/app/app-paths.ts ***!
  \******************************/
/*! exports provided: AppPaths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPaths", function() { return AppPaths; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var AppPaths;
(function (AppPaths) {
    AppPaths["HOME"] = "home";
    AppPaths["PLAYER"] = "player";
    AppPaths["ERROR"] = "error";
    AppPaths["CATEGORIES"] = "categories";
    AppPaths["FAVOURITES"] = "favorites";
})(AppPaths || (AppPaths = {}));


/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-paths */ "./src/app/app-paths.ts");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video-player/video-player.component */ "./src/app/video-player/video-player.component.ts");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");
/* harmony import */ var _pages_categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/categories/categories.component */ "./src/app/pages/categories/categories.component.ts");
/* harmony import */ var _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/favorites/favorites.component */ "./src/app/pages/favorites/favorites.component.ts");
/* harmony import */ var _video_player_activeVideo_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./video-player/activeVideo.resolver */ "./src/app/video-player/activeVideo.resolver.ts");
/* harmony import */ var _video_player_url_resolver__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./video-player/url.resolver */ "./src/app/video-player/url.resolver.ts");
/* harmony import */ var _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./preloader/preloader.component */ "./src/app/preloader/preloader.component.ts");












var routes = [
    {
        path: '',
        redirectTo: "/" + _app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].HOME,
        pathMatch: 'full',
    },
    {
        path: "" + _app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].HOME,
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
    },
    {
        path: _app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].HOME + "/:id",
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
    },
    {
        path: "preloader",
        component: _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_11__["PreloaderComponent"],
    },
    {
        path: "" + _app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].PLAYER,
        component: _video_player_video_player_component__WEBPACK_IMPORTED_MODULE_5__["VideoPlayerComponent"],
        runGuardsAndResolvers: 'always',
        resolve: {
            activeVideo: _video_player_activeVideo_resolver__WEBPACK_IMPORTED_MODULE_9__["ActiveVideoResolver"],
            url: _video_player_url_resolver__WEBPACK_IMPORTED_MODULE_10__["UrlResolver"],
        },
    },
    {
        path: "" + _app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].CATEGORIES,
        redirectTo: "/" + _app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].CATEGORIES + "/Full-body",
        pathMatch: 'full',
    },
    {
        path: _app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].CATEGORIES + "/:tag",
        component: _pages_categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"],
    },
    {
        path: _app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].CATEGORIES + "/:tag/:id",
        component: _pages_categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"],
    },
    {
        path: "" + _app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].FAVOURITES,
        component: _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_8__["FavoritesComponent"],
    },
    {
        path: _app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].FAVOURITES + "/:id",
        component: _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_8__["FavoritesComponent"],
    },
    {
        path: '**',
        component: _pages_error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"],
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: !environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production, useHash: true });


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-container {\n  height: 100%;\n  position: relative;\n}\n\n.preloader {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1000000;\n}\n\nmain {\n  position: absolute;\n  margin: 0 auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nmain > .wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0ZGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNBRjs7QURFRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vc3R5bGVzL3ZhcnMnO1xuQGltcG9ydCAnLi9zdHlsZXMvbWl4aW5zJztcblxuLmFwcC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcmVsb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDAwMDtcbn1cbm1haW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG5cbiAgJiA+IC53cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4iLCIuYXBwLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJlbG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDAwMDA7XG59XG5cbm1haW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5tYWluID4gLndyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @alignedcode/tvbase */ "./node_modules/@alignedcode/tvbase/fesm5/alignedcode-tvbase.js");
/* harmony import */ var _services_route_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/route-events.service */ "./src/app/services/route-events.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");






var AppComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AppComponent, _super);
    function AppComponent(elementRef, keysService, navigationService, routeEventsService, platformService, appService, cdRef) {
        var _this = _super.call(this, elementRef, null, keysService) || this;
        _this.navigationService = navigationService;
        _this.routeEventsService = routeEventsService;
        _this.platformService = platformService;
        _this.appService = appService;
        _this.cdRef = cdRef;
        _this.title = 'Fitness';
        _this.hasConnection = true;
        _this.navigationService.setRoot(_this);
        routeEventsService.loadRouting();
        return _this;
    }
    AppComponent_1 = AppComponent;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(5000).subscribe(function (_) { return _this.isNetworkConnected(); });
    };
    AppComponent.prototype.isNetworkConnected = function () {
        this.hasConnection = this.platformService.hasNetwork();
    };
    Object.defineProperty(AppComponent.prototype, "isPreloader", {
        get: function () {
            return this.appService.isPreloader$;
        },
        enumerable: true,
        configurable: true
    });
    var AppComponent_1;
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_2__["KeysService"] },
        { type: _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] },
        { type: _services_route_events_service__WEBPACK_IMPORTED_MODULE_3__["RouteEventsService"] },
        { type: _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_2__["PlatformService"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    AppComponent = AppComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            providers: [Object(_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_2__["provideNavigatable"])(AppComponent_1)],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        })
    ], AppComponent);
    return AppComponent;
}(_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_2__["NavigatableComponent"]));



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_http_gateway_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/http-gateway.service */ "./src/app/services/http-gateway.service.ts");
/* harmony import */ var _services_environment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/environment.service */ "./src/app/services/environment.service.ts");
/* harmony import */ var _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @alignedcode/tvbase */ "./node_modules/@alignedcode/tvbase/fesm5/alignedcode-tvbase.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header-nav/header-nav.component */ "./src/app/header-nav/header-nav.component.ts");
/* harmony import */ var _video_carousel_video_carousel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./video-carousel/video-carousel.component */ "./src/app/video-carousel/video-carousel.component.ts");
/* harmony import */ var _video_carousel_video_carousel_item_video_carousel_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./video-carousel/video-carousel-item/video-carousel-item.component */ "./src/app/video-carousel/video-carousel-item/video-carousel-item.component.ts");
/* harmony import */ var _video_details_video_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./video-details/video-details.component */ "./src/app/video-details/video-details.component.ts");
/* harmony import */ var _pages_error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/error/error.component */ "./src/app/pages/error/error.component.ts");
/* harmony import */ var _pages_categories_categories_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/categories/categories.component */ "./src/app/pages/categories/categories.component.ts");
/* harmony import */ var _pages_categories_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/categories/category-details/category-details.component */ "./src/app/pages/categories/category-details/category-details.component.ts");
/* harmony import */ var _category_carousel_category_carousel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./category-carousel/category-carousel.component */ "./src/app/category-carousel/category-carousel.component.ts");
/* harmony import */ var _category_carousel_category_carousel_item_category_carousel_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./category-carousel/category-carousel-item/category-carousel-item.component */ "./src/app/category-carousel/category-carousel-item/category-carousel-item.component.ts");
/* harmony import */ var _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/favorites/favorites.component */ "./src/app/pages/favorites/favorites.component.ts");
/* harmony import */ var _pages_favorites_favorites_description_favorites_description_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/favorites/favorites-description/favorites-description.component */ "./src/app/pages/favorites/favorites-description/favorites-description.component.ts");
/* harmony import */ var _pages_favorites_favorites_carousel_favorites_carousel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/favorites/favorites-carousel/favorites-carousel.component */ "./src/app/pages/favorites/favorites-carousel/favorites-carousel.component.ts");
/* harmony import */ var _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./preloader/preloader.component */ "./src/app/preloader/preloader.component.ts");
/* harmony import */ var _video_player_video_player_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./video-player/video-player.module */ "./src/app/video-player/video-player.module.ts");
























var AppModule = /** @class */ (function () {
    function AppModule(platformService) {
        platformService.add(_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_6__["WebOsPlatform"]);
        platformService.add(_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_6__["TizenPlatform"]);
        platformService.add(_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_6__["NetcastPlatform"]);
        platformService.add(_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_6__["OrsayPlatform"]);
        platformService.add(_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_6__["AmazonFireTvPlatform"]);
        platformService.add(_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_6__["DesktopPlatform"]);
    }
    AppModule.ctorParameters = function () { return [
        { type: _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_6__["PlatformService"] }
    ]; };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_10__["HeaderNavComponent"],
                _video_carousel_video_carousel_component__WEBPACK_IMPORTED_MODULE_11__["VideoCarouselComponent"],
                _video_carousel_video_carousel_item_video_carousel_item_component__WEBPACK_IMPORTED_MODULE_12__["VideoCarouselItemComponent"],
                _video_details_video_details_component__WEBPACK_IMPORTED_MODULE_13__["VideoDetailsComponent"],
                _pages_error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"],
                _pages_categories_categories_component__WEBPACK_IMPORTED_MODULE_15__["CategoriesComponent"],
                _pages_categories_category_details_category_details_component__WEBPACK_IMPORTED_MODULE_16__["CategoryDetailsComponent"],
                _category_carousel_category_carousel_component__WEBPACK_IMPORTED_MODULE_17__["CategoryCarouselComponent"],
                _category_carousel_category_carousel_item_category_carousel_item_component__WEBPACK_IMPORTED_MODULE_18__["CategoryCarouselItemComponent"],
                _pages_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_19__["FavoritesComponent"],
                _pages_favorites_favorites_description_favorites_description_component__WEBPACK_IMPORTED_MODULE_20__["FavoritesDescriptionComponent"],
                _pages_favorites_favorites_carousel_favorites_carousel_component__WEBPACK_IMPORTED_MODULE_21__["FavoritesCarouselComponent"],
                _preloader_preloader_component__WEBPACK_IMPORTED_MODULE_22__["PreloaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_6__["TVBaseModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_8__["routing"],
                _video_player_video_player_module__WEBPACK_IMPORTED_MODULE_23__["VideoPlayerModule"]
            ],
            providers: [
                _services_http_gateway_service__WEBPACK_IMPORTED_MODULE_4__["HttpGateway"],
                _services_environment_service__WEBPACK_IMPORTED_MODULE_5__["EnvironmentService"],
                _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_6__["PlatformService"],
                _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_6__["DesktopPlatform"],
                _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_6__["WebOsPlatform"],
                _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_6__["TizenPlatform"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AppService = /** @class */ (function () {
    function AppService() {
        this.isPreloader = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.preloaderCounter = 0;
    }
    Object.defineProperty(AppService.prototype, "isPreloader$", {
        get: function () {
            return this.isPreloader.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AppService.prototype.switchPreloader = function (isOn) {
        if (isOn === void 0) { isOn = true; }
        var execute = this.multiSwitcherCheck(isOn);
        if (execute) {
            this.isPreloader.next(isOn);
        }
    };
    AppService.prototype.multiSwitcherCheck = function (value) {
        var execute = false;
        var counter = this.preloaderCounter;
        if (value) {
            counter++;
            if (counter === 1) {
                execute = true;
            }
        }
        else {
            counter--;
            if (counter <= 0) {
                counter = 0;
                execute = true;
            }
        }
        this.preloaderCounter = counter;
        return execute;
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/category-carousel/category-carousel-item/category-carousel-item.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/category-carousel/category-carousel-item/category-carousel-item.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".category-carousel-item {\n  position: relative;\n  width: 340.7407407407px;\n  height: 106.6666666667px;\n  margin-left: 22.2222222222px;\n  float: left;\n  -webkit-border-radius: 8px;\n          border-radius: 8px;\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n  -webkit-transition: 1s;\n  transition: 1s;\n}\n.category-carousel-item.hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.category-carousel-item__side-frame {\n  left: 0px;\n  height: 106.6666666667px;\n  width: 22.962962963px;\n  float: left;\n  -webkit-border-radius: 4px 0px 0px 4px;\n          border-radius: 4px 0px 0px 4px;\n}\n.category-carousel-item__title {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 277.7777777778px;\n  height: 31.8518518519px;\n  margin-left: 50.3703703704px;\n  font-family: \"SF PRO Display\";\n  font-weight: bold;\n  font-size: 26.6666666667px;\n  line-height: 31.8518518519px;\n  white-space: nowrap;\n  overflow: hidden;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC9jYXRlZ29yeS1jYXJvdXNlbC9jYXRlZ29yeS1jYXJvdXNlbC1pdGVtL2NhdGVnb3J5LWNhcm91c2VsLWl0ZW0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VteW9uL2ZpdG5lc3MtYXBwL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5LWNhcm91c2VsL2NhdGVnb3J5LWNhcm91c2VsLWl0ZW0vY2F0ZWdvcnktY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3R5bGVzL192YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtVQUFBLGtCQUFBO0VDOEJFLGtDQUFBO0VBQ0EsMEJBQUE7RUQ3QkYsc0JBQUE7RUFBQSxjQUFBO0FFREY7QUZFRTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUVBSjtBRkVFO0VBQ0UsU0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBRUFKO0FGR0U7RUNwQkUsa0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFRG9CQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkdFVztFSERYLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjR3RCSTtBRHVCUiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LWNhcm91c2VsL2NhdGVnb3J5LWNhcm91c2VsLWl0ZW0vY2F0ZWdvcnktY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvbWl4aW5zXCI7XG5AaW1wb3J0IFwic3R5bGVzL3ZhcnNcIjtcblxuLmNhdGVnb3J5LWNhcm91c2VsLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhZGp1c3RQeCg0NjBweCk7XG4gIGhlaWdodDogYWRqdXN0UHgoMTQ0cHgpO1xuICBtYXJnaW4tbGVmdDogYWRqdXN0UHgoMzBweCk7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIEBpbmNsdWRlIGJhY2tkcm9wLWZpbHRlci1ibHVyKDVweCk7XG4gIHRyYW5zaXRpb246IDFzO1xuICAmLmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIH1cbiAgJl9fc2lkZS1mcmFtZSB7XG4gICAgbGVmdDogMHB4O1xuICAgIGhlaWdodDogYWRqdXN0UHgoMTQ0cHgpO1xuICAgIHdpZHRoOiBhZGp1c3RQeCgzMXB4KTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCA0cHg7XG4gIH1cblxuICAmX190aXRsZSB7XG4gICAgQGluY2x1ZGUgdmFsaWduO1xuICAgIHdpZHRoOiBhZGp1c3RQeCgzNzVweCk7XG4gICAgaGVpZ2h0OiBhZGp1c3RQeCg0M3B4KTtcbiAgICBtYXJnaW4tbGVmdDogYWRqdXN0UHgoNjhweCk7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiBhZGp1c3RQeCgzNnB4KTtcbiAgICBsaW5lLWhlaWdodDogYWRqdXN0UHgoNDNweCk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcnMnO1xuXG5AbWl4aW4gdmFsaWduIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5AbWl4aW4gaGFsaWduIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuQG1peGluIGh2YWxpZ24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkdmFsdWUpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkdmFsdWU7XG4gIC1tb3otYm94LXNoYWRvdzogJHZhbHVlO1xuICBib3gtc2hhZG93OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBza2V3ICgkeCwgJHkpIHtcblx0QGluY2x1ZGUgdHJhbnNmb3JtKHNrZXcoI3skeH1kZWcsICN7JHl9ZGVnKSk7XG59XG5cbkBtaXhpbiBiYWNrZHJvcC1maWx0ZXItYmx1cigkdmFsdWUpIHtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigkdmFsdWUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigkdmFsdWUpO1xufVxuXG5AbWl4aW4gYmFjay1idG4tcG9zaXRpb24ge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogYWRqdXN0UHgoNDRweCkgYWRqdXN0UHgoNDRweCk7XG59XG5cbkBmdW5jdGlvbiBhZGp1c3RQeCgkcHgpIHtcbiAgICBAcmV0dXJuICRhc3BlY3QtcmF0aW8gKiAkcHg7XG59XG5cbkBmdW5jdGlvbiBjYWxjWm9vbSgkc2NyZWVuLXJlc29sdXRpb24pIHtcbiAgICBAcmV0dXJuICRzY3JlZW4tcmVzb2x1dGlvbi8kaGQ7XG59XG4iLCIuY2F0ZWdvcnktY2Fyb3VzZWwtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDM0MC43NDA3NDA3NDA3cHg7XG4gIGhlaWdodDogMTA2LjY2NjY2NjY2NjdweDtcbiAgbWFyZ2luLWxlZnQ6IDIyLjIyMjIyMjIyMjJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIHRyYW5zaXRpb246IDFzO1xufVxuLmNhdGVnb3J5LWNhcm91c2VsLWl0ZW0uaG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4uY2F0ZWdvcnktY2Fyb3VzZWwtaXRlbV9fc2lkZS1mcmFtZSB7XG4gIGxlZnQ6IDBweDtcbiAgaGVpZ2h0OiAxMDYuNjY2NjY2NjY2N3B4O1xuICB3aWR0aDogMjIuOTYyOTYyOTYzcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCA0cHg7XG59XG4uY2F0ZWdvcnktY2Fyb3VzZWwtaXRlbV9fdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAyNzcuNzc3Nzc3Nzc3OHB4O1xuICBoZWlnaHQ6IDMxLjg1MTg1MTg1MTlweDtcbiAgbWFyZ2luLWxlZnQ6IDUwLjM3MDM3MDM3MDRweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUFJPIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjYuNjY2NjY2NjY2N3B4O1xuICBsaW5lLWhlaWdodDogMzEuODUxODUxODUxOXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iLCIkaGQ6IDEyODBweDtcbiRoZC1yZWFkeS0xMzY2OiAxMzY2cHg7XG4kaGQtcmVhZHktMTQwMDogMTQwMHB4O1xuJGhkLXJlYWR5LTE2ODA6IDE2ODBweDtcbiRmdWxsLWhkOiAxOTIwcHg7XG4kdWhkOiAzODQwcHg7XG5cbiRwcm9ncmFtbWFibGUtZGltZW5zaW9uOiAxMjgwO1xuJGRlc2lnbi1kaW1lbnNpb246IDE3Mjg7XG5cbiRhc3BlY3QtcmF0aW86ICRwcm9ncmFtbWFibGUtZGltZW5zaW9uIC8gJGRlc2lnbi1kaW1lbnNpb247XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodC1ibGFjazogIzIzMjMyMztcbiRibGFjazogIzAwMDAwMDtcbiRsaWdodC1ncmV5OiAjOGY4ZjhmO1xuJGdyYXk6ICM2MTYxNjE7XG4kZGFyay1ncmV5OiAjMzUzNTM1O1xuJGxpZ2h0LXBpbms6ICNGQUUyRTI7XG4kb3JhbmdlOiAjZTg3MDAwO1xuJGFwcC1iYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuJGFwcC1wcmltYXJ5LWNvbG9yOiAkd2hpdGU7XG4kYXBwLXNlY29uZGFyeS1jb2xvcjogI2Y4ZmYxMztcblxuJHNyYzogXCJ+XCI7XG5cbiRpbWFnZS1zcmM6IFwiI3skc3JjfWFzc2V0cy9pbWFnZXNcIjtcblxuJGZvbnRzLXNyYzogJyN7JHNyY31hc3NldHMvZm9udHMvU0YtUFJPLURpc3BsYXknO1xuXG4kcHJpbWFyeS1mb250OiAnU0YgUFJPIERpc3BsYXknO1xuXG4kZm9udC1ibGFjazogJ1NGIFBSTyBEaXNwbGF5IEJsYWNrJztcbiRmb250LWJsYWNrSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgQmxhY2tJdGFsaWMnO1xuJGZvbnQtYm9sZDogJ1NGIFBSTyBEaXNwbGF5IEJvbGQnO1xuJGZvbnQtYm9sZEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IEJvbGRJdGFsaWMnO1xuJGZvbnQtaGVhdnk6ICdTRiBQUk8gRGlzcGxheSBIZWF2eSc7XG4kZm9udC1oZWF2eUl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IEhlYXZ5SXRhbGljJztcbiRmb250LWxpZ2h0OiAnU0YgUFJPIERpc3BsYXkgTGlnaHQnO1xuJGZvbnQtbGlnaHRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBMaWdodEl0YWxpYyc7XG4kZm9udC1tZWRpdW06ICdTRiBQUk8gRGlzcGxheSBNZWRpdW0nO1xuJGZvbnQtbWVkaXVtSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgTWVkaXVtSXRhbGljJztcbiRmb250LXJlZ3VsYXI6ICdTRiBQUk8gRGlzcGxheSBSZWd1bGFyJztcbiRmb250LXJlZ3VsYXJJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBSZWd1bGFySXRhbGljJztcbiRmb250LXNlbWlib2xkOiAnU0YgUFJPIERpc3BsYXkgU2VtaWJvbGQnO1xuJGZvbnQtc2VtaWJvbGRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBTZW1pYm9sZEl0YWxpYyc7XG4kZm9udC10aGluOiAnU0YgUFJPIERpc3BsYXkgVGhpbic7XG4kZm9udC10aGluSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgVGhpbkl0YWxpYyc7XG4kZm9udC11bHRyYWxpZ2h0OiAnU0YgUFJPIERpc3BsYXkgVWx0cmFsaWdodCc7XG4kZm9udC11bHRyYWxpZ2h0SXRhbGljOiAnU0YgUFJPIERpc3BsYXkgVWx0cmFsaWdodEl0YWxpYyc7XG4iXX0= */");

/***/ }),

/***/ "./src/app/category-carousel/category-carousel-item/category-carousel-item.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/category-carousel/category-carousel-item/category-carousel-item.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CategoryCarouselItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCarouselItemComponent", function() { return CategoryCarouselItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/tag.model */ "./src/app/shared/models/tag.model.ts");



var CategoryCarouselItemComponent = /** @class */ (function () {
    function CategoryCarouselItemComponent() {
        var _this = this;
        this.isActive = false;
        //TODO: refactor, think about simpler solution
        this.onFocus = function () { return _this.isActive = true; };
        this.onBlur = function () { return _this.isActive = false; };
    }
    CategoryCarouselItemComponent.prototype.ngOnInit = function () {
    };
    CategoryCarouselItemComponent.prototype.getTagColor = function (tag) {
        return _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_2__["TagsColors"][tag];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CategoryCarouselItemComponent.prototype, "tag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focusin')
    ], CategoryCarouselItemComponent.prototype, "onFocus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focusout')
    ], CategoryCarouselItemComponent.prototype, "onBlur", void 0);
    CategoryCarouselItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'category-carousel-item',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-carousel-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category-carousel/category-carousel-item/category-carousel-item.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-carousel-item.component.scss */ "./src/app/category-carousel/category-carousel-item/category-carousel-item.component.scss")).default]
        })
    ], CategoryCarouselItemComponent);
    return CategoryCarouselItemComponent;
}());



/***/ }),

/***/ "./src/app/category-carousel/category-carousel.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/category-carousel/category-carousel.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,\nbody {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n}\n\nbody {\n  line-height: 1;\n  transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-perspective: 1000;\n  perspective: 1000;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background-color: #262626;\n  color: #ffffff;\n  font-size: 21px;\n  font-family: \"SF PRO Display Regular\", \"Arial\", sans-serif;\n}\n\n@media (min-width: 1366px) {\n  body {\n    zoom: 1.0671875;\n  }\n}\n\n@media (min-width: 1400px) {\n  body {\n    zoom: 1.09375;\n  }\n}\n\n@media (min-width: 1680px) {\n  body {\n    zoom: 1.3125;\n  }\n}\n\n@media (min-width: 1920px) {\n  body {\n    zoom: 1.5;\n  }\n}\n\n@media (min-width: 3840px) {\n  body {\n    zoom: 3;\n  }\n}\n\nmain * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\na {\n  display: inline-block;\n  outline: none;\n  color: #fff;\n  text-decoration: none;\n}\n\n.clearfix:before,\n.clearfix:after {\n  content: \"\";\n  display: table;\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n[hidden], .hidden {\n  display: none !important;\n}\n\n[invisible], .invisible {\n  visibility: hidden !important;\n}\n\n.category-carousel {\n  position: fixed;\n  z-index: 1;\n  margin-top: 140.7407407407px;\n  -webkit-transition: 1s;\n  transition: 1s;\n}\n\n.category-carousel__visibility-mask {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n          align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3R5bGVzL19nZW5lcmFsLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3J5LWNhcm91c2VsL2NhdGVnb3J5LWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbXlvbi9maXRuZXNzLWFwcC9zdHlsZXMvX3ZhcnMuc2NzcyIsIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC9jYXRlZ29yeS1jYXJvdXNlbC9jYXRlZ29yeS1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0dBQUEscUJBQUE7T0FBQSxpQkFBQTtBQ0hGOztBRE1BO0VBc0JFLGNBQUE7RUFFQSxxQkFBQTtFQUNBLDZCQUFBO0VBRUEsbUNBQUE7RUFDQSwyQkFBQTtFQUVBLHlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQ0FBQTtFQUNBLHdCQUFBO0VBRUEseUJFOUJxQjtFRitCckIsY0V2Q007RUZ5Q04sZUFBQTtFQUNBLDBEQUFBO0FDOUJGOztBRFJFO0VBRkY7SUFHSSxlQUFBO0VDV0Y7QUFDRjs7QURURTtFQU5GO0lBT0ksYUFBQTtFQ1lGO0FBQ0Y7O0FEVkU7RUFWRjtJQVdJLFlBQUE7RUNhRjtBQUNGOztBRFhFO0VBZEY7SUFlSSxTQUFBO0VDY0Y7QUFDRjs7QURaRTtFQWxCRjtJQW1CSSxPQUFBO0VDZUY7QUFDRjs7QURRQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUNMRjs7QURRQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0xGOztBRFFBOztFQUVFLFdBQUE7RUFDQSxjQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0FDTEY7O0FEUUE7RUFDRSx3QkFBQTtBQ0xGOztBRFFBO0VBQ0UsNkJBQUE7QUNMRjs7QUUzRUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFBQSxjQUFBO0FGOEVGOztBRTVFRTtFQUNFLG9CQUFBO0VBQUEscUJBQUE7RUFBQSxhQUFBO0VBQ0Esc0JBQUE7RUFBQSw2QkFBQTtVQUFBLHFCQUFBO0FGOEVKIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcnktY2Fyb3VzZWwvY2F0ZWdvcnktY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5ib2R5IHtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGhkLXJlYWR5LTEzNjYpIHtcbiAgICB6b29tOiBjYWxjWm9vbSgkaGQtcmVhZHktMTM2Nik7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGhkLXJlYWR5LTE0MDApIHtcbiAgICB6b29tOiBjYWxjWm9vbSgkaGQtcmVhZHktMTQwMCk7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGhkLXJlYWR5LTE2ODApIHtcbiAgICB6b29tOiBjYWxjWm9vbSgkaGQtcmVhZHktMTY4MCk7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJGZ1bGwtaGQpIHtcbiAgICB6b29tOiBjYWxjWm9vbSgkZnVsbC1oZCk7XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHVoZCkge1xuICAgIHpvb206IGNhbGNab29tKCR1aGQpO1xuICB9XG5cbiAgbGluZS1oZWlnaHQ6IDE7XG5cbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcblxuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDA7XG4gIHBlcnNwZWN0aXZlOiAxMDAwO1xuXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogJGFwcC1iYWNrZ3JvdW5kLWNvbG9yO1xuICBjb2xvcjogJGFwcC1wcmltYXJ5LWNvbG9yO1xuXG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC1mYW1pbHk6ICRmb250LXJlZ3VsYXIsICdBcmlhbCcsIHNhbnMtc2VyaWY7XG59XG5cbm1haW4gKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jbGVhcmZpeDpiZWZvcmUsXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLmNsZWFyZml4OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbltoaWRkZW5dLCAuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5baW52aXNpYmxlXSwgLmludmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuIiwiaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEwMDA7XG4gIHBlcnNwZWN0aXZlOiAxMDAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheSBSZWd1bGFyXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMzY2cHgpIHtcbiAgYm9keSB7XG4gICAgem9vbTogMS4wNjcxODc1O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIGJvZHkge1xuICAgIHpvb206IDEuMDkzNzU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNjgwcHgpIHtcbiAgYm9keSB7XG4gICAgem9vbTogMS4zMTI1O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkyMHB4KSB7XG4gIGJvZHkge1xuICAgIHpvb206IDEuNTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM4NDBweCkge1xuICBib2R5IHtcbiAgICB6b29tOiAzO1xuICB9XG59XG5cbm1haW4gKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5jbGVhcmZpeDpiZWZvcmUsXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLmNsZWFyZml4OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbltoaWRkZW5dLCAuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5baW52aXNpYmxlXSwgLmludmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4uY2F0ZWdvcnktY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi10b3A6IDE0MC43NDA3NDA3NDA3cHg7XG4gIHRyYW5zaXRpb246IDFzO1xufVxuLmNhdGVnb3J5LWNhcm91c2VsX192aXNpYmlsaXR5LW1hc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59IiwiJGhkOiAxMjgwcHg7XG4kaGQtcmVhZHktMTM2NjogMTM2NnB4O1xuJGhkLXJlYWR5LTE0MDA6IDE0MDBweDtcbiRoZC1yZWFkeS0xNjgwOiAxNjgwcHg7XG4kZnVsbC1oZDogMTkyMHB4O1xuJHVoZDogMzg0MHB4O1xuXG4kcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbjogMTI4MDtcbiRkZXNpZ24tZGltZW5zaW9uOiAxNzI4O1xuXG4kYXNwZWN0LXJhdGlvOiAkcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbiAvICRkZXNpZ24tZGltZW5zaW9uO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHQtYmxhY2s6ICMyMzIzMjM7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbGlnaHQtZ3JleTogIzhmOGY4ZjtcbiRncmF5OiAjNjE2MTYxO1xuJGRhcmstZ3JleTogIzM1MzUzNTtcbiRsaWdodC1waW5rOiAjRkFFMkUyO1xuJG9yYW5nZTogI2U4NzAwMDtcbiRhcHAtYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiRhcHAtcHJpbWFyeS1jb2xvcjogJHdoaXRlO1xuJGFwcC1zZWNvbmRhcnktY29sb3I6ICNmOGZmMTM7XG5cbiRzcmM6IFwiflwiO1xuXG4kaW1hZ2Utc3JjOiBcIiN7JHNyY31hc3NldHMvaW1hZ2VzXCI7XG5cbiRmb250cy1zcmM6ICcjeyRzcmN9YXNzZXRzL2ZvbnRzL1NGLVBSTy1EaXNwbGF5JztcblxuJHByaW1hcnktZm9udDogJ1NGIFBSTyBEaXNwbGF5JztcblxuJGZvbnQtYmxhY2s6ICdTRiBQUk8gRGlzcGxheSBCbGFjayc7XG4kZm9udC1ibGFja0l0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IEJsYWNrSXRhbGljJztcbiRmb250LWJvbGQ6ICdTRiBQUk8gRGlzcGxheSBCb2xkJztcbiRmb250LWJvbGRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBCb2xkSXRhbGljJztcbiRmb250LWhlYXZ5OiAnU0YgUFJPIERpc3BsYXkgSGVhdnknO1xuJGZvbnQtaGVhdnlJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBIZWF2eUl0YWxpYyc7XG4kZm9udC1saWdodDogJ1NGIFBSTyBEaXNwbGF5IExpZ2h0JztcbiRmb250LWxpZ2h0SXRhbGljOiAnU0YgUFJPIERpc3BsYXkgTGlnaHRJdGFsaWMnO1xuJGZvbnQtbWVkaXVtOiAnU0YgUFJPIERpc3BsYXkgTWVkaXVtJztcbiRmb250LW1lZGl1bUl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IE1lZGl1bUl0YWxpYyc7XG4kZm9udC1yZWd1bGFyOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhcic7XG4kZm9udC1yZWd1bGFySXRhbGljOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhckl0YWxpYyc7XG4kZm9udC1zZW1pYm9sZDogJ1NGIFBSTyBEaXNwbGF5IFNlbWlib2xkJztcbiRmb250LXNlbWlib2xkSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgU2VtaWJvbGRJdGFsaWMnO1xuJGZvbnQtdGhpbjogJ1NGIFBSTyBEaXNwbGF5IFRoaW4nO1xuJGZvbnQtdGhpbkl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFRoaW5JdGFsaWMnO1xuJGZvbnQtdWx0cmFsaWdodDogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHQnO1xuJGZvbnQtdWx0cmFsaWdodEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHRJdGFsaWMnO1xuIiwiQGltcG9ydCBcInN0eWxlcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJzdHlsZXMvZ2VuZXJhbFwiO1xuXG4uY2F0ZWdvcnktY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi10b3A6IGFkanVzdFB4KDE5MHB4KTtcbiAgdHJhbnNpdGlvbjogMXM7XG5cbiAgJl9fdmlzaWJpbGl0eS1tYXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/category-carousel/category-carousel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/category-carousel/category-carousel.component.ts ***!
  \******************************************************************/
/*! exports provided: CategoryCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryCarouselComponent", function() { return CategoryCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/models/tag.model */ "./src/app/shared/models/tag.model.ts");
/* harmony import */ var _app_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-paths */ "./src/app/app-paths.ts");
/* harmony import */ var _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @alignedcode/tvbase */ "./node_modules/@alignedcode/tvbase/fesm5/alignedcode-tvbase.js");





var CategoryCarouselComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoryCarouselComponent, _super);
    function CategoryCarouselComponent(parent, keysService, elementRef) {
        var _this = _super.call(this, elementRef, parent, keysService, new Map([
            [_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_4__["KEYS"].LEFT, function () { if (_this.isActive())
                    _this.prevTag(); }],
            [_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_4__["KEYS"].RIGHT, function () { if (_this.isActive())
                    _this.nextTag(); }]
        ])) || this;
        _this.TAGS_PER_PAGE = 3;
        _this.activeOffset = 0;
        _this.tags = [];
        _this.CATEGORIES_ROUTE = _app_paths__WEBPACK_IMPORTED_MODULE_3__["AppPaths"].CATEGORIES;
        _this.activeTagIndex = 0;
        _this.tagContainerLeftPos = 0;
        return _this;
    }
    CategoryCarouselComponent.prototype.ngOnInit = function () {
        var index = 0;
        for (var tag in _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_2__["TagsColors"]) {
            this.tags[index] = tag;
            index++;
        }
    };
    CategoryCarouselComponent.prototype.calcOffset = function () {
        this.setupActiveOffset();
    };
    CategoryCarouselComponent.prototype.setupActiveOffset = function () {
        var tagCollection = this.categoryCarouselItem.nativeElement;
        var tagWidth = tagCollection.getBoundingClientRect().width;
        this.activeOffset = tagWidth;
    };
    CategoryCarouselComponent.prototype.shiftTags = function (offset) {
        this.tagContainerLeftPos = this.tagContainerLeftPos + offset;
    };
    CategoryCarouselComponent.prototype.nextTag = function () {
        this.calcOffset();
        if (this.activeTagIndex >= 0) {
            this.shiftTags(-this.activeOffset);
        }
        if (this.activeTagIndex === this.tags.length - 1) {
            this.activeTagIndex = 0;
            this.tagContainerLeftPos = 0;
        }
        else {
            this.activeTagIndex++;
        }
    };
    CategoryCarouselComponent.prototype.prevTag = function () {
        this.calcOffset();
        if (this.activeTagIndex !== 0) {
            this.activeTagIndex--;
            this.shiftTags(this.activeOffset);
        }
    };
    CategoryCarouselComponent.prototype.isActive = function () {
        var dom = this.elementRef.nativeElement;
        return !!dom.querySelectorAll('.category-carousel-item.hover').length;
    };
    CategoryCarouselComponent.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    CategoryCarouselComponent.ctorParameters = function () { return [
        { type: _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_4__["NavBase"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_4__["KeysService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('categoryCarouselItem', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
    ], CategoryCarouselComponent.prototype, "categoryCarouselItem", void 0);
    CategoryCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'category-carousel',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/category-carousel/category-carousel.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-carousel.component.scss */ "./src/app/category-carousel/category-carousel.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
    ], CategoryCarouselComponent);
    return CategoryCarouselComponent;
}(_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_4__["NavigatableComponent"]));



/***/ }),

/***/ "./src/app/header-nav/header-nav.component.scss":
/*!******************************************************!*\
  !*** ./src/app/header-nav/header-nav.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-nav {\n  position: fixed;\n  z-index: 1;\n  margin-left: 14.8148148148px;\n  color: #8f8f8f;\n}\n.header-nav__btn {\n  padding-left: 15.5555555556px;\n  padding-right: 15.5555555556px;\n  margin-left: 60px;\n  margin-top: 48.1481481481px;\n  font-family: \"SF PRO Display\";\n  font-weight: bold;\n  font-size: 26.6666666667px;\n  line-height: 31.8518518519px;\n  color: inherit;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n  -webkit-border-radius: 4.4444444444px;\n          border-radius: 4.4444444444px;\n}\n.header-nav__btn.active {\n  color: #ffffff;\n}\n.header-nav__btn.hover {\n  border-bottom: 4.4444444444px solid #e87000;\n}\n.header-nav__btn.active.hover {\n  color: #e87000;\n}\n.navActive > .header-nav__btn {\n  color: #ffffff;\n}\n.navActive > .header-nav__btn.active {\n  color: #e87000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC9oZWFkZXItbmF2L2hlYWRlci1uYXYuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VteW9uL2ZpdG5lc3MtYXBwL3N0eWxlcy9fdmFycy5zY3NzIiwic3JjL2FwcC9oZWFkZXItbmF2L2hlYWRlci1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsY0NRVztBQ1ZiO0FGR0U7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQ2lCVztFRGhCWCxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUVESjtBRkVJO0VBQ0UsY0NURTtBQ1NSO0FGRUk7RUFDRSwyQ0FBQTtBRUFOO0FGRUk7RUFDRSxjQ1JHO0FDUVQ7QUZFSTtFQUNFLGNDbEJFO0FDa0JSO0FGQ007RUFDRSxjQ2JDO0FDY1QiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXItbmF2L2hlYWRlci1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvbWl4aW5zJztcbkBpbXBvcnQgJ3N0eWxlcy92YXJzJztcblxuLmhlYWRlci1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiBhZGp1c3RQeCgyMHB4KTtcbiAgY29sb3I6ICRsaWdodC1ncmV5O1xuICAmX19idG4ge1xuICAgIHBhZGRpbmctbGVmdDogYWRqdXN0UHgoMjFweCk7XG4gICAgcGFkZGluZy1yaWdodDogYWRqdXN0UHgoMjFweCk7XG4gICAgbWFyZ2luLWxlZnQ6IGFkanVzdFB4KDgxcHgpO1xuICAgIG1hcmdpbi10b3A6IGFkanVzdFB4KDY1cHgpO1xuICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogYWRqdXN0UHgoMzZweCk7XG4gICAgbGluZS1oZWlnaHQ6IGFkanVzdFB4KDQzcHgpO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgYm9yZGVyLXJhZGl1czogYWRqdXN0UHgoNnB4KTtcbiAgICAmLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cbiAgICAmLmhvdmVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IGFkanVzdFB4KDZweCkgc29saWQgJG9yYW5nZTtcbiAgICB9XG4gICAgJi5hY3RpdmUuaG92ZXIge1xuICAgICAgY29sb3I6ICRvcmFuZ2U7XG4gICAgfVxuICAgIC5uYXZBY3RpdmUgPiAmIHtcbiAgICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAkb3JhbmdlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJGhkOiAxMjgwcHg7XG4kaGQtcmVhZHktMTM2NjogMTM2NnB4O1xuJGhkLXJlYWR5LTE0MDA6IDE0MDBweDtcbiRoZC1yZWFkeS0xNjgwOiAxNjgwcHg7XG4kZnVsbC1oZDogMTkyMHB4O1xuJHVoZDogMzg0MHB4O1xuXG4kcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbjogMTI4MDtcbiRkZXNpZ24tZGltZW5zaW9uOiAxNzI4O1xuXG4kYXNwZWN0LXJhdGlvOiAkcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbiAvICRkZXNpZ24tZGltZW5zaW9uO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHQtYmxhY2s6ICMyMzIzMjM7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbGlnaHQtZ3JleTogIzhmOGY4ZjtcbiRncmF5OiAjNjE2MTYxO1xuJGRhcmstZ3JleTogIzM1MzUzNTtcbiRsaWdodC1waW5rOiAjRkFFMkUyO1xuJG9yYW5nZTogI2U4NzAwMDtcbiRhcHAtYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiRhcHAtcHJpbWFyeS1jb2xvcjogJHdoaXRlO1xuJGFwcC1zZWNvbmRhcnktY29sb3I6ICNmOGZmMTM7XG5cbiRzcmM6IFwiflwiO1xuXG4kaW1hZ2Utc3JjOiBcIiN7JHNyY31hc3NldHMvaW1hZ2VzXCI7XG5cbiRmb250cy1zcmM6ICcjeyRzcmN9YXNzZXRzL2ZvbnRzL1NGLVBSTy1EaXNwbGF5JztcblxuJHByaW1hcnktZm9udDogJ1NGIFBSTyBEaXNwbGF5JztcblxuJGZvbnQtYmxhY2s6ICdTRiBQUk8gRGlzcGxheSBCbGFjayc7XG4kZm9udC1ibGFja0l0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IEJsYWNrSXRhbGljJztcbiRmb250LWJvbGQ6ICdTRiBQUk8gRGlzcGxheSBCb2xkJztcbiRmb250LWJvbGRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBCb2xkSXRhbGljJztcbiRmb250LWhlYXZ5OiAnU0YgUFJPIERpc3BsYXkgSGVhdnknO1xuJGZvbnQtaGVhdnlJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBIZWF2eUl0YWxpYyc7XG4kZm9udC1saWdodDogJ1NGIFBSTyBEaXNwbGF5IExpZ2h0JztcbiRmb250LWxpZ2h0SXRhbGljOiAnU0YgUFJPIERpc3BsYXkgTGlnaHRJdGFsaWMnO1xuJGZvbnQtbWVkaXVtOiAnU0YgUFJPIERpc3BsYXkgTWVkaXVtJztcbiRmb250LW1lZGl1bUl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IE1lZGl1bUl0YWxpYyc7XG4kZm9udC1yZWd1bGFyOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhcic7XG4kZm9udC1yZWd1bGFySXRhbGljOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhckl0YWxpYyc7XG4kZm9udC1zZW1pYm9sZDogJ1NGIFBSTyBEaXNwbGF5IFNlbWlib2xkJztcbiRmb250LXNlbWlib2xkSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgU2VtaWJvbGRJdGFsaWMnO1xuJGZvbnQtdGhpbjogJ1NGIFBSTyBEaXNwbGF5IFRoaW4nO1xuJGZvbnQtdGhpbkl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFRoaW5JdGFsaWMnO1xuJGZvbnQtdWx0cmFsaWdodDogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHQnO1xuJGZvbnQtdWx0cmFsaWdodEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHRJdGFsaWMnO1xuIiwiLmhlYWRlci1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiAxNC44MTQ4MTQ4MTQ4cHg7XG4gIGNvbG9yOiAjOGY4ZjhmO1xufVxuLmhlYWRlci1uYXZfX2J0biB7XG4gIHBhZGRpbmctbGVmdDogMTUuNTU1NTU1NTU1NnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNS41NTU1NTU1NTU2cHg7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBtYXJnaW4tdG9wOiA0OC4xNDgxNDgxNDgxcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI2LjY2NjY2NjY2NjdweDtcbiAgbGluZS1oZWlnaHQ6IDMxLjg1MTg1MTg1MTlweDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJvcmRlci1yYWRpdXM6IDQuNDQ0NDQ0NDQ0NHB4O1xufVxuLmhlYWRlci1uYXZfX2J0bi5hY3RpdmUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5oZWFkZXItbmF2X19idG4uaG92ZXIge1xuICBib3JkZXItYm90dG9tOiA0LjQ0NDQ0NDQ0NDRweCBzb2xpZCAjZTg3MDAwO1xufVxuLmhlYWRlci1uYXZfX2J0bi5hY3RpdmUuaG92ZXIge1xuICBjb2xvcjogI2U4NzAwMDtcbn1cbi5uYXZBY3RpdmUgPiAuaGVhZGVyLW5hdl9fYnRuIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4ubmF2QWN0aXZlID4gLmhlYWRlci1uYXZfX2J0bi5hY3RpdmUge1xuICBjb2xvcjogI2U4NzAwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/header-nav/header-nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/header-nav/header-nav.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderNavComponent", function() { return HeaderNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-paths */ "./src/app/app-paths.ts");



var HeaderNavComponent = /** @class */ (function () {
    function HeaderNavComponent() {
        this.HOME_ROUTE = _app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].HOME;
        this.CATEGORIES_ROUTE = _app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].CATEGORIES;
        this.FAVOURITES_ROUTE = _app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].FAVOURITES;
        this.isFocused = false;
    }
    HeaderNavComponent.prototype.ngOnInit = function () {
    };
    HeaderNavComponent.prototype.activateNav = function (isFocused) {
        var _this = this;
        if (isFocused === void 0) { isFocused = true; }
        setTimeout(function () { return _this.isFocused = isFocused; }, 0);
    };
    HeaderNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'header-nav',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header-nav/header-nav.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-nav.component.scss */ "./src/app/header-nav/header-nav.component.scss")).default]
        })
    ], HeaderNavComponent);
    return HeaderNavComponent;
}());



/***/ }),

/***/ "./src/app/pages/categories/categories.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/categories/categories.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,\nbody {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n}\n\nbody {\n  line-height: 1;\n  transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-perspective: 1000;\n  perspective: 1000;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background-color: #262626;\n  color: #ffffff;\n  font-size: 21px;\n  font-family: \"SF PRO Display Regular\", \"Arial\", sans-serif;\n}\n\n@media (min-width: 1366px) {\n  body {\n    zoom: 1.0671875;\n  }\n}\n\n@media (min-width: 1400px) {\n  body {\n    zoom: 1.09375;\n  }\n}\n\n@media (min-width: 1680px) {\n  body {\n    zoom: 1.3125;\n  }\n}\n\n@media (min-width: 1920px) {\n  body {\n    zoom: 1.5;\n  }\n}\n\n@media (min-width: 3840px) {\n  body {\n    zoom: 3;\n  }\n}\n\nmain * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\na {\n  display: inline-block;\n  outline: none;\n  color: #fff;\n  text-decoration: none;\n}\n\n.clearfix:before,\n.clearfix:after {\n  content: \"\";\n  display: table;\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n[hidden], .hidden {\n  display: none !important;\n}\n\n[invisible], .invisible {\n  visibility: hidden !important;\n}\n\n.categories {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n}\n\n.categories__filter {\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.45);\n  -webkit-backdrop-filter: blur(3.7037037037px);\n  backdrop-filter: blur(3.7037037037px);\n}\n\n.categories__back-to-categories {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 59.2592592593px;\n  background-image: url('assets/images/arrow-top.png');\n  background-repeat: no-repeat;\n  background-position: 50% 13.3333333333px;\n}\n\n.categories__back-to-categories.hover {\n  height: 88.8888888889px;\n}\n\n.categories__back-to-categories__text {\n  margin-top: 40.7407407407px;\n  font-family: \"SF PRO Display\";\n  font-weight: bold;\n  font-size: 26.6666666667px;\n  line-height: 31.8518518519px;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3R5bGVzL19nZW5lcmFsLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3R5bGVzL192YXJzLnNjc3MiLCIvVXNlcnMvc2VteW9uL2ZpdG5lc3MtYXBwL3NyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbXlvbi9maXRuZXNzLWFwcC9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUVFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFFQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7R0FBQSxxQkFBQTtPQUFBLGlCQUFBO0FDSEY7O0FETUE7RUFzQkUsY0FBQTtFQUVBLHFCQUFBO0VBQ0EsNkJBQUE7RUFFQSxtQ0FBQTtFQUNBLDJCQUFBO0VBRUEseUJBQUE7RUFDQSxpQkFBQTtFQUVBLGdDQUFBO0VBQ0Esd0JBQUE7RUFFQSx5QkU5QnFCO0VGK0JyQixjRXZDTTtFRnlDTixlQUFBO0VBQ0EsMERBQUE7QUM5QkY7O0FEUkU7RUFGRjtJQUdJLGVBQUE7RUNXRjtBQUNGOztBRFRFO0VBTkY7SUFPSSxhQUFBO0VDWUY7QUFDRjs7QURWRTtFQVZGO0lBV0ksWUFBQTtFQ2FGO0FBQ0Y7O0FEWEU7RUFkRjtJQWVJLFNBQUE7RUNjRjtBQUNGOztBRFpFO0VBbEJGO0lBbUJJLE9BQUE7RUNlRjtBQUNGOztBRFFBO0VBQ0UsOEJBQUE7VUFBQSxzQkFBQTtBQ0xGOztBRFFBO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDTEY7O0FEUUE7O0VBRUUsV0FBQTtFQUNBLGNBQUE7QUNMRjs7QURRQTtFQUNFLFdBQUE7QUNMRjs7QURRQTtFQUNFLHdCQUFBO0FDTEY7O0FEUUE7RUFDRSw2QkFBQTtBQ0xGOztBRXpFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUY0RUY7O0FFMUVFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQzBCQSw2Q0FBQTtFQUNBLHFDQUFBO0FIbURKOztBRTFFRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUVBQUE7RUFDQSw0QkFBQTtFQUNBLHdDQUFBO0FGNEVKOztBRTNFSTtFQUNFLHVCQUFBO0FGNkVOOztBRTNFSTtFQUNFLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjRHRCRTtBRG1HUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcnMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmJvZHkge1xuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkaGQtcmVhZHktMTM2Nikge1xuICAgIHpvb206IGNhbGNab29tKCRoZC1yZWFkeS0xMzY2KTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkaGQtcmVhZHktMTQwMCkge1xuICAgIHpvb206IGNhbGNab29tKCRoZC1yZWFkeS0xNDAwKTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkaGQtcmVhZHktMTY4MCkge1xuICAgIHpvb206IGNhbGNab29tKCRoZC1yZWFkeS0xNjgwKTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkZnVsbC1oZCkge1xuICAgIHpvb206IGNhbGNab29tKCRmdWxsLWhkKTtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOiAkdWhkKSB7XG4gICAgem9vbTogY2FsY1pvb20oJHVoZCk7XG4gIH1cblxuICBsaW5lLWhlaWdodDogMTtcblxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG5cbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMDtcbiAgcGVyc3BlY3RpdmU6IDEwMDA7XG5cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXBwLWJhY2tncm91bmQtY29sb3I7XG4gIGNvbG9yOiAkYXBwLXByaW1hcnktY29sb3I7XG5cbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LWZhbWlseTogJGZvbnQtcmVndWxhciwgJ0FyaWFsJywgc2Fucy1zZXJpZjtcbn1cblxubWFpbiAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNsZWFyZml4OmJlZm9yZSxcbi5jbGVhcmZpeDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuW2hpZGRlbl0sIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbltpbnZpc2libGVdLCAuaW52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG4iLCJodG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTAwMDtcbiAgcGVyc3BlY3RpdmU6IDEwMDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5IFJlZ3VsYXJcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDEzNjZweCkge1xuICBib2R5IHtcbiAgICB6b29tOiAxLjA2NzE4NzU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgYm9keSB7XG4gICAgem9vbTogMS4wOTM3NTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE2ODBweCkge1xuICBib2R5IHtcbiAgICB6b29tOiAxLjMxMjU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxOTIwcHgpIHtcbiAgYm9keSB7XG4gICAgem9vbTogMS41O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzg0MHB4KSB7XG4gIGJvZHkge1xuICAgIHpvb206IDM7XG4gIH1cbn1cblxubWFpbiAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmNsZWFyZml4OmJlZm9yZSxcbi5jbGVhcmZpeDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uY2xlYXJmaXg6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuW2hpZGRlbl0sIC5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbltpbnZpc2libGVdLCAuaW52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5jYXRlZ29yaWVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5jYXRlZ29yaWVzX19maWx0ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigzLjcwMzcwMzcwMzdweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzLjcwMzcwMzcwMzdweCk7XG59XG4uY2F0ZWdvcmllc19fYmFjay10by1jYXRlZ29yaWVzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1OS4yNTkyNTkyNTkzcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCh+YXNzZXRzL2ltYWdlcy9hcnJvdy10b3AucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDEzLjMzMzMzMzMzMzNweDtcbn1cbi5jYXRlZ29yaWVzX19iYWNrLXRvLWNhdGVnb3JpZXMuaG92ZXIge1xuICBoZWlnaHQ6IDg4Ljg4ODg4ODg4ODlweDtcbn1cbi5jYXRlZ29yaWVzX19iYWNrLXRvLWNhdGVnb3JpZXNfX3RleHQge1xuICBtYXJnaW4tdG9wOiA0MC43NDA3NDA3NDA3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI2LjY2NjY2NjY2NjdweDtcbiAgbGluZS1oZWlnaHQ6IDMxLjg1MTg1MTg1MTlweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59IiwiJGhkOiAxMjgwcHg7XG4kaGQtcmVhZHktMTM2NjogMTM2NnB4O1xuJGhkLXJlYWR5LTE0MDA6IDE0MDBweDtcbiRoZC1yZWFkeS0xNjgwOiAxNjgwcHg7XG4kZnVsbC1oZDogMTkyMHB4O1xuJHVoZDogMzg0MHB4O1xuXG4kcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbjogMTI4MDtcbiRkZXNpZ24tZGltZW5zaW9uOiAxNzI4O1xuXG4kYXNwZWN0LXJhdGlvOiAkcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbiAvICRkZXNpZ24tZGltZW5zaW9uO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHQtYmxhY2s6ICMyMzIzMjM7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbGlnaHQtZ3JleTogIzhmOGY4ZjtcbiRncmF5OiAjNjE2MTYxO1xuJGRhcmstZ3JleTogIzM1MzUzNTtcbiRsaWdodC1waW5rOiAjRkFFMkUyO1xuJG9yYW5nZTogI2U4NzAwMDtcbiRhcHAtYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiRhcHAtcHJpbWFyeS1jb2xvcjogJHdoaXRlO1xuJGFwcC1zZWNvbmRhcnktY29sb3I6ICNmOGZmMTM7XG5cbiRzcmM6IFwiflwiO1xuXG4kaW1hZ2Utc3JjOiBcIiN7JHNyY31hc3NldHMvaW1hZ2VzXCI7XG5cbiRmb250cy1zcmM6ICcjeyRzcmN9YXNzZXRzL2ZvbnRzL1NGLVBSTy1EaXNwbGF5JztcblxuJHByaW1hcnktZm9udDogJ1NGIFBSTyBEaXNwbGF5JztcblxuJGZvbnQtYmxhY2s6ICdTRiBQUk8gRGlzcGxheSBCbGFjayc7XG4kZm9udC1ibGFja0l0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IEJsYWNrSXRhbGljJztcbiRmb250LWJvbGQ6ICdTRiBQUk8gRGlzcGxheSBCb2xkJztcbiRmb250LWJvbGRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBCb2xkSXRhbGljJztcbiRmb250LWhlYXZ5OiAnU0YgUFJPIERpc3BsYXkgSGVhdnknO1xuJGZvbnQtaGVhdnlJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBIZWF2eUl0YWxpYyc7XG4kZm9udC1saWdodDogJ1NGIFBSTyBEaXNwbGF5IExpZ2h0JztcbiRmb250LWxpZ2h0SXRhbGljOiAnU0YgUFJPIERpc3BsYXkgTGlnaHRJdGFsaWMnO1xuJGZvbnQtbWVkaXVtOiAnU0YgUFJPIERpc3BsYXkgTWVkaXVtJztcbiRmb250LW1lZGl1bUl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IE1lZGl1bUl0YWxpYyc7XG4kZm9udC1yZWd1bGFyOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhcic7XG4kZm9udC1yZWd1bGFySXRhbGljOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhckl0YWxpYyc7XG4kZm9udC1zZW1pYm9sZDogJ1NGIFBSTyBEaXNwbGF5IFNlbWlib2xkJztcbiRmb250LXNlbWlib2xkSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgU2VtaWJvbGRJdGFsaWMnO1xuJGZvbnQtdGhpbjogJ1NGIFBSTyBEaXNwbGF5IFRoaW4nO1xuJGZvbnQtdGhpbkl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFRoaW5JdGFsaWMnO1xuJGZvbnQtdWx0cmFsaWdodDogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHQnO1xuJGZvbnQtdWx0cmFsaWdodEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHRJdGFsaWMnO1xuIiwiQGltcG9ydCBcInN0eWxlcy92YXJzXCI7XG5AaW1wb3J0IFwic3R5bGVzL21peGluc1wiO1xuQGltcG9ydCBcInN0eWxlcy9nZW5lcmFsXCI7XG5cblxuLmNhdGVnb3JpZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICZfX2ZpbHRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gICAgQGluY2x1ZGUgYmFja2Ryb3AtZmlsdGVyLWJsdXIoYWRqdXN0UHgoNXB4KSk7XG4gIH1cblxuICAmX19iYWNrLXRvLWNhdGVnb3JpZXMge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYWRqdXN0UHgoODBweCk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCN7JGltYWdlLXNyY30vYXJyb3ctdG9wLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgYWRqdXN0UHgoMThweCk7XG4gICAgJi5ob3ZlciB7XG4gICAgICBoZWlnaHQ6IGFkanVzdFB4KDEyMHB4KTtcbiAgICB9XG4gICAgJl9fdGV4dCB7XG4gICAgICBtYXJnaW4tdG9wOiBhZGp1c3RQeCg1NXB4KTtcbiAgICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IGFkanVzdFB4KDM2cHgpO1xuICAgICAgbGluZS1oZWlnaHQ6IGFkanVzdFB4KDQzcHgpO1xuICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcnMnO1xuXG5AbWl4aW4gdmFsaWduIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG5AbWl4aW4gaGFsaWduIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuQG1peGluIGh2YWxpZ24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbkBtaXhpbiB0cmFuc2Zvcm0oJHRyYW5zZm9ybXMpIHtcblx0LXdlYmtpdC10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbW96LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tcy10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHR0cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkdmFsdWUpIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAkdmFsdWU7XG4gIC1tb3otYm94LXNoYWRvdzogJHZhbHVlO1xuICBib3gtc2hhZG93OiAkdmFsdWU7XG59XG5cbkBtaXhpbiBza2V3ICgkeCwgJHkpIHtcblx0QGluY2x1ZGUgdHJhbnNmb3JtKHNrZXcoI3skeH1kZWcsICN7JHl9ZGVnKSk7XG59XG5cbkBtaXhpbiBiYWNrZHJvcC1maWx0ZXItYmx1cigkdmFsdWUpIHtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigkdmFsdWUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigkdmFsdWUpO1xufVxuXG5AbWl4aW4gYmFjay1idG4tcG9zaXRpb24ge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogYWRqdXN0UHgoNDRweCkgYWRqdXN0UHgoNDRweCk7XG59XG5cbkBmdW5jdGlvbiBhZGp1c3RQeCgkcHgpIHtcbiAgICBAcmV0dXJuICRhc3BlY3QtcmF0aW8gKiAkcHg7XG59XG5cbkBmdW5jdGlvbiBjYWxjWm9vbSgkc2NyZWVuLXJlc29sdXRpb24pIHtcbiAgICBAcmV0dXJuICRzY3JlZW4tcmVzb2x1dGlvbi8kaGQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/categories/categories.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/categories/categories.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/tag.model */ "./src/app/shared/models/tag.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/youtube-gateway.service */ "./src/app/services/youtube-gateway.service.ts");
/* harmony import */ var _app_paths__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app-paths */ "./src/app/app-paths.ts");







var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(videoService, route, router, youtubeGatewayService) {
        this.videoService = videoService;
        this.route = route;
        this.router = router;
        this.youtubeGatewayService = youtubeGatewayService;
        this.isFocusBtnBack = false;
        this.currentComponentName = 'Categories';
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.activeTag = params.tag;
                this.activeVideo = this.youtubeGatewayService.getVideoById(params.id);
                return [2 /*return*/];
            });
        }); });
    };
    CategoriesComponent.prototype.getBackgroundPoster = function (video, componentName) {
        if (componentName === void 0) { componentName = this.currentComponentName; }
        return this.videoService.getVideoPoster(video, componentName);
    };
    CategoriesComponent.prototype.getTagColor = function (tag) {
        if (!!tag) {
            return _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_3__["TagsColors"][tag];
        }
    };
    CategoriesComponent.prototype.setFocusBtnBack = function () {
        this.isFocusBtnBack = true;
    };
    CategoriesComponent.prototype.setUnfocusBtnBack = function () {
        this.isFocusBtnBack = false;
    };
    CategoriesComponent.prototype.back = function () {
        this.activeVideo = undefined;
        this.router.navigate(["/" + _app_paths__WEBPACK_IMPORTED_MODULE_6__["AppPaths"].CATEGORIES]);
    };
    CategoriesComponent.ctorParameters = function () { return [
        { type: _services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_5__["YoutubeGatewayService"] }
    ]; };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'categories',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/categories.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories.component.scss */ "./src/app/pages/categories/categories.component.scss")).default]
        })
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/pages/categories/category-details/category-details.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/categories/category-details/category-details.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".category-details {\n  position: fixed;\n  z-index: 1;\n  height: 540px;\n  width: 147.4074074074px;\n  top: 332.5925925926px;\n  left: 42.962962963px;\n}\n.category-details__title {\n  width: 592.5925925926px;\n  height: 56.2962962963px;\n  font-family: \"SF PRO Display\";\n  font-weight: bold;\n  font-size: 47.4074074074px;\n  line-height: 56.2962962963px;\n}\n.category-details__description {\n  width: 513.3333333333px;\n  height: 94.8148148148px;\n  margin-top: 29.6296296296px;\n  overflow: hidden;\n  font-family: \"SF PRO Display\";\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 23.7037037037px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC9wYWdlcy9jYXRlZ29yaWVzL2NhdGVnb3J5LWRldGFpbHMvY2F0ZWdvcnktZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2F0ZWdvcmllcy9jYXRlZ29yeS1kZXRhaWxzL2NhdGVnb3J5LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VteW9uL2ZpdG5lc3MtYXBwL3N0eWxlcy9fdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDRkY7QURHRTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkVpQlc7RUZoQlgsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDREo7QURJRTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJFTVc7RUZMWCxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpZXMvY2F0ZWdvcnktZGV0YWlscy9jYXRlZ29yeS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy92YXJzXCI7XG5AaW1wb3J0IFwic3R5bGVzL21peGluc1wiO1xuXG4uY2F0ZWdvcnktZGV0YWlscyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiBhZGp1c3RQeCg3MjlweCk7XG4gIHdpZHRoOiBhZGp1c3RQeCgxOTlweCk7XG4gIHRvcDogYWRqdXN0UHgoNDQ5cHgpO1xuICBsZWZ0OiBhZGp1c3RQeCg1OHB4KTtcbiAgJl9fdGl0bGUge1xuICAgIHdpZHRoOiBhZGp1c3RQeCg4MDBweCk7XG4gICAgaGVpZ2h0OiBhZGp1c3RQeCg3NnB4KTtcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IGFkanVzdFB4KDY0cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiBhZGp1c3RQeCg3NnB4KTtcbiAgfVxuXG4gICZfX2Rlc2NyaXB0aW9uIHtcbiAgICB3aWR0aDogYWRqdXN0UHgoNjkzcHgpO1xuICAgIGhlaWdodDogYWRqdXN0UHgoMTI4cHgpO1xuICAgIG1hcmdpbi10b3A6IGFkanVzdFB4KDQwcHgpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IGFkanVzdFB4KDI3cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiBhZGp1c3RQeCgzMnB4KTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cbn1cbiIsIi5jYXRlZ29yeS1kZXRhaWxzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDU0MHB4O1xuICB3aWR0aDogMTQ3LjQwNzQwNzQwNzRweDtcbiAgdG9wOiAzMzIuNTkyNTkyNTkyNnB4O1xuICBsZWZ0OiA0Mi45NjI5NjI5NjNweDtcbn1cbi5jYXRlZ29yeS1kZXRhaWxzX190aXRsZSB7XG4gIHdpZHRoOiA1OTIuNTkyNTkyNTkyNnB4O1xuICBoZWlnaHQ6IDU2LjI5NjI5NjI5NjNweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUFJPIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDcuNDA3NDA3NDA3NHB4O1xuICBsaW5lLWhlaWdodDogNTYuMjk2Mjk2Mjk2M3B4O1xufVxuLmNhdGVnb3J5LWRldGFpbHNfX2Rlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDUxMy4zMzMzMzMzMzMzcHg7XG4gIGhlaWdodDogOTQuODE0ODE0ODE0OHB4O1xuICBtYXJnaW4tdG9wOiAyOS42Mjk2Mjk2Mjk2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIzLjcwMzcwMzcwMzdweDtcbiAgb3BhY2l0eTogMC41O1xufSIsIiRoZDogMTI4MHB4O1xuJGhkLXJlYWR5LTEzNjY6IDEzNjZweDtcbiRoZC1yZWFkeS0xNDAwOiAxNDAwcHg7XG4kaGQtcmVhZHktMTY4MDogMTY4MHB4O1xuJGZ1bGwtaGQ6IDE5MjBweDtcbiR1aGQ6IDM4NDBweDtcblxuJHByb2dyYW1tYWJsZS1kaW1lbnNpb246IDEyODA7XG4kZGVzaWduLWRpbWVuc2lvbjogMTcyODtcblxuJGFzcGVjdC1yYXRpbzogJHByb2dyYW1tYWJsZS1kaW1lbnNpb24gLyAkZGVzaWduLWRpbWVuc2lvbjtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGxpZ2h0LWJsYWNrOiAjMjMyMzIzO1xuJGJsYWNrOiAjMDAwMDAwO1xuJGxpZ2h0LWdyZXk6ICM4ZjhmOGY7XG4kZ3JheTogIzYxNjE2MTtcbiRkYXJrLWdyZXk6ICMzNTM1MzU7XG4kbGlnaHQtcGluazogI0ZBRTJFMjtcbiRvcmFuZ2U6ICNlODcwMDA7XG4kYXBwLWJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4kYXBwLXByaW1hcnktY29sb3I6ICR3aGl0ZTtcbiRhcHAtc2Vjb25kYXJ5LWNvbG9yOiAjZjhmZjEzO1xuXG4kc3JjOiBcIn5cIjtcblxuJGltYWdlLXNyYzogXCIjeyRzcmN9YXNzZXRzL2ltYWdlc1wiO1xuXG4kZm9udHMtc3JjOiAnI3skc3JjfWFzc2V0cy9mb250cy9TRi1QUk8tRGlzcGxheSc7XG5cbiRwcmltYXJ5LWZvbnQ6ICdTRiBQUk8gRGlzcGxheSc7XG5cbiRmb250LWJsYWNrOiAnU0YgUFJPIERpc3BsYXkgQmxhY2snO1xuJGZvbnQtYmxhY2tJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBCbGFja0l0YWxpYyc7XG4kZm9udC1ib2xkOiAnU0YgUFJPIERpc3BsYXkgQm9sZCc7XG4kZm9udC1ib2xkSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgQm9sZEl0YWxpYyc7XG4kZm9udC1oZWF2eTogJ1NGIFBSTyBEaXNwbGF5IEhlYXZ5JztcbiRmb250LWhlYXZ5SXRhbGljOiAnU0YgUFJPIERpc3BsYXkgSGVhdnlJdGFsaWMnO1xuJGZvbnQtbGlnaHQ6ICdTRiBQUk8gRGlzcGxheSBMaWdodCc7XG4kZm9udC1saWdodEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IExpZ2h0SXRhbGljJztcbiRmb250LW1lZGl1bTogJ1NGIFBSTyBEaXNwbGF5IE1lZGl1bSc7XG4kZm9udC1tZWRpdW1JdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBNZWRpdW1JdGFsaWMnO1xuJGZvbnQtcmVndWxhcjogJ1NGIFBSTyBEaXNwbGF5IFJlZ3VsYXInO1xuJGZvbnQtcmVndWxhckl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFJlZ3VsYXJJdGFsaWMnO1xuJGZvbnQtc2VtaWJvbGQ6ICdTRiBQUk8gRGlzcGxheSBTZW1pYm9sZCc7XG4kZm9udC1zZW1pYm9sZEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFNlbWlib2xkSXRhbGljJztcbiRmb250LXRoaW46ICdTRiBQUk8gRGlzcGxheSBUaGluJztcbiRmb250LXRoaW5JdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBUaGluSXRhbGljJztcbiRmb250LXVsdHJhbGlnaHQ6ICdTRiBQUk8gRGlzcGxheSBVbHRyYWxpZ2h0JztcbiRmb250LXVsdHJhbGlnaHRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBVbHRyYWxpZ2h0SXRhbGljJztcbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/categories/category-details/category-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/categories/category-details/category-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CategoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetailsComponent", function() { return CategoryDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/models/tag.model */ "./src/app/shared/models/tag.model.ts");



var CategoryDetailsComponent = /** @class */ (function () {
    function CategoryDetailsComponent() {
    }
    CategoryDetailsComponent.prototype.ngOnInit = function () {
    };
    CategoryDetailsComponent.prototype.getTagDescription = function (tag) {
        return _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_2__["CategoryDetail"][tag];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CategoryDetailsComponent.prototype, "activeTag", void 0);
    CategoryDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'category-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categories/category-details/category-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-details.component.scss */ "./src/app/pages/categories/category-details/category-details.component.scss")).default]
        })
    ], CategoryDetailsComponent);
    return CategoryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/error/error.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/error/error.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-image: url('assets/images/error-page.png');\n  background-size: cover;\n}\n.error__title {\n  position: relative;\n  left: 69.6296296296px;\n  top: 162.2222222222px;\n  font-family: \"SF PRO Display\";\n  font-weight: 600;\n  font-size: 47.4074074074px;\n  line-height: 56.2962962963px;\n  color: #ffffff;\n}\n.error__description {\n  position: relative;\n  width: 597.037037037px;\n  height: 124.4444444444px;\n  left: 69.6296296296px;\n  top: 195.5555555556px;\n  font-family: \"SF PRO Display\";\n  font-size: 25.9259259259px;\n  line-height: 31.1111111111px;\n  color: #ffffff;\n  opacity: 0.5;\n}\n.error__try-again-btn {\n  position: relative;\n  padding: 19.2592592593px 47.4074074074px;\n  width: 238.5185185185px;\n  height: 70.3703703704px;\n  left: 69.6296296296px;\n  top: 263.7037037037px;\n  background: #e87000;\n  -webkit-border-radius: 51.1111111111px;\n          border-radius: 51.1111111111px;\n  font-family: \"SF PRO Display\";\n  font-weight: bold;\n  font-size: 26.6666666667px;\n  line-height: 31.8518518519px;\n  text-align: center;\n  color: #ffffff;\n}\n.error__try-again-btn.hover {\n  background: #616161;\n}\n.lds-roller {\n  position: relative;\n  margin-top: 192.5925925926px;\n  margin-left: 336.2962962963px;\n  width: 54.0740740741px;\n  height: 54.0740740741px;\n}\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  -webkit-transform-origin: 40px 40px;\n          transform-origin: 40px 40px;\n}\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n  background: #fff;\n  margin: -4px 0 0 -4px;\n}\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n.lds-roller div:nth-child(1):after {\n  top: 63px;\n  left: 63px;\n}\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n.lds-roller div:nth-child(2):after {\n  top: 68px;\n  left: 56px;\n}\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n.lds-roller div:nth-child(3):after {\n  top: 71px;\n  left: 48px;\n}\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n.lds-roller div:nth-child(4):after {\n  top: 72px;\n  left: 40px;\n}\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n.lds-roller div:nth-child(5):after {\n  top: 71px;\n  left: 32px;\n}\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n.lds-roller div:nth-child(6):after {\n  top: 68px;\n  left: 24px;\n}\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n.lds-roller div:nth-child(7):after {\n  top: 63px;\n  left: 17px;\n}\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n.lds-roller div:nth-child(8):after {\n  top: 56px;\n  left: 12px;\n}\n@-webkit-keyframes lds-roller {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes lds-roller {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC9wYWdlcy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXJyb3IvZXJyb3IuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VteW9uL2ZpdG5lc3MtYXBwL3N0eWxlcy9fdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBFQUFBO0VBQ0Esc0JBQUE7QUNGRjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJFaUJXO0VGaEJYLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNFTEk7QURJUjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLDZCRUtXO0VGSlgsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGNFaEJJO0VGaUJKLFlBQUE7QUNESjtBREdFO0VBQ0Usa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJFbkJLO0VGb0JMLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSw2QkVWVztFRldYLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0VqQ0k7QURnQ1I7QURFSTtFQUNFLG1CRS9CQztBRCtCUDtBREtBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0ZGO0FESUE7RUFDRSx3RUFBQTtVQUFBLGdFQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0RGO0FER0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtVQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0FGO0FERUE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDQ0Y7QURDQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDRUY7QURBQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNHRjtBRERBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNJRjtBREZBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ0tGO0FESEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ01GO0FESkE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDT0Y7QURMQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDUUY7QUROQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNTRjtBRFBBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNVRjtBRFJBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQ1dGO0FEVEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ1lGO0FEVkE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FDYUY7QURYQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDY0Y7QURaQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUNlRjtBRGJBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUNnQkY7QURkQTtFQUNFO0lBQ0UsK0JBQUE7WUFBQSx1QkFBQTtFQ2lCRjtFRGZBO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQ2lCRjtBQUNGO0FEdkJBO0VBQ0U7SUFDRSwrQkFBQTtZQUFBLHVCQUFBO0VDaUJGO0VEZkE7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VDaUJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvdmFyc1wiO1xuQGltcG9ydCBcInN0eWxlcy9taXhpbnNcIjtcblxuLmVycm9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoI3skaW1hZ2Utc3JjfS9lcnJvci1wYWdlLnBuZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICZfX3RpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogYWRqdXN0UHgoOTRweCk7XG4gICAgdG9wOiBhZGp1c3RQeCgyMTlweCk7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IGFkanVzdFB4KDY0cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiBhZGp1c3RQeCg3NnB4KTtcbiAgICBjb2xvcjogJHdoaXRlO1xuICB9XG4gICZfX2Rlc2NyaXB0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IGFkanVzdFB4KDgwNnB4KTtcbiAgICBoZWlnaHQ6IGFkanVzdFB4KDE2OHB4KTtcbiAgICBsZWZ0OiBhZGp1c3RQeCg5NHB4KTtcbiAgICB0b3A6IGFkanVzdFB4KDI2NHB4KTtcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcbiAgICBmb250LXNpemU6IGFkanVzdFB4KDM1cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiBhZGp1c3RQeCg0MnB4KTtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICAmX190cnktYWdhaW4tYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogYWRqdXN0UHgoMjZweCkgYWRqdXN0UHgoNjRweCk7XG4gICAgd2lkdGg6IGFkanVzdFB4KDMyMnB4KTtcbiAgICBoZWlnaHQ6IGFkanVzdFB4KDk1cHgpO1xuICAgIGxlZnQ6IGFkanVzdFB4KDk0cHgpO1xuICAgIHRvcDogYWRqdXN0UHgoMzU2cHgpO1xuICAgIGJhY2tncm91bmQ6ICRvcmFuZ2U7XG4gICAgYm9yZGVyLXJhZGl1czogYWRqdXN0UHgoNjlweCk7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiBhZGp1c3RQeCgzNnB4KTtcbiAgICBsaW5lLWhlaWdodDogYWRqdXN0UHgoNDNweCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgJi5ob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZ3JheTtcbiAgICB9XG4gIH1cbn1cblxuLmxkcy1yb2xsZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IGFkanVzdFB4KDI2MHB4KTtcbiAgbWFyZ2luLWxlZnQ6IGFkanVzdFB4KDQ1NHB4KTtcbiAgd2lkdGg6IGFkanVzdFB4KDczcHgpO1xuICBoZWlnaHQ6IGFkanVzdFB4KDczcHgpO1xufVxuLmxkcy1yb2xsZXIgZGl2IHtcbiAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNDBweCA0MHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3cHg7XG4gIGhlaWdodDogN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogLTRweCAwIDAgLTRweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgdG9wOiA2M3B4O1xuICBsZWZ0OiA2M3B4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDU2cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gIHRvcDogNzFweDtcbiAgbGVmdDogNDhweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgdG9wOiA3MnB4O1xuICBsZWZ0OiA0MHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG4gIHRvcDogNzFweDtcbiAgbGVmdDogMzJweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgdG9wOiA2OHB4O1xuICBsZWZ0OiAyNHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuICB0b3A6IDYzcHg7XG4gIGxlZnQ6IDE3cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XG4gIHRvcDogNTZweDtcbiAgbGVmdDogMTJweDtcbn1cbkBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbiIsIi5lcnJvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKH5hc3NldHMvaW1hZ2VzL2Vycm9yLXBhZ2UucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5lcnJvcl9fdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDY5LjYyOTYyOTYyOTZweDtcbiAgdG9wOiAxNjIuMjIyMjIyMjIyMnB4O1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDQ3LjQwNzQwNzQwNzRweDtcbiAgbGluZS1oZWlnaHQ6IDU2LjI5NjI5NjI5NjNweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZXJyb3JfX2Rlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTk3LjAzNzAzNzAzN3B4O1xuICBoZWlnaHQ6IDEyNC40NDQ0NDQ0NDQ0cHg7XG4gIGxlZnQ6IDY5LjYyOTYyOTYyOTZweDtcbiAgdG9wOiAxOTUuNTU1NTU1NTU1NnB4O1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheVwiO1xuICBmb250LXNpemU6IDI1LjkyNTkyNTkyNTlweDtcbiAgbGluZS1oZWlnaHQ6IDMxLjExMTExMTExMTFweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5lcnJvcl9fdHJ5LWFnYWluLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTkuMjU5MjU5MjU5M3B4IDQ3LjQwNzQwNzQwNzRweDtcbiAgd2lkdGg6IDIzOC41MTg1MTg1MTg1cHg7XG4gIGhlaWdodDogNzAuMzcwMzcwMzcwNHB4O1xuICBsZWZ0OiA2OS42Mjk2Mjk2Mjk2cHg7XG4gIHRvcDogMjYzLjcwMzcwMzcwMzdweDtcbiAgYmFja2dyb3VuZDogI2U4NzAwMDtcbiAgYm9yZGVyLXJhZGl1czogNTEuMTExMTExMTExMXB4O1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNi42NjY2NjY2NjY3cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMS44NTE4NTE4NTE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uZXJyb3JfX3RyeS1hZ2Fpbi1idG4uaG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNjE2MTYxO1xufVxuXG4ubGRzLXJvbGxlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTkyLjU5MjU5MjU5MjZweDtcbiAgbWFyZ2luLWxlZnQ6IDMzNi4yOTYyOTYyOTYzcHg7XG4gIHdpZHRoOiA1NC4wNzQwNzQwNzQxcHg7XG4gIGhlaWdodDogNTQuMDc0MDc0MDc0MXB4O1xufVxuXG4ubGRzLXJvbGxlciBkaXYge1xuICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogN3B4O1xuICBoZWlnaHQ6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IC00cHggMCAwIC00cHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICB0b3A6IDYzcHg7XG4gIGxlZnQ6IDYzcHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjA3MnM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICB0b3A6IDY4cHg7XG4gIGxlZnQ6IDU2cHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICB0b3A6IDcxcHg7XG4gIGxlZnQ6IDQ4cHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICB0b3A6IDcycHg7XG4gIGxlZnQ6IDQwcHg7XG59XG5cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE4cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG4gIHRvcDogNzFweDtcbiAgbGVmdDogMzJweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KTphZnRlciB7XG4gIHRvcDogNjhweDtcbiAgbGVmdDogMjRweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gIHRvcDogNjNweDtcbiAgbGVmdDogMTdweDtcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjg4cztcbn1cblxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XG4gIHRvcDogNTZweDtcbiAgbGVmdDogMTJweDtcbn1cblxuQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn0iLCIkaGQ6IDEyODBweDtcbiRoZC1yZWFkeS0xMzY2OiAxMzY2cHg7XG4kaGQtcmVhZHktMTQwMDogMTQwMHB4O1xuJGhkLXJlYWR5LTE2ODA6IDE2ODBweDtcbiRmdWxsLWhkOiAxOTIwcHg7XG4kdWhkOiAzODQwcHg7XG5cbiRwcm9ncmFtbWFibGUtZGltZW5zaW9uOiAxMjgwO1xuJGRlc2lnbi1kaW1lbnNpb246IDE3Mjg7XG5cbiRhc3BlY3QtcmF0aW86ICRwcm9ncmFtbWFibGUtZGltZW5zaW9uIC8gJGRlc2lnbi1kaW1lbnNpb247XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodC1ibGFjazogIzIzMjMyMztcbiRibGFjazogIzAwMDAwMDtcbiRsaWdodC1ncmV5OiAjOGY4ZjhmO1xuJGdyYXk6ICM2MTYxNjE7XG4kZGFyay1ncmV5OiAjMzUzNTM1O1xuJGxpZ2h0LXBpbms6ICNGQUUyRTI7XG4kb3JhbmdlOiAjZTg3MDAwO1xuJGFwcC1iYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuJGFwcC1wcmltYXJ5LWNvbG9yOiAkd2hpdGU7XG4kYXBwLXNlY29uZGFyeS1jb2xvcjogI2Y4ZmYxMztcblxuJHNyYzogXCJ+XCI7XG5cbiRpbWFnZS1zcmM6IFwiI3skc3JjfWFzc2V0cy9pbWFnZXNcIjtcblxuJGZvbnRzLXNyYzogJyN7JHNyY31hc3NldHMvZm9udHMvU0YtUFJPLURpc3BsYXknO1xuXG4kcHJpbWFyeS1mb250OiAnU0YgUFJPIERpc3BsYXknO1xuXG4kZm9udC1ibGFjazogJ1NGIFBSTyBEaXNwbGF5IEJsYWNrJztcbiRmb250LWJsYWNrSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgQmxhY2tJdGFsaWMnO1xuJGZvbnQtYm9sZDogJ1NGIFBSTyBEaXNwbGF5IEJvbGQnO1xuJGZvbnQtYm9sZEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IEJvbGRJdGFsaWMnO1xuJGZvbnQtaGVhdnk6ICdTRiBQUk8gRGlzcGxheSBIZWF2eSc7XG4kZm9udC1oZWF2eUl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IEhlYXZ5SXRhbGljJztcbiRmb250LWxpZ2h0OiAnU0YgUFJPIERpc3BsYXkgTGlnaHQnO1xuJGZvbnQtbGlnaHRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBMaWdodEl0YWxpYyc7XG4kZm9udC1tZWRpdW06ICdTRiBQUk8gRGlzcGxheSBNZWRpdW0nO1xuJGZvbnQtbWVkaXVtSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgTWVkaXVtSXRhbGljJztcbiRmb250LXJlZ3VsYXI6ICdTRiBQUk8gRGlzcGxheSBSZWd1bGFyJztcbiRmb250LXJlZ3VsYXJJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBSZWd1bGFySXRhbGljJztcbiRmb250LXNlbWlib2xkOiAnU0YgUFJPIERpc3BsYXkgU2VtaWJvbGQnO1xuJGZvbnQtc2VtaWJvbGRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBTZW1pYm9sZEl0YWxpYyc7XG4kZm9udC10aGluOiAnU0YgUFJPIERpc3BsYXkgVGhpbic7XG4kZm9udC10aGluSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgVGhpbkl0YWxpYyc7XG4kZm9udC11bHRyYWxpZ2h0OiAnU0YgUFJPIERpc3BsYXkgVWx0cmFsaWdodCc7XG4kZm9udC11bHRyYWxpZ2h0SXRhbGljOiAnU0YgUFJPIERpc3BsYXkgVWx0cmFsaWdodEl0YWxpYyc7XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/error/error.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_app_paths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/app-paths */ "./src/app/app-paths.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(router) {
        this.router = router;
        this.HOME_ROUTE = app_app_paths__WEBPACK_IMPORTED_MODULE_2__["AppPaths"].HOME;
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent.prototype.redirectToHome = function () {
        this.router.navigate([this.HOME_ROUTE]);
    };
    ErrorComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'error',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/error/error.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.scss */ "./src/app/pages/error/error.component.scss")).default]
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/pages/favorites/favorites-carousel/favorites-carousel.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/favorites/favorites-carousel/favorites-carousel.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".favorites-carousel {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n  height: 178.5185185185px;\n  bottom: 22.2222222222px;\n  left: 44.4444444444px;\n}\n.favorites-carousel__item {\n  width: 304.4444444444px;\n  height: 163.7037037037px;\n  margin-right: 10.3703703704px;\n  float: left;\n  background: rgba(121, 121, 121, 0.5);\n  -webkit-border-radius: 5px;\n          border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLWNhcm91c2VsL2Zhdm9yaXRlcy1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy1jYXJvdXNlbC9mYXZvcml0ZXMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNGRjtBREdFO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy1jYXJvdXNlbC9mYXZvcml0ZXMtY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVzL21peGluc1wiO1xuQGltcG9ydCBcInN0eWxlcy92YXJzXCI7XG5cbi5mYXZvcml0ZXMtY2Fyb3VzZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGFkanVzdFB4KDI0MXB4KTtcbiAgYm90dG9tOiBhZGp1c3RQeCgzMHB4KTtcbiAgbGVmdDogYWRqdXN0UHgoNjBweCk7XG4gICZfX2l0ZW0ge1xuICAgIHdpZHRoOiBhZGp1c3RQeCg0MTFweCk7XG4gICAgaGVpZ2h0OiBhZGp1c3RQeCgyMjFweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiBhZGp1c3RQeCgxNHB4KTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEyMSwgMTIxLCAxMjEsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG59XG4iLCIuZmF2b3JpdGVzLWNhcm91c2VsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNzguNTE4NTE4NTE4NXB4O1xuICBib3R0b206IDIyLjIyMjIyMjIyMjJweDtcbiAgbGVmdDogNDQuNDQ0NDQ0NDQ0NHB4O1xufVxuLmZhdm9yaXRlcy1jYXJvdXNlbF9faXRlbSB7XG4gIHdpZHRoOiAzMDQuNDQ0NDQ0NDQ0NHB4O1xuICBoZWlnaHQ6IDE2My43MDM3MDM3MDM3cHg7XG4gIG1hcmdpbi1yaWdodDogMTAuMzcwMzcwMzcwNHB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogcmdiYSgxMjEsIDEyMSwgMTIxLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/favorites/favorites-carousel/favorites-carousel.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/favorites/favorites-carousel/favorites-carousel.component.ts ***!
  \************************************************************************************/
/*! exports provided: FavoritesCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesCarouselComponent", function() { return FavoritesCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavoritesCarouselComponent = /** @class */ (function () {
    function FavoritesCarouselComponent() {
    }
    FavoritesCarouselComponent.prototype.ngOnInit = function () {
    };
    FavoritesCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'favorites-carousel',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites-carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites-carousel/favorites-carousel.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites-carousel.component.scss */ "./src/app/pages/favorites/favorites-carousel/favorites-carousel.component.scss")).default]
        })
    ], FavoritesCarouselComponent);
    return FavoritesCarouselComponent;
}());



/***/ }),

/***/ "./src/app/pages/favorites/favorites-description/favorites-description.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/favorites/favorites-description/favorites-description.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".favorites-description {\n  position: fixed;\n  z-index: 1;\n  width: 807.4074074074px;\n  height: 217.7777777778px;\n  top: 262.962962963px;\n  left: 266.6666666667px;\n}\n.favorites-description__text {\n  width: 807.4074074074px;\n  height: 117.7777777778px;\n  margin-top: 0px;\n  font-family: \"SF PRO Display\";\n  font-weight: 500;\n  font-size: 32.5925925926px;\n  line-height: 39.2592592593px;\n  text-align: center;\n  color: #ffffff;\n}\n.favorites-description__find-exercise-btn {\n  width: 285.1851851852px;\n  height: 70.3703703704px;\n  margin-left: 254.8148148148px;\n  margin-top: 29.6296296296px;\n  padding: 19.2592592593px 54.8148148148px;\n  -webkit-border-radius: 51.1111111111px;\n          border-radius: 51.1111111111px;\n  background: #e87000;\n  font-family: \"SF PRO Display\";\n  font-weight: bold;\n  font-size: 26.6666666667px;\n  line-height: 31.8518518519px;\n  text-align: center;\n  color: #ffffff;\n}\n.favorites-description__find-exercise-btn.hover {\n  background: #616161;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLWRlc2NyaXB0aW9uL2Zhdm9yaXRlcy1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy1kZXNjcmlwdGlvbi9mYXZvcml0ZXMtZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VteW9uL2ZpdG5lc3MtYXBwL3N0eWxlcy9fdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQ0ZGO0FER0U7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCRWdCVztFRmZYLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0VQSTtBRE1SO0FER0U7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLHdDQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1CRVRLO0VGVUwsNkJFQ1c7RUZBWCxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGNFdEJJO0FEcUJSO0FERUk7RUFDRSxtQkVwQkM7QURvQlAiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLWRlc2NyaXB0aW9uL2Zhdm9yaXRlcy1kZXNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvdmFyc1wiO1xuQGltcG9ydCBcInN0eWxlcy9taXhpbnNcIjtcblxuLmZhdm9yaXRlcy1kZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IGFkanVzdFB4KDEwOTBweCk7XG4gIGhlaWdodDogYWRqdXN0UHgoMjk0cHgpO1xuICB0b3A6IGFkanVzdFB4KDM1NXB4KTtcbiAgbGVmdDogYWRqdXN0UHgoMzYwcHgpO1xuICAmX190ZXh0IHtcbiAgICB3aWR0aDogYWRqdXN0UHgoMTA5MHB4KTtcbiAgICBoZWlnaHQ6IGFkanVzdFB4KDE1OXB4KTtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IGFkanVzdFB4KDQ0cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiBhZGp1c3RQeCg1M3B4KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgfVxuICAmX19maW5kLWV4ZXJjaXNlLWJ0biB7XG4gICAgd2lkdGg6IGFkanVzdFB4KDM4NXB4KTtcbiAgICBoZWlnaHQ6IGFkanVzdFB4KDk1cHgpO1xuICAgIG1hcmdpbi1sZWZ0OiBhZGp1c3RQeCgzNDRweCk7XG4gICAgbWFyZ2luLXRvcDogYWRqdXN0UHgoNDBweCk7XG4gICAgcGFkZGluZzogYWRqdXN0UHgoMjZweCkgYWRqdXN0UHgoNzRweCk7XG4gICAgYm9yZGVyLXJhZGl1czogYWRqdXN0UHgoNjlweCk7XG4gICAgYmFja2dyb3VuZDogJG9yYW5nZTtcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IGFkanVzdFB4KDM2cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiBhZGp1c3RQeCg0M3B4KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICAmLmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRncmF5O1xuICAgIH1cbiAgfVxufVxuIiwiLmZhdm9yaXRlcy1kZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDgwNy40MDc0MDc0MDc0cHg7XG4gIGhlaWdodDogMjE3Ljc3Nzc3Nzc3NzhweDtcbiAgdG9wOiAyNjIuOTYyOTYyOTYzcHg7XG4gIGxlZnQ6IDI2Ni42NjY2NjY2NjY3cHg7XG59XG4uZmF2b3JpdGVzLWRlc2NyaXB0aW9uX190ZXh0IHtcbiAgd2lkdGg6IDgwNy40MDc0MDc0MDc0cHg7XG4gIGhlaWdodDogMTE3Ljc3Nzc3Nzc3NzhweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDMyLjU5MjU5MjU5MjZweDtcbiAgbGluZS1oZWlnaHQ6IDM5LjI1OTI1OTI1OTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5mYXZvcml0ZXMtZGVzY3JpcHRpb25fX2ZpbmQtZXhlcmNpc2UtYnRuIHtcbiAgd2lkdGg6IDI4NS4xODUxODUxODUycHg7XG4gIGhlaWdodDogNzAuMzcwMzcwMzcwNHB4O1xuICBtYXJnaW4tbGVmdDogMjU0LjgxNDgxNDgxNDhweDtcbiAgbWFyZ2luLXRvcDogMjkuNjI5NjI5NjI5NnB4O1xuICBwYWRkaW5nOiAxOS4yNTkyNTkyNTkzcHggNTQuODE0ODE0ODE0OHB4O1xuICBib3JkZXItcmFkaXVzOiA1MS4xMTExMTExMTExcHg7XG4gIGJhY2tncm91bmQ6ICNlODcwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI2LjY2NjY2NjY2NjdweDtcbiAgbGluZS1oZWlnaHQ6IDMxLjg1MTg1MTg1MTlweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5mYXZvcml0ZXMtZGVzY3JpcHRpb25fX2ZpbmQtZXhlcmNpc2UtYnRuLmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzYxNjE2MTtcbn0iLCIkaGQ6IDEyODBweDtcbiRoZC1yZWFkeS0xMzY2OiAxMzY2cHg7XG4kaGQtcmVhZHktMTQwMDogMTQwMHB4O1xuJGhkLXJlYWR5LTE2ODA6IDE2ODBweDtcbiRmdWxsLWhkOiAxOTIwcHg7XG4kdWhkOiAzODQwcHg7XG5cbiRwcm9ncmFtbWFibGUtZGltZW5zaW9uOiAxMjgwO1xuJGRlc2lnbi1kaW1lbnNpb246IDE3Mjg7XG5cbiRhc3BlY3QtcmF0aW86ICRwcm9ncmFtbWFibGUtZGltZW5zaW9uIC8gJGRlc2lnbi1kaW1lbnNpb247XG5cbiR3aGl0ZTogI2ZmZmZmZjtcbiRsaWdodC1ibGFjazogIzIzMjMyMztcbiRibGFjazogIzAwMDAwMDtcbiRsaWdodC1ncmV5OiAjOGY4ZjhmO1xuJGdyYXk6ICM2MTYxNjE7XG4kZGFyay1ncmV5OiAjMzUzNTM1O1xuJGxpZ2h0LXBpbms6ICNGQUUyRTI7XG4kb3JhbmdlOiAjZTg3MDAwO1xuJGFwcC1iYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xuJGFwcC1wcmltYXJ5LWNvbG9yOiAkd2hpdGU7XG4kYXBwLXNlY29uZGFyeS1jb2xvcjogI2Y4ZmYxMztcblxuJHNyYzogXCJ+XCI7XG5cbiRpbWFnZS1zcmM6IFwiI3skc3JjfWFzc2V0cy9pbWFnZXNcIjtcblxuJGZvbnRzLXNyYzogJyN7JHNyY31hc3NldHMvZm9udHMvU0YtUFJPLURpc3BsYXknO1xuXG4kcHJpbWFyeS1mb250OiAnU0YgUFJPIERpc3BsYXknO1xuXG4kZm9udC1ibGFjazogJ1NGIFBSTyBEaXNwbGF5IEJsYWNrJztcbiRmb250LWJsYWNrSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgQmxhY2tJdGFsaWMnO1xuJGZvbnQtYm9sZDogJ1NGIFBSTyBEaXNwbGF5IEJvbGQnO1xuJGZvbnQtYm9sZEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IEJvbGRJdGFsaWMnO1xuJGZvbnQtaGVhdnk6ICdTRiBQUk8gRGlzcGxheSBIZWF2eSc7XG4kZm9udC1oZWF2eUl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IEhlYXZ5SXRhbGljJztcbiRmb250LWxpZ2h0OiAnU0YgUFJPIERpc3BsYXkgTGlnaHQnO1xuJGZvbnQtbGlnaHRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBMaWdodEl0YWxpYyc7XG4kZm9udC1tZWRpdW06ICdTRiBQUk8gRGlzcGxheSBNZWRpdW0nO1xuJGZvbnQtbWVkaXVtSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgTWVkaXVtSXRhbGljJztcbiRmb250LXJlZ3VsYXI6ICdTRiBQUk8gRGlzcGxheSBSZWd1bGFyJztcbiRmb250LXJlZ3VsYXJJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBSZWd1bGFySXRhbGljJztcbiRmb250LXNlbWlib2xkOiAnU0YgUFJPIERpc3BsYXkgU2VtaWJvbGQnO1xuJGZvbnQtc2VtaWJvbGRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBTZW1pYm9sZEl0YWxpYyc7XG4kZm9udC10aGluOiAnU0YgUFJPIERpc3BsYXkgVGhpbic7XG4kZm9udC10aGluSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgVGhpbkl0YWxpYyc7XG4kZm9udC11bHRyYWxpZ2h0OiAnU0YgUFJPIERpc3BsYXkgVWx0cmFsaWdodCc7XG4kZm9udC11bHRyYWxpZ2h0SXRhbGljOiAnU0YgUFJPIERpc3BsYXkgVWx0cmFsaWdodEl0YWxpYyc7XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/favorites/favorites-description/favorites-description.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/favorites/favorites-description/favorites-description.component.ts ***!
  \******************************************************************************************/
/*! exports provided: FavoritesDescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesDescriptionComponent", function() { return FavoritesDescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app-paths */ "./src/app/app-paths.ts");




var FavoritesDescriptionComponent = /** @class */ (function () {
    function FavoritesDescriptionComponent(router) {
        this.router = router;
    }
    FavoritesDescriptionComponent.prototype.ngOnInit = function () {
    };
    FavoritesDescriptionComponent.prototype.openHomePage = function () {
        this.router.navigate([_app_paths__WEBPACK_IMPORTED_MODULE_3__["AppPaths"].HOME]);
    };
    FavoritesDescriptionComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FavoritesDescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'favorites-description',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites-description.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites-description/favorites-description.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites-description.component.scss */ "./src/app/pages/favorites/favorites-description/favorites-description.component.scss")).default]
        })
    ], FavoritesDescriptionComponent);
    return FavoritesDescriptionComponent;
}());



/***/ }),

/***/ "./src/app/pages/favorites/favorites.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/favorites/favorites.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".favorites {\n  height: 100%;\n  width: 100%;\n  background: url('https://semenone.github.io/fitness/favorites-background.png');\n  background-size: cover;\n}\n.favorites__filter {\n  height: 100%;\n  width: 100%;\n  background: rgba(45, 45, 45, 0.45);\n  -webkit-backdrop-filter: blur(3.7037037037px);\n  backdrop-filter: blur(3.7037037037px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYXZvcml0ZXMvZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbXlvbi9maXRuZXNzLWFwcC9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSw4RUFBQTtFQUNBLHNCQUFBO0FDRkY7QURHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUU0QkEsNkNBQUE7RUFDQSxxQ0FBQTtBRDVCSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVzL3ZhcnNcIjtcbkBpbXBvcnQgXCJzdHlsZXMvbWl4aW5zXCI7XG5cbi5mYXZvcml0ZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoI3skaW1hZ2Utc3JjfS9mYXZvcml0ZXMtYmFja2dyb3VuZC5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAmX19maWx0ZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDQ1LCA0NSwgNDUsIDAuNDUpO1xuICAgIEBpbmNsdWRlIGJhY2tkcm9wLWZpbHRlci1ibHVyKGFkanVzdFB4KDVweCkpXG4gIH1cbn1cbiIsIi5mYXZvcml0ZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwofmFzc2V0cy9pbWFnZXMvZmF2b3JpdGVzLWJhY2tncm91bmQucG5nKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5mYXZvcml0ZXNfX2ZpbHRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoNDUsIDQ1LCA0NSwgMC40NSk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMuNzAzNzAzNzAzN3B4KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDMuNzAzNzAzNzAzN3B4KTtcbn0iLCJAaW1wb3J0ICd2YXJzJztcblxuQG1peGluIHZhbGlnbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuQG1peGluIGhhbGlnbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbkBtaXhpbiBodmFsaWduIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0dHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJHZhbHVlKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHZhbHVlO1xuICAtbW96LWJveC1zaGFkb3c6ICR2YWx1ZTtcbiAgYm94LXNoYWRvdzogJHZhbHVlO1xufVxuXG5AbWl4aW4gc2tldyAoJHgsICR5KSB7XG5cdEBpbmNsdWRlIHRyYW5zZm9ybShza2V3KCN7JHh9ZGVnLCAjeyR5fWRlZykpO1xufVxuXG5AbWl4aW4gYmFja2Ryb3AtZmlsdGVyLWJsdXIoJHZhbHVlKSB7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoJHZhbHVlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoJHZhbHVlKTtcbn1cblxuQG1peGluIGJhY2stYnRuLXBvc2l0aW9uIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGFkanVzdFB4KDQ0cHgpIGFkanVzdFB4KDQ0cHgpO1xufVxuXG5AZnVuY3Rpb24gYWRqdXN0UHgoJHB4KSB7XG4gICAgQHJldHVybiAkYXNwZWN0LXJhdGlvICogJHB4O1xufVxuXG5AZnVuY3Rpb24gY2FsY1pvb20oJHNjcmVlbi1yZXNvbHV0aW9uKSB7XG4gICAgQHJldHVybiAkc2NyZWVuLXJlc29sdXRpb24vJGhkO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/favorites/favorites.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/favorites/favorites.component.ts ***!
  \********************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/youtube-gateway.service */ "./src/app/services/youtube-gateway.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(route, storage, videoService, youtubeGatewayService) {
        this.route = route;
        this.storage = storage;
        this.videoService = videoService;
        this.youtubeGatewayService = youtubeGatewayService;
        this.isFavoritesEmpty = this.storage.isFavoritesEmpty();
        this.currentComponentName = 'Favorites';
    }
    FavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.activeVideo = _this.youtubeGatewayService.getVideoById(params.id);
        });
    };
    FavoritesComponent.prototype.getBackgroundPoster = function (video, componentName) {
        if (componentName === void 0) { componentName = this.currentComponentName; }
        return this.videoService.getVideoPoster(video, componentName);
    };
    FavoritesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] },
        { type: _services_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"] },
        { type: _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_4__["YoutubeGatewayService"] }
    ]; };
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'favorites',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorites.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./favorites.component.scss */ "./src/app/pages/favorites/favorites.component.scss")).default]
        })
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuXG5cblxuIiwiLmhvbWUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/youtube-gateway.service */ "./src/app/services/youtube-gateway.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(videoService, route, youtubeGatewayService, appService) {
        this.videoService = videoService;
        this.route = route;
        this.youtubeGatewayService = youtubeGatewayService;
        this.appService = appService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.activeVideo = _this.youtubeGatewayService.getVideoById(params.id);
        });
    };
    HomeComponent.prototype.getBackgroundPoster = function (video, componentName) {
        if (componentName === void 0) { componentName = 'Home'; }
        return this.videoService.getVideoPoster(video, componentName);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_4__["YoutubeGatewayService"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")).default]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/preloader/preloader.component.scss":
/*!****************************************************!*\
  !*** ./src/app/preloader/preloader.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".preloader {\n  position: fixed;\n  z-index: 10;\n  height: 100%;\n  width: 100%;\n  background-color: #232323;\n}\n.preloader__title {\n  position: absolute;\n  width: 780px;\n  height: 105.9259259259px;\n  left: 320.7407407407px;\n  top: 308.8888888889px;\n  font-family: \"SF PRO Display\";\n  font-weight: bold;\n  text-align: left;\n  vertical-align: top;\n  font-size: 88.8888888889px;\n  line-height: 105.9259259259px;\n  color: #e87000;\n}\n.preloader__image {\n  position: absolute;\n  width: 222.2222222222px;\n  height: 148.1481481481px;\n  left: 600px;\n  top: 565.1851851852px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC9wcmVsb2FkZXIvcHJlbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbXlvbi9maXRuZXNzLWFwcC9zdHlsZXMvX3ZhcnMuc2NzcyIsInNyYy9hcHAvcHJlbG9hZGVyL3ByZWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkNLWTtBQ1BkO0FGR0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkNlVztFRGRYLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQ0ZLO0FDQ1Q7QUZHRTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRURKIiwiZmlsZSI6InNyYy9hcHAvcHJlbG9hZGVyL3ByZWxvYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvbWl4aW5zXCI7XG5AaW1wb3J0IFwic3R5bGVzL3ZhcnNcIjtcblxuLnByZWxvYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ibGFjaztcbiAgJl9fdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogYWRqdXN0UHgoMTA1M3B4KTtcbiAgICBoZWlnaHQ6IGFkanVzdFB4KDE0M3B4KTtcbiAgICBsZWZ0OiBhZGp1c3RQeCg0MzNweCk7XG4gICAgdG9wOiBhZGp1c3RQeCg0MTdweCk7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGZvbnQtc2l6ZTogYWRqdXN0UHgoMTIwcHgpO1xuICAgIGxpbmUtaGVpZ2h0OiBhZGp1c3RQeCgxNDNweCk7XG4gICAgY29sb3I6ICRvcmFuZ2U7XG4gIH1cbiAgJl9faW1hZ2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogYWRqdXN0UHgoMzAwcHgpO1xuICAgIGhlaWdodDogYWRqdXN0UHgoMjAwcHgpO1xuICAgIGxlZnQ6IGFkanVzdFB4KDgxMHB4KTtcbiAgICB0b3A6IGFkanVzdFB4KDc2M3B4KTtcbiAgfVxufVxuIiwiJGhkOiAxMjgwcHg7XG4kaGQtcmVhZHktMTM2NjogMTM2NnB4O1xuJGhkLXJlYWR5LTE0MDA6IDE0MDBweDtcbiRoZC1yZWFkeS0xNjgwOiAxNjgwcHg7XG4kZnVsbC1oZDogMTkyMHB4O1xuJHVoZDogMzg0MHB4O1xuXG4kcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbjogMTI4MDtcbiRkZXNpZ24tZGltZW5zaW9uOiAxNzI4O1xuXG4kYXNwZWN0LXJhdGlvOiAkcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbiAvICRkZXNpZ24tZGltZW5zaW9uO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHQtYmxhY2s6ICMyMzIzMjM7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbGlnaHQtZ3JleTogIzhmOGY4ZjtcbiRncmF5OiAjNjE2MTYxO1xuJGRhcmstZ3JleTogIzM1MzUzNTtcbiRsaWdodC1waW5rOiAjRkFFMkUyO1xuJG9yYW5nZTogI2U4NzAwMDtcbiRhcHAtYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiRhcHAtcHJpbWFyeS1jb2xvcjogJHdoaXRlO1xuJGFwcC1zZWNvbmRhcnktY29sb3I6ICNmOGZmMTM7XG5cbiRzcmM6IFwiflwiO1xuXG4kaW1hZ2Utc3JjOiBcIiN7JHNyY31hc3NldHMvaW1hZ2VzXCI7XG5cbiRmb250cy1zcmM6ICcjeyRzcmN9YXNzZXRzL2ZvbnRzL1NGLVBSTy1EaXNwbGF5JztcblxuJHByaW1hcnktZm9udDogJ1NGIFBSTyBEaXNwbGF5JztcblxuJGZvbnQtYmxhY2s6ICdTRiBQUk8gRGlzcGxheSBCbGFjayc7XG4kZm9udC1ibGFja0l0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IEJsYWNrSXRhbGljJztcbiRmb250LWJvbGQ6ICdTRiBQUk8gRGlzcGxheSBCb2xkJztcbiRmb250LWJvbGRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBCb2xkSXRhbGljJztcbiRmb250LWhlYXZ5OiAnU0YgUFJPIERpc3BsYXkgSGVhdnknO1xuJGZvbnQtaGVhdnlJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBIZWF2eUl0YWxpYyc7XG4kZm9udC1saWdodDogJ1NGIFBSTyBEaXNwbGF5IExpZ2h0JztcbiRmb250LWxpZ2h0SXRhbGljOiAnU0YgUFJPIERpc3BsYXkgTGlnaHRJdGFsaWMnO1xuJGZvbnQtbWVkaXVtOiAnU0YgUFJPIERpc3BsYXkgTWVkaXVtJztcbiRmb250LW1lZGl1bUl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IE1lZGl1bUl0YWxpYyc7XG4kZm9udC1yZWd1bGFyOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhcic7XG4kZm9udC1yZWd1bGFySXRhbGljOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhckl0YWxpYyc7XG4kZm9udC1zZW1pYm9sZDogJ1NGIFBSTyBEaXNwbGF5IFNlbWlib2xkJztcbiRmb250LXNlbWlib2xkSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgU2VtaWJvbGRJdGFsaWMnO1xuJGZvbnQtdGhpbjogJ1NGIFBSTyBEaXNwbGF5IFRoaW4nO1xuJGZvbnQtdGhpbkl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFRoaW5JdGFsaWMnO1xuJGZvbnQtdWx0cmFsaWdodDogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHQnO1xuJGZvbnQtdWx0cmFsaWdodEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHRJdGFsaWMnO1xuIiwiLnByZWxvYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzIzMjM7XG59XG4ucHJlbG9hZGVyX190aXRsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDc4MHB4O1xuICBoZWlnaHQ6IDEwNS45MjU5MjU5MjU5cHg7XG4gIGxlZnQ6IDMyMC43NDA3NDA3NDA3cHg7XG4gIHRvcDogMzA4Ljg4ODg4ODg4ODlweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUFJPIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogODguODg4ODg4ODg4OXB4O1xuICBsaW5lLWhlaWdodDogMTA1LjkyNTkyNTkyNTlweDtcbiAgY29sb3I6ICNlODcwMDA7XG59XG4ucHJlbG9hZGVyX19pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDIyMi4yMjIyMjIyMjIycHg7XG4gIGhlaWdodDogMTQ4LjE0ODE0ODE0ODFweDtcbiAgbGVmdDogNjAwcHg7XG4gIHRvcDogNTY1LjE4NTE4NTE4NTJweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/preloader/preloader.component.ts":
/*!**************************************************!*\
  !*** ./src/app/preloader/preloader.component.ts ***!
  \**************************************************/
/*! exports provided: PreloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderComponent", function() { return PreloaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreloaderComponent = /** @class */ (function () {
    function PreloaderComponent() {
        this.title = 'Stay Home Fitness';
        this.image = __webpack_require__(/*! assets/images/preloader.gif */ "./src/assets/images/preloader.gif");
    }
    PreloaderComponent.prototype.ngOnInit = function () {
    };
    PreloaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'preloader',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./preloader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/preloader/preloader.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./preloader.component.scss */ "./src/app/preloader/preloader.component.scss")).default]
        })
    ], PreloaderComponent);
    return PreloaderComponent;
}());



/***/ }),

/***/ "./src/app/services/environment.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/environment.service.ts ***!
  \*************************************************/
/*! exports provided: EnvironmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnvironmentService", function() { return EnvironmentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EnvironmentService = /** @class */ (function () {
    function EnvironmentService() {
    }
    Object.defineProperty(EnvironmentService.prototype, "baseUrl", {
        get: function () {
            return window['BASE_URL'];
        },
        enumerable: true,
        configurable: true
    });
    EnvironmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], EnvironmentService);
    return EnvironmentService;
}());



/***/ }),

/***/ "./src/app/services/http-gateway.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/http-gateway.service.ts ***!
  \**************************************************/
/*! exports provided: HttpGateway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpGateway", function() { return HttpGateway; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_environment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/environment.service */ "./src/app/services/environment.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var HttpGateway = /** @class */ (function () {
    function HttpGateway(environmentService, http) {
        this.environmentService = environmentService;
        this.http = http;
        this.BASE_URL = "" + this.environmentService.baseUrl;
    }
    HttpGateway.prototype.get = function (url, options) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            // tslint:disable-next-line: max-line-length
            Authorization: 'JWT token'
        });
        return this.makeRequest(function () { return _this.http.get("" + url, { headers: headers, responseType: 'json' }); });
    };
    HttpGateway.prototype.makeRequest = function (request, options) {
        if (options === void 0) { options = {}; }
        if (options.hasPreloader) {
            // TODO: add possibility to show preloader while the content is being fetched from the backend
        }
        return request().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            // TODO: add possibility to show preloader while the content is being fetched from the backend
        }));
    };
    HttpGateway.ctorParameters = function () { return [
        { type: app_services_environment_service__WEBPACK_IMPORTED_MODULE_2__["EnvironmentService"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    HttpGateway = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], HttpGateway);
    return HttpGateway;
}());



/***/ }),

/***/ "./src/app/services/route-events.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/route-events.service.ts ***!
  \**************************************************/
/*! exports provided: RouteEventsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteEventsService", function() { return RouteEventsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var RouteEventsService = /** @class */ (function () {
    function RouteEventsService(router) {
        this.router = router;
        this.history = [];
    }
    RouteEventsService.prototype.loadRouting = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (_a) {
            var urlAfterRedirects = _a.urlAfterRedirects;
            _this.history = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.history, [urlAfterRedirects]);
        });
    };
    RouteEventsService.prototype.getHistory = function () {
        return this.history;
    };
    RouteEventsService.prototype.getPreviousUrl = function () {
        return this.history[this.history.length - 2] || '/index';
    };
    RouteEventsService.prototype.getPrevMainUrl = function () {
        var e_1, _a;
        var mainRoute;
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.history), _c = _b.next(); !_c.done; _c = _b.next()) {
                var route = _c.value;
                if (route.split('/')[1] == 'home')
                    mainRoute = 'home';
                if (route.split('/')[1] == 'categories')
                    mainRoute = 'categories';
                else if (route.split('/')[1] == 'favorites') {
                    mainRoute = 'favorites';
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return mainRoute;
    };
    RouteEventsService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    RouteEventsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RouteEventsService);
    return RouteEventsService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService() {
        this.favoritesVideoIds = JSON.parse(localStorage.getItem('favoritesVideo')) || [];
    }
    StorageService.prototype.saveFavorite = function (id) {
        this.favoritesVideoIds.push(id);
        localStorage.setItem('favoritesVideo', JSON.stringify(this.favoritesVideoIds));
    };
    StorageService.prototype.removeFromFavorites = function (id) {
        this.favoritesVideoIds = this.favoritesVideoIds.filter(function (id) { return +id == 1; });
        localStorage.setItem('favoritesVideo', JSON.stringify(this.favoritesVideoIds));
    };
    StorageService.prototype.checkFavorite = function (id) {
        return this.favoritesVideoIds.includes(id);
    };
    StorageService.prototype.isFavoritesEmpty = function () {
        return this.favoritesVideoIds.length <= 0;
    };
    StorageService.prototype.setStoredVideoCollection = function (videosId) {
        this.storedVideoCollection = videosId;
    };
    StorageService.prototype.getStoredVideoCollection = function () {
        return this.storedVideoCollection || [];
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/services/video-adapter.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/video-adapter.service.ts ***!
  \***************************************************/
/*! exports provided: VideoAdapterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoAdapterService", function() { return VideoAdapterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VideoAdapterService = /** @class */ (function () {
    function VideoAdapterService() {
    }
    VideoAdapterService.prototype.videoConversion = function (items) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var videoList;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, items.map(function (video) { return ({
                            id: video.snippet.resourceId.videoId,
                            title: video.snippet.title,
                            description: video.snippet.description,
                            duration: '',
                            tags: [],
                            picture: {
                                medium: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, video.snippet.thumbnails.medium).url,
                                high: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, video.snippet.thumbnails.high).url,
                                standard: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, video.snippet.thumbnails.standard).url,
                                maxres: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, video.snippet.thumbnails.maxres).url,
                            },
                        }); })];
                    case 1:
                        videoList = _a.sent();
                        return [2 /*return*/, videoList];
                }
            });
        });
    };
    VideoAdapterService.prototype.durationAndTagConversation = function (json) {
        return {
            tags: json.items[0].snippet.tags,
            duration: this.formatDuration(json.items[0].contentDetails.duration),
        };
    };
    VideoAdapterService.prototype.formatDuration = function (duration) {
        return duration
            .replace('PT', '')
            .replace('M', ':')
            .replace('S', ' minutes');
    };
    VideoAdapterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], VideoAdapterService);
    return VideoAdapterService;
}());



/***/ }),

/***/ "./src/app/services/video.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/video.service.ts ***!
  \*******************************************/
/*! exports provided: VideoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoService", function() { return VideoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_shared_models_layout_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/models/layout.model */ "./src/app/shared/models/layout.model.ts");



var VideoService = /** @class */ (function () {
    function VideoService() {
    }
    VideoService.prototype.getVideoPoster = function (video, componentName) {
        if (!video) {
            return componentName == 'Favorites' ? "url(" + app_shared_models_layout_model__WEBPACK_IMPORTED_MODULE_2__["favoritesBackgroundPlaceholder"] + ")" : "url(" + app_shared_models_layout_model__WEBPACK_IMPORTED_MODULE_2__["homeBackgroundPlaceholder"] + ")";
        }
        var _a = video.picture, maxres = _a.maxres, standard = _a.standard, high = _a.high, medium = _a.medium;
        var videoBackground = maxres ? maxres :
            standard ? standard :
                high ? high :
                    medium ? medium :
                        componentName == 'Favorites' ? "url(" + app_shared_models_layout_model__WEBPACK_IMPORTED_MODULE_2__["favoritesBackgroundPlaceholder"] + ")" :
                            "url(" + app_shared_models_layout_model__WEBPACK_IMPORTED_MODULE_2__["homeBackgroundPlaceholder"] + ")";
        return "url(" + videoBackground + ")";
    };
    VideoService.prototype.getVideoTileImage = function (_a) {
        var medium = _a.picture.medium;
        var videoBackground = medium ? medium : app_shared_models_layout_model__WEBPACK_IMPORTED_MODULE_2__["homeBackgroundPlaceholder"];
        return "url(" + videoBackground + ")";
    };
    VideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/app/services/youtube-gateway.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/youtube-gateway.service.ts ***!
  \*****************************************************/
/*! exports provided: YoutubeGatewayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeGatewayService", function() { return YoutubeGatewayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _video_adapter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-adapter.service */ "./src/app/services/video-adapter.service.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");






var YoutubeGatewayService = /** @class */ (function () {
    function YoutubeGatewayService(videoService, videoAdapterService, appService) {
        this.videoService = videoService;
        this.videoAdapterService = videoAdapterService;
        this.appService = appService;
        this.youtubeApiUrl = 'https://www.googleapis.com/youtube/v3';
        this.youtubePlaylistId = 'PLco8R-Zc6LC45ZinDPA3YEss99K-vN2LZ';
        this.youtubeApiKey = 'AIzaSyD3uky03hyKTqoGp1vtupzgG2Vbsa9URAI';
        this.videoList = [];
        this.cache = {};
        this.getPlaylistVideosWithCache = this.memoization(this.getPlaylistVideos.bind(this)).bind(this);
        this.getVideoDurationWithTagsWithCache = this.memoization(this.getVideoDurationWithTags.bind(this)).bind(this);
    }
    //TODO: rebuild to optimize
    YoutubeGatewayService.prototype.getPlaylistVideos = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, _a, items, _b, i, _c, _d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        this.appService.switchPreloader(true);
                        return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.youtubeApiUrl + "/playlistItems?part=snippet&playlistId=" + this.youtubePlaylistId + "&maxResults=50&key=" + this.youtubeApiKey)];
                    case 1:
                        response = _e.sent();
                        this.appService.switchPreloader(false);
                        return [4 /*yield*/, response.data];
                    case 2:
                        _a = (_e.sent()).items, items = _a === void 0 ? [] : _a;
                        _b = this;
                        return [4 /*yield*/, this.videoAdapterService.videoConversion(items)];
                    case 3:
                        _b.videoList = _e.sent();
                        i = 0;
                        _e.label = 4;
                    case 4:
                        if (!(i < this.videoList.length)) return [3 /*break*/, 8];
                        _c = this.videoList[i];
                        return [4 /*yield*/, this.getVideoDurationWithTagsWithCache(this.videoList[i].id)];
                    case 5:
                        _c.duration = (_e.sent()).duration;
                        _d = this.videoList[i];
                        return [4 /*yield*/, this.getVideoDurationWithTagsWithCache(this.videoList[i].id)];
                    case 6:
                        _d.tags = (_e.sent()).tags;
                        _e.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 4];
                    case 8: return [2 /*return*/, this.videoList];
                }
            });
        });
    };
    YoutubeGatewayService.prototype.memoization = function (func) {
        var _this = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var n = args[0];
            if (n in _this.cache) {
                return _this.cache[n];
            }
            else {
                var result = func(n);
                _this.cache[n] = result;
                return result;
            }
        };
    };
    YoutubeGatewayService.prototype.getVideoById = function (videoId) {
        return this.videoList.find(function (_a) {
            var id = _a.id;
            return id == videoId;
        });
    };
    YoutubeGatewayService.prototype.getNextVideoById = function (videoId) {
        var nextVideoIndex = this.videoList.indexOf(this.videoList.find(function (_a) {
            var id = _a.id;
            return id == videoId;
        })) + 1;
        return this.videoList[nextVideoIndex];
    };
    YoutubeGatewayService.prototype.getVideoDurationWithTags = function (videoId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response, json;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.youtubeApiUrl + "/videos?part=snippet%2CcontentDetails&id=" + videoId + "&key=" + this.youtubeApiKey)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.data];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, this.videoAdapterService.durationAndTagConversation(json)];
                }
            });
        });
    };
    YoutubeGatewayService.ctorParameters = function () { return [
        { type: _video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"] },
        { type: _video_adapter_service__WEBPACK_IMPORTED_MODULE_4__["VideoAdapterService"] },
        { type: _app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
    ]; };
    YoutubeGatewayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], YoutubeGatewayService);
    return YoutubeGatewayService;
}());



/***/ }),

/***/ "./src/app/shared/models/layout.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/layout.model.ts ***!
  \***********************************************/
/*! exports provided: homeBackgroundPlaceholder, favoritesBackgroundPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeBackgroundPlaceholder", function() { return homeBackgroundPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoritesBackgroundPlaceholder", function() { return favoritesBackgroundPlaceholder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var homeBackgroundPlaceholder = 'assets/images/fitness-2.png';
var favoritesBackgroundPlaceholder = '';


/***/ }),

/***/ "./src/app/shared/models/tag.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/tag.model.ts ***!
  \********************************************/
/*! exports provided: TagsColors, CategoryDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsColors", function() { return TagsColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDetail", function() { return CategoryDetail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TagsColors = {
    'Full-body': '#2593E2',
    'Back': '#00984F',
    'Arms': '#DAAA00',
    'Chest': '#E22569',
    'Static': '#00ABA1',
    'Legs': '#6A67FF',
    'Cardio': '#E22525',
    'Yoga': '#62A40E',
    'Stretching': '#6A35FF',
};
var CategoryDetail = {
    'Full-body': 'You\'ll target all your muscles, including the hips, glutes, thighs, chest, back, shoulders, and arms. The workout is full of tried and true classics, from squats and lunges to pushups and more.',
    'Back': 'In order to develop a strong back, it is important to build width and thickness to this muscle. Once you get going, your posture will improve. Your back can also play a large role in boosting strength for other lifts.',
    'Arms': 'Are you looking for stronger, more defined arms — the type of arms you can show off?  If you want to add size and strength to your biceps and triceps while also building a bigger and stronger chest try these strength training arm exercises.',
    'Chest': 'These workouts hit all the right marks—without the bells and whistles of other unconventional pec moves. Put in the work, and it’ll put the finishing touches on your upper body. ',
    'Static': 'Static training occurs when the body moves very little or not at all while contracting the muscle fibers. Benefits of this form of training are increased muscular endurance, increased muscular strength, muscle building and even saving time.',
    'Legs': 'The following leg exercises were created to shred all those leg muscles through a mix of dynamic and static movements as well as constant tension. Hit your leg muscles from every angle with these targeted lower-body moves.',
    'Cardio': 'Cardio exercise means that you\'re doing a rhythmic activity that raises your heart rate into your target heart rate zone. It helps you burn fat and calories for weight loss, and makes your heart strong so that it doesn\'t have to work as hard to pump blood.',
    'Yoga': 'Yoga is an effective and exciting "Mind" and "Body" workout. It is a safe practice that will connect breath with movement. It combines aerobic and anaerobic movements, linked together in a flowing series of poses that create strength, flexibility, endurance and balance. ',
    'Stretching': 'Incorporating some stretching exercises into your workout schedule will help you improve flexibility, reduce tightness, and ultimately, make your workouts more efficient and safe.',
};


/***/ }),

/***/ "./src/app/video-carousel/video-carousel-item/video-carousel-item.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/video-carousel/video-carousel-item/video-carousel-item.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".video-carousel-item {\n  position: relative;\n  float: left;\n  width: 316.2962962963px;\n  height: 177.037037037px;\n  margin-right: 22.2222222222px;\n  -webkit-border-radius: 5.9259259259px;\n          border-radius: 5.9259259259px;\n}\n.video-carousel-item.hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1);\n}\n.video-carousel-item.hover .video-carousel-item__tag {\n  visibility: hidden;\n}\n.video-carousel-item__side-frame {\n  position: absolute;\n  width: 7.4074074074px;\n  height: 177.037037037px;\n  margin-left: -1.4814814815px;\n  -webkit-border-radius: 8px 0px 0px 8px;\n          border-radius: 8px 0px 0px 8px;\n}\n.video-carousel-item__tag {\n  width: 69.6296296296px;\n  height: 24.4444444444px;\n  margin-top: 97.7777777778px;\n  margin-left: 20px;\n  padding-top: 5.1851851852px;\n  -webkit-border-radius: 2.2222222222px;\n          border-radius: 2.2222222222px;\n  text-align: center;\n  font-family: \"SF PRO Display\";\n  font-weight: bold;\n  font-size: 11.8518518519px;\n  line-height: 14.0740740741px;\n}\n.video-carousel-item__title {\n  position: absolute;\n  width: 233.3333333333px;\n  height: 25.9259259259px;\n  top: 138.5185185185px;\n  left: 21.4814814815px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: \"SF PRO Display\";\n  font-size: 21.4814814815px;\n  line-height: 25.9259259259px;\n}\n.video-carousel-item__duration {\n  position: absolute;\n  width: 46.6666666667px;\n  height: 17.037037037px;\n  top: 144.4444444444px;\n  left: 263.7037037037px;\n  font-family: \"SF PRO Display\";\n  font-weight: 500;\n  font-size: 14.0740740741px;\n  line-height: 17.037037037px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC92aWRlby1jYXJvdXNlbC92aWRlby1jYXJvdXNlbC1pdGVtL3ZpZGVvLWNhcm91c2VsLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZGVvLWNhcm91c2VsL3ZpZGVvLWNhcm91c2VsLWl0ZW0vdmlkZW8tY2Fyb3VzZWwtaXRlbS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3R5bGVzL192YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0FDRkY7QURHRTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUNESjtBREVJO0VBQ0Usa0JBQUE7QUNBTjtBREdFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FDREo7QURJRTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkVGVztFRkdYLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQ0ZKO0FES0U7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJFakJXO0VGa0JYLDBCQUFBO0VBQ0EsNEJBQUE7QUNISjtBRE1FO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCRTVCVztFRjZCWCxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvdmlkZW8tY2Fyb3VzZWwvdmlkZW8tY2Fyb3VzZWwtaXRlbS92aWRlby1jYXJvdXNlbC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL3ZhcnMnO1xuQGltcG9ydCAnc3R5bGVzL21peGlucyc7XG5cbi52aWRlby1jYXJvdXNlbC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IGFkanVzdFB4KDQyN3B4KTtcbiAgaGVpZ2h0OiBhZGp1c3RQeCgyMzlweCk7XG4gIG1hcmdpbi1yaWdodDogYWRqdXN0UHgoMzBweCk7XG4gIGJvcmRlci1yYWRpdXM6IGFkanVzdFB4KDhweCk7XG4gICYuaG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAudmlkZW8tY2Fyb3VzZWwtaXRlbV9fdGFnIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gIH1cbiAgJl9fc2lkZS1mcmFtZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiBhZGp1c3RQeCgxMHB4KTtcbiAgICBoZWlnaHQ6IGFkanVzdFB4KDIzOXB4KTtcbiAgICBtYXJnaW4tbGVmdDogYWRqdXN0UHgoLTJweCk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4IDBweCAwcHggOHB4O1xuICB9XG5cbiAgJl9fdGFnIHtcbiAgICB3aWR0aDogYWRqdXN0UHgoOTRweCk7XG4gICAgaGVpZ2h0OiBhZGp1c3RQeCgzM3B4KTtcbiAgICBtYXJnaW4tdG9wOiBhZGp1c3RQeCgxMzJweCk7XG4gICAgbWFyZ2luLWxlZnQ6IGFkanVzdFB4KDI3cHgpO1xuICAgIHBhZGRpbmctdG9wOiBhZGp1c3RQeCg3cHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IGFkanVzdFB4KDNweCk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogYWRqdXN0UHgoMTZweCk7XG4gICAgbGluZS1oZWlnaHQ6IGFkanVzdFB4KDE5cHgpO1xuICB9XG5cbiAgJl9fdGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogYWRqdXN0UHgoMzE1cHgpO1xuICAgIGhlaWdodDogYWRqdXN0UHgoMzVweCk7XG4gICAgdG9wOiBhZGp1c3RQeCgxODdweCk7XG4gICAgbGVmdDogYWRqdXN0UHgoMjlweCk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xuICAgIGZvbnQtc2l6ZTogYWRqdXN0UHgoMjlweCk7XG4gICAgbGluZS1oZWlnaHQ6IGFkanVzdFB4KDM1cHgpO1xuICB9XG5cbiAgJl9fZHVyYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogYWRqdXN0UHgoNjNweCk7XG4gICAgaGVpZ2h0OiBhZGp1c3RQeCgyM3B4KTtcbiAgICB0b3A6IGFkanVzdFB4KDE5NXB4KTtcbiAgICBsZWZ0OiBhZGp1c3RQeCgzNTZweCk7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IGFkanVzdFB4KDE5cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiBhZGp1c3RQeCgyM3B4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG59XG5cblxuXG4iLCIudmlkZW8tY2Fyb3VzZWwtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMTYuMjk2Mjk2Mjk2M3B4O1xuICBoZWlnaHQ6IDE3Ny4wMzcwMzcwMzdweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMi4yMjIyMjIyMjIycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUuOTI1OTI1OTI1OXB4O1xufVxuLnZpZGVvLWNhcm91c2VsLWl0ZW0uaG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4udmlkZW8tY2Fyb3VzZWwtaXRlbS5ob3ZlciAudmlkZW8tY2Fyb3VzZWwtaXRlbV9fdGFnIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnZpZGVvLWNhcm91c2VsLWl0ZW1fX3NpZGUtZnJhbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA3LjQwNzQwNzQwNzRweDtcbiAgaGVpZ2h0OiAxNzcuMDM3MDM3MDM3cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMS40ODE0ODE0ODE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHggMHB4IDhweDtcbn1cbi52aWRlby1jYXJvdXNlbC1pdGVtX190YWcge1xuICB3aWR0aDogNjkuNjI5NjI5NjI5NnB4O1xuICBoZWlnaHQ6IDI0LjQ0NDQ0NDQ0NDRweDtcbiAgbWFyZ2luLXRvcDogOTcuNzc3Nzc3Nzc3OHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDUuMTg1MTg1MTg1MnB4O1xuICBib3JkZXItcmFkaXVzOiAyLjIyMjIyMjIyMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMS44NTE4NTE4NTE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNC4wNzQwNzQwNzQxcHg7XG59XG4udmlkZW8tY2Fyb3VzZWwtaXRlbV9fdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMzMuMzMzMzMzMzMzM3B4O1xuICBoZWlnaHQ6IDI1LjkyNTkyNTkyNTlweDtcbiAgdG9wOiAxMzguNTE4NTE4NTE4NXB4O1xuICBsZWZ0OiAyMS40ODE0ODE0ODE1cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheVwiO1xuICBmb250LXNpemU6IDIxLjQ4MTQ4MTQ4MTVweDtcbiAgbGluZS1oZWlnaHQ6IDI1LjkyNTkyNTkyNTlweDtcbn1cbi52aWRlby1jYXJvdXNlbC1pdGVtX19kdXJhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQ2LjY2NjY2NjY2NjdweDtcbiAgaGVpZ2h0OiAxNy4wMzcwMzcwMzdweDtcbiAgdG9wOiAxNDQuNDQ0NDQ0NDQ0NHB4O1xuICBsZWZ0OiAyNjMuNzAzNzAzNzAzN3B4O1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0LjA3NDA3NDA3NDFweDtcbiAgbGluZS1oZWlnaHQ6IDE3LjAzNzAzNzAzN3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufSIsIiRoZDogMTI4MHB4O1xuJGhkLXJlYWR5LTEzNjY6IDEzNjZweDtcbiRoZC1yZWFkeS0xNDAwOiAxNDAwcHg7XG4kaGQtcmVhZHktMTY4MDogMTY4MHB4O1xuJGZ1bGwtaGQ6IDE5MjBweDtcbiR1aGQ6IDM4NDBweDtcblxuJHByb2dyYW1tYWJsZS1kaW1lbnNpb246IDEyODA7XG4kZGVzaWduLWRpbWVuc2lvbjogMTcyODtcblxuJGFzcGVjdC1yYXRpbzogJHByb2dyYW1tYWJsZS1kaW1lbnNpb24gLyAkZGVzaWduLWRpbWVuc2lvbjtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGxpZ2h0LWJsYWNrOiAjMjMyMzIzO1xuJGJsYWNrOiAjMDAwMDAwO1xuJGxpZ2h0LWdyZXk6ICM4ZjhmOGY7XG4kZ3JheTogIzYxNjE2MTtcbiRkYXJrLWdyZXk6ICMzNTM1MzU7XG4kbGlnaHQtcGluazogI0ZBRTJFMjtcbiRvcmFuZ2U6ICNlODcwMDA7XG4kYXBwLWJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4kYXBwLXByaW1hcnktY29sb3I6ICR3aGl0ZTtcbiRhcHAtc2Vjb25kYXJ5LWNvbG9yOiAjZjhmZjEzO1xuXG4kc3JjOiBcIn5cIjtcblxuJGltYWdlLXNyYzogXCIjeyRzcmN9YXNzZXRzL2ltYWdlc1wiO1xuXG4kZm9udHMtc3JjOiAnI3skc3JjfWFzc2V0cy9mb250cy9TRi1QUk8tRGlzcGxheSc7XG5cbiRwcmltYXJ5LWZvbnQ6ICdTRiBQUk8gRGlzcGxheSc7XG5cbiRmb250LWJsYWNrOiAnU0YgUFJPIERpc3BsYXkgQmxhY2snO1xuJGZvbnQtYmxhY2tJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBCbGFja0l0YWxpYyc7XG4kZm9udC1ib2xkOiAnU0YgUFJPIERpc3BsYXkgQm9sZCc7XG4kZm9udC1ib2xkSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgQm9sZEl0YWxpYyc7XG4kZm9udC1oZWF2eTogJ1NGIFBSTyBEaXNwbGF5IEhlYXZ5JztcbiRmb250LWhlYXZ5SXRhbGljOiAnU0YgUFJPIERpc3BsYXkgSGVhdnlJdGFsaWMnO1xuJGZvbnQtbGlnaHQ6ICdTRiBQUk8gRGlzcGxheSBMaWdodCc7XG4kZm9udC1saWdodEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IExpZ2h0SXRhbGljJztcbiRmb250LW1lZGl1bTogJ1NGIFBSTyBEaXNwbGF5IE1lZGl1bSc7XG4kZm9udC1tZWRpdW1JdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBNZWRpdW1JdGFsaWMnO1xuJGZvbnQtcmVndWxhcjogJ1NGIFBSTyBEaXNwbGF5IFJlZ3VsYXInO1xuJGZvbnQtcmVndWxhckl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFJlZ3VsYXJJdGFsaWMnO1xuJGZvbnQtc2VtaWJvbGQ6ICdTRiBQUk8gRGlzcGxheSBTZW1pYm9sZCc7XG4kZm9udC1zZW1pYm9sZEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFNlbWlib2xkSXRhbGljJztcbiRmb250LXRoaW46ICdTRiBQUk8gRGlzcGxheSBUaGluJztcbiRmb250LXRoaW5JdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBUaGluSXRhbGljJztcbiRmb250LXVsdHJhbGlnaHQ6ICdTRiBQUk8gRGlzcGxheSBVbHRyYWxpZ2h0JztcbiRmb250LXVsdHJhbGlnaHRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBVbHRyYWxpZ2h0SXRhbGljJztcbiJdfQ== */");

/***/ }),

/***/ "./src/app/video-carousel/video-carousel-item/video-carousel-item.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/video-carousel/video-carousel-item/video-carousel-item.component.ts ***!
  \*************************************************************************************/
/*! exports provided: VideoCarouselItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCarouselItemComponent", function() { return VideoCarouselItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/tag.model */ "./src/app/shared/models/tag.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/youtube-gateway.service */ "./src/app/services/youtube-gateway.service.ts");






var VideoCarouselItemComponent = /** @class */ (function () {
    function VideoCarouselItemComponent(videoService, elementRef, router, youtubeGatewayService) {
        this.videoService = videoService;
        this.elementRef = elementRef;
        this.router = router;
        this.youtubeGatewayService = youtubeGatewayService;
        this.changeActiveVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.FIRST_PARAMETER_ROUTE_POS = 2;
        this.SECOND_PARAMETER_ROUTE_POS = 3;
        this.MAIN_TAG_POS = 0;
    }
    VideoCarouselItemComponent.prototype.ngOnInit = function () {
    };
    VideoCarouselItemComponent.prototype.isActive = function () {
        var dom = this.elementRef.nativeElement;
        return !!dom.querySelectorAll('.video-carousel-item.hover').length;
    };
    VideoCarouselItemComponent.prototype.getVideoPoster = function (video) {
        return this.videoService.getVideoTileImage(video);
    };
    VideoCarouselItemComponent.prototype.getTagColor = function (tag) {
        return _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_3__["TagsColors"][tag];
    };
    VideoCarouselItemComponent.prototype.isDefault = function () {
        var activeVideoId;
        if (this.router.url.length == 17) {
            activeVideoId = this.router.url.split('/')[this.FIRST_PARAMETER_ROUTE_POS];
        }
        else {
            activeVideoId = this.router.url.split('/')[this.SECOND_PARAMETER_ROUTE_POS];
        }
        var activeVideo = this.youtubeGatewayService.getVideoById(activeVideoId);
        if (this.video == activeVideo) {
            return true;
        }
    };
    VideoCarouselItemComponent.ctorParameters = function () { return [
        { type: _services_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_5__["YoutubeGatewayService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], VideoCarouselItemComponent.prototype, "video", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], VideoCarouselItemComponent.prototype, "changeActiveVideo", void 0);
    VideoCarouselItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'video-carousel-item',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-carousel-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-carousel/video-carousel-item/video-carousel-item.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-carousel-item.component.scss */ "./src/app/video-carousel/video-carousel-item/video-carousel-item.component.scss")).default]
        })
    ], VideoCarouselItemComponent);
    return VideoCarouselItemComponent;
}());



/***/ }),

/***/ "./src/app/video-carousel/video-carousel.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/video-carousel/video-carousel.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html,\nbody {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n}\n\nbody {\n  line-height: 1;\n  transform-origin: 0 0;\n  -webkit-transform-origin: 0 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-perspective: 1000;\n  perspective: 1000;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  background-color: #262626;\n  color: #ffffff;\n  font-size: 21px;\n  font-family: \"SF PRO Display Regular\", \"Arial\", sans-serif;\n}\n\n@media (min-width: 1366px) {\n  body {\n    zoom: 1.0671875;\n  }\n}\n\n@media (min-width: 1400px) {\n  body {\n    zoom: 1.09375;\n  }\n}\n\n@media (min-width: 1680px) {\n  body {\n    zoom: 1.3125;\n  }\n}\n\n@media (min-width: 1920px) {\n  body {\n    zoom: 1.5;\n  }\n}\n\n@media (min-width: 3840px) {\n  body {\n    zoom: 3;\n  }\n}\n\nmain * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\na {\n  display: inline-block;\n  outline: none;\n  color: #fff;\n  text-decoration: none;\n}\n\n.clearfix:before,\n.clearfix:after {\n  content: \"\";\n  display: table;\n}\n\n.clearfix:after {\n  clear: both;\n}\n\n[hidden], .hidden {\n  display: none !important;\n}\n\n[invisible], .invisible {\n  visibility: hidden !important;\n}\n\n.video-carousel {\n  position: fixed;\n  z-index: 1;\n  margin-left: 85.1851851852px;\n  left: 42.962962963px;\n  bottom: 22.2222222222px;\n  -webkit-transition: 1s;\n  transition: 1s;\n}\n\n.video-carousel__visibility-mask {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n          align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3R5bGVzL19nZW5lcmFsLnNjc3MiLCJzcmMvYXBwL3ZpZGVvLWNhcm91c2VsL3ZpZGVvLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbXlvbi9maXRuZXNzLWFwcC9zdHlsZXMvX3ZhcnMuc2NzcyIsIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC92aWRlby1jYXJvdXNlbC92aWRlby1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBRUEsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0dBQUEscUJBQUE7T0FBQSxpQkFBQTtBQ0hGOztBRE1BO0VBc0JFLGNBQUE7RUFFQSxxQkFBQTtFQUNBLDZCQUFBO0VBRUEsbUNBQUE7RUFDQSwyQkFBQTtFQUVBLHlCQUFBO0VBQ0EsaUJBQUE7RUFFQSxnQ0FBQTtFQUNBLHdCQUFBO0VBRUEseUJFOUJxQjtFRitCckIsY0V2Q007RUZ5Q04sZUFBQTtFQUNBLDBEQUFBO0FDOUJGOztBRFJFO0VBRkY7SUFHSSxlQUFBO0VDV0Y7QUFDRjs7QURURTtFQU5GO0lBT0ksYUFBQTtFQ1lGO0FBQ0Y7O0FEVkU7RUFWRjtJQVdJLFlBQUE7RUNhRjtBQUNGOztBRFhFO0VBZEY7SUFlSSxTQUFBO0VDY0Y7QUFDRjs7QURaRTtFQWxCRjtJQW1CSSxPQUFBO0VDZUY7QUFDRjs7QURRQTtFQUNFLDhCQUFBO1VBQUEsc0JBQUE7QUNMRjs7QURRQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0xGOztBRFFBOztFQUVFLFdBQUE7RUFDQSxjQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0FDTEY7O0FEUUE7RUFDRSx3QkFBQTtBQ0xGOztBRFFBO0VBQ0UsNkJBQUE7QUNMRjs7QUUzRUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQUEsY0FBQTtBRjhFRjs7QUU1RUU7RUFDRSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0VBQUEsNkJBQUE7VUFBQSxxQkFBQTtBRjhFSiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLWNhcm91c2VsL3ZpZGVvLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndmFycyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuYm9keSB7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRoZC1yZWFkeS0xMzY2KSB7XG4gICAgem9vbTogY2FsY1pvb20oJGhkLXJlYWR5LTEzNjYpO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRoZC1yZWFkeS0xNDAwKSB7XG4gICAgem9vbTogY2FsY1pvb20oJGhkLXJlYWR5LTE0MDApO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRoZC1yZWFkeS0xNjgwKSB7XG4gICAgem9vbTogY2FsY1pvb20oJGhkLXJlYWR5LTE2ODApO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICRmdWxsLWhkKSB7XG4gICAgem9vbTogY2FsY1pvb20oJGZ1bGwtaGQpO1xuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR1aGQpIHtcbiAgICB6b29tOiBjYWxjWm9vbSgkdWhkKTtcbiAgfVxuXG4gIGxpbmUtaGVpZ2h0OiAxO1xuXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG5cbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwO1xuICBwZXJzcGVjdGl2ZTogMTAwMDtcblxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICRhcHAtYmFja2dyb3VuZC1jb2xvcjtcbiAgY29sb3I6ICRhcHAtcHJpbWFyeS1jb2xvcjtcblxuICBmb250LXNpemU6IDIxcHg7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1yZWd1bGFyLCAnQXJpYWwnLCBzYW5zLXNlcmlmO1xufVxuXG5tYWluICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2xlYXJmaXg6YmVmb3JlLFxuLmNsZWFyZml4OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5jbGVhcmZpeDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5baGlkZGVuXSwgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuW2ludmlzaWJsZV0sIC5pbnZpc2libGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cbiIsImh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMDAwO1xuICBwZXJzcGVjdGl2ZTogMTAwMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUFJPIERpc3BsYXkgUmVndWxhclwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTM2NnB4KSB7XG4gIGJvZHkge1xuICAgIHpvb206IDEuMDY3MTg3NTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkge1xuICBib2R5IHtcbiAgICB6b29tOiAxLjA5Mzc1O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTY4MHB4KSB7XG4gIGJvZHkge1xuICAgIHpvb206IDEuMzEyNTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE5MjBweCkge1xuICBib2R5IHtcbiAgICB6b29tOiAxLjU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzODQwcHgpIHtcbiAgYm9keSB7XG4gICAgem9vbTogMztcbiAgfVxufVxuXG5tYWluICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY2xlYXJmaXg6YmVmb3JlLFxuLmNsZWFyZml4OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5jbGVhcmZpeDphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG5baGlkZGVuXSwgLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuW2ludmlzaWJsZV0sIC5pbnZpc2libGUge1xuICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLnZpZGVvLWNhcm91c2VsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogODUuMTg1MTg1MTg1MnB4O1xuICBsZWZ0OiA0Mi45NjI5NjI5NjNweDtcbiAgYm90dG9tOiAyMi4yMjIyMjIyMjIycHg7XG4gIHRyYW5zaXRpb246IDFzO1xufVxuLnZpZGVvLWNhcm91c2VsX192aXNpYmlsaXR5LW1hc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59IiwiJGhkOiAxMjgwcHg7XG4kaGQtcmVhZHktMTM2NjogMTM2NnB4O1xuJGhkLXJlYWR5LTE0MDA6IDE0MDBweDtcbiRoZC1yZWFkeS0xNjgwOiAxNjgwcHg7XG4kZnVsbC1oZDogMTkyMHB4O1xuJHVoZDogMzg0MHB4O1xuXG4kcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbjogMTI4MDtcbiRkZXNpZ24tZGltZW5zaW9uOiAxNzI4O1xuXG4kYXNwZWN0LXJhdGlvOiAkcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbiAvICRkZXNpZ24tZGltZW5zaW9uO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHQtYmxhY2s6ICMyMzIzMjM7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbGlnaHQtZ3JleTogIzhmOGY4ZjtcbiRncmF5OiAjNjE2MTYxO1xuJGRhcmstZ3JleTogIzM1MzUzNTtcbiRsaWdodC1waW5rOiAjRkFFMkUyO1xuJG9yYW5nZTogI2U4NzAwMDtcbiRhcHAtYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiRhcHAtcHJpbWFyeS1jb2xvcjogJHdoaXRlO1xuJGFwcC1zZWNvbmRhcnktY29sb3I6ICNmOGZmMTM7XG5cbiRzcmM6IFwiflwiO1xuXG4kaW1hZ2Utc3JjOiBcIiN7JHNyY31hc3NldHMvaW1hZ2VzXCI7XG5cbiRmb250cy1zcmM6ICcjeyRzcmN9YXNzZXRzL2ZvbnRzL1NGLVBSTy1EaXNwbGF5JztcblxuJHByaW1hcnktZm9udDogJ1NGIFBSTyBEaXNwbGF5JztcblxuJGZvbnQtYmxhY2s6ICdTRiBQUk8gRGlzcGxheSBCbGFjayc7XG4kZm9udC1ibGFja0l0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IEJsYWNrSXRhbGljJztcbiRmb250LWJvbGQ6ICdTRiBQUk8gRGlzcGxheSBCb2xkJztcbiRmb250LWJvbGRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBCb2xkSXRhbGljJztcbiRmb250LWhlYXZ5OiAnU0YgUFJPIERpc3BsYXkgSGVhdnknO1xuJGZvbnQtaGVhdnlJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBIZWF2eUl0YWxpYyc7XG4kZm9udC1saWdodDogJ1NGIFBSTyBEaXNwbGF5IExpZ2h0JztcbiRmb250LWxpZ2h0SXRhbGljOiAnU0YgUFJPIERpc3BsYXkgTGlnaHRJdGFsaWMnO1xuJGZvbnQtbWVkaXVtOiAnU0YgUFJPIERpc3BsYXkgTWVkaXVtJztcbiRmb250LW1lZGl1bUl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IE1lZGl1bUl0YWxpYyc7XG4kZm9udC1yZWd1bGFyOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhcic7XG4kZm9udC1yZWd1bGFySXRhbGljOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhckl0YWxpYyc7XG4kZm9udC1zZW1pYm9sZDogJ1NGIFBSTyBEaXNwbGF5IFNlbWlib2xkJztcbiRmb250LXNlbWlib2xkSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgU2VtaWJvbGRJdGFsaWMnO1xuJGZvbnQtdGhpbjogJ1NGIFBSTyBEaXNwbGF5IFRoaW4nO1xuJGZvbnQtdGhpbkl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFRoaW5JdGFsaWMnO1xuJGZvbnQtdWx0cmFsaWdodDogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHQnO1xuJGZvbnQtdWx0cmFsaWdodEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHRJdGFsaWMnO1xuIiwiQGltcG9ydCAnc3R5bGVzL21peGlucyc7XG5AaW1wb3J0ICdzdHlsZXMvZ2VuZXJhbCc7XG5cbi52aWRlby1jYXJvdXNlbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IGFkanVzdFB4KDExNXB4KTtcbiAgbGVmdDogYWRqdXN0UHgoNThweCk7XG4gIGJvdHRvbTogYWRqdXN0UHgoMzBweCk7XG4gIHRyYW5zaXRpb246IDFzO1xuXG4gICZfX3Zpc2liaWxpdHktbWFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/video-carousel/video-carousel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/video-carousel/video-carousel.component.ts ***!
  \************************************************************/
/*! exports provided: VideoCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCarouselComponent", function() { return VideoCarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/youtube-gateway.service */ "./src/app/services/youtube-gateway.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @alignedcode/tvbase */ "./node_modules/@alignedcode/tvbase/fesm5/alignedcode-tvbase.js");






var VideoCarouselComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VideoCarouselComponent, _super);
    function VideoCarouselComponent(parent, keysService, elementRef, youtubeGatewayService, route, storage, router, storageService) {
        var _this = _super.call(this, elementRef, parent, keysService, new Map([
            [_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_5__["KEYS"].LEFT, function () { if (_this.isActive())
                    _this.prevVideo(); }],
            [_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_5__["KEYS"].RIGHT, function () { if (_this.isActive())
                    _this.nextVideo(); }]
        ])) || this;
        _this.youtubeGatewayService = youtubeGatewayService;
        _this.route = route;
        _this.storage = storage;
        _this.router = router;
        _this.storageService = storageService;
        _this.changeActiveVideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this.MAIN_TAG_POS = 0;
        _this.PAGE_ROUTE_POS = 1;
        _this.FIRST_PARAMETER_ROUTE_POS = 2;
        _this.SECOND_PARAMETER_ROUTE_POS = 3;
        _this.activeOffset = 0;
        _this.activeVideoIndex = 0;
        _this.videoContainerLeftPos = 0;
        return _this;
    }
    VideoCarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activePageRoute = this.router.url.split('/')[this.PAGE_ROUTE_POS];
        this.activeRoute = this.activePageRoute;
        this.route.params.subscribe(function (params) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var videoList, favoritesVideoIDs_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.youtubeGatewayService.getPlaylistVideosWithCache()];
                    case 1:
                        videoList = _a.sent();
                        switch (this.activePageRoute) {
                            case 'home': {
                                this.videoList = videoList;
                                if (this.router.url.split('/')[this.FIRST_PARAMETER_ROUTE_POS] == undefined) {
                                    this.router.navigate([this.activePageRoute + '/' + this.videoList[0].id]);
                                }
                                break;
                            }
                            case 'categories': {
                                this.activeRoute = this.router.url.split('/')[this.PAGE_ROUTE_POS] + '/' + this.router.url.split('/')[this.FIRST_PARAMETER_ROUTE_POS];
                                this.activeTag = params.tag || 'Full-body';
                                if (!!this.activeTag) {
                                    videoList = videoList.filter(function (_a) {
                                        var tags = _a.tags;
                                        return tags[_this.MAIN_TAG_POS] === _this.activeTag;
                                    });
                                }
                                this.videoList = videoList;
                                break;
                            }
                            case 'favorites': {
                                favoritesVideoIDs_1 = this.storage.favoritesVideoIds;
                                videoList = videoList.filter(function (_a) {
                                    var id = _a.id;
                                    return favoritesVideoIDs_1.indexOf(id) != -1;
                                });
                                this.videoList = videoList;
                                if (this.router.url.split('/')[this.FIRST_PARAMETER_ROUTE_POS] == undefined) {
                                    this.router.navigate([this.activePageRoute + '/' + this.videoList[0].id]);
                                }
                                break;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    VideoCarouselComponent.prototype.calcOffset = function () {
        this.setupActiveOffset();
    };
    VideoCarouselComponent.prototype.setupActiveOffset = function () {
        var videoCollection = this.videoCarouselItem.nativeElement;
        var videoWidth = videoCollection.getBoundingClientRect().width;
        this.activeOffset = videoWidth;
    };
    VideoCarouselComponent.prototype.shiftVideos = function (offset) {
        this.videoContainerLeftPos = this.videoContainerLeftPos + offset;
    };
    VideoCarouselComponent.prototype.nextVideo = function () {
        this.calcOffset();
        if (this.activeVideoIndex >= 0) {
            this.shiftVideos(-this.activeOffset);
        }
        if (this.activeVideoIndex === this.videoList.length - 1) {
            this.activeVideoIndex = 0;
            this.videoContainerLeftPos = 0;
        }
        else {
            this.activeVideoIndex++;
        }
    };
    VideoCarouselComponent.prototype.prevVideo = function () {
        this.calcOffset();
        if (this.activeVideoIndex !== 0) {
            this.activeVideoIndex--;
            this.shiftVideos(this.activeOffset);
        }
    };
    VideoCarouselComponent.prototype.isActive = function () {
        var dom = this.elementRef.nativeElement;
        return !!dom.querySelectorAll('.video-carousel-item.hover').length;
    };
    VideoCarouselComponent.prototype.trackByFn = function (index, item) {
        return item.id;
    };
    VideoCarouselComponent.ctorParameters = function () { return [
        { type: _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_5__["NavBase"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_5__["KeysService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_2__["YoutubeGatewayService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], VideoCarouselComponent.prototype, "changeActiveVideo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoCarouselItem', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
    ], VideoCarouselComponent.prototype, "videoCarouselItem", void 0);
    VideoCarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'video-carousel',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-carousel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-carousel/video-carousel.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-carousel.component.scss */ "./src/app/video-carousel/video-carousel.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
    ], VideoCarouselComponent);
    return VideoCarouselComponent;
}(_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_5__["NavigatableComponent"]));



/***/ }),

/***/ "./src/app/video-details/video-details.component.scss":
/*!************************************************************!*\
  !*** ./src/app/video-details/video-details.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".video-details {\n  position: relative;\n  height: 100%;\n  margin-right: 616.2962962963px;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(5px);\n  backdrop-filter: blur(5px);\n}\n.video-details__title {\n  margin-left: 59.2592592593px;\n  margin-right: 8.8888888889px;\n  padding-top: 118.5185185185px;\n  line-height: 56.2962962963px;\n  font-weight: bold;\n  font-size: 47.4074074074px;\n  font-family: \"SF PRO Display\";\n}\n.video-details__tag {\n  width: 105.1851851852px;\n  height: 35.5555555556px;\n  text-align: center;\n  margin-left: 59.2592592593px;\n  margin-top: 34.0740740741px;\n  padding: 6.6666666667px 11.8518518519px;\n  -webkit-border-radius: 2.962962963px;\n          border-radius: 2.962962963px;\n  font-weight: bold;\n  font-size: 17.7777777778px;\n  line-height: 22.2222222222px;\n  font-family: \"SF PRO Display\";\n}\n.video-details__duration {\n  width: 185.1851851852px;\n  height: 26.6666666667px;\n  margin-left: 185.9259259259px;\n  margin-top: -28.1481481481px;\n  font-weight: bold;\n  font-size: 21.4814814815px;\n  line-height: 26.6666666667px;\n  font-family: \"SF PRO Display\";\n}\n.video-details__description {\n  width: 592.5925925926px;\n  height: 48.8888888889px;\n  margin-left: 59.2592592593px;\n  margin-top: 16.2962962963px;\n  overflow: hidden;\n  opacity: 0.5;\n  color: #ffffff;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 23.7037037037px;\n  font-family: \"SF PRO Display\";\n}\n.video-details__play-btn {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 81.4814814815px;\n  height: 81.4814814815px;\n  margin-left: 56.2962962963px;\n  margin-top: 85.1851851852px;\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n  background: url('https://semenone.github.io/fitness/Play.png') #e87000 33.3333333333px 26.6666666667px no-repeat;\n  background-size: 24.4444444444px 29.6296296296px;\n}\n.video-details__play-btn.hover {\n  -webkit-box-shadow: 0px 0px 0px 25.9259259259px rgba(255, 178, 107, 0.3);\n  box-shadow: 0px 0px 0px 25.9259259259px rgba(255, 178, 107, 0.3);\n}\n.video-details__favorite-btn {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 311.1111111111px;\n  height: 69.6296296296px;\n  margin-left: 177.037037037px;\n  margin-top: 87.4074074074px;\n  padding: 38px 20px;\n  -webkit-border-radius: 50px;\n          border-radius: 50px;\n  background: rgba(166, 166, 166, 0.3);\n}\n.video-details__favorite-btn.hover {\n  background: rgba(255, 216, 216, 0.6);\n}\n.video-details__favorite-btn.hover .video-details__favorite-btn__icon {\n  display: block;\n  width: 55.5555555556px;\n  height: 55.5555555556px;\n  margin-left: -8.8888888889px;\n  margin-top: -42.962962963px;\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n  background: url('https://semenone.github.io/fitness/red-heart-icon.png') 50% 68% #FAE2E2 no-repeat;\n}\n.video-details__favorite-btn__title {\n  margin-top: -16.2962962963px;\n  margin-left: 59.2592592593px;\n  font-size: 25.9259259259px;\n  line-height: 31.8518518519px;\n  font-family: \"SF PRO Display Medium\";\n  color: #ffffff;\n}\n.video-details__favorite-btn__icon {\n  display: block;\n  width: 55.5555555556px;\n  height: 55.5555555556px;\n  margin-left: -8.8888888889px;\n  margin-top: -42.962962963px;\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n  background: url('https://semenone.github.io/fitness/heart-icon.svg') 50% 60% #8f8f8f no-repeat;\n}\n.video-details__favorite-btn__red-icon {\n  display: block;\n  width: 55.5555555556px;\n  height: 55.5555555556px;\n  margin-left: -8.8888888889px;\n  margin-top: -42.962962963px;\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n  background: url('https://semenone.github.io/fitness/red-heart-icon.png') 50% 60% #8f8f8f no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2VteW9uL2ZpdG5lc3MtYXBwL3N0eWxlcy9fbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3ZpZGVvLWRldGFpbHMvdmlkZW8tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3R5bGVzL192YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VDZ0NFLGtDQUFBO0VBQ0EsMEJBQUE7QUNqQ0o7QUZHRTtFQUNFLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCR2FXO0FEZGY7QUZJRTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO1VBQUEsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkdEVztBRERmO0FGS0U7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCR1pXO0FEU2Y7QUZNRTtFQUNFLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0d4Q0k7RUh5Q0osZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkcxQlc7QURzQmY7QUZPRTtFQ3hERSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VEd0RBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtFQUNBLGdIQUFBO0VBQ0EsZ0RBQUE7QUVISjtBRklJO0VDdkNGLHdFRHdDd0I7RUN0Q3hCLGdFRHNDd0I7QUVBMUI7QUZJRTtFQ3RFRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VEc0VBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0NBQUE7QUVBSjtBRkNJO0VBQ0Usb0NBQUE7QUVDTjtBRkNJO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtFQUNBLGtHQUFBO0FFQ1I7QUZFSTtFQUNFLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NHNURRO0VINkRSLGNHekZFO0FEeUZSO0FGR0k7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtVQUFBLGtCQUFBO0VBQ0EsOEZBQUE7QUVETjtBRkdJO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtFQUNBLGtHQUFBO0FFRE4iLCJmaWxlIjoic3JjL2FwcC92aWRlby1kZXRhaWxzL3ZpZGVvLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvbWl4aW5zJztcbkBpbXBvcnQgJ3N0eWxlcy92YXJzJztcblxuLnZpZGVvLWRldGFpbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiBhZGp1c3RQeCg4MzJweCk7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gIEBpbmNsdWRlIGJhY2tkcm9wLWZpbHRlci1ibHVyKDVweCk7XG5cbiAgJl9fdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiBhZGp1c3RQeCg4MHB4KTtcbiAgICBtYXJnaW4tcmlnaHQ6IGFkanVzdFB4KDEycHgpO1xuICAgIHBhZGRpbmctdG9wOiBhZGp1c3RQeCgxNjBweCk7XG4gICAgbGluZS1oZWlnaHQ6IGFkanVzdFB4KDc2cHgpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogYWRqdXN0UHgoNjRweCk7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gIH1cblxuICAmX190YWcge1xuICAgIHdpZHRoOiBhZGp1c3RQeCgxNDJweCk7XG4gICAgaGVpZ2h0OiBhZGp1c3RQeCg0OHB4KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGFkanVzdFB4KDgwcHgpO1xuICAgIG1hcmdpbi10b3A6IGFkanVzdFB4KDQ2cHgpO1xuICAgIHBhZGRpbmc6IGFkanVzdFB4KDlweCkgYWRqdXN0UHgoMTZweCk7XG4gICAgYm9yZGVyLXJhZGl1czogYWRqdXN0UHgoNHB4KTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IGFkanVzdFB4KDI0cHgpO1xuICAgIGxpbmUtaGVpZ2h0OiBhZGp1c3RQeCgzMHB4KTtcbiAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcbiAgfVxuXG4gICZfX2R1cmF0aW9uIHtcbiAgICB3aWR0aDogYWRqdXN0UHgoMjUwcHgpO1xuICAgIGhlaWdodDogYWRqdXN0UHgoMzZweCk7XG4gICAgbWFyZ2luLWxlZnQ6IGFkanVzdFB4KDI1MXB4KTtcbiAgICBtYXJnaW4tdG9wOiBhZGp1c3RQeCgtMzhweCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiBhZGp1c3RQeCgyOXB4KTtcbiAgICBsaW5lLWhlaWdodDogYWRqdXN0UHgoMzZweCk7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IGFkanVzdFB4KDgwMHB4KTtcbiAgICBoZWlnaHQ6IGFkanVzdFB4KDY2cHgpO1xuICAgIG1hcmdpbi1sZWZ0OiBhZGp1c3RQeCg4MHB4KTtcbiAgICBtYXJnaW4tdG9wOiBhZGp1c3RQeCgyMnB4KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiBhZGp1c3RQeCgyN3B4KTtcbiAgICBsaW5lLWhlaWdodDogYWRqdXN0UHgoMzJweCk7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gIH1cblxuICAmX19wbGF5LWJ0biB7XG4gICAgQGluY2x1ZGUgdmFsaWduO1xuICAgIHdpZHRoOiBhZGp1c3RQeCgxMTBweCk7XG4gICAgaGVpZ2h0OiBhZGp1c3RQeCgxMTBweCk7XG4gICAgbWFyZ2luLWxlZnQ6IGFkanVzdFB4KDc2cHgpO1xuICAgIG1hcmdpbi10b3A6IGFkanVzdFB4KDExNXB4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCN7JGltYWdlLXNyY30vUGxheS5wbmcpICRvcmFuZ2UgYWRqdXN0UHgoNDVweCkgYWRqdXN0UHgoMzZweCkgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogYWRqdXN0UHgoMzNweCkgYWRqdXN0UHgoNDBweCk7XG4gICAgJi5ob3ZlciB7XG4gICAgICBAaW5jbHVkZSBib3gtc2hhZG93KDBweCAwcHggMHB4IGFkanVzdFB4KDM1cHgpIHJnYmEoMjU1LCAxNzgsIDEwNywgMC4zKSk7XG4gICAgfVxuICB9XG5cbiAgJl9fZmF2b3JpdGUtYnRuIHtcbiAgICBAaW5jbHVkZSB2YWxpZ247XG4gICAgd2lkdGg6IGFkanVzdFB4KDQyMHB4KTtcbiAgICBoZWlnaHQ6IGFkanVzdFB4KDk0cHgpO1xuICAgIG1hcmdpbi1sZWZ0OiBhZGp1c3RQeCgyMzlweCk7XG4gICAgbWFyZ2luLXRvcDogYWRqdXN0UHgoMTE4cHgpO1xuICAgIHBhZGRpbmc6IDM4cHggMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMTY2LCAxNjYsIDE2NiwgMC4zKTtcbiAgICAmLmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMTYsIDIxNiwgMC42KTtcbiAgICB9XG4gICAgJi5ob3ZlciAmX19pY29uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiBhZGp1c3RQeCg3NXB4KTtcbiAgICAgICAgaGVpZ2h0OiBhZGp1c3RQeCg3NXB4KTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGFkanVzdFB4KC0xMnB4KTtcbiAgICAgICAgbWFyZ2luLXRvcDogYWRqdXN0UHgoLTU4cHgpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgjeyRpbWFnZS1zcmN9L3JlZC1oZWFydC1pY29uLnBuZykgNTAlIDY4JSAkbGlnaHQtcGluayBuby1yZXBlYXQ7XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogYWRqdXN0UHgoLTIycHgpO1xuICAgICAgbWFyZ2luLWxlZnQ6IGFkanVzdFB4KDgwcHgpO1xuICAgICAgZm9udC1zaXplOiBhZGp1c3RQeCgzNXB4KTtcbiAgICAgIGxpbmUtaGVpZ2h0OiBhZGp1c3RQeCg0M3B4KTtcbiAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1tZWRpdW07XG4gICAgICBjb2xvcjogJHdoaXRlO1xuICAgIH1cblxuICAgICZfX2ljb24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogYWRqdXN0UHgoNzVweCk7XG4gICAgICBoZWlnaHQ6IGFkanVzdFB4KDc1cHgpO1xuICAgICAgbWFyZ2luLWxlZnQ6IGFkanVzdFB4KC0xMnB4KTtcbiAgICAgIG1hcmdpbi10b3A6IGFkanVzdFB4KC01OHB4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgjeyRpbWFnZS1zcmN9L2hlYXJ0LWljb24uc3ZnKSA1MCUgNjAlICRsaWdodC1ncmV5IG5vLXJlcGVhdDtcbiAgICB9XG4gICAgJl9fcmVkLWljb24ge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogYWRqdXN0UHgoNzVweCk7XG4gICAgICBoZWlnaHQ6IGFkanVzdFB4KDc1cHgpO1xuICAgICAgbWFyZ2luLWxlZnQ6IGFkanVzdFB4KC0xMnB4KTtcbiAgICAgIG1hcmdpbi10b3A6IGFkanVzdFB4KC01OHB4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgjeyRpbWFnZS1zcmN9L3JlZC1oZWFydC1pY29uLnBuZykgNTAlIDYwJSAkbGlnaHQtZ3JleSBuby1yZXBlYXQ7XG4gICAgfVxuICB9XG59XG4iLCJAaW1wb3J0ICd2YXJzJztcblxuQG1peGluIHZhbGlnbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuQG1peGluIGhhbGlnbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG5cbkBtaXhpbiBodmFsaWduIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zKSB7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1vei10cmFuc2Zvcm06ICR0cmFuc2Zvcm1zO1xuXHQtbXMtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0dHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJHZhbHVlKSB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogJHZhbHVlO1xuICAtbW96LWJveC1zaGFkb3c6ICR2YWx1ZTtcbiAgYm94LXNoYWRvdzogJHZhbHVlO1xufVxuXG5AbWl4aW4gc2tldyAoJHgsICR5KSB7XG5cdEBpbmNsdWRlIHRyYW5zZm9ybShza2V3KCN7JHh9ZGVnLCAjeyR5fWRlZykpO1xufVxuXG5AbWl4aW4gYmFja2Ryb3AtZmlsdGVyLWJsdXIoJHZhbHVlKSB7XG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoJHZhbHVlKTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoJHZhbHVlKTtcbn1cblxuQG1peGluIGJhY2stYnRuLXBvc2l0aW9uIHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGFkanVzdFB4KDQ0cHgpIGFkanVzdFB4KDQ0cHgpO1xufVxuXG5AZnVuY3Rpb24gYWRqdXN0UHgoJHB4KSB7XG4gICAgQHJldHVybiAkYXNwZWN0LXJhdGlvICogJHB4O1xufVxuXG5AZnVuY3Rpb24gY2FsY1pvb20oJHNjcmVlbi1yZXNvbHV0aW9uKSB7XG4gICAgQHJldHVybiAkc2NyZWVuLXJlc29sdXRpb24vJGhkO1xufVxuIiwiLnZpZGVvLWRldGFpbHMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiA2MTYuMjk2Mjk2Mjk2M3B4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcbn1cbi52aWRlby1kZXRhaWxzX190aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiA1OS4yNTkyNTkyNTkzcHg7XG4gIG1hcmdpbi1yaWdodDogOC44ODg4ODg4ODg5cHg7XG4gIHBhZGRpbmctdG9wOiAxMTguNTE4NTE4NTE4NXB4O1xuICBsaW5lLWhlaWdodDogNTYuMjk2Mjk2Mjk2M3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0Ny40MDc0MDc0MDc0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5XCI7XG59XG4udmlkZW8tZGV0YWlsc19fdGFnIHtcbiAgd2lkdGg6IDEwNS4xODUxODUxODUycHg7XG4gIGhlaWdodDogMzUuNTU1NTU1NTU1NnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1OS4yNTkyNTkyNTkzcHg7XG4gIG1hcmdpbi10b3A6IDM0LjA3NDA3NDA3NDFweDtcbiAgcGFkZGluZzogNi42NjY2NjY2NjY3cHggMTEuODUxODUxODUxOXB4O1xuICBib3JkZXItcmFkaXVzOiAyLjk2Mjk2Mjk2M3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNy43Nzc3Nzc3Nzc4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMi4yMjIyMjIyMjIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5XCI7XG59XG4udmlkZW8tZGV0YWlsc19fZHVyYXRpb24ge1xuICB3aWR0aDogMTg1LjE4NTE4NTE4NTJweDtcbiAgaGVpZ2h0OiAyNi42NjY2NjY2NjY3cHg7XG4gIG1hcmdpbi1sZWZ0OiAxODUuOTI1OTI1OTI1OXB4O1xuICBtYXJnaW4tdG9wOiAtMjguMTQ4MTQ4MTQ4MXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMS40ODE0ODE0ODE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNi42NjY2NjY2NjY3cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5XCI7XG59XG4udmlkZW8tZGV0YWlsc19fZGVzY3JpcHRpb24ge1xuICB3aWR0aDogNTkyLjU5MjU5MjU5MjZweDtcbiAgaGVpZ2h0OiA0OC44ODg4ODg4ODg5cHg7XG4gIG1hcmdpbi1sZWZ0OiA1OS4yNTkyNTkyNTkzcHg7XG4gIG1hcmdpbi10b3A6IDE2LjI5NjI5NjI5NjNweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogMC41O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjMuNzAzNzAzNzAzN3B4O1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheVwiO1xufVxuLnZpZGVvLWRldGFpbHNfX3BsYXktYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogODEuNDgxNDgxNDgxNXB4O1xuICBoZWlnaHQ6IDgxLjQ4MTQ4MTQ4MTVweDtcbiAgbWFyZ2luLWxlZnQ6IDU2LjI5NjI5NjI5NjNweDtcbiAgbWFyZ2luLXRvcDogODUuMTg1MTg1MTg1MnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHVybCh+YXNzZXRzL2ltYWdlcy9QbGF5LnBuZykgI2U4NzAwMCAzMy4zMzMzMzMzMzMzcHggMjYuNjY2NjY2NjY2N3B4IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyNC40NDQ0NDQ0NDQ0cHggMjkuNjI5NjI5NjI5NnB4O1xufVxuLnZpZGVvLWRldGFpbHNfX3BsYXktYnRuLmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDBweCAyNS45MjU5MjU5MjU5cHggcmdiYSgyNTUsIDE3OCwgMTA3LCAwLjMpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMHB4IDI1LjkyNTkyNTkyNTlweCByZ2JhKDI1NSwgMTc4LCAxMDcsIDAuMyk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDI1LjkyNTkyNTkyNTlweCByZ2JhKDI1NSwgMTc4LCAxMDcsIDAuMyk7XG59XG4udmlkZW8tZGV0YWlsc19fZmF2b3JpdGUtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogMzExLjExMTExMTExMTFweDtcbiAgaGVpZ2h0OiA2OS42Mjk2Mjk2Mjk2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNzcuMDM3MDM3MDM3cHg7XG4gIG1hcmdpbi10b3A6IDg3LjQwNzQwNzQwNzRweDtcbiAgcGFkZGluZzogMzhweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2NiwgMTY2LCAxNjYsIDAuMyk7XG59XG4udmlkZW8tZGV0YWlsc19fZmF2b3JpdGUtYnRuLmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIxNiwgMjE2LCAwLjYpO1xufVxuLnZpZGVvLWRldGFpbHNfX2Zhdm9yaXRlLWJ0bi5ob3ZlciAudmlkZW8tZGV0YWlsc19fZmF2b3JpdGUtYnRuX19pY29uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA1NS41NTU1NTU1NTU2cHg7XG4gIGhlaWdodDogNTUuNTU1NTU1NTU1NnB4O1xuICBtYXJnaW4tbGVmdDogLTguODg4ODg4ODg4OXB4O1xuICBtYXJnaW4tdG9wOiAtNDIuOTYyOTYyOTYzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdXJsKH5hc3NldHMvaW1hZ2VzL3JlZC1oZWFydC1pY29uLnBuZykgNTAlIDY4JSAjRkFFMkUyIG5vLXJlcGVhdDtcbn1cbi52aWRlby1kZXRhaWxzX19mYXZvcml0ZS1idG5fX3RpdGxlIHtcbiAgbWFyZ2luLXRvcDogLTE2LjI5NjI5NjI5NjNweDtcbiAgbWFyZ2luLWxlZnQ6IDU5LjI1OTI1OTI1OTNweDtcbiAgZm9udC1zaXplOiAyNS45MjU5MjU5MjU5cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMS44NTE4NTE4NTE5cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5IE1lZGl1bVwiO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi52aWRlby1kZXRhaWxzX19mYXZvcml0ZS1idG5fX2ljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDU1LjU1NTU1NTU1NTZweDtcbiAgaGVpZ2h0OiA1NS41NTU1NTU1NTU2cHg7XG4gIG1hcmdpbi1sZWZ0OiAtOC44ODg4ODg4ODg5cHg7XG4gIG1hcmdpbi10b3A6IC00Mi45NjI5NjI5NjNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB1cmwofmFzc2V0cy9pbWFnZXMvaGVhcnQtaWNvbi5zdmcpIDUwJSA2MCUgIzhmOGY4ZiBuby1yZXBlYXQ7XG59XG4udmlkZW8tZGV0YWlsc19fZmF2b3JpdGUtYnRuX19yZWQtaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTUuNTU1NTU1NTU1NnB4O1xuICBoZWlnaHQ6IDU1LjU1NTU1NTU1NTZweDtcbiAgbWFyZ2luLWxlZnQ6IC04Ljg4ODg4ODg4ODlweDtcbiAgbWFyZ2luLXRvcDogLTQyLjk2Mjk2Mjk2M3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHVybCh+YXNzZXRzL2ltYWdlcy9yZWQtaGVhcnQtaWNvbi5wbmcpIDUwJSA2MCUgIzhmOGY4ZiBuby1yZXBlYXQ7XG59IiwiJGhkOiAxMjgwcHg7XG4kaGQtcmVhZHktMTM2NjogMTM2NnB4O1xuJGhkLXJlYWR5LTE0MDA6IDE0MDBweDtcbiRoZC1yZWFkeS0xNjgwOiAxNjgwcHg7XG4kZnVsbC1oZDogMTkyMHB4O1xuJHVoZDogMzg0MHB4O1xuXG4kcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbjogMTI4MDtcbiRkZXNpZ24tZGltZW5zaW9uOiAxNzI4O1xuXG4kYXNwZWN0LXJhdGlvOiAkcHJvZ3JhbW1hYmxlLWRpbWVuc2lvbiAvICRkZXNpZ24tZGltZW5zaW9uO1xuXG4kd2hpdGU6ICNmZmZmZmY7XG4kbGlnaHQtYmxhY2s6ICMyMzIzMjM7XG4kYmxhY2s6ICMwMDAwMDA7XG4kbGlnaHQtZ3JleTogIzhmOGY4ZjtcbiRncmF5OiAjNjE2MTYxO1xuJGRhcmstZ3JleTogIzM1MzUzNTtcbiRsaWdodC1waW5rOiAjRkFFMkUyO1xuJG9yYW5nZTogI2U4NzAwMDtcbiRhcHAtYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiRhcHAtcHJpbWFyeS1jb2xvcjogJHdoaXRlO1xuJGFwcC1zZWNvbmRhcnktY29sb3I6ICNmOGZmMTM7XG5cbiRzcmM6IFwiflwiO1xuXG4kaW1hZ2Utc3JjOiBcIiN7JHNyY31hc3NldHMvaW1hZ2VzXCI7XG5cbiRmb250cy1zcmM6ICcjeyRzcmN9YXNzZXRzL2ZvbnRzL1NGLVBSTy1EaXNwbGF5JztcblxuJHByaW1hcnktZm9udDogJ1NGIFBSTyBEaXNwbGF5JztcblxuJGZvbnQtYmxhY2s6ICdTRiBQUk8gRGlzcGxheSBCbGFjayc7XG4kZm9udC1ibGFja0l0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IEJsYWNrSXRhbGljJztcbiRmb250LWJvbGQ6ICdTRiBQUk8gRGlzcGxheSBCb2xkJztcbiRmb250LWJvbGRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBCb2xkSXRhbGljJztcbiRmb250LWhlYXZ5OiAnU0YgUFJPIERpc3BsYXkgSGVhdnknO1xuJGZvbnQtaGVhdnlJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBIZWF2eUl0YWxpYyc7XG4kZm9udC1saWdodDogJ1NGIFBSTyBEaXNwbGF5IExpZ2h0JztcbiRmb250LWxpZ2h0SXRhbGljOiAnU0YgUFJPIERpc3BsYXkgTGlnaHRJdGFsaWMnO1xuJGZvbnQtbWVkaXVtOiAnU0YgUFJPIERpc3BsYXkgTWVkaXVtJztcbiRmb250LW1lZGl1bUl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IE1lZGl1bUl0YWxpYyc7XG4kZm9udC1yZWd1bGFyOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhcic7XG4kZm9udC1yZWd1bGFySXRhbGljOiAnU0YgUFJPIERpc3BsYXkgUmVndWxhckl0YWxpYyc7XG4kZm9udC1zZW1pYm9sZDogJ1NGIFBSTyBEaXNwbGF5IFNlbWlib2xkJztcbiRmb250LXNlbWlib2xkSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgU2VtaWJvbGRJdGFsaWMnO1xuJGZvbnQtdGhpbjogJ1NGIFBSTyBEaXNwbGF5IFRoaW4nO1xuJGZvbnQtdGhpbkl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFRoaW5JdGFsaWMnO1xuJGZvbnQtdWx0cmFsaWdodDogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHQnO1xuJGZvbnQtdWx0cmFsaWdodEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFVsdHJhbGlnaHRJdGFsaWMnO1xuIl19 */");

/***/ }),

/***/ "./src/app/video-details/video-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/video-details/video-details.component.ts ***!
  \**********************************************************/
/*! exports provided: VideoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoDetailsComponent", function() { return VideoDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_paths__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-paths */ "./src/app/app-paths.ts");
/* harmony import */ var _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/models/tag.model */ "./src/app/shared/models/tag.model.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/storage.service */ "./src/app/services/storage.service.ts");






var VideoDetailsComponent = /** @class */ (function () {
    function VideoDetailsComponent(router, localStorage) {
        this.router = router;
        this.localStorage = localStorage;
        this.MAIN_TAG_POS = 0;
    }
    VideoDetailsComponent.prototype.ngOnInit = function () {
    };
    VideoDetailsComponent.prototype.openPlayer = function (id) {
        this.router.navigate([_app_paths__WEBPACK_IMPORTED_MODULE_3__["AppPaths"].PLAYER], {
            queryParams: {
                id: id,
            }
        });
    };
    VideoDetailsComponent.prototype.getTagContainerColor = function (tag) {
        return _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_4__["TagsColors"][tag];
    };
    VideoDetailsComponent.prototype.changeFavorite = function (id) {
        this.isFavorite(id) ? this.localStorage.removeFromFavorites(id) : this.localStorage.saveFavorite(id);
    };
    VideoDetailsComponent.prototype.isFavorite = function (id) {
        return this.localStorage.checkFavorite(id);
    };
    VideoDetailsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], VideoDetailsComponent.prototype, "activeVideo", void 0);
    VideoDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'video-details',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-details/video-details.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-details.component.scss */ "./src/app/video-details/video-details.component.scss")).default]
        })
    ], VideoDetailsComponent);
    return VideoDetailsComponent;
}());



/***/ }),

/***/ "./src/app/video-player/activeVideo.resolver.ts":
/*!******************************************************!*\
  !*** ./src/app/video-player/activeVideo.resolver.ts ***!
  \******************************************************/
/*! exports provided: ActiveVideoResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveVideoResolver", function() { return ActiveVideoResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/youtube-gateway.service */ "./src/app/services/youtube-gateway.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ActiveVideoResolver = /** @class */ (function () {
    function ActiveVideoResolver(youtubeGatewayService) {
        this.youtubeGatewayService = youtubeGatewayService;
    }
    ActiveVideoResolver.prototype.resolve = function (route, state) {
        return this.youtubeGatewayService.getVideoById(route.queryParams.id);
    };
    ActiveVideoResolver.ctorParameters = function () { return [
        { type: _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_1__["YoutubeGatewayService"] }
    ]; };
    ActiveVideoResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
    ], ActiveVideoResolver);
    return ActiveVideoResolver;
}());



/***/ }),

/***/ "./src/app/video-player/url.resolver.ts":
/*!**********************************************!*\
  !*** ./src/app/video-player/url.resolver.ts ***!
  \**********************************************/
/*! exports provided: UrlResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlResolver", function() { return UrlResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var UrlResolver = /** @class */ (function () {
    function UrlResolver(sanitizer) {
        this.sanitizer = sanitizer;
    }
    UrlResolver.prototype.resolve = function (route, state) {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + route.queryParams.id);
    };
    UrlResolver.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    UrlResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' })
    ], UrlResolver);
    return UrlResolver;
}());



/***/ }),

/***/ "./src/app/video-player/video-player.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/video-player/video-player.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".player__wrapper__frame-container {\n  position: fixed;\n  top: 0;\n  height: 100%;\n  width: 300%;\n  left: -100%;\n}\n.player__wrapper__frame-container div {\n  position: fixed;\n  top: -50%;\n  height: 200%;\n  width: 100%;\n}\n.player__back-btn {\n  position: relative;\n  z-index: 1;\n  width: 76.2962962963px;\n  float: left;\n  height: 76.2962962963px;\n  left: 56.2962962963px;\n  top: 14.8148148148px;\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n  background: url('https://semenone.github.io/fitness/arrow-left.png') #616161 no-repeat;\n  background-position: center;\n  background-size: 32.5925925926px 32.5925925926px;\n}\n.player__back-btn.hover {\n  background: url('https://semenone.github.io/fitness/arrow-left.png') #000000 no-repeat;\n  background-position: center;\n  background-size: 32.5925925926px 32.5925925926px;\n}\n.player__container {\n  z-index: 1;\n  position: relative;\n  width: 521.4814814815px;\n  height: 65.1851851852px;\n  left: 150.3703703704px;\n  top: 20px;\n  -webkit-border-radius: 67.4074074074px;\n          border-radius: 67.4074074074px;\n  background: #353535;\n}\n.player__container__title {\n  position: relative;\n  top: 17.037037037px;\n  left: -51.8518518519px;\n  font-family: \"SF PRO Display\";\n  font-size: 25.9259259259px;\n  line-height: 31.1111111111px;\n}\n.player__play-btn-onPlay {\n  position: relative;\n  margin-left: 670.3703703704px;\n  margin-top: 452.5925925926px;\n  width: 81.4814814815px;\n  height: 81.4814814815px;\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n  background: url('https://semenone.github.io/fitness/Play.png') rgba(45, 45, 45, 0.2) 33.3333333333px 26.6666666667px no-repeat;\n  background-size: 24.4444444444px 29.6296296296px;\n  -webkit-backdrop-filter: blur(7px);\n  backdrop-filter: blur(7px);\n}\n.player__play-btn-onPlay.hover {\n  background-color: #e87000;\n}\n.player__play-btn-onPause {\n  position: relative;\n  margin-left: 670.3703703704px;\n  margin-top: 452.5925925926px;\n  width: 81.4814814815px;\n  height: 81.4814814815px;\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n  background: url('https://semenone.github.io/fitness/Pause.png') rgba(45, 45, 45, 0.2) 28.8888888889px 26.6666666667px no-repeat;\n  background-size: 24.4444444444px 29.6296296296px;\n  -webkit-backdrop-filter: blur(7px);\n  backdrop-filter: blur(7px);\n}\n.player__play-btn-onPause.hover {\n  background-color: #e87000;\n}\n.player__play {\n  position: relative;\n  width: 56px;\n  height: 36px;\n  margin-left: 690.3703703704px;\n  margin-top: 0.7407407407px;\n  font-family: \"SF PRO Display\";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 30px;\n  line-height: 36px;\n  color: #FFFFFF;\n}\n.player__timeStrip {\n  position: relative;\n  width: 1162.962962963px;\n  height: 20.7407407407px;\n  margin-left: 14.8148148148px;\n  top: 29.6296296296px;\n  float: left;\n  background: #ffffff;\n  -webkit-border-radius: 14.8148148148px;\n          border-radius: 14.8148148148px;\n}\n.player__timeStrip__pointer {\n  position: relative;\n  width: 113.3333333333px;\n  height: 9.6296296296px;\n  top: 5.1851851852px;\n  background: #616161;\n  -webkit-border-radius: 7.4074074074px;\n          border-radius: 7.4074074074px;\n}\n.player__timeStrip.hover {\n  position: relative;\n  width: 1162.962962963px;\n  height: 41.4814814815px;\n  margin-left: 14.8148148148px;\n  top: 22.2222222222px;\n  float: left;\n  background: #ffffff;\n  -webkit-border-radius: 19.2592592593px;\n          border-radius: 19.2592592593px;\n}\n.player__timeStrip.hover .player__timeStrip__pointer {\n  position: relative;\n  width: 113.3333333333px;\n  height: 35.5555555556px;\n  top: 2.962962963px;\n  background: url('https://semenone.github.io/fitness/menu.png') #e87000 45.1851851852px 6.6666666667px no-repeat;\n  background-size: 22.962962963px 22.2222222222px;\n  -webkit-border-radius: 17.7777777778px;\n          border-radius: 17.7777777778px;\n}\n.player__video-duration {\n  position: fixed;\n  width: 88.8888888889px;\n  height: 34.8148148148px;\n  margin-left: 1200px;\n  margin-top: 22.2222222222px;\n  font-family: \"SF PRO Display\";\n  font-size: 28.8888888889px;\n  line-height: 34.8148148148px;\n  font-weight: bold;\n  text-align: left;\n  float: left;\n  color: #ffffff;\n  white-space: nowrap;\n  overflow: hidden;\n}\n.player__next-video {\n  position: fixed;\n  width: 454.8148148148px;\n  height: 110.3703703704px;\n  right: -222.2222222222px;\n  bottom: 123.7037037037px;\n  float: left;\n}\n.player__next-video__item {\n  width: 197.037037037px;\n  height: 110.3703703704px;\n  left: 0px;\n  top: 0px;\n  -webkit-border-radius: 5.9259259259px;\n          border-radius: 5.9259259259px;\n  background-size: cover;\n  float: left;\n}\n.player__next-video__item__side-frame {\n  position: absolute;\n  width: 7.4074074074px;\n  height: 110.3703703704px;\n  margin-left: -1.4814814815px;\n  -webkit-border-radius: 8px 0px 0px 8px;\n          border-radius: 8px 0px 0px 8px;\n}\n.player__next-video__item__next-icon {\n  position: absolute;\n  width: 24.4444444444px;\n  height: 24.4444444444px;\n  margin-left: 85.9259259259px;\n  margin-top: 42.962962963px;\n}\n.player__next-video__item.hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n.player__next-video__tag {\n  position: fixed;\n  width: 69.6296296296px;\n  height: 24.4444444444px;\n  margin-top: 60.7407407407px;\n  margin-left: -101.4814814815px;\n  -webkit-border-radius: 2.2222222222px;\n          border-radius: 2.2222222222px;\n  padding-top: 4.4444444444px;\n  float: left;\n  text-align: center;\n  font-family: \"SF PRO Display\";\n  font-weight: bold;\n  font-size: 11.8518518519px;\n  line-height: 14.0740740741px;\n}\n.player__next-video__title {\n  position: fixed;\n  width: 233.3333333333px;\n  height: 25.9259259259px;\n  margin-top: 25.9259259259px;\n  margin-left: -265.1851851852px;\n  float: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-family: \"SF PRO Display\";\n  font-weight: 600;\n  font-size: 23.7037037037px;\n  line-height: 28.1481481481px;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZW15b24vZml0bmVzcy1hcHAvc3JjL2FwcC92aWRlby1wbGF5ZXIvdmlkZW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWRlby1wbGF5ZXIvdmlkZW8tcGxheWVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NlbXlvbi9maXRuZXNzLWFwcC9zdHlsZXMvX21peGlucy5zY3NzIiwiL1VzZXJzL3NlbXlvbi9maXRuZXNzLWFwcC9zdHlsZXMvX3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDSk47QURNSTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNKTjtBRE9FO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtFQUNBLHNGQUFBO0VFZ0JGLDJCQUFBO0VBQ0EsZ0RBQUE7QURwQkY7QURLSTtFQUNFLHNGQUFBO0VFYUosMkJBQUE7RUFDQSxnREFBQTtBRGZGO0FES0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLG1CRzFCUTtBRnVCWjtBRElJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJHbEJTO0VIbUJULDBCQUFBO0VBQ0EsNEJBQUE7QUNGTjtBREtFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO1VBQUEsa0JBQUE7RUFDQSw4SEFBQTtFQUNBLGdEQUFBO0VFdEJBLGtDQUFBO0VBQ0EsMEJBQUE7QURvQko7QURHSTtFQUNFLHlCRzdDRztBRjRDVDtBRElFO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO1VBQUEsa0JBQUE7RUFDQSwrSEFBQTtFQUNBLGdEQUFBO0VFcENBLGtDQUFBO0VBQ0EsMEJBQUE7QURtQ0o7QURFSTtFQUNFLHlCRzNERztBRjJEVDtBREdFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2Qkd6RFc7RUgwRFgsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNESjtBREdFO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkd6Rkk7RUgwRkosc0NBQUE7VUFBQSw4QkFBQTtBQ0RKO0FERUk7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CRzVGQztFSDZGRCxxQ0FBQTtVQUFBLDZCQUFBO0FDQU47QURFSTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJHMUdFO0VIMkdGLHNDQUFBO1VBQUEsOEJBQUE7QUNBTjtBRENNO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtFQUNBLCtDQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtBQ0NSO0FER0U7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkczR1c7RUg0R1gsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0duSUk7RUhvSUosbUJBQUE7RUFDQSxnQkFBQTtBQ0RKO0FER0U7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FDREo7QURFSTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNBTjtBRENNO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0FDQ1I7QURDTTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNDUjtBRENNO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ0NSO0FERUk7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkdoS1M7RUhpS1QsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDQU47QURFSTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkcvS1M7RUhnTFQsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUNBTiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvLXBsYXllci92aWRlby1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvbWl4aW5zJztcbkBpbXBvcnQgJ3N0eWxlcy92YXJzJztcblxuLnBsYXllciB7XG4gICZfX3dyYXBwZXIge1xuICAgICZfX2ZyYW1lLWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMzAwJTtcbiAgICAgIGxlZnQ6IC0xMDAlO1xuICAgIH1cbiAgICAmX19mcmFtZS1jb250YWluZXIgZGl2IHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHRvcDogLTUwJTtcbiAgICAgIGhlaWdodDogMjAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICAmX19iYWNrLWJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IGFkanVzdFB4KDEwM3B4KTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IGFkanVzdFB4KDEwM3B4KTtcbiAgICBsZWZ0OiBhZGp1c3RQeCg3NnB4KTtcbiAgICB0b3A6IGFkanVzdFB4KDIwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoI3skaW1hZ2Utc3JjfS9hcnJvdy1sZWZ0LnBuZykgJGdyYXkgbm8tcmVwZWF0O1xuICAgIEBpbmNsdWRlIGJhY2stYnRuLXBvc2l0aW9uO1xuICAgICYuaG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdXJsKCN7JGltYWdlLXNyY30vYXJyb3ctbGVmdC5wbmcpICRibGFjayBuby1yZXBlYXQ7XG4gICAgICBAaW5jbHVkZSBiYWNrLWJ0bi1wb3NpdGlvbjtcbiAgICB9XG4gIH1cbiAgJl9fY29udGFpbmVyIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogYWRqdXN0UHgoNzA0cHgpO1xuICAgIGhlaWdodDogYWRqdXN0UHgoODhweCk7XG4gICAgbGVmdDogYWRqdXN0UHgoMjAzcHgpO1xuICAgIHRvcDogYWRqdXN0UHgoMjdweCk7XG4gICAgYm9yZGVyLXJhZGl1czogYWRqdXN0UHgoOTFweCk7XG4gICAgYmFja2dyb3VuZDogJGRhcmstZ3JleTtcbiAgICAmX190aXRsZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IGFkanVzdFB4KDIzcHgpO1xuICAgICAgbGVmdDogYWRqdXN0UHgoLTcwcHgpO1xuICAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgICBmb250LXNpemU6IGFkanVzdFB4KDM1cHgpO1xuICAgICAgbGluZS1oZWlnaHQ6IGFkanVzdFB4KDQycHgpO1xuICAgIH1cbiAgfVxuICAmX19wbGF5LWJ0bi1vblBsYXkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tbGVmdDogYWRqdXN0UHgoOTA1cHgpO1xuICAgIG1hcmdpbi10b3A6IGFkanVzdFB4KDYxMXB4KTtcbiAgICB3aWR0aDogYWRqdXN0UHgoMTEwcHgpO1xuICAgIGhlaWdodDogYWRqdXN0UHgoMTEwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoI3skaW1hZ2Utc3JjfS9QbGF5LnBuZykgcmdiYSg0NSwgNDUsIDQ1LCAwLjIpIGFkanVzdFB4KDQ1cHgpIGFkanVzdFB4KDM2cHgpIG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGFkanVzdFB4KDMzcHgpIGFkanVzdFB4KDQwcHgpO1xuICAgIEBpbmNsdWRlIGJhY2tkcm9wLWZpbHRlci1ibHVyKDdweCk7XG4gICAgJi5ob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xuICAgIH1cbiAgfVxuICAmX19wbGF5LWJ0bi1vblBhdXNlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWxlZnQ6IGFkanVzdFB4KDkwNXB4KTtcbiAgICBtYXJnaW4tdG9wOiBhZGp1c3RQeCg2MTFweCk7XG4gICAgd2lkdGg6IGFkanVzdFB4KDExMHB4KTtcbiAgICBoZWlnaHQ6IGFkanVzdFB4KDExMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdXJsKCN7JGltYWdlLXNyY30vUGF1c2UucG5nKSByZ2JhKDQ1LCA0NSwgNDUsIDAuMikgYWRqdXN0UHgoMzlweCkgYWRqdXN0UHgoMzZweCkgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogYWRqdXN0UHgoMzNweCkgYWRqdXN0UHgoNDBweCk7XG4gICAgQGluY2x1ZGUgYmFja2Ryb3AtZmlsdGVyLWJsdXIoN3B4KTtcbiAgICAmLmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XG4gICAgfVxuICB9XG4gICZfX3BsYXkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNTZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGFkanVzdFB4KDkzMnB4KTtcbiAgICBtYXJnaW4tdG9wOiBhZGp1c3RQeCgxcHgpO1xuICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgfVxuICAmX190aW1lU3RyaXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogYWRqdXN0UHgoMTU3MHB4KTtcbiAgICBoZWlnaHQ6IGFkanVzdFB4KDI4cHgpO1xuICAgIG1hcmdpbi1sZWZ0OiBhZGp1c3RQeCgyMHB4KTtcbiAgICB0b3A6IGFkanVzdFB4KDQwcHgpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJhY2tncm91bmQ6ICR3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiBhZGp1c3RQeCgyMHB4KTtcbiAgICAmX19wb2ludGVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiBhZGp1c3RQeCgxNTNweCk7XG4gICAgICBoZWlnaHQ6IGFkanVzdFB4KDEzcHgpO1xuICAgICAgdG9wOiBhZGp1c3RQeCg3cHgpO1xuICAgICAgYmFja2dyb3VuZDogJGdyYXk7XG4gICAgICBib3JkZXItcmFkaXVzOiBhZGp1c3RQeCgxMHB4KTtcbiAgICB9XG4gICAgJi5ob3ZlciB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogYWRqdXN0UHgoMTU3MHB4KTtcbiAgICAgIGhlaWdodDogYWRqdXN0UHgoNTZweCk7XG4gICAgICBtYXJnaW4tbGVmdDogYWRqdXN0UHgoMjBweCk7XG4gICAgICB0b3A6IGFkanVzdFB4KDMwcHgpO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiBhZGp1c3RQeCgyNnB4KTtcbiAgICAgIC5wbGF5ZXJfX3RpbWVTdHJpcF9fcG9pbnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IGFkanVzdFB4KDE1M3B4KTtcbiAgICAgICAgaGVpZ2h0OiBhZGp1c3RQeCg0OHB4KTtcbiAgICAgICAgdG9wOiBhZGp1c3RQeCg0cHgpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoI3skaW1hZ2Utc3JjfS9tZW51LnBuZykgJG9yYW5nZSBhZGp1c3RQeCg2MXB4KSBhZGp1c3RQeCg5cHgpIG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhZGp1c3RQeCgzMXB4KSBhZGp1c3RQeCgzMHB4KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogYWRqdXN0UHgoMjRweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICZfX3ZpZGVvLWR1cmF0aW9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IGFkanVzdFB4KDEyMHB4KTtcbiAgICBoZWlnaHQ6IGFkanVzdFB4KDQ3cHgpO1xuICAgIG1hcmdpbi1sZWZ0OiBhZGp1c3RQeCgxNjIwcHgpO1xuICAgIG1hcmdpbi10b3A6IGFkanVzdFB4KDMwcHgpO1xuICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xuICAgIGZvbnQtc2l6ZTogYWRqdXN0UHgoMzlweCk7XG4gICAgbGluZS1oZWlnaHQ6IGFkanVzdFB4KDQ3cHgpO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6ICR3aGl0ZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgJl9fbmV4dC12aWRlbyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiBhZGp1c3RQeCg2MTRweCk7XG4gICAgaGVpZ2h0OiBhZGp1c3RQeCgxNDlweCk7XG4gICAgcmlnaHQ6IGFkanVzdFB4KC0zMDBweCk7XG4gICAgYm90dG9tOiBhZGp1c3RQeCgxNjdweCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgJl9faXRlbSB7XG4gICAgICB3aWR0aDogYWRqdXN0UHgoMjY2cHgpO1xuICAgICAgaGVpZ2h0OiBhZGp1c3RQeCgxNDlweCk7XG4gICAgICBsZWZ0OiAwcHg7XG4gICAgICB0b3A6IDBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IGFkanVzdFB4KDhweCk7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAmX19zaWRlLWZyYW1lIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogYWRqdXN0UHgoMTBweCk7XG4gICAgICAgIGhlaWdodDogYWRqdXN0UHgoMTQ5cHgpO1xuICAgICAgICBtYXJnaW4tbGVmdDogYWRqdXN0UHgoLTJweCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweCAwcHggMHB4IDhweDtcbiAgICAgIH1cbiAgICAgICZfX25leHQtaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IGFkanVzdFB4KDMzcHgpO1xuICAgICAgICBoZWlnaHQ6IGFkanVzdFB4KDMzcHgpO1xuICAgICAgICBtYXJnaW4tbGVmdDogYWRqdXN0UHgoMTE2cHgpO1xuICAgICAgICBtYXJnaW4tdG9wOiBhZGp1c3RQeCg1OHB4KTtcbiAgICAgIH1cbiAgICAgICYuaG92ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICB9XG4gICAgfVxuICAgICZfX3RhZyB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB3aWR0aDogYWRqdXN0UHgoOTRweCk7XG4gICAgICBoZWlnaHQ6IGFkanVzdFB4KDMzcHgpO1xuICAgICAgbWFyZ2luLXRvcDogYWRqdXN0UHgoODJweCk7XG4gICAgICBtYXJnaW4tbGVmdDogYWRqdXN0UHgoLTEzN3B4KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IGFkanVzdFB4KDNweCk7XG4gICAgICBwYWRkaW5nLXRvcDogYWRqdXN0UHgoNnB4KTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogYWRqdXN0UHgoMTZweCk7XG4gICAgICBsaW5lLWhlaWdodDogYWRqdXN0UHgoMTlweCk7XG4gICAgfVxuICAgICZfX3RpdGxlIHtcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIHdpZHRoOiBhZGp1c3RQeCgzMTVweCk7XG4gICAgICBoZWlnaHQ6IGFkanVzdFB4KDM1cHgpO1xuICAgICAgbWFyZ2luLXRvcDogYWRqdXN0UHgoMzVweCk7XG4gICAgICBtYXJnaW4tbGVmdDogYWRqdXN0UHgoLTM1OHB4KTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogYWRqdXN0UHgoMzJweCk7XG4gICAgICBsaW5lLWhlaWdodDogYWRqdXN0UHgoMzhweCk7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gIH1cbn1cblxuIiwiLnBsYXllcl9fd3JhcHBlcl9fZnJhbWUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDMwMCU7XG4gIGxlZnQ6IC0xMDAlO1xufVxuLnBsYXllcl9fd3JhcHBlcl9fZnJhbWUtY29udGFpbmVyIGRpdiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAtNTAlO1xuICBoZWlnaHQ6IDIwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnBsYXllcl9fYmFjay1idG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiA3Ni4yOTYyOTYyOTYzcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDc2LjI5NjI5NjI5NjNweDtcbiAgbGVmdDogNTYuMjk2Mjk2Mjk2M3B4O1xuICB0b3A6IDE0LjgxNDgxNDgxNDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB1cmwofmFzc2V0cy9pbWFnZXMvYXJyb3ctbGVmdC5wbmcpICM2MTYxNjEgbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMzIuNTkyNTkyNTkyNnB4IDMyLjU5MjU5MjU5MjZweDtcbn1cbi5wbGF5ZXJfX2JhY2stYnRuLmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdXJsKH5hc3NldHMvaW1hZ2VzL2Fycm93LWxlZnQucG5nKSAjMDAwMDAwIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDMyLjU5MjU5MjU5MjZweCAzMi41OTI1OTI1OTI2cHg7XG59XG4ucGxheWVyX19jb250YWluZXIge1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MjEuNDgxNDgxNDgxNXB4O1xuICBoZWlnaHQ6IDY1LjE4NTE4NTE4NTJweDtcbiAgbGVmdDogMTUwLjM3MDM3MDM3MDRweDtcbiAgdG9wOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA2Ny40MDc0MDc0MDc0cHg7XG4gIGJhY2tncm91bmQ6ICMzNTM1MzU7XG59XG4ucGxheWVyX19jb250YWluZXJfX3RpdGxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE3LjAzNzAzNzAzN3B4O1xuICBsZWZ0OiAtNTEuODUxODUxODUxOXB4O1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheVwiO1xuICBmb250LXNpemU6IDI1LjkyNTkyNTkyNTlweDtcbiAgbGluZS1oZWlnaHQ6IDMxLjExMTExMTExMTFweDtcbn1cbi5wbGF5ZXJfX3BsYXktYnRuLW9uUGxheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IDY3MC4zNzAzNzAzNzA0cHg7XG4gIG1hcmdpbi10b3A6IDQ1Mi41OTI1OTI1OTI2cHg7XG4gIHdpZHRoOiA4MS40ODE0ODE0ODE1cHg7XG4gIGhlaWdodDogODEuNDgxNDgxNDgxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHVybCh+YXNzZXRzL2ltYWdlcy9QbGF5LnBuZykgcmdiYSg0NSwgNDUsIDQ1LCAwLjIpIDMzLjMzMzMzMzMzMzNweCAyNi42NjY2NjY2NjY3cHggbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDI0LjQ0NDQ0NDQ0NDRweCAyOS42Mjk2Mjk2Mjk2cHg7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xufVxuLnBsYXllcl9fcGxheS1idG4tb25QbGF5LmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4NzAwMDtcbn1cbi5wbGF5ZXJfX3BsYXktYnRuLW9uUGF1c2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiA2NzAuMzcwMzcwMzcwNHB4O1xuICBtYXJnaW4tdG9wOiA0NTIuNTkyNTkyNTkyNnB4O1xuICB3aWR0aDogODEuNDgxNDgxNDgxNXB4O1xuICBoZWlnaHQ6IDgxLjQ4MTQ4MTQ4MTVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB1cmwofmFzc2V0cy9pbWFnZXMvUGF1c2UucG5nKSByZ2JhKDQ1LCA0NSwgNDUsIDAuMikgMjguODg4ODg4ODg4OXB4IDI2LjY2NjY2NjY2NjdweCBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjQuNDQ0NDQ0NDQ0NHB4IDI5LjYyOTYyOTYyOTZweDtcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDdweCk7XG59XG4ucGxheWVyX19wbGF5LWJ0bi1vblBhdXNlLmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4NzAwMDtcbn1cbi5wbGF5ZXJfX3BsYXkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1NnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIG1hcmdpbi1sZWZ0OiA2OTAuMzcwMzcwMzcwNHB4O1xuICBtYXJnaW4tdG9wOiAwLjc0MDc0MDc0MDdweDtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUFJPIERpc3BsYXlcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5wbGF5ZXJfX3RpbWVTdHJpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDExNjIuOTYyOTYyOTYzcHg7XG4gIGhlaWdodDogMjAuNzQwNzQwNzQwN3B4O1xuICBtYXJnaW4tbGVmdDogMTQuODE0ODE0ODE0OHB4O1xuICB0b3A6IDI5LjYyOTYyOTYyOTZweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDE0LjgxNDgxNDgxNDhweDtcbn1cbi5wbGF5ZXJfX3RpbWVTdHJpcF9fcG9pbnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDExMy4zMzMzMzMzMzMzcHg7XG4gIGhlaWdodDogOS42Mjk2Mjk2Mjk2cHg7XG4gIHRvcDogNS4xODUxODUxODUycHg7XG4gIGJhY2tncm91bmQ6ICM2MTYxNjE7XG4gIGJvcmRlci1yYWRpdXM6IDcuNDA3NDA3NDA3NHB4O1xufVxuLnBsYXllcl9fdGltZVN0cmlwLmhvdmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTE2Mi45NjI5NjI5NjNweDtcbiAgaGVpZ2h0OiA0MS40ODE0ODE0ODE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNC44MTQ4MTQ4MTQ4cHg7XG4gIHRvcDogMjIuMjIyMjIyMjIyMnB4O1xuICBmbG9hdDogbGVmdDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTkuMjU5MjU5MjU5M3B4O1xufVxuLnBsYXllcl9fdGltZVN0cmlwLmhvdmVyIC5wbGF5ZXJfX3RpbWVTdHJpcF9fcG9pbnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDExMy4zMzMzMzMzMzMzcHg7XG4gIGhlaWdodDogMzUuNTU1NTU1NTU1NnB4O1xuICB0b3A6IDIuOTYyOTYyOTYzcHg7XG4gIGJhY2tncm91bmQ6IHVybCh+YXNzZXRzL2ltYWdlcy9tZW51LnBuZykgI2U4NzAwMCA0NS4xODUxODUxODUycHggNi42NjY2NjY2NjY3cHggbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIyLjk2Mjk2Mjk2M3B4IDIyLjIyMjIyMjIyMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMTcuNzc3Nzc3Nzc3OHB4O1xufVxuLnBsYXllcl9fdmlkZW8tZHVyYXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA4OC44ODg4ODg4ODg5cHg7XG4gIGhlaWdodDogMzQuODE0ODE0ODE0OHB4O1xuICBtYXJnaW4tbGVmdDogMTIwMHB4O1xuICBtYXJnaW4tdG9wOiAyMi4yMjIyMjIyMjIycHg7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIFBSTyBEaXNwbGF5XCI7XG4gIGZvbnQtc2l6ZTogMjguODg4ODg4ODg4OXB4O1xuICBsaW5lLWhlaWdodDogMzQuODE0ODE0ODE0OHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBsYXllcl9fbmV4dC12aWRlbyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDQ1NC44MTQ4MTQ4MTQ4cHg7XG4gIGhlaWdodDogMTEwLjM3MDM3MDM3MDRweDtcbiAgcmlnaHQ6IC0yMjIuMjIyMjIyMjIyMnB4O1xuICBib3R0b206IDEyMy43MDM3MDM3MDM3cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnBsYXllcl9fbmV4dC12aWRlb19faXRlbSB7XG4gIHdpZHRoOiAxOTcuMDM3MDM3MDM3cHg7XG4gIGhlaWdodDogMTEwLjM3MDM3MDM3MDRweDtcbiAgbGVmdDogMHB4O1xuICB0b3A6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNS45MjU5MjU5MjU5cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnBsYXllcl9fbmV4dC12aWRlb19faXRlbV9fc2lkZS1mcmFtZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcuNDA3NDA3NDA3NHB4O1xuICBoZWlnaHQ6IDExMC4zNzAzNzAzNzA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMS40ODE0ODE0ODE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweCAwcHggMHB4IDhweDtcbn1cbi5wbGF5ZXJfX25leHQtdmlkZW9fX2l0ZW1fX25leHQtaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI0LjQ0NDQ0NDQ0NDRweDtcbiAgaGVpZ2h0OiAyNC40NDQ0NDQ0NDQ0cHg7XG4gIG1hcmdpbi1sZWZ0OiA4NS45MjU5MjU5MjU5cHg7XG4gIG1hcmdpbi10b3A6IDQyLjk2Mjk2Mjk2M3B4O1xufVxuLnBsYXllcl9fbmV4dC12aWRlb19faXRlbS5ob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cbi5wbGF5ZXJfX25leHQtdmlkZW9fX3RhZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDY5LjYyOTYyOTYyOTZweDtcbiAgaGVpZ2h0OiAyNC40NDQ0NDQ0NDQ0cHg7XG4gIG1hcmdpbi10b3A6IDYwLjc0MDc0MDc0MDdweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMDEuNDgxNDgxNDgxNXB4O1xuICBib3JkZXItcmFkaXVzOiAyLjIyMjIyMjIyMjJweDtcbiAgcGFkZGluZy10b3A6IDQuNDQ0NDQ0NDQ0NHB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMS44NTE4NTE4NTE5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNC4wNzQwNzQwNzQxcHg7XG59XG4ucGxheWVyX19uZXh0LXZpZGVvX190aXRsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIzMy4zMzMzMzMzMzMzcHg7XG4gIGhlaWdodDogMjUuOTI1OTI1OTI1OXB4O1xuICBtYXJnaW4tdG9wOiAyNS45MjU5MjU5MjU5cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMjY1LjE4NTE4NTE4NTJweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LWZhbWlseTogXCJTRiBQUk8gRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIzLjcwMzcwMzcwMzdweDtcbiAgbGluZS1oZWlnaHQ6IDI4LjE0ODE0ODE0ODFweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59IiwiQGltcG9ydCAndmFycyc7XG5cbkBtaXhpbiB2YWxpZ24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBtaXhpbiBoYWxpZ24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuXG5AbWl4aW4gaHZhbGlnbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuQG1peGluIHRyYW5zZm9ybSgkdHJhbnNmb3Jtcykge1xuXHQtd2Via2l0LXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdHRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCR2YWx1ZSkge1xuICAtd2Via2l0LWJveC1zaGFkb3c6ICR2YWx1ZTtcbiAgLW1vei1ib3gtc2hhZG93OiAkdmFsdWU7XG4gIGJveC1zaGFkb3c6ICR2YWx1ZTtcbn1cblxuQG1peGluIHNrZXcgKCR4LCAkeSkge1xuXHRAaW5jbHVkZSB0cmFuc2Zvcm0oc2tldygjeyR4fWRlZywgI3skeX1kZWcpKTtcbn1cblxuQG1peGluIGJhY2tkcm9wLWZpbHRlci1ibHVyKCR2YWx1ZSkge1xuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCR2YWx1ZSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCR2YWx1ZSk7XG59XG5cbkBtaXhpbiBiYWNrLWJ0bi1wb3NpdGlvbiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBhZGp1c3RQeCg0NHB4KSBhZGp1c3RQeCg0NHB4KTtcbn1cblxuQGZ1bmN0aW9uIGFkanVzdFB4KCRweCkge1xuICAgIEByZXR1cm4gJGFzcGVjdC1yYXRpbyAqICRweDtcbn1cblxuQGZ1bmN0aW9uIGNhbGNab29tKCRzY3JlZW4tcmVzb2x1dGlvbikge1xuICAgIEByZXR1cm4gJHNjcmVlbi1yZXNvbHV0aW9uLyRoZDtcbn1cbiIsIiRoZDogMTI4MHB4O1xuJGhkLXJlYWR5LTEzNjY6IDEzNjZweDtcbiRoZC1yZWFkeS0xNDAwOiAxNDAwcHg7XG4kaGQtcmVhZHktMTY4MDogMTY4MHB4O1xuJGZ1bGwtaGQ6IDE5MjBweDtcbiR1aGQ6IDM4NDBweDtcblxuJHByb2dyYW1tYWJsZS1kaW1lbnNpb246IDEyODA7XG4kZGVzaWduLWRpbWVuc2lvbjogMTcyODtcblxuJGFzcGVjdC1yYXRpbzogJHByb2dyYW1tYWJsZS1kaW1lbnNpb24gLyAkZGVzaWduLWRpbWVuc2lvbjtcblxuJHdoaXRlOiAjZmZmZmZmO1xuJGxpZ2h0LWJsYWNrOiAjMjMyMzIzO1xuJGJsYWNrOiAjMDAwMDAwO1xuJGxpZ2h0LWdyZXk6ICM4ZjhmOGY7XG4kZ3JheTogIzYxNjE2MTtcbiRkYXJrLWdyZXk6ICMzNTM1MzU7XG4kbGlnaHQtcGluazogI0ZBRTJFMjtcbiRvcmFuZ2U6ICNlODcwMDA7XG4kYXBwLWJhY2tncm91bmQtY29sb3I6ICMyNjI2MjY7XG4kYXBwLXByaW1hcnktY29sb3I6ICR3aGl0ZTtcbiRhcHAtc2Vjb25kYXJ5LWNvbG9yOiAjZjhmZjEzO1xuXG4kc3JjOiBcIn5cIjtcblxuJGltYWdlLXNyYzogXCIjeyRzcmN9YXNzZXRzL2ltYWdlc1wiO1xuXG4kZm9udHMtc3JjOiAnI3skc3JjfWFzc2V0cy9mb250cy9TRi1QUk8tRGlzcGxheSc7XG5cbiRwcmltYXJ5LWZvbnQ6ICdTRiBQUk8gRGlzcGxheSc7XG5cbiRmb250LWJsYWNrOiAnU0YgUFJPIERpc3BsYXkgQmxhY2snO1xuJGZvbnQtYmxhY2tJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBCbGFja0l0YWxpYyc7XG4kZm9udC1ib2xkOiAnU0YgUFJPIERpc3BsYXkgQm9sZCc7XG4kZm9udC1ib2xkSXRhbGljOiAnU0YgUFJPIERpc3BsYXkgQm9sZEl0YWxpYyc7XG4kZm9udC1oZWF2eTogJ1NGIFBSTyBEaXNwbGF5IEhlYXZ5JztcbiRmb250LWhlYXZ5SXRhbGljOiAnU0YgUFJPIERpc3BsYXkgSGVhdnlJdGFsaWMnO1xuJGZvbnQtbGlnaHQ6ICdTRiBQUk8gRGlzcGxheSBMaWdodCc7XG4kZm9udC1saWdodEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IExpZ2h0SXRhbGljJztcbiRmb250LW1lZGl1bTogJ1NGIFBSTyBEaXNwbGF5IE1lZGl1bSc7XG4kZm9udC1tZWRpdW1JdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBNZWRpdW1JdGFsaWMnO1xuJGZvbnQtcmVndWxhcjogJ1NGIFBSTyBEaXNwbGF5IFJlZ3VsYXInO1xuJGZvbnQtcmVndWxhckl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFJlZ3VsYXJJdGFsaWMnO1xuJGZvbnQtc2VtaWJvbGQ6ICdTRiBQUk8gRGlzcGxheSBTZW1pYm9sZCc7XG4kZm9udC1zZW1pYm9sZEl0YWxpYzogJ1NGIFBSTyBEaXNwbGF5IFNlbWlib2xkSXRhbGljJztcbiRmb250LXRoaW46ICdTRiBQUk8gRGlzcGxheSBUaGluJztcbiRmb250LXRoaW5JdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBUaGluSXRhbGljJztcbiRmb250LXVsdHJhbGlnaHQ6ICdTRiBQUk8gRGlzcGxheSBVbHRyYWxpZ2h0JztcbiRmb250LXVsdHJhbGlnaHRJdGFsaWM6ICdTRiBQUk8gRGlzcGxheSBVbHRyYWxpZ2h0SXRhbGljJztcbiJdfQ== */");

/***/ }),

/***/ "./src/app/video-player/video-player.component.ts":
/*!********************************************************!*\
  !*** ./src/app/video-player/video-player.component.ts ***!
  \********************************************************/
/*! exports provided: VideoPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerComponent", function() { return VideoPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/youtube-gateway.service */ "./src/app/services/youtube-gateway.service.ts");
/* harmony import */ var _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/models/tag.model */ "./src/app/shared/models/tag.model.ts");
/* harmony import */ var _services_video_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/video.service */ "./src/app/services/video.service.ts");
/* harmony import */ var _app_paths__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-paths */ "./src/app/app-paths.ts");
/* harmony import */ var _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @alignedcode/tvbase */ "./node_modules/@alignedcode/tvbase/fesm5/alignedcode-tvbase.js");
/* harmony import */ var _services_route_events_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/route-events.service */ "./src/app/services/route-events.service.ts");











var VideoPlayerComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](VideoPlayerComponent, _super);
    function VideoPlayerComponent(parent, keysService, elementRef, route, location, videoService, youtubeGatewayService, router, sanitizer, renderer, window, routeEventsService) {
        var _this = _super.call(this, elementRef, parent, keysService, new Map([
            [_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_9__["KEYS"].LEFT, function () { if (_this.isTimeStripActive())
                    _this.rewind(); }],
            [_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_9__["KEYS"].RIGHT, function () { if (_this.isTimeStripActive())
                    _this.forward(); }],
            [_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_9__["KEYS"].REWIND, function () { return _this.rewind(); }],
            [_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_9__["KEYS"].FORWARD, function () { return _this.forward(); }]
        ])) || this;
        _this.route = route;
        _this.location = location;
        _this.videoService = videoService;
        _this.youtubeGatewayService = youtubeGatewayService;
        _this.router = router;
        _this.sanitizer = sanitizer;
        _this.renderer = renderer;
        _this.window = window;
        _this.routeEventsService = routeEventsService;
        _this.isPaused = false;
        _this.stripPointerPosition = 7;
        _this.MAIN_TAG_POS = 0;
        _this.YT = _this.window['YT'];
        return _this;
    }
    VideoPlayerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.activeVideo = data.activeVideo;
            console.log(data);
            _this.videoUrl = data.url;
            _this.nextVideo = _this.youtubeGatewayService.getNextVideoById(_this.activeVideo.id);
            _this.init();
        });
    };
    //TODO: refactor to viewChild
    VideoPlayerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var timeStrip = this.timeStrip.nativeElement;
        var timeStripPointer = this.timeStripPointer.nativeElement;
        var timeStripWidth = timeStrip.getBoundingClientRect().width;
        var timeStripPointerWidth = timeStripPointer.getBoundingClientRect().width;
        setTimeout(function () { return _this.videoWatching(timeStripWidth, timeStripPointerWidth); }, 3000);
    };
    VideoPlayerComponent.prototype.init = function () {
        var _this = this;
        if (this.YT) {
            this.startVideo();
            return;
        }
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window['onYouTubeIframeAPIReady'] = function () { return _this.startVideo(); };
    };
    VideoPlayerComponent.prototype.startVideo = function () {
        if (!this.player) {
            this.player = new this.window['YT'].Player('player', {
                height: '100%',
                width: '100%',
                videoId: this.activeVideo.id,
                playerVars: {
                    autoplay: 1,
                    modestbranding: 1,
                    controls: 0,
                    disablekb: 1,
                    rel: 0,
                    showinfo: 0,
                    fs: 0,
                    playsinline: 1,
                }
            });
        }
    };
    VideoPlayerComponent.prototype.back = function () {
        clearInterval(this.stripPointerUpdatePosition);
        if (this.routeEventsService.getPrevMainUrl() != 'categories') {
            this.router.navigate([this.routeEventsService.getPrevMainUrl(), this.activeVideo.id]);
        }
        else
            this.router.navigate([
                this.routeEventsService.getPrevMainUrl(),
                this.activeVideo.tags[0],
                this.activeVideo.id
            ]);
    };
    VideoPlayerComponent.prototype.getTagColor = function (tag) {
        return _shared_models_tag_model__WEBPACK_IMPORTED_MODULE_6__["TagsColors"][tag];
    };
    VideoPlayerComponent.prototype.getVideoPoster = function (video) {
        return this.videoService.getVideoTileImage(video);
    };
    VideoPlayerComponent.prototype.openNextVideoLink = function () {
        this.router.navigate(["/" + _app_paths__WEBPACK_IMPORTED_MODULE_8__["AppPaths"].PLAYER], {
            queryParams: {
                id: this.nextVideo.id,
            }
        });
        this.player.loadVideoById(this.nextVideo.id);
    };
    //TODO: refactor to obseravable
    VideoPlayerComponent.prototype.videoWatching = function (timeStripWidth, timeStripPointerWidth) {
        var _this = this;
        this.stripPointerUpdatePosition = setInterval(function () {
            if (!!_this.player) {
                _this.stripPointerPosition = (_this.player.getCurrentTime() / _this.player.getDuration()) * (timeStripWidth - timeStripPointerWidth);
                if (_this.stripPointerPosition <= 7) {
                    _this.stripPointerPosition = 7;
                }
            }
        }, 1000);
    };
    VideoPlayerComponent.prototype.getTimeToFinish = function () {
        var timeToFinish;
        if (this.player) {
            timeToFinish = this.player.getDuration() - this.player.getCurrentTime();
        }
        else {
            timeToFinish = this.player.getDuration();
        }
        var minutes = Math.trunc(timeToFinish / 60);
        var seconds = Math.trunc(timeToFinish % 60);
        return minutes + ":" + (seconds < 10 ? '0' + seconds : seconds);
    };
    VideoPlayerComponent.prototype.pauseVideo = function () {
        if (this.isPaused) {
            this.player.playVideo();
            this.isPaused = false;
        }
        else {
            this.player.pauseVideo();
            this.isPaused = true;
        }
    };
    VideoPlayerComponent.prototype.rewind = function () {
        var currentTime = this.player.getCurrentTime();
        this.player.seekTo(currentTime - 30, true);
        this.player.playVideo();
    };
    VideoPlayerComponent.prototype.forward = function () {
        var currentTime = this.player.getCurrentTime();
        this.player.seekTo(currentTime + 30, true);
        this.player.playVideo();
    };
    VideoPlayerComponent.prototype.isTimeStripActive = function () {
        var dom = this.elementRef.nativeElement;
        return !!dom.querySelectorAll('.player__timeStrip.hover').length;
    };
    VideoPlayerComponent.ctorParameters = function () { return [
        { type: _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_9__["NavBase"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
        { type: _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_9__["KeysService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _services_video_service__WEBPACK_IMPORTED_MODULE_7__["VideoService"] },
        { type: _services_youtube_gateway_service__WEBPACK_IMPORTED_MODULE_5__["YoutubeGatewayService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: Window },
        { type: _services_route_events_service__WEBPACK_IMPORTED_MODULE_10__["RouteEventsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('timeStrip', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
    ], VideoPlayerComponent.prototype, "timeStrip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('timeStripPointer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
    ], VideoPlayerComponent.prototype, "timeStripPointer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ytp-pause-overlay ytp-scroll-min ytp-scroll-max', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false })
    ], VideoPlayerComponent.prototype, "relatedBar", void 0);
    VideoPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'player',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/video-player/video-player.component.html")).default,
            providers: [
                { provide: Window, useValue: window }
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-player.component.scss */ "./src/app/video-player/video-player.component.scss")).default]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())
    ], VideoPlayerComponent);
    return VideoPlayerComponent;
}(_alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_9__["NavigatableComponent"]));



/***/ }),

/***/ "./src/app/video-player/video-player.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/video-player/video-player.module.ts ***!
  \*****************************************************/
/*! exports provided: VideoPlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayerModule", function() { return VideoPlayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @alignedcode/tvbase */ "./node_modules/@alignedcode/tvbase/fesm5/alignedcode-tvbase.js");
/* harmony import */ var _video_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video-player.component */ "./src/app/video-player/video-player.component.ts");
/* harmony import */ var _activeVideo_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./activeVideo.resolver */ "./src/app/video-player/activeVideo.resolver.ts");
/* harmony import */ var _url_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./url.resolver */ "./src/app/video-player/url.resolver.ts");







var VideoPlayerModule = /** @class */ (function () {
    function VideoPlayerModule() {
    }
    VideoPlayerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _alignedcode_tvbase__WEBPACK_IMPORTED_MODULE_3__["TVBaseModule"],
            ],
            declarations: [_video_player_component__WEBPACK_IMPORTED_MODULE_4__["VideoPlayerComponent"]],
            providers: [_activeVideo_resolver__WEBPACK_IMPORTED_MODULE_5__["ActiveVideoResolver"], _url_resolver__WEBPACK_IMPORTED_MODULE_6__["UrlResolver"]],
            exports: [_video_player_component__WEBPACK_IMPORTED_MODULE_4__["VideoPlayerComponent"]]
        })
    ], VideoPlayerModule);
    return VideoPlayerModule;
}());



/***/ }),

/***/ "./src/assets/images/preloader.gif":
/*!*****************************************!*\
  !*** ./src/assets/images/preloader.gif ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "preloader.gif";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "./package.json", 1);

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    baseUrl: 'localhost:4200',
    version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/semyon/fitness-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
