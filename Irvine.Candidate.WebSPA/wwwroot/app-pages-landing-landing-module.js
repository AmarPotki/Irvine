(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-landing-landing-module"],{

/***/ "./app/pages/landing/landing.component.html":
/*!**************************************************!*\
  !*** ./app/pages/landing/landing.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"landing-header\"> \r\n  <p class=\"logo\">GRADUS</p>\r\n  <p class=\"intro-text\">Angular 5 Material Design Admin Template</p>            \r\n  <p class=\"desc m-0\">Start creating your app with GRADUS template</p>\r\n  <p class=\"desc\"> 8 layouts, 6 color styles, 35+ pages</p>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n     <button mat-raised-button color=\"primary\" *ngIf=\"!authenticated\" (click)=\"login()\">Login</button>\r\n      <a routerLink=\"/register\" mat-raised-button color=\"accent\">Sign up</a>\r\n  </div> \r\n</div>\r\n\r\n<div class=\"container\">\r\n  <h2 class=\"muted-text\">Check out our demo styles</h2>\r\n  <p class=\"muted-text desc\">Fully responsive, organized folder structure, clean & customizable code, easy to use and much more...</p>\r\n  <div fxLayout=\"row wrap\" class=\"py-1\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \r\n        <p class=\"text\">Vertical default menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','default', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-default.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n        <p class=\"text\">Horizontal default menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','default', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/horizontal-default.jpg\">        \r\n        </a>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \r\n        <p class=\"text\">Vertical compact menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','compact', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-compact.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n        <p class=\"text\">Horizontal compact menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','compact', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/horizontal-compact.jpg\">        \r\n        </a>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \r\n        <p class=\"text\">Vertical mini menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','mini', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-mini.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n        <p class=\"text\">Horizontal mini menu</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','mini', false)\" class=\"link\">\r\n            <img src=\"assets/img/landing/horizontal-mini.jpg\">        \r\n        </a>\r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\"> \r\n        <p class=\"text\">Vertical menu RTL</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('vertical','default', true)\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-rtl.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"50\" class=\"demo\">\r\n        <p class=\"text\">Horizontal menu RTL</p>\r\n        <a routerLink=\"/\" (click)=\"changeLayout('horizontal','default', true)\" class=\"link\">\r\n            <img src=\"assets/img/landing/horizontal-rtl.jpg\">        \r\n        </a>\r\n    </div>\r\n  </div> \r\n  <h2 class=\"muted-text\">Skins</h2> \r\n  <div fxLayout=\"row wrap\" class=\"py-1\">\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('indigo-light')\" class=\"link\">\r\n            <img src=\"assets/img/landing/vertical-default.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('teal-light')\" class=\"link\">\r\n            <img src=\"assets/img/landing/teal-light.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('red-light')\" class=\"link\">\r\n            <img src=\"assets/img/landing/red-light.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('blue-dark')\" class=\"link\">\r\n            <img src=\"assets/img/landing/blue-dark.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('green-dark')\" class=\"link\">\r\n            <img src=\"assets/img/landing/green-dark.jpg\">        \r\n        </a>                \r\n    </div>\r\n    <div fxFlex=\"100\" fxFlex.gt-sm=\"33.3\" class=\"demo\"> \r\n        <a routerLink=\"/\" (click)=\"changeTheme('pink-dark')\" class=\"link\">\r\n            <img src=\"assets/img/landing/pink-dark.jpg\">        \r\n        </a>                \r\n    </div>\r\n  </div>     \r\n</div>\r\n\r\n<div class=\"bg-primary w-100\">\r\n  <div fxLayout.xs=\"column\" fxLayout.gt-xs=\"row wrap\" fxLayoutAlign=\"space-between center\" class=\"landing-footer\">\r\n    <span>Copyright ©2018 All Rights Reserved</span>\r\n    <span>made by <a mat-button href=\"https://themeforest.net/user/theme_season/portfolio\" target=\"blank\">ThemeSeason</a></span>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./app/pages/landing/landing.component.scss":
/*!**************************************************!*\
  !*** ./app/pages/landing/landing.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-header {\n  position: relative;\n  color: #fff;\n  height: 520px;\n  text-align: center; }\n  .landing-header:before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 520px;\n    background-color: #242424;\n    background-image: url('header.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position-y: center;\n    z-index: -1; }\n  .landing-header p {\n    margin-bottom: 1rem; }\n  .landing-header .logo {\n    font-size: 48px; }\n  .landing-header .intro-text {\n    font-size: 36px; }\n  .landing-header .desc {\n    font-size: 16px;\n    font-weight: 300;\n    letter-spacing: 0.03rem; }\n  .landing-header .mat-raised-button {\n    margin: 0 14px; }\n  .container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px 32px;\n  text-align: center; }\n  .container h2 {\n    font-size: 2rem; }\n  .container .desc {\n    font-size: 1.25rem; }\n  .container .demo {\n    padding: 16px; }\n  .container .demo .text {\n      font-size: 16px;\n      text-transform: uppercase;\n      margin-bottom: 1rem; }\n  .container .demo .link {\n      display: block; }\n  .container .demo .link img {\n        width: 100%;\n        box-shadow: 0px 1px 5px 1px #999;\n        transition: .2s; }\n  .container .demo .link img:hover {\n          box-shadow: 0px 1px 5px 5px #999; }\n  .landing-footer {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 16px; }\n  @media (max-width: 767px) {\n  .landing-header .logo {\n    font-size: 36px; }\n  .landing-header .intro-text {\n    font-size: 24px; } }\n"

/***/ }),

/***/ "./app/pages/landing/landing.component.ts":
/*!************************************************!*\
  !*** ./app/pages/landing/landing.component.ts ***!
  \************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.settings */ "./app/app.settings.ts");
/* harmony import */ var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/security.service */ "./app/shared/services/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingComponent = /** @class */ (function () {
    function LandingComponent(appSettings, router, securityService) {
        this.appSettings = appSettings;
        this.router = router;
        this.securityService = securityService;
        this.authenticated = false;
        this.userName = '';
        this.settings = this.appSettings.settings;
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.securityService.authenticationChallenge$.subscribe(function (res) {
            _this.authenticated = res;
            _this.redirectIfAuthenticated();
        });
        if (window.location.hash) {
            this.securityService.AuthorizedCallback();
        }
        this.settings.rtl = false;
        this.authenticated = this.securityService.IsAuthorized;
        if (this.authenticated) {
            if (this.securityService.UserData)
                this.userName = this.securityService.UserData.email;
        }
        // this.redirectIfAuthenticated();
    };
    LandingComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    LandingComponent.prototype.login = function () {
        this.securityService.Authorize();
    };
    LandingComponent.prototype.changeLayout = function (menu, menuType, isRtl) {
        this.settings.menu = menu;
        this.settings.menuType = menuType;
        this.settings.rtl = isRtl;
        this.settings.theme = 'indigo-light';
    };
    LandingComponent.prototype.changeTheme = function (theme) {
        this.settings.theme = theme;
    };
    LandingComponent.prototype.redirectIfAuthenticated = function () {
        if (this.authenticated) {
            this.router.navigate(['/', 'users']);
        }
    };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./app/pages/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./app/pages/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_security_service__WEBPACK_IMPORTED_MODULE_3__["SecurityService"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./app/pages/landing/landing.module.ts":
/*!*********************************************!*\
  !*** ./app/pages/landing/landing.module.ts ***!
  \*********************************************/
/*! exports provided: routes, LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "./app/shared/shared.module.ts");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing.component */ "./app/pages/landing/landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"], pathMatch: 'full' }
];
var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [
                _landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"]
            ]
        })
    ], LandingModule);
    return LandingModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-landing-landing-module.js.map