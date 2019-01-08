(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-ui-ui-module"],{

/***/ "./app/pages/ui/buttons/buttons.component.html":
/*!*****************************************************!*\
  !*** ./app/pages/ui/buttons/buttons.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-button>Basic</button>\r\n                <button mat-button color=\"primary\">Primary</button>\r\n                <button mat-button color=\"accent\">Accent</button>\r\n                <button mat-button color=\"warn\">Warn</button>\r\n                <button mat-button disabled>Disabled</button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Raised Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-raised-button>Basic</button>\r\n                <button mat-raised-button color=\"primary\">Primary</button>\r\n                <button mat-raised-button color=\"accent\">Accent</button>\r\n                <button mat-raised-button color=\"warn\">Warn</button>\r\n                <button mat-raised-button disabled>Disabled</button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Fab Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-fab>Basic</button>\r\n                <button mat-fab color=\"primary\">Primary</button>\r\n                <button mat-fab color=\"accent\">Accent</button>\r\n                <button mat-fab color=\"warn\">Warn</button>\r\n                <button mat-fab disabled>Disabled</button>\r\n                <button mat-fab>\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <a mat-fab routerLink=\".\">Link</a>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Mini Fab Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-mini-fab>Basic</button>\r\n                <button mat-mini-fab color=\"primary\">Primary</button>\r\n                <button mat-mini-fab color=\"accent\">Accent</button>\r\n                <button mat-mini-fab color=\"warn\">Warn</button>\r\n                <button mat-mini-fab disabled>Disabled</button>\r\n                <button mat-mini-fab>\r\n                  <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <a mat-mini-fab routerLink=\".\">Link</a>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Icon Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <button mat-icon-button>\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <button mat-icon-button color=\"primary\">\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <button mat-icon-button color=\"accent\">\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <button mat-icon-button color=\"warn\">\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n                <button mat-icon-button disabled>\r\n                    <mat-icon>favorite</mat-icon>\r\n                </button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Toggle Buttons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n                    <mat-button-toggle value=\"left\">\r\n                        <mat-icon>format_align_left</mat-icon>\r\n                    </mat-button-toggle>\r\n                    <mat-button-toggle value=\"center\">\r\n                        <mat-icon>format_align_center</mat-icon>\r\n                    </mat-button-toggle>\r\n                    <mat-button-toggle value=\"right\">\r\n                        <mat-icon>format_align_right</mat-icon>\r\n                    </mat-button-toggle>\r\n                    <mat-button-toggle value=\"justify\" disabled>\r\n                        <mat-icon>format_align_justify</mat-icon>\r\n                    </mat-button-toggle>\r\n                </mat-button-toggle-group>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>           \r\n</div>"

/***/ }),

/***/ "./app/pages/ui/buttons/buttons.component.ts":
/*!***************************************************!*\
  !*** ./app/pages/ui/buttons/buttons.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ButtonsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.component.html */ "./app/pages/ui/buttons/buttons.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./app/pages/ui/cards/cards.component.html":
/*!*************************************************!*\
  !*** ./app/pages/ui/cards/cards.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"33.3\" class=\"flex-p\"> \r\n        <mat-card class=\"custom-card\">\r\n            <mat-card-header class=\"bg-primary p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-title class=\"m-0\"><h3>Primary Card</h3></mat-card-title>\r\n                <button mat-icon-button><mat-icon>more_vert</mat-icon></button>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/img/app/5.jpg\" alt=\"5\">\r\n            <mat-card-content class=\"p-\">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nihil quis mollitia odio magni eaque id porro unde inventore recusandae. Debitis necessitatibus voluptates magnam eveniet odit distinctio odio provident sit.\r\n                </p>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions fxLayoutAlign=\"end center\">\r\n                <button mat-icon-button><mat-icon>favorite</mat-icon></button>\r\n                <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"33.3\" class=\"flex-p\">\r\n        <mat-card class=\"custom-card\">\r\n            <mat-card-header class=\"bg-accent p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-title class=\"m-0\"><h3>Accent Card</h3></mat-card-title>\r\n                <button mat-icon-button><mat-icon>more_vert</mat-icon></button>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/img/app/7.jpg\" alt=\"7\">\r\n            <mat-card-content class=\"p-\">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nihil quis mollitia odio magni eaque id porro unde inventore recusandae. Debitis necessitatibus voluptates magnam eveniet odit distinctio odio provident sit.\r\n                </p>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions fxLayoutAlign=\"end center\">\r\n                <button mat-icon-button><mat-icon>favorite</mat-icon></button>\r\n                <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div> \r\n    <div fxFlex=\"33.3\" class=\"flex-p\"> \r\n        <mat-card class=\"custom-card\">\r\n            <mat-card-header class=\"bg-warn p-1\" fxLayoutAlign=\"space-between center\">\r\n                <mat-card-title class=\"m-0\"><h3>Warn Card</h3></mat-card-title>\r\n                <button mat-icon-button><mat-icon>more_vert</mat-icon></button>\r\n            </mat-card-header>\r\n            <img mat-card-image src=\"assets/img/app/2.jpg\" alt=\"2\">\r\n            <mat-card-content class=\"p-\">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia nihil quis mollitia odio magni eaque id porro unde inventore recusandae. Debitis necessitatibus voluptates magnam eveniet odit distinctio odio provident sit.\r\n                </p>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions fxLayoutAlign=\"end center\">\r\n                <button mat-icon-button><mat-icon>favorite</mat-icon></button>\r\n                <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <img mat-card-image src=\"assets/img/app/1.jpg\" alt=\"Photo 1\">\r\n            <mat-card-content>\r\n                <p>\r\n                  The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n                  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n                  bred for hunting.\r\n                </p>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa facilis optio nihil eos perferendis a ut,\r\n                   iste quae eaque distinctio voluptate officia doloremque, ab, fugiat nemo. Maiores, quasi laboriosam amet?\r\n                </p>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions>\r\n                <button mat-icon-button><mat-icon>favorite</mat-icon></button>\r\n                <button mat-icon-button><mat-icon>share</mat-icon></button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>\r\n                <mat-card-title>Basic Card Title</mat-card-title>\r\n                <mat-card-subtitle>Subtitle</mat-card-subtitle>\r\n            </mat-card-header> \r\n            <img mat-card-image src=\"assets/img/app/6.jpg\" alt=\"Photo 6\">        \r\n            <mat-card-content>\r\n                <p>\r\n                  The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\r\n                  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\r\n                  bred for hunting.\r\n                </p>                \r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-actions>\r\n                <button mat-button>LIKE</button>\r\n                <button mat-button>SHARE</button>\r\n            </mat-card-actions>\r\n        </mat-card>\r\n    </div>\r\n            \r\n</div>"

/***/ }),

/***/ "./app/pages/ui/cards/cards.component.ts":
/*!***********************************************!*\
  !*** ./app/pages/ui/cards/cards.component.ts ***!
  \***********************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsComponent = /** @class */ (function () {
    function CardsComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./app/pages/ui/cards/cards.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./app/pages/ui/chips/chips.component.html":
/*!*************************************************!*\
  !*** ./app/pages/ui/chips/chips.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic chips</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-chip-list>\r\n                    <mat-chip>One fish</mat-chip>\r\n                    <mat-chip>Two fish</mat-chip>\r\n                    <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\r\n                    <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\r\n                    <mat-chip color=\"warn\" selected=\"true\">Warn fish</mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Chips with input</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field class=\"w-100\">\r\n                    <mat-chip-list #chipList>\r\n                      <mat-chip *ngFor=\"let fruit of fruits\" [selectable]=\"selectable\"\r\n                              [removable]=\"removable\" (remove)=\"remove(fruit)\">\r\n                        {{fruit.name}}\r\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\r\n                      </mat-chip>\r\n                      <input placeholder=\"New fruit...\"\r\n                            [matChipInputFor]=\"chipList\"\r\n                            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                            [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                            (matChipInputTokenEnd)=\"add($event)\" />\r\n                    </mat-chip-list>\r\n                </mat-form-field>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Vertical chips</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-chip-list class=\"mat-chip-list-stacked\" aria-orientation=\"vertical\">\r\n                    <mat-chip class=\"custom-chip\">Default chip</mat-chip>\r\n                    <mat-chip color=\"primary\" selected=\"true\" class=\"custom-chip\">Primary chip</mat-chip>\r\n                    <mat-chip color=\"accent\" selected=\"true\" class=\"custom-chip\">Accent chip</mat-chip>\r\n                    <mat-chip color=\"warn\" selected=\"true\" class=\"custom-chip\">Warn chip</mat-chip>\r\n                </mat-chip-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./app/pages/ui/chips/chips.component.scss":
/*!*************************************************!*\
  !*** ./app/pages/ui/chips/chips.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-chip {\n  max-width: 150px; }\n"

/***/ }),

/***/ "./app/pages/ui/chips/chips.component.ts":
/*!***********************************************!*\
  !*** ./app/pages/ui/chips/chips.component.ts ***!
  \***********************************************/
/*! exports provided: ChipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsComponent", function() { return ChipsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/keycodes */ "../node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var COMMA = 188;
var ChipsComponent = /** @class */ (function () {
    function ChipsComponent(appSettings) {
        this.appSettings = appSettings;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], COMMA];
        this.fruits = [
            { name: 'Lemon' },
            { name: 'Lime' },
            { name: 'Apple' }
        ];
        this.settings = this.appSettings.settings;
    }
    ChipsComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.fruits.push({ name: value.trim() });
        }
        if (input) {
            input.value = '';
        }
    };
    ChipsComponent.prototype.remove = function (fruit) {
        var index = this.fruits.indexOf(fruit);
        if (index >= 0) {
            this.fruits.splice(index, 1);
        }
    };
    ChipsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chips',
            template: __webpack_require__(/*! ./chips.component.html */ "./app/pages/ui/chips/chips.component.html"),
            styles: [__webpack_require__(/*! ./chips.component.scss */ "./app/pages/ui/chips/chips.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"]])
    ], ChipsComponent);
    return ChipsComponent;
}());



/***/ }),

/***/ "./app/pages/ui/dialog/dialog-overview-example-dialog.html":
/*!*****************************************************************!*\
  !*** ./app/pages/ui/dialog/dialog-overview-example-dialog.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Hi {{data.name}}</h1>\r\n<div mat-dialog-content>\r\n  <p>What's your favorite animal?</p>\r\n  <mat-form-field>\r\n    <input matInput tabindex=\"1\" [(ngModel)]=\"data.animal\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"data.animal\" tabindex=\"2\">Ok</button>\r\n  <button mat-button (click)=\"onNoClick()\" tabindex=\"-1\">No Thanks</button>\r\n</div>"

/***/ }),

/***/ "./app/pages/ui/dialog/dialog.component.html":
/*!***************************************************!*\
  !*** ./app/pages/ui/dialog/dialog.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Dialog Overview</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field>\r\n                    <input matInput [(ngModel)]=\"name\" placeholder=\"What's your name?\">\r\n                </mat-form-field>\r\n                <p>\r\n                    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\r\n                </p>\r\n                <p *ngIf=\"animal\" class=\"py-1\">You chose: <i>{{animal}}</i></p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/pages/ui/dialog/dialog.component.ts":
/*!*************************************************!*\
  !*** ./app/pages/ui/dialog/dialog.component.ts ***!
  \*************************************************/
/*! exports provided: DialogComponent, DialogOverviewExampleDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./app/app.settings.ts");
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



var DialogComponent = /** @class */ (function () {
    function DialogComponent(appSettings, dialog) {
        this.appSettings = appSettings;
        this.dialog = dialog;
        this.settings = this.appSettings.settings;
    }
    DialogComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./app/pages/ui/dialog/dialog.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DialogComponent);
    return DialogComponent;
}());

var DialogOverviewExampleDialog = /** @class */ (function () {
    function DialogOverviewExampleDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewExampleDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewExampleDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-example-dialog',
            template: __webpack_require__(/*! ./dialog-overview-example-dialog.html */ "./app/pages/ui/dialog/dialog-overview-example-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewExampleDialog);
    return DialogOverviewExampleDialog;
}());



/***/ }),

/***/ "./app/pages/ui/expansion-panel/expansion-panel.component.html":
/*!*********************************************************************!*\
  !*** ./app/pages/ui/expansion-panel/expansion-panel.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Basic expansion panel</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-expansion-panel>\r\n                    <mat-expansion-panel-header>\r\n                        <mat-panel-title>Personal data</mat-panel-title>\r\n                        <mat-panel-description>Type your name and age</mat-panel-description>\r\n                    </mat-expansion-panel-header>                    \r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"First name\">\r\n                    </mat-form-field>                    \r\n                    <mat-form-field>\r\n                        <input matInput placeholder=\"Age\">\r\n                    </mat-form-field>\r\n                </mat-expansion-panel>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Expansion panel as accordion</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-accordion class=\"example-headers-align\">\r\n                    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>Personal data</mat-panel-title>\r\n                            <mat-panel-description fxLayoutAlign=\"space-between center\">Type your name and age<mat-icon>account_circle</mat-icon></mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"First name\">\r\n                        </mat-form-field>\r\n                        <mat-form-field>\r\n                            <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\r\n                        </mat-form-field>\r\n                        <mat-action-row>\r\n                            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n                        </mat-action-row>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>Destination</mat-panel-title>\r\n                            <mat-panel-description fxLayoutAlign=\"space-between center\">Type the country name<mat-icon>map</mat-icon></mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Country\">\r\n                        </mat-form-field>\r\n                        <mat-action-row>\r\n                            <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n                            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n                        </mat-action-row>\r\n                    </mat-expansion-panel>\r\n                    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\r\n                        <mat-expansion-panel-header>\r\n                            <mat-panel-title>Day of the trip</mat-panel-title>\r\n                            <mat-panel-description fxLayoutAlign=\"space-between center\">Inform the date you wish to travel<mat-icon>date_range</mat-icon></mat-panel-description>\r\n                        </mat-expansion-panel-header>\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\r\n                        </mat-form-field>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                        <mat-action-row>\r\n                            <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n                            <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\r\n                        </mat-action-row>\r\n                    </mat-expansion-panel>\r\n                </mat-accordion>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/pages/ui/expansion-panel/expansion-panel.component.ts":
/*!*******************************************************************!*\
  !*** ./app/pages/ui/expansion-panel/expansion-panel.component.ts ***!
  \*******************************************************************/
/*! exports provided: ExpansionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponent", function() { return ExpansionPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExpansionPanelComponent = /** @class */ (function () {
    function ExpansionPanelComponent(appSettings) {
        this.appSettings = appSettings;
        this.step = 0;
        this.settings = this.appSettings.settings;
    }
    ExpansionPanelComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ExpansionPanelComponent.prototype.nextStep = function () {
        this.step++;
    };
    ExpansionPanelComponent.prototype.prevStep = function () {
        this.step--;
    };
    ExpansionPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expansion-panel',
            template: __webpack_require__(/*! ./expansion-panel.component.html */ "./app/pages/ui/expansion-panel/expansion-panel.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], ExpansionPanelComponent);
    return ExpansionPanelComponent;
}());



/***/ }),

/***/ "./app/pages/ui/grids/grids.component.html":
/*!*************************************************!*\
  !*** ./app/pages/ui/grids/grids.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Basic grid-list</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-grid-list cols=\"3\" rowHeight=\"2:1\">\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 1</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 2</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 3</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 4</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 5</mat-grid-tile>\r\n                    <mat-grid-tile [style.background]=\"'lightgray'\">Grid 6</mat-grid-tile>\r\n                </mat-grid-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Dynamic grid-list</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-grid-list cols=\"4\" rowHeight=\"100px\">\r\n                    <mat-grid-tile *ngFor=\"let tile of tiles\" [colspan]=\"tile.cols\" [rowspan]=\"tile.rows\" [style.background]=\"tile.color\">\r\n                        {{tile.text}}\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>    \r\n</div>"

/***/ }),

/***/ "./app/pages/ui/grids/grids.component.ts":
/*!***********************************************!*\
  !*** ./app/pages/ui/grids/grids.component.ts ***!
  \***********************************************/
/*! exports provided: GridsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridsComponent", function() { return GridsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridsComponent = /** @class */ (function () {
    function GridsComponent(appSettings) {
        this.appSettings = appSettings;
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' }
        ];
        this.settings = this.appSettings.settings;
    }
    GridsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grids',
            template: __webpack_require__(/*! ./grids.component.html */ "./app/pages/ui/grids/grids.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], GridsComponent);
    return GridsComponent;
}());



/***/ }),

/***/ "./app/pages/ui/lists/lists.component.html":
/*!*************************************************!*\
  !*** ./app/pages/ui/lists/lists.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\">\r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Basic list</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list>\r\n                    <mat-list-item>Item 1</mat-list-item>\r\n                    <mat-list-item>Item 2</mat-list-item>\r\n                    <mat-list-item>Item 3</mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Navigation lists</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-nav-list>\r\n                    <mat-list-item *ngFor=\"let link of [1,2,3]\">\r\n                        <a matLine href=\"javascript:void(0)\">Link {{ link }}</a>\r\n                        <button mat-icon-button>\r\n                            <mat-icon>info</mat-icon>\r\n                        </button>\r\n                    </mat-list-item>\r\n                </mat-nav-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Selection lists</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-selection-list #shoes>\r\n                    <mat-list-option *ngFor=\"let option of [1,2,3,4]\">\r\n                      option {{option}}\r\n                    </mat-list-option>\r\n                </mat-selection-list>\r\n                <p>Options selected: {{shoes.selectedOptions.selected.length}}</p>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>  \r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Multi-line lists</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <h4>Two line list</h4>\r\n                <mat-divider></mat-divider>\r\n                <mat-list>\r\n                    <mat-list-item>\r\n                        <h3 matLine> Line 1 </h3>\r\n                        <p matLine>\r\n                          <span> Line 2 </span>\r\n                          <small> -- content </small>\r\n                        </p>\r\n                    </mat-list-item>\r\n                </mat-list>                \r\n                <h4>Three line list</h4>\r\n                <mat-divider></mat-divider>\r\n                <mat-list>\r\n                    <mat-list-item>\r\n                        <h3 matLine> Line 1 </h3>\r\n                        <p matLine> Line 2 </p>\r\n                        <p matLine> Line 3 </p>\r\n                    </mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Lists with icons</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list>\r\n                    <mat-list-item *ngFor=\"let number of [1,2,3]\">\r\n                        <mat-icon matListIcon>folder</mat-icon>\r\n                        <h3 matLine> Title {{number}} </h3>\r\n                        <p matLine>\r\n                            <span> subject {{number}} </span>\r\n                            <small> -- content {{number}} </small>\r\n                        </p>\r\n                    </mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>  \r\n    <div fxFlex=\"50\" class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Lists with avatars</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-list>\r\n                    <mat-list-item *ngFor=\"let number of [1,2,3]\">\r\n                        <img matListAvatar [src]=\"'assets/img/avatars/avatar-'+number+'.png'\" alt=\"image\">\r\n                        <h3 matLine> Title {{number}} </h3>\r\n                        <p matLine>\r\n                            <span> subject {{number}} </span>\r\n                            <small> -- content {{number}} </small>\r\n                        </p>\r\n                    </mat-list-item>\r\n                </mat-list>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>               \r\n</div>"

/***/ }),

/***/ "./app/pages/ui/lists/lists.component.ts":
/*!***********************************************!*\
  !*** ./app/pages/ui/lists/lists.component.ts ***!
  \***********************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListsComponent = /** @class */ (function () {
    function ListsComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./app/pages/ui/lists/lists.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./app/pages/ui/progress/progress.component.html":
/*!*******************************************************!*\
  !*** ./app/pages/ui/progress/progress.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayout.gt-sm=\"row wrap\"> \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Progress Spinner Determinate</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-progress-spinner mode=\"determinate\" value=\"65\"></mat-progress-spinner>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>   \r\n    <div fxFlex=\"50\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Progress Spinner Indeterminate</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <mat-spinner></mat-spinner>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>     \r\n    <div fxFlex=\"100\" class=\"flex-p\"> \r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Progress bar</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <p class=\"py-1\">Determinate</p>\r\n                <mat-progress-bar value=\"65\" color=\"accent\"></mat-progress-bar>\r\n                <p class=\"py-1\">Indeterminate</p>\r\n                <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n                <p class=\"py-1\">Buffer</p>\r\n                <mat-progress-bar mode=\"buffer\" value=\"40\" bufferValue=\"60\" color=\"warn\"></mat-progress-bar>\r\n                <p class=\"py-1\">Query</p>\r\n                <mat-progress-bar mode=\"query\" color=\"accent\"></mat-progress-bar>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>           \r\n</div>"

/***/ }),

/***/ "./app/pages/ui/progress/progress.component.ts":
/*!*****************************************************!*\
  !*** ./app/pages/ui/progress/progress.component.ts ***!
  \*****************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressComponent = /** @class */ (function () {
    function ProgressComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    ProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./app/pages/ui/progress/progress.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./app/pages/ui/snack-bar/snack-bar.component.html":
/*!*********************************************************!*\
  !*** ./app/pages/ui/snack-bar/snack-bar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header>                \r\n                <mat-card-subtitle><h2>Snackbar Overview</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-form-field>\r\n                  <input matInput value=\"Disco party!\" placeholder=\"Message\" #message>\r\n                </mat-form-field>\r\n                <mat-form-field>\r\n                  <input matInput value=\"Dance\" placeholder=\"Action\" #action>\r\n                </mat-form-field>\r\n                <button mat-button color=\"primary\" (click)=\"openSnackBar(message.value, action.value)\">Show snack-bar</button>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/pages/ui/snack-bar/snack-bar.component.ts":
/*!*******************************************************!*\
  !*** ./app/pages/ui/snack-bar/snack-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: SnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return SnackBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.settings */ "./app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SnackBarComponent = /** @class */ (function () {
    function SnackBarComponent(appSettings, snackBar) {
        this.appSettings = appSettings;
        this.snackBar = snackBar;
        this.settings = this.appSettings.settings;
    }
    SnackBarComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    SnackBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snack-bar',
            template: __webpack_require__(/*! ./snack-bar.component.html */ "./app/pages/ui/snack-bar/snack-bar.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackBarComponent);
    return SnackBarComponent;
}());



/***/ }),

/***/ "./app/pages/ui/tabs/tabs.component.html":
/*!***********************************************!*\
  !*** ./app/pages/ui/tabs/tabs.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Basic tabs</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-tab-group>\r\n                    <mat-tab label=\"Tab 1\"><p class=\"py-1\">Vestibulum dapibus ut libero at vestibulum. Donec cursus vitae leo ut bibendum. Pellentesque ac sagittis elit. In hac habitasse platea dictumst. In sed sapien convallis, laoreet dolor at, ullamcorper eros. Vestibulum et urna vel ligula dignissim feugiat. Cras posuere eleifend nisi quis pharetra. Cras nec varius nulla. Morbi quis lacus eget tellus eleifend varius. Sed ornare imperdiet nibh, sed accumsan nisi feugiat facilisis.</p></mat-tab>\r\n                    <mat-tab label=\"Tab 2\"><p class=\"py-1\">Phasellus ac libero malesuada, hendrerit nibh sit amet, porttitor ex. Quisque nec commodo ipsum. Nam id interdum lacus, ac vulputate metus. Mauris congue, nunc in faucibus porta, leo sapien dignissim elit, ac dignissim nunc neque et arcu. Fusce facilisis finibus risus, ac pulvinar sem mattis at. Sed eu tempor justo. Duis pellentesque, leo ut euismod convallis, mi elit vulputate orci, a vestibulum orci erat at nunc. Fusce rutrum eget lacus eget malesuada.</p></mat-tab>\r\n                </mat-tab-group>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center center\">                \r\n                <mat-card-subtitle><h2>Complex Example</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n                <mat-tab-group>\r\n                    <mat-tab label=\"Tab 1\">\r\n                        <p class=\"py-1\">\r\n                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                          orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 2\">\r\n                        <ng-template mat-tab-label>\r\n                          ⭐\r\n                        </ng-template>\r\n                        <p class=\"py-1\">\r\n                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                          Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                          In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                          feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                          orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p>  \r\n                    </mat-tab>\r\n                    <mat-tab label=\"Disabled Tab\" disabled>\r\n                        <p class=\"py-1\"> No content </p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 3\">\r\n                        <p class=\"py-1\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p> \r\n                        <p class=\"py-1\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 4\">\r\n                        <p class=\"py-1\">No content in Tab 4</p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 5\">\r\n                        <p class=\"py-1\">No content in Tab 5</p>\r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 6\">\r\n                        <p class=\"py-1\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p> \r\n                    </mat-tab>\r\n                    <mat-tab label=\"Tab 7\">\r\n                        <p class=\"py-1\">\r\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ante augue.\r\n                            Phasellus volutpat neque ac dui mattis vulputate. Etiam consequat aliquam cursus.\r\n                            In sodales pretium ultrices. Maecenas lectus est, sollicitudin consectetur felis nec,\r\n                            feugiat ultricies mi. Aliquam erat volutpat. Nam placerat, tortor in ultrices porttitor,\r\n                            orci enim rutrum enim, vel tempor sapien arcu a tellus.\r\n                        </p>\r\n                    </mat-tab>\r\n                  </mat-tab-group>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>      \r\n</div>\r\n"

/***/ }),

/***/ "./app/pages/ui/tabs/tabs.component.ts":
/*!*********************************************!*\
  !*** ./app/pages/ui/tabs/tabs.component.ts ***!
  \*********************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = /** @class */ (function () {
    function TabsComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./app/pages/ui/tabs/tabs.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./app/pages/ui/tooltip/tooltip.component.html":
/*!*****************************************************!*\
  !*** ./app/pages/ui/tooltip/tooltip.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n    <div class=\"flex-p\">\r\n        <mat-card>\r\n            <mat-card-header fxLayoutAlign=\"center\">                \r\n                <mat-card-subtitle><h2>Tooltip Overview</h2></mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-card-content fxLayoutAlign=\"center\">\r\n                <div matTooltip=\"Tooltip!\" [matTooltipPosition]=\"position\">\r\n                    <span>Show tooltip</span>\r\n                    <mat-form-field>\r\n                        <mat-select [(ngModel)]=\"position\">\r\n                            <mat-option value=\"before\">Before</mat-option>\r\n                            <mat-option value=\"after\">After</mat-option>\r\n                            <mat-option value=\"above\">Above</mat-option>\r\n                            <mat-option value=\"below\">Below</mat-option>\r\n                            <mat-option value=\"left\">Left</mat-option>\r\n                            <mat-option value=\"right\">Right</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </mat-card-content>\r\n        </mat-card>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/pages/ui/tooltip/tooltip.component.ts":
/*!***************************************************!*\
  !*** ./app/pages/ui/tooltip/tooltip.component.ts ***!
  \***************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipComponent = /** @class */ (function () {
    function TooltipComponent(appSettings) {
        this.appSettings = appSettings;
        this.position = 'before';
        this.settings = this.appSettings.settings;
    }
    TooltipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__(/*! ./tooltip.component.html */ "./app/pages/ui/tooltip/tooltip.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./app/pages/ui/ui.module.ts":
/*!***********************************!*\
  !*** ./app/pages/ui/ui.module.ts ***!
  \***********************************/
/*! exports provided: routes, UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./app/shared/shared.module.ts");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons/buttons.component */ "./app/pages/ui/buttons/buttons.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards/cards.component */ "./app/pages/ui/cards/cards.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lists/lists.component */ "./app/pages/ui/lists/lists.component.ts");
/* harmony import */ var _grids_grids_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grids/grids.component */ "./app/pages/ui/grids/grids.component.ts");
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/tabs.component */ "./app/pages/ui/tabs/tabs.component.ts");
/* harmony import */ var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./expansion-panel/expansion-panel.component */ "./app/pages/ui/expansion-panel/expansion-panel.component.ts");
/* harmony import */ var _chips_chips_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chips/chips.component */ "./app/pages/ui/chips/chips.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./progress/progress.component */ "./app/pages/ui/progress/progress.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./app/pages/ui/tooltip/tooltip.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/dialog.component */ "./app/pages/ui/dialog/dialog.component.ts");
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./snack-bar/snack-bar.component */ "./app/pages/ui/snack-bar/snack-bar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', redirectTo: 'buttons', pathMatch: 'full' },
    { path: 'buttons', component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"], data: { breadcrumb: 'Buttons' } },
    { path: 'cards', component: _cards_cards_component__WEBPACK_IMPORTED_MODULE_6__["CardsComponent"], data: { breadcrumb: 'Cards' } },
    { path: 'lists', component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_7__["ListsComponent"], data: { breadcrumb: 'Lists' } },
    { path: 'grids', component: _grids_grids_component__WEBPACK_IMPORTED_MODULE_8__["GridsComponent"], data: { breadcrumb: 'Grids' } },
    { path: 'tabs', component: _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"], data: { breadcrumb: 'Tabs' } },
    { path: 'expansion-panel', component: _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_10__["ExpansionPanelComponent"], data: { breadcrumb: 'Expansion Panel' } },
    { path: 'chips', component: _chips_chips_component__WEBPACK_IMPORTED_MODULE_11__["ChipsComponent"], data: { breadcrumb: 'Chips' } },
    { path: 'progress', component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_12__["ProgressComponent"], data: { breadcrumb: 'Progress' } },
    { path: 'dialog', component: _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DialogComponent"], data: { breadcrumb: 'Dialog' } },
    { path: 'tooltip', component: _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__["TooltipComponent"], data: { breadcrumb: 'Tooltip' } },
    { path: 'snack-bar', component: _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_15__["SnackBarComponent"], data: { breadcrumb: 'Snackbar' } }
];
var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ],
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_5__["ButtonsComponent"],
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_6__["CardsComponent"],
                _lists_lists_component__WEBPACK_IMPORTED_MODULE_7__["ListsComponent"],
                _grids_grids_component__WEBPACK_IMPORTED_MODULE_8__["GridsComponent"],
                _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_9__["TabsComponent"],
                _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_10__["ExpansionPanelComponent"],
                _chips_chips_component__WEBPACK_IMPORTED_MODULE_11__["ChipsComponent"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_12__["ProgressComponent"],
                _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__["TooltipComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DialogComponent"],
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DialogOverviewExampleDialog"],
                _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_15__["SnackBarComponent"]
            ],
            entryComponents: [
                _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_14__["DialogOverviewExampleDialog"]
            ]
        })
    ], UiModule);
    return UiModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-ui-ui-module.js.map