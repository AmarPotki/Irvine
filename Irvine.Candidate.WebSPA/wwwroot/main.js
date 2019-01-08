(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/pages/charts/charts.module": [
		"./app/pages/charts/charts.module.ts",
		"app-pages-charts-charts-module~app-pages-dashboard-dashboard-module",
		"common",
		"app-pages-charts-charts-module"
	],
	"app/pages/chat/chat.module": [
		"./app/pages/chat/chat.module.ts",
		"app-pages-chat-chat-module"
	],
	"app/pages/dashboard/dashboard.module": [
		"./app/pages/dashboard/dashboard.module.ts",
		"app-pages-charts-charts-module~app-pages-dashboard-dashboard-module",
		"common",
		"app-pages-dashboard-dashboard-module"
	],
	"app/pages/drag-drop/drag-drop.module": [
		"./app/pages/drag-drop/drag-drop.module.ts",
		"app-pages-drag-drop-drag-drop-module"
	],
	"app/pages/dynamic-menu/dynamic-menu.module": [
		"./app/pages/dynamic-menu/dynamic-menu.module.ts",
		"common",
		"app-pages-dynamic-menu-dynamic-menu-module"
	],
	"app/pages/form-controls/form-controls.module": [
		"./app/pages/form-controls/form-controls.module.ts",
		"app-pages-form-controls-form-controls-module"
	],
	"app/pages/icons/icons.module": [
		"./app/pages/icons/icons.module.ts",
		"app-pages-icons-icons-module"
	],
	"app/pages/landing/landing.module": [
		"./app/pages/landing/landing.module.ts",
		"app-pages-landing-landing-module"
	],
	"app/pages/login/login.module": [
		"./app/pages/login/login.module.ts",
		"app-pages-login-login-module"
	],
	"app/pages/mailbox/mailbox.module": [
		"./app/pages/mailbox/mailbox.module.ts",
		"app-pages-mailbox-mailbox-module"
	],
	"app/pages/maps/maps.module": [
		"./app/pages/maps/maps.module.ts",
		"app-pages-maps-maps-module"
	],
	"app/pages/schedule/schedule.module": [
		"./app/pages/schedule/schedule.module.ts",
		"common",
		"app-pages-schedule-schedule-module"
	],
	"app/pages/tables/tables.module": [
		"./app/pages/tables/tables.module.ts",
		"app-pages-tables-tables-module"
	],
	"app/pages/ui/ui.module": [
		"./app/pages/ui/ui.module.ts",
		"app-pages-ui-ui-module"
	],
	"app/pages/users/users.module": [
		"./app/pages/users/users.module.ts",
		"app-pages-users-users-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app\" class=\"app\" [dir]=\"(settings.rtl) ? 'rtl' : 'ltr'\"\r\n            [ngClass]=\"settings.theme\" \r\n            [class.fixed-header]=\"settings.fixedHeader\"\r\n            [class.horizontal-menu]=\"settings.menu == 'horizontal'\" \r\n            [class.compact]=\"settings.menuType == 'compact'\" \r\n            [class.mini]=\"settings.menuType == 'mini'\" >\r\n    <router-outlet></router-outlet>\r\n    <div id=\"app-spinner\" [class.hide]=\"!settings.loadingSpinner\"> \r\n        <mat-spinner color=\"primary\"></mat-spinner>  \r\n        <h4>loading...</h4>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/app.component.scss":
/*!********************************!*\
  !*** ./app/app.component.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n#app-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  top: 0;\n  background: #fff;\n  z-index: 999999;\n  visibility: visible;\n  opacity: 1;\n  transition: visibility 0.5s, opacity 0.3s linear; }\n\n#app-spinner.hide {\n    visibility: hidden;\n    opacity: 0; }\n\n#app-spinner h4 {\n    margin-top: 10px;\n    letter-spacing: 0.02em;\n    opacity: 0;\n    text-transform: uppercase;\n    -webkit-animation: loading-text-opacity 2s linear 0s infinite normal;\n    animation: loading-text-opacity 2s linear 0s infinite normal; }\n\n@keyframes loading-text-opacity {\n  0% {\n    opacity: 0; }\n  20% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes loading-text-opacity {\n  0% {\n    opacity: 0; }\n  20% {\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.settings */ "./app/app.settings.ts");
/* harmony import */ var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/security.service */ "./app/shared/services/security.service.ts");
/* harmony import */ var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/configuration.service */ "./app/shared/services/configuration.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(appSettings, securityService, configurationService) {
        this.appSettings = appSettings;
        this.securityService = securityService;
        this.configurationService = configurationService;
        this.Authenticated = false;
        this.settings = this.appSettings.settings;
        this.Authenticated = this.securityService.IsAuthorized;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('app on init');
        this.subscription = this.securityService.authenticationChallenge$.subscribe(function (res) { return _this.Authenticated = res; });
        //Get configuration from server environment variables:
        console.log('configuration');
        this.configurationService.load();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _shared_services_security_service__WEBPACK_IMPORTED_MODULE_2__["SecurityService"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_3__["ConfigurationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "../node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme/utils/custom-overlay-container */ "./app/theme/utils/custom-overlay-container.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "../node_modules/@agm/core/index.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "../node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ "../node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./app/shared/shared.module.ts");
/* harmony import */ var _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme/pipes/pipes.module */ "./app/theme/pipes/pipes.module.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/pages.component */ "./app/pages/pages.component.ts");
/* harmony import */ var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/blank/blank.component */ "./app/pages/blank/blank.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/search/search.component */ "./app/pages/search/search.component.ts");
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/errors/not-found/not-found.component */ "./app/pages/errors/not-found/not-found.component.ts");
/* harmony import */ var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/errors/error/error.component */ "./app/pages/errors/error/error.component.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.settings */ "./app/app.settings.ts");
/* harmony import */ var _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./theme/components/sidenav/sidenav.component */ "./app/theme/components/sidenav/sidenav.component.ts");
/* harmony import */ var _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./theme/components/menu/vertical-menu/vertical-menu.component */ "./app/theme/components/menu/vertical-menu/vertical-menu.component.ts");
/* harmony import */ var _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./theme/components/menu/horizontal-menu/horizontal-menu.component */ "./app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts");
/* harmony import */ var _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./theme/components/breadcrumb/breadcrumb.component */ "./app/theme/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./theme/components/flags-menu/flags-menu.component */ "./app/theme/components/flags-menu/flags-menu.component.ts");
/* harmony import */ var _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./theme/components/fullscreen/fullscreen.component */ "./app/theme/components/fullscreen/fullscreen.component.ts");
/* harmony import */ var _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./theme/components/applications/applications.component */ "./app/theme/components/applications/applications.component.ts");
/* harmony import */ var _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./theme/components/messages/messages.component */ "./app/theme/components/messages/messages.component.ts");
/* harmony import */ var _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./theme/components/user-menu/user-menu.component */ "./app/theme/components/user-menu/user-menu.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/register/register.component */ "./app/pages/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    wheelPropagation: true,
    suppressScrollX: true
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
                }),
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot(),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"].forRoot(),
                _theme_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                _pages_pages_component__WEBPACK_IMPORTED_MODULE_14__["PagesComponent"],
                _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_15__["BlankComponent"],
                _pages_search_search_component__WEBPACK_IMPORTED_MODULE_16__["SearchComponent"],
                _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"],
                _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_18__["ErrorComponent"],
                _theme_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_20__["SidenavComponent"],
                _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_21__["VerticalMenuComponent"],
                _theme_components_menu_horizontal_menu_horizontal_menu_component__WEBPACK_IMPORTED_MODULE_22__["HorizontalMenuComponent"],
                _theme_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_23__["BreadcrumbComponent"],
                _theme_components_flags_menu_flags_menu_component__WEBPACK_IMPORTED_MODULE_24__["FlagsMenuComponent"],
                _theme_components_fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_25__["FullScreenComponent"],
                _theme_components_applications_applications_component__WEBPACK_IMPORTED_MODULE_26__["ApplicationsComponent"],
                _theme_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_27__["MessagesComponent"],
                _theme_components_user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_28__["UserMenuComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_29__["RegisterComponent"]
            ],
            entryComponents: [
                _theme_components_menu_vertical_menu_vertical_menu_component__WEBPACK_IMPORTED_MODULE_21__["VerticalMenuComponent"]
            ],
            providers: [
                _app_settings__WEBPACK_IMPORTED_MODULE_19__["AppSettings"],
                { provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"], useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
                { provide: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayContainer"], useClass: _theme_utils_custom_overlay_container__WEBPACK_IMPORTED_MODULE_6__["CustomOverlayContainer"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/app.routing.ts":
/*!****************************!*\
  !*** ./app/app.routing.ts ***!
  \****************************/
/*! exports provided: routes, routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/pages.component */ "./app/pages/pages.component.ts");
/* harmony import */ var _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/blank/blank.component */ "./app/pages/blank/blank.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/search/search.component */ "./app/pages/search/search.component.ts");
/* harmony import */ var _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/errors/not-found/not-found.component */ "./app/pages/errors/not-found/not-found.component.ts");
/* harmony import */ var _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/errors/error/error.component */ "./app/pages/errors/error/error.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/register/register.component */ "./app/pages/register/register.component.ts");







var routes = [
    { path: '', loadChildren: 'app/pages/landing/landing.module#LandingModule' },
    {
        path: '',
        component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"], children: [
            { path: 'Dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' } },
            { path: 'users', loadChildren: 'app/pages/users/users.module#UsersModule', data: { breadcrumb: 'Users' } },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            { path: 'form-controls', loadChildren: 'app/pages/form-controls/form-controls.module#FormControlsModule', data: { breadcrumb: 'Form Controls' } },
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' } },
            { path: 'icons', loadChildren: 'app/pages/icons/icons.module#IconsModule', data: { breadcrumb: 'Material Icons' } },
            { path: 'drag-drop', loadChildren: 'app/pages/drag-drop/drag-drop.module#DragDropModule', data: { breadcrumb: 'Drag & Drop' } },
            { path: 'schedule', loadChildren: 'app/pages/schedule/schedule.module#ScheduleModule', data: { breadcrumb: 'Schedule' } },
            { path: 'mailbox', loadChildren: 'app/pages/mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' } },
            { path: 'chat', loadChildren: 'app/pages/chat/chat.module#ChatModule', data: { breadcrumb: 'Chat' } },
            { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' } },
            { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' } },
            { path: 'dynamic-menu', loadChildren: 'app/pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' } },
            { path: 'blank', component: _pages_blank_blank_component__WEBPACK_IMPORTED_MODULE_2__["BlankComponent"], data: { breadcrumb: 'Blank page' } },
            { path: 'search', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], data: { breadcrumb: 'Search' } }
        ]
    },
    // { path: 'landing', loadChildren: 'app/pages/landing/landing.module#LandingModule' },
    { path: 'login', loadChildren: 'app/pages/login/login.module#LoginModule' },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'error', component: _pages_errors_error_error_component__WEBPACK_IMPORTED_MODULE_5__["ErrorComponent"], data: { breadcrumb: 'Error' } },
    { path: '**', component: _pages_errors_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"],
});


/***/ }),

/***/ "./app/app.settings.model.ts":
/*!***********************************!*\
  !*** ./app/app.settings.model.ts ***!
  \***********************************/
/*! exports provided: Settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
var Settings = /** @class */ (function () {
    function Settings(name, loadingSpinner, fixedHeader, sidenavIsOpened, sidenavIsPinned, sidenavUserBlock, menu, menuType, theme, rtl) {
        this.name = name;
        this.loadingSpinner = loadingSpinner;
        this.fixedHeader = fixedHeader;
        this.sidenavIsOpened = sidenavIsOpened;
        this.sidenavIsPinned = sidenavIsPinned;
        this.sidenavUserBlock = sidenavUserBlock;
        this.menu = menu;
        this.menuType = menuType;
        this.theme = theme;
        this.rtl = rtl;
    }
    return Settings;
}());



/***/ }),

/***/ "./app/app.settings.ts":
/*!*****************************!*\
  !*** ./app/app.settings.ts ***!
  \*****************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.settings.model */ "./app/app.settings.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppSettings = /** @class */ (function () {
    function AppSettings() {
        this.settings = new _app_settings_model__WEBPACK_IMPORTED_MODULE_1__["Settings"]('Gradus', //theme name
        true, //loadingSpinner
        true, //fixedHeader
        true, //sidenavIsOpened
        true, //sidenavIsPinned  
        true, //sidenavUserBlock 
        'vertical', //horizontal , vertical
        'default', //default, compact, mini
        'indigo-light', //indigo-light, teal-light, red-light, blue-dark, green-dark, pink-dark
        false // true = rtl, false = ltr
        );
    }
    AppSettings = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppSettings);
    return AppSettings;
}());



/***/ }),

/***/ "./app/pages/blank/blank.component.css":
/*!*********************************************!*\
  !*** ./app/pages/blank/blank.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/pages/blank/blank.component.html":
/*!**********************************************!*\
  !*** ./app/pages/blank/blank.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/pages/blank/blank.component.ts":
/*!********************************************!*\
  !*** ./app/pages/blank/blank.component.ts ***!
  \********************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlankComponent = /** @class */ (function () {
    function BlankComponent() {
    }
    BlankComponent.prototype.ngOnInit = function () {
    };
    BlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blank',
            template: __webpack_require__(/*! ./blank.component.html */ "./app/pages/blank/blank.component.html"),
            styles: [__webpack_require__(/*! ./blank.component.css */ "./app/pages/blank/blank.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankComponent);
    return BlankComponent;
}());



/***/ }),

/***/ "./app/pages/errors/error/error.component.html":
/*!*****************************************************!*\
  !*** ./app/pages/errors/error/error.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  \r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n        <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\">\r\n                        <mat-icon>warning</mat-icon>\r\n                    </button>\r\n                    <h1 class=\"error\">500</h1>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <span class=\"box-content-header server-error\">Internal server error</span>  \r\n                        <p class=\"box-text\">Opps, something went wrong.</p> \r\n                        <p class=\"box-text\">You can go to home page.</p> \r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"button\" (click)=\"goHome()\">GO HOME</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            \r\n          </div>    \r\n  \r\n  </div>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./app/pages/errors/error/error.component.ts":
/*!***************************************************!*\
  !*** ./app/pages/errors/error/error.component.ts ***!
  \***************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
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



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    ErrorComponent.prototype.goHome = function () {
        this.router.navigate(['/']);
    };
    ErrorComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./app/pages/errors/error/error.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./app/pages/errors/not-found/not-found.component.html":
/*!*************************************************************!*\
  !*** ./app/pages/errors/not-found/not-found.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  \r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n\r\n        <div fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n\r\n            <mat-card class=\"p-0 mat-elevation-z24 box\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                    <button mat-fab color=\"accent\" class=\"mat-elevation-z12\">\r\n                        <mat-icon>error</mat-icon>\r\n                    </button>\r\n                    <h1 class=\"error\">404</h1>\r\n                </div>\r\n                <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                    <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                        <p class=\"box-text\">Opps, it seems that this page does not exist.</p> \r\n                        <p class=\"box-text\">If you are sure it should, search for it.</p> \r\n                        <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Enter search keyword...\">\r\n                        </mat-form-field>\r\n                    </mat-card>\r\n                    <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"button\" (click)=\"searchResult()\">SUBMIT</button>\r\n                </mat-card-content>\r\n            </mat-card>\r\n            \r\n          </div>    \r\n  \r\n  </div>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./app/pages/errors/not-found/not-found.component.ts":
/*!***********************************************************!*\
  !*** ./app/pages/errors/not-found/not-found.component.ts ***!
  \***********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
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



var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(appSettings, router) {
        this.appSettings = appSettings;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    NotFoundComponent.prototype.searchResult = function () {
        this.router.navigate(['/search']);
    };
    NotFoundComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./app/pages/errors/not-found/not-found.component.html")
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./app/pages/pages.component.html":
/*!****************************************!*\
  !*** ./app/pages/pages.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n    <mat-sidenav *ngIf=\"settings.menu == 'vertical'\" [opened]=\"settings.sidenavIsOpened\" [mode]=\"(settings.sidenavIsPinned) ? 'side' : 'over'\" #sidenav class=\"sidenav mat-elevation-z6\">\r\n        <app-sidenav></app-sidenav>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content perfectScrollbar [disabled]=\"settings.fixedHeader\" (psScrollY)=\"onPsScrollY($event)\">\r\n        <mat-toolbar color=\"primary\" class=\"flex-p-x\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"w-100\">            \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"center center\">                    \r\n                    <button *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"toggleSidenav()\">\r\n                        <mat-icon>menu</mat-icon>\r\n                    </button> \r\n                    <button fxShow=\"false\" fxShow.gt-xs *ngIf=\"settings.menu == 'vertical'\" mat-icon-button (click)=\"settings.sidenavUserBlock = !settings.sidenavUserBlock\">\r\n                        <mat-icon>person</mat-icon>\r\n                    </button> \r\n                    <a *ngIf=\"settings.menu == 'horizontal'\" mat-raised-button color=\"accent\" routerLink=\"/\" (click)=\"closeSubMenus()\" class=\"small-logo\">G</a>\r\n                    <a *ngIf=\"settings.menu == 'horizontal'\" class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">GRADUS</a>  \r\n                </div>            \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n                    <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxShow=\"false\" fxShow.gt-xs class=\"search-bar\">\r\n                        <form method=\"get\">\r\n                            <input type=\"text\" placeholder=\"Type to search...\" class=\"mat-elevation-z3\"  [class.show]=\"toggleSearchBar\">\r\n                            <button mat-icon-button (click)=\"toggleSearchBar = !toggleSearchBar\" type=\"button\">\r\n                                <mat-icon>search</mat-icon>\r\n                            </button> \r\n                        </form>\r\n                    </div>                \r\n                    <app-flags-menu fxShow=\"false\" fxShow.gt-sm></app-flags-menu>\r\n                    <app-fullscreen></app-fullscreen> \r\n                    <app-applications fxShow=\"false\" fxShow.gt-sm></app-applications>\r\n                    <app-messages fxShow=\"false\" fxShow.gt-xs></app-messages>\r\n                    <app-user-menu></app-user-menu> \r\n                </div>\r\n            </div>\r\n        </mat-toolbar>\r\n\r\n        <mat-toolbar color=\"primary\" *ngIf=\"settings.menu == 'horizontal'\" \r\n            class=\"horizontal-menu flex-p-x transition-2\" \r\n            [class.sticky]=\"isStickyMenu\" \r\n            [class.fixed-top]=\"!settings.fixedHeader\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"w-100\">            \r\n                <app-horizontal-menu [menuParentId]=\"0\"></app-horizontal-menu>\r\n            </div>            \r\n        </mat-toolbar>\r\n\r\n        <div id=\"main-content\" class=\"inner-sidenav-content transition-2\" perfectScrollbar [disabled]=\"!settings.fixedHeader\" (psScrollY)=\"onPsScrollY($event)\" [class.horizontal-menu-hidden]=\"isStickyMenu\"> \r\n            <app-breadcrumb></app-breadcrumb>\r\n            <router-outlet></router-outlet>    \r\n        </div>\r\n\r\n\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"options-icon\" (click)=\"options.toggle()\">\r\n            <mat-icon>settings</mat-icon>\r\n        </div>\r\n\r\n        <div *ngIf=\"showBackToTop\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"back-to-top transition-2\" (click)=\"scrollToTop();\">\r\n            <mat-icon>arrow_upward</mat-icon>\r\n        </div>\r\n\r\n    </mat-sidenav-content>\r\n    \r\n    <mat-sidenav #options position=\"end\" class=\"options\">        \r\n       \r\n        <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"control mat-elevation-z1\">\r\n            <h2>Settings</h2>\r\n        </div>  \r\n\r\n        <div perfectScrollbar>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Layout</h4>        \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Fixed header</span>\r\n                    <mat-slide-toggle [checked]=\"settings.fixedHeader\" (change)=\"settings.fixedHeader = !settings.fixedHeader\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>                \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>RTL</span>\r\n                    <mat-slide-toggle [checked]=\"settings.rtl\" (change)=\"settings.rtl = !settings.rtl\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose menu</h4>\r\n                <mat-radio-group [(ngModel)]=\"menuOption\" (change)=\"chooseMenu()\">\r\n                    <mat-radio-button *ngFor=\"let menu of menus\" [value]=\"menu\">{{menu}}</mat-radio-button>\r\n                </mat-radio-group>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose menu type</h4>\r\n                <mat-radio-group [(ngModel)]=\"menuTypeOption\" (change)=\"chooseMenuType()\">\r\n                    <mat-radio-button *ngFor=\"let menuType of menuTypes\" [value]=\"menuType\">{{menuType}}</mat-radio-button>\r\n                </mat-radio-group>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Choose theme skin</h4>        \r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\"> \r\n                    <div class=\"skin-primary indigo-light\" (click)=\"changeTheme('indigo-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary teal-light\" (click)=\"changeTheme('teal-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary red-light\" (click)=\"changeTheme('red-light')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary blue-dark\" (click)=\"changeTheme('blue-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary green-dark\" (click)=\"changeTheme('green-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                    <div class=\"skin-primary pink-dark\" (click)=\"changeTheme('pink-dark')\"><div class=\"skin-secondary\"></div></div>  \r\n                </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"column\" class=\"control\">\r\n                <h4>Sidenav options</h4>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Opened sidenav</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavIsOpened\" (change)=\"settings.sidenavIsOpened = !settings.sidenavIsOpened\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Pinned sidenav</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavIsPinned\" (change)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n                    <span>Sidenav user info</span>\r\n                    <mat-slide-toggle [checked]=\"settings.sidenavUserBlock\" (change)=\"settings.sidenavUserBlock = !settings.sidenavUserBlock\" labelPosition=\"before\"></mat-slide-toggle>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </mat-sidenav>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./app/pages/pages.component.scss":
/*!****************************************!*\
  !*** ./app/pages/pages.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  width: 250px;\n  overflow: hidden; }\n\n.horizontal-menu {\n  padding: 0;\n  position: relative;\n  z-index: 9;\n  height: 0; }\n\n.horizontal-menu.sticky {\n    height: 0;\n    min-height: 0;\n    overflow: hidden; }\n\n.horizontal-menu.sticky.fixed-top {\n      position: fixed;\n      top: 0;\n      height: 56px;\n      overflow: visible; }\n\n.inner-sidenav-content {\n  position: absolute;\n  top: 56px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 8px;\n  min-height: calc(100% - (56px + 8px*2)); }\n\n.options {\n  position: fixed;\n  width: 250px;\n  overflow: hidden; }\n\n.options .control {\n    padding: 6px 14px; }\n\n.options .control div {\n      padding: 6px 0; }\n\n.options .control h4 {\n      border-bottom: 1px solid #ccc;\n      margin: 12px 0 6px 0; }\n\n.options .control .skin-primary {\n      width: 32px;\n      height: 32px;\n      padding: 0;\n      overflow: hidden;\n      cursor: pointer; }\n\n.options .control .skin-primary .skin-secondary {\n        width: 0;\n        height: 0;\n        padding: 0;\n        border-bottom: 32px solid;\n        border-left: 32px solid transparent; }\n\n.options .control .skin-primary.indigo-light {\n        background-color: #3F51B5;\n        border: 1px solid #3F51B5; }\n\n.options .control .skin-primary.indigo-light .skin-secondary {\n          border-bottom-color: #ececec; }\n\n.options .control .skin-primary.teal-light {\n        background-color: #009688;\n        border: 1px solid #009688; }\n\n.options .control .skin-primary.teal-light .skin-secondary {\n          border-bottom-color: #ececec; }\n\n.options .control .skin-primary.red-light {\n        background-color: #F44336;\n        border: 1px solid #F44336; }\n\n.options .control .skin-primary.red-light .skin-secondary {\n          border-bottom-color: #ececec; }\n\n.options .control .skin-primary.blue-dark {\n        background-color: #0277bd;\n        border: 1px solid #0277bd; }\n\n.options .control .skin-primary.blue-dark .skin-secondary {\n          border-bottom-color: #262626; }\n\n.options .control .skin-primary.green-dark {\n        background-color: #388E3C;\n        border: 1px solid #388E3C; }\n\n.options .control .skin-primary.green-dark .skin-secondary {\n          border-bottom-color: #262626; }\n\n.options .control .skin-primary.pink-dark {\n        background-color: #D81B60;\n        border: 1px solid #D81B60; }\n\n.options .control .skin-primary.pink-dark .skin-secondary {\n          border-bottom-color: #262626; }\n\n.options .mat-radio-group {\n    display: inline-flex;\n    flex-direction: column; }\n\n.options .mat-radio-group .mat-radio-button {\n      margin: 2px 0; }\n\n.options .mat-slide-toggle {\n    height: auto; }\n\n.options .ps {\n    height: calc(100% - 48px); }\n\n.op-image {\n  box-shadow: 0 0 2px #ccc;\n  border: 2px solid;\n  border-color: transparent;\n  cursor: pointer;\n  transition: 0.2s; }\n\n.options-icon {\n  position: fixed;\n  top: 110px;\n  right: 0;\n  width: 40px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  cursor: pointer;\n  z-index: 999999; }\n\n.options-icon .mat-icon {\n    -webkit-animation: spin 8s linear infinite;\n    animation: spin 8s linear infinite; }\n\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.back-to-top {\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 999999;\n  right: 20px;\n  bottom: 20px;\n  opacity: .5;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.75);\n  border-radius: 4px; }\n\n.back-to-top:hover {\n    opacity: 0.9; }\n\n.search-bar form input {\n  height: 28px;\n  border: none;\n  padding: 0;\n  border-radius: 15px;\n  outline: none;\n  color: #444;\n  width: 0;\n  overflow: hidden;\n  transition: 0.3s; }\n\n.search-bar form input.show {\n    padding: 0 8px;\n    width: 250px; }\n"

/***/ }),

/***/ "./app/pages/pages.component.ts":
/*!**************************************!*\
  !*** ./app/pages/pages.component.ts ***!
  \**************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "./app/app.settings.ts");
/* harmony import */ var _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/components/menu/menu.service */ "./app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PagesComponent = /** @class */ (function () {
    function PagesComponent(appSettings, router, menuService) {
        this.appSettings = appSettings;
        this.router = router;
        this.menuService = menuService;
        this.menus = ['vertical', 'horizontal'];
        this.menuTypes = ['default', 'compact', 'mini'];
        this.isStickyMenu = false;
        this.lastScrollTop = 0;
        this.showBackToTop = false;
        this.toggleSearchBar = false;
        this.settings = this.appSettings.settings;
    }
    PagesComponent.prototype.ngOnInit = function () {
        if (window.innerWidth <= 768) {
            this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
        }
        this.menuOption = this.settings.menu;
        this.menuTypeOption = this.settings.menuType;
        this.defaultMenu = this.settings.menu;
    };
    PagesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { _this.settings.loadingSpinner = false; }, 300);
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (!_this.settings.sidenavIsPinned) {
                    _this.sidenav.close();
                }
                if (window.innerWidth <= 768) {
                    _this.sidenav.close();
                }
            }
        });
        if (this.settings.menu == "vertical")
            this.menuService.expandActiveSubMenu(this.menuService.getVerticalMenuItems());
    };
    PagesComponent.prototype.chooseMenu = function () {
        this.settings.menu = this.menuOption;
        this.defaultMenu = this.menuOption;
        this.router.navigate(['/']);
    };
    PagesComponent.prototype.chooseMenuType = function () {
        this.settings.menuType = this.menuTypeOption;
    };
    PagesComponent.prototype.changeTheme = function (theme) {
        this.settings.theme = theme;
    };
    PagesComponent.prototype.toggleSidenav = function () {
        this.sidenav.toggle();
    };
    PagesComponent.prototype.onPsScrollY = function (event) {
        this.scrolledContent = event.target;
        (this.scrolledContent.scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;
        if (this.settings.menu == 'horizontal') {
            if (this.settings.fixedHeader) {
                var currentScrollTop = (this.scrolledContent.scrollTop > 56) ? this.scrolledContent.scrollTop : 0;
                (currentScrollTop > this.lastScrollTop) ? this.isStickyMenu = true : this.isStickyMenu = false;
                this.lastScrollTop = currentScrollTop;
            }
            else {
                (this.scrolledContent.scrollTop > 56) ? this.isStickyMenu = true : this.isStickyMenu = false;
            }
        }
    };
    PagesComponent.prototype.scrollToTop = function () {
        var _this = this;
        var scrollDuration = 200;
        var scrollStep = -this.scrolledContent.scrollTop / (scrollDuration / 20);
        var scrollInterval = setInterval(function () {
            if (_this.scrolledContent.scrollTop != 0) {
                _this.scrolledContent.scrollBy(0, scrollStep);
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 10);
        if (window.innerWidth <= 768) {
            this.scrolledContent.scrollTop = 0;
        }
    };
    PagesComponent.prototype.onWindowResize = function () {
        if (window.innerWidth <= 768) {
            this.settings.sidenavIsOpened = false;
            this.settings.sidenavIsPinned = false;
            this.settings.menu = 'vertical';
        }
        else {
            (this.defaultMenu == 'horizontal') ? this.settings.menu = 'horizontal' : this.settings.menu = 'vertical';
            this.settings.sidenavIsOpened = true;
            this.settings.sidenavIsPinned = true;
        }
    };
    PagesComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], PagesComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PagesComponent.prototype, "onWindowResize", null);
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./app/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./app/pages/pages.component.scss")],
            providers: [_theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _theme_components_menu_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./app/pages/register/register.component.html":
/*!****************************************************!*\
  !*** ./app/pages/register/register.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  \r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"h-100\">\r\n  \r\n         <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form.value)\" fxFlex=\"80\" fxFlex.gt-sm=\"30\" fxFlex.sm=\"60\">\r\n  \r\n              <mat-card class=\"p-0 mat-elevation-z24 box register\">\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"bg-primary box-header\">\r\n                      <button mat-fab color=\"accent\" class=\"mat-elevation-z12\" (click)=\"onSubmit(form.value);\">\r\n                          <mat-icon>person_add</mat-icon>\r\n                      </button>\r\n                      <a mat-button routerLink=\"/login\">Already have an account? Sign in!</a>\r\n                  </div>\r\n                  <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"end center\" class=\"box-content\">\r\n                      <mat-card fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"mat-elevation-z12 box-content-inner\">\r\n                          <span class=\"box-content-header\">Register member</span>  \r\n                          <mat-form-field class=\"w-100\">\r\n                            <input matInput placeholder=\"Full Name\" formControlName=\"name\">\r\n                            <mat-error *ngIf=\"form.controls.name.errors?.required\">Full Name is required</mat-error>\r\n                            <mat-error *ngIf=\"form.controls.name.hasError('minlength')\">Full Name isn't long enough, minimum of 3 characters</mat-error>\r\n                          </mat-form-field>\r\n                          <mat-form-field class=\"w-100\">\r\n                              <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n                              <mat-error *ngIf=\"form.controls.email.errors?.required\">Email is required</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.email.hasError('invalidEmail')\">Invalid email address</mat-error>\r\n                          </mat-form-field>\r\n                          <mat-form-field class=\"w-100\">\r\n                              <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" minlength=\"6\">\r\n                              <mat-error *ngIf=\"form.controls.password.errors?.required\">Password is required</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.password.hasError('minlength')\">Password isn't long enough, minimum of 6 characters</mat-error>\r\n                          </mat-form-field> \r\n                          <mat-form-field class=\"w-100\">\r\n                              <input matInput placeholder=\"Confirm Password\" formControlName=\"confirmPassword\" type=\"password\">\r\n                              <mat-error *ngIf=\"form.controls.confirmPassword.errors?.required\">Confirm Password is required</mat-error>\r\n                              <mat-error *ngIf=\"form.controls.confirmPassword.hasError('mismatchedPasswords')\">Passwords do not match</mat-error>\r\n                          </mat-form-field>\r\n                          <mat-error *ngIf=\"hasServerError\" >{{serverError}}</mat-error>\r\n\r\n                      </mat-card>\r\n                      <button mat-raised-button color=\"primary\" class=\"mat-elevation-z12 box-button\" type=\"submit\">SIGN UP</button>\r\n                  </mat-card-content>\r\n              </mat-card>\r\n              \r\n         </form>      \r\n    \r\n    </div>\r\n  \r\n  </mat-sidenav-container>"

/***/ }),

/***/ "./app/pages/register/register.component.ts":
/*!**************************************************!*\
  !*** ./app/pages/register/register.component.ts ***!
  \**************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme/utils/app-validators */ "./app/theme/utils/app-validators.ts");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.settings */ "./app/app.settings.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/data.service */ "./app/shared/services/data.service.ts");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.service */ "./app/pages/register/register.service.ts");
/* harmony import */ var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/security.service */ "./app/shared/services/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(appSettings, fb, router, service, registerService, securityService) {
        this.appSettings = appSettings;
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.registerService = registerService;
        this.securityService = securityService;
        this.settings = this.appSettings.settings;
        this.form = this.fb.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])],
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["emailValidator"]])],
            'password': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validator: Object(_theme_utils_app_validators__WEBPACK_IMPORTED_MODULE_3__["matchingPasswords"])('password', 'confirmPassword') });
    }
    RegisterComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.hasServerError = false;
        if (this.form.valid) {
            var user = {
                name: this.form.controls["name"].value,
                email: this.form.controls["email"].value,
                password: this.form.controls["password"].value
            };
            this.registerService.register(user).subscribe(function (res) {
                console.log(res);
                _this.securityService.Authorize();
            }, function (errors) {
                _this.hasServerError = true;
                _this.serverError = errors.messages[0];
            });
        }
    };
    RegisterComponent.prototype.ngAfterViewInit = function () {
        this.settings.loadingSpinner = false;
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./app/pages/register/register.component.html"),
            providers: [_register_service__WEBPACK_IMPORTED_MODULE_6__["RegisterService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_4__["AppSettings"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"], _register_service__WEBPACK_IMPORTED_MODULE_6__["RegisterService"], _shared_services_security_service__WEBPACK_IMPORTED_MODULE_7__["SecurityService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./app/pages/register/register.service.ts":
/*!************************************************!*\
  !*** ./app/pages/register/register.service.ts ***!
  \************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/configuration.service */ "./app/shared/services/configuration.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "../node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "../node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterService = /** @class */ (function () {
    function RegisterService(service, configurationService) {
        var _this = this;
        this.service = service;
        this.configurationService = configurationService;
        if (configurationService.serverSettings) {
            this.identityProfileUrl = configurationService.serverSettings.identityProfileUrl;
        }
        configurationService.settingsLoaded$.subscribe(function (x) {
            _this.identityProfileUrl = configurationService.serverSettings.identityProfileUrl;
        });
    }
    RegisterService.prototype.register = function (user) {
        var url = this.identityProfileUrl + "/api/v1/UserProfiles/createProvider";
        return this.service.postWithId(url, user).map(function (res) { return res.ok; });
    };
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_services_configuration_service__WEBPACK_IMPORTED_MODULE_2__["ConfigurationService"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./app/pages/search/search.component.html":
/*!************************************************!*\
  !*** ./app/pages/search/search.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\">\r\n  <div fxFlex class=\"flex-p\"> <h4>Search results...</h4></div>\r\n</div>"

/***/ }),

/***/ "./app/pages/search/search.component.ts":
/*!**********************************************!*\
  !*** ./app/pages/search/search.component.ts ***!
  \**********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./app/pages/search/search.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./app/shared/services/configuration.service.ts":
/*!******************************************************!*\
  !*** ./app/shared/services/configuration.service.ts ***!
  \******************************************************/
/*! exports provided: ConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationService", function() { return ConfigurationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.service */ "./app/shared/services/storage.service.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "../node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/observable/throw */ "../node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "../node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Subject */ "../node_modules/rxjs-compat/_esm5/Subject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        // observable that is fired when settings are loaded from server
        this.settingsLoadedSource = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.settingsLoaded$ = this.settingsLoadedSource.asObservable();
        this.isReady = false;
    }
    ConfigurationService.prototype.load = function () {
        var _this = this;
        var baseURI = document.baseURI.endsWith('/') ? document.baseURI : document.baseURI + "/";
        var url = baseURI + "Home/Configuration";
        this.http.get(url).subscribe(function (response) {
            console.log('server settings loaded');
            _this.serverSettings = response.json();
            console.log(_this.serverSettings);
            _this.storageService.store('identityProfileUrl', _this.serverSettings.identityProfileUrl);
            _this.storageService.store('agentUrl', _this.serverSettings.agentUrl);
            _this.storageService.store('catalogUrl', _this.serverSettings.catalogUrl);
            _this.storageService.store('identityUrl', _this.serverSettings.identityUrl);
            _this.storageService.store('orderingUrl', _this.serverSettings.orderingUrl);
            _this.storageService.store('marketingUrl', _this.serverSettings.marketingUrl);
            _this.storageService.store('activateCampaignDetailFunction', _this.serverSettings.activateCampaignDetailFunction);
            _this.isReady = true;
            _this.settingsLoadedSource.next();
        });
    };
    ConfigurationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"]])
    ], ConfigurationService);
    return ConfigurationService;
}());



/***/ }),

/***/ "./app/shared/services/data.service.ts":
/*!*********************************************!*\
  !*** ./app/shared/services/data.service.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security.service */ "./app/shared/services/security.service.ts");
/* harmony import */ var _guid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../guid */ "./guid.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Implementing a Retry-Circuit breaker policy 
// is pending to do for the SPA app
var DataService = /** @class */ (function () {
    function DataService(http, securityService) {
        this.http = http;
        this.securityService = securityService;
    }
    DataService.prototype.get = function (url, params) {
        var options = {};
        this.setHeaders(options);
        return this.http.get(url, options)
            .pipe(
        // retry(3), // retry a failed request up to 3 times
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.postWithId = function (url, data, params) {
        return this.doPost(url, data, true, params);
    };
    DataService.prototype.post = function (url, data, params) {
        return this.doPost(url, data, false, params);
    };
    DataService.prototype.putWithId = function (url, data, params) {
        return this.doPut(url, data, true, params);
    };
    DataService.prototype.doPost = function (url, data, needId, params) {
        var options = {};
        this.setHeaders(options, needId);
        return this.http.post(url, data, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.delete = function (url, params) {
        var options = {};
        this.setHeaders(options);
        console.log('data.service deleting');
        this.http.delete(url, options)
            .subscribe(function (res) {
            console.log('deleted');
        });
    };
    DataService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('Client side network error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error('Backend - ' +
                ("status: " + error.status + ", ") +
                ("statusText: " + error.statusText + ", ") +
                ("message: " + error.error.message));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error || 'server error');
    };
    DataService.prototype.doPut = function (url, data, needId, params) {
        var options = {};
        this.setHeaders(options, needId);
        return this.http.put(url, data, options)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.setHeaders = function (options, needId) {
        if (needId && this.securityService) {
            options["headers"] = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .append('authorization', 'Bearer ' + this.securityService.GetToken())
                .append('x-requestid', _guid__WEBPACK_IMPORTED_MODULE_5__["Guid"].newGuid());
        }
        else if (this.securityService) {
            options["headers"] = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .append('authorization', 'Bearer ' + this.securityService.GetToken());
        }
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./app/shared/services/security.service.ts":
/*!*************************************************!*\
  !*** ./app/shared/services/security.service.ts ***!
  \*************************************************/
/*! exports provided: SecurityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityService", function() { return SecurityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configuration.service */ "./app/shared/services/configuration.service.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage.service */ "./app/shared/services/storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SecurityService = /** @class */ (function () {
    function SecurityService(_http, _router, route, _configurationService, _storageService) {
        var _this = this;
        this._http = _http;
        this._router = _router;
        this.route = route;
        this._configurationService = _configurationService;
        this._storageService = _storageService;
        this.authenticationSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.authenticationChallenge$ = this.authenticationSource.asObservable();
        this.authorityUrl = '';
        //private retrieve(key: string): any {
        //    let item = this.storage.getItem(key);
        //    if (item && item !== 'undefined') {
        //        return JSON.parse(this.storage.getItem(key));
        //    }
        //    return;
        //}
        //private store(key: string, value: any) {
        //    this.storage.setItem(key, JSON.stringify(value));
        //}
        this.getUserData = function () {
            _this.setHeaders();
            if (_this.authorityUrl === '')
                _this.authorityUrl = _this.storage.retrieve('IdentityUrl');
            return _this._http.get(_this.authorityUrl + '/connect/userinfo', {
                headers: _this.headers,
                body: ''
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
        };
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        this.storage = _storageService;
        this._configurationService.settingsLoaded$.subscribe(function (x) {
            _this.authorityUrl = _this._configurationService.serverSettings.identityUrl;
            _this.storage.store('IdentityUrl', _this.authorityUrl);
        });
        if (this.storage.retrieve('IsAuthorized') !== '') {
            this.IsAuthorized = this.storage.retrieve('IsAuthorized');
            this.authenticationSource.next(true);
            this.UserData = this.storage.retrieve('userData');
        }
    }
    SecurityService.prototype.GetToken = function () {
        return this.storage.retrieve('authorizationData');
    };
    SecurityService.prototype.ResetAuthorizationData = function () {
        this.storage.store('authorizationData', '');
        this.storage.store('authorizationDataIdToken', '');
        this.IsAuthorized = false;
        this.storage.store('IsAuthorized', false);
    };
    SecurityService.prototype.SetAuthorizationData = function (token, id_token) {
        var _this = this;
        if (this.storage.retrieve('authorizationData') !== '') {
            this.storage.store('authorizationData', '');
        }
        this.storage.store('authorizationData', token);
        this.storage.store('authorizationDataIdToken', id_token);
        this.IsAuthorized = true;
        this.storage.store('IsAuthorized', true);
        this.getUserData()
            .subscribe(function (data) {
            _this.UserData = data;
            _this.storage.store('userData', data);
            // emit observable
            _this.authenticationSource.next(true);
            window.location.href = location.origin;
        }, function (error) { return _this.HandleError(error); }, function () {
            console.log(_this.UserData);
        });
    };
    SecurityService.prototype.Authorize = function () {
        this.ResetAuthorizationData();
        var authorizationUrl = this.authorityUrl + '/connect/authorize';
        var client_id = 'js';
        var redirect_uri = location.origin + '/';
        var response_type = 'id_token token';
        var scope = 'openid profile orders basket marketing locations webshoppingagg orders.signalrhub';
        var nonce = 'N' + Math.random() + '' + Date.now();
        var state = Date.now() + '' + Math.random();
        this.storage.store('authStateControl', state);
        this.storage.store('authNonce', nonce);
        var url = authorizationUrl + '?' +
            'response_type=' + encodeURI(response_type) + '&' +
            'client_id=' + encodeURI(client_id) + '&' +
            'redirect_uri=' + encodeURI(redirect_uri) + '&' +
            'scope=' + encodeURI(scope) + '&' +
            'nonce=' + encodeURI(nonce) + '&' +
            'state=' + encodeURI(state);
        window.location.href = url;
    };
    SecurityService.prototype.AuthorizedCallback = function () {
        this.ResetAuthorizationData();
        var hash = window.location.hash.substr(1);
        var result = hash.split('&').reduce(function (result, item) {
            var parts = item.split('=');
            result[parts[0]] = parts[1];
            return result;
        }, {});
        console.log(result);
        var token = '';
        var id_token = '';
        var authResponseIsValid = false;
        if (!result.error) {
            if (result.state !== this.storage.retrieve('authStateControl')) {
                console.log('AuthorizedCallback incorrect state');
            }
            else {
                token = result.access_token;
                id_token = result.id_token;
                var dataIdToken = this.getDataFromToken(id_token);
                console.log(dataIdToken);
                // validate nonce
                if (dataIdToken.nonce !== this.storage.retrieve('authNonce')) {
                    console.log('AuthorizedCallback incorrect nonce');
                }
                else {
                    this.storage.store('authNonce', '');
                    this.storage.store('authStateControl', '');
                    authResponseIsValid = true;
                    console.log('AuthorizedCallback state and nonce validated, returning access token');
                }
            }
        }
        if (authResponseIsValid) {
            this.SetAuthorizationData(token, id_token);
        }
    };
    SecurityService.prototype.Logoff = function () {
        var authorizationUrl = this.authorityUrl + '/connect/endsession';
        var id_token_hint = this.storage.retrieve('authorizationDataIdToken');
        var post_logout_redirect_uri = location.origin + '/';
        var url = authorizationUrl + '?' +
            'id_token_hint=' + encodeURI(id_token_hint) + '&' +
            'post_logout_redirect_uri=' + encodeURI(post_logout_redirect_uri);
        this.ResetAuthorizationData();
        // emit observable
        this.authenticationSource.next(false);
        window.location.href = url;
    };
    SecurityService.prototype.HandleError = function (error) {
        console.log(error);
        if (error.status == 403) {
            this._router.navigate(['/Forbidden']);
        }
        else if (error.status == 401) {
            // this.ResetAuthorizationData();
            this._router.navigate(['/Unauthorized']);
        }
    };
    SecurityService.prototype.urlBase64Decode = function (str) {
        var output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }
        return window.atob(output);
    };
    SecurityService.prototype.getDataFromToken = function (token) {
        var data = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            data = JSON.parse(this.urlBase64Decode(encoded));
        }
        return data;
    };
    SecurityService.prototype.setHeaders = function () {
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        var token = this.GetToken();
        if (token !== '') {
            this.headers.append('Authorization', 'Bearer ' + token);
        }
    };
    SecurityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"], _storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]])
    ], SecurityService);
    return SecurityService;
}());



/***/ }),

/***/ "./app/shared/services/storage.service.ts":
/*!************************************************!*\
  !*** ./app/shared/services/storage.service.ts ***!
  \************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = /** @class */ (function () {
    function StorageService() {
        this.storage = sessionStorage; // localStorage;
    }
    StorageService.prototype.retrieve = function (key) {
        var item = this.storage.getItem(key);
        if (item && item !== 'undefined') {
            return JSON.parse(this.storage.getItem(key));
        }
        return;
    };
    StorageService.prototype.store = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    StorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./app/shared/shared.module.ts":
/*!*************************************!*\
  !*** ./app/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_security_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/security.service */ "./app/shared/services/security.service.ts");
/* harmony import */ var _services_configuration_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/configuration.service */ "./app/shared/services/configuration.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/storage.service */ "./app/shared/services/storage.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/data.service */ "./app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                // Providers
                _services_security_service__WEBPACK_IMPORTED_MODULE_4__["SecurityService"],
                _services_configuration_service__WEBPACK_IMPORTED_MODULE_5__["ConfigurationService"],
                _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"],
                _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"]
            ],
            exports: [
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepperModule"]
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());



/***/ }),

/***/ "./app/theme/components/applications/applications.component.html":
/*!***********************************************************************!*\
  !*** ./app/theme/components/applications/applications.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"appsMenu\" #appsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>apps</mat-icon>\r\n</button>\r\n<mat-menu #appsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu applications\">\r\n    <span (mouseleave)=\"appsMenuTrigger.closeMenu()\">\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"header\">\r\n               Applications \r\n            </div>  \r\n        </mat-toolbar>\r\n        <mat-card>           \r\n            <mat-grid-list cols=\"3\" rowHeight=\"1:1\">\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">person</mat-icon>\r\n                      <span>My account</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">search</mat-icon>\r\n                      <span>Search</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">play_arrow</mat-icon>\r\n                      <span>Player</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">settings</mat-icon>\r\n                      <span>Settings</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">event</mat-icon>\r\n                      <span>Calendar</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">image</mat-icon>\r\n                      <span>Gallery</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                 <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">library_books</mat-icon>\r\n                      <span>Documents</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">mail</mat-icon>\r\n                      <span>Mail</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n                <mat-grid-tile>\r\n                  <button mat-button>\r\n                      <mat-icon class=\"muted-text\">place</mat-icon>\r\n                      <span>Maps</span>\r\n                  </button>\r\n                </mat-grid-tile>\r\n            </mat-grid-list>\r\n        </mat-card>\r\n    </span>\r\n</mat-menu>"

/***/ }),

/***/ "./app/theme/components/applications/applications.component.scss":
/*!***********************************************************************!*\
  !*** ./app/theme/components/applications/applications.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".applications .mat-toolbar, .applications .mat-toolbar-row {\n  height: 40px !important;\n  min-height: 40px !important; }\n\n.applications .header {\n  width: 250px;\n  font-size: 16px; }\n\n.applications .mat-card {\n  padding: 0; }\n\n.applications .mat-card .mat-button {\n    height: 100%; }\n\n.applications .mat-card .mat-button .mat-button-wrapper {\n      display: flex;\n      flex-direction: column;\n      align-items: center; }\n"

/***/ }),

/***/ "./app/theme/components/applications/applications.component.ts":
/*!*********************************************************************!*\
  !*** ./app/theme/components/applications/applications.component.ts ***!
  \*********************************************************************/
/*! exports provided: ApplicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function() { return ApplicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicationsComponent = /** @class */ (function () {
    function ApplicationsComponent() {
    }
    ApplicationsComponent.prototype.ngOnInit = function () {
    };
    ApplicationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applications',
            template: __webpack_require__(/*! ./applications.component.html */ "./app/theme/components/applications/applications.component.html"),
            styles: [__webpack_require__(/*! ./applications.component.scss */ "./app/theme/components/applications/applications.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], ApplicationsComponent);
    return ApplicationsComponent;
}());



/***/ }),

/***/ "./app/theme/components/breadcrumb/breadcrumb.component.html":
/*!*******************************************************************!*\
  !*** ./app/theme/components/breadcrumb/breadcrumb.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row wrap\" *ngIf=\"router.url != '/'\">\r\n    <div fxFlex=\"100\" class=\"flex-p\">\r\n        <mat-card fxLayout=\"row\" class=\"breadcrumb\">\r\n            <a *ngIf=\"router.url != '/'\" routerLink=\"/\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\" (click)=\"closeSubMenus()\">\r\n                <mat-icon>home</mat-icon>\r\n                <span class=\"breadcrumb-title\">Home</span>\r\n            </a>\r\n            <div *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\" class=\"breadcrumb-item\" fxLayout=\"row\" fxLayoutAlign=\"start center\">                 \r\n                <a [hidden]=\"i == (breadcrumbs.length - 1)\" [routerLink]=\"[breadcrumb.url]\">{{breadcrumb.name}}</a>   \r\n                <span [hidden]=\"i != (breadcrumbs.length - 1)\" class=\"breadcrumb-title active\">{{breadcrumb.name}}</span>\r\n            </div> \r\n        </mat-card>\r\n    </div> \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./app/theme/components/breadcrumb/breadcrumb.component.scss":
/*!*******************************************************************!*\
  !*** ./app/theme/components/breadcrumb/breadcrumb.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb {\n  padding: 8px; }\n  .breadcrumb .mat-icon {\n    font-size: 20px;\n    height: 20px;\n    width: 20px;\n    padding: 0 6px; }\n  .breadcrumb .breadcrumb-title.active {\n    text-transform: uppercase;\n    font-weight: 500; }\n  .breadcrumb .breadcrumb-item + .breadcrumb-item:before {\n    display: inline-block;\n    padding-right: .5rem;\n    padding-left: .5rem;\n    content: \"/\"; }\n"

/***/ }),

/***/ "./app/theme/components/breadcrumb/breadcrumb.component.ts":
/*!*****************************************************************!*\
  !*** ./app/theme/components/breadcrumb/breadcrumb.component.ts ***!
  \*****************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.settings */ "./app/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(appSettings, router, activatedRoute, title) {
        var _this = this;
        this.appSettings = appSettings;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = title;
        this.breadcrumbs = [];
        this.settings = this.appSettings.settings;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.breadcrumbs = [];
                _this.parseRoute(_this.router.routerState.snapshot.root);
                _this.pageTitle = "";
                _this.breadcrumbs.forEach(function (breadcrumb) {
                    _this.pageTitle += ' > ' + breadcrumb.name;
                });
                _this.title.setTitle(_this.settings.name + _this.pageTitle);
            }
        });
    }
    BreadcrumbComponent.prototype.parseRoute = function (node) {
        if (node.data['breadcrumb']) {
            if (node.url.length) {
                var urlSegments_1 = [];
                node.pathFromRoot.forEach(function (routerState) {
                    urlSegments_1 = urlSegments_1.concat(routerState.url);
                });
                var url = urlSegments_1.map(function (urlSegment) {
                    return urlSegment.path;
                }).join('/');
                this.breadcrumbs.push({
                    name: node.data['breadcrumb'],
                    url: '/' + url
                });
            }
        }
        if (node.firstChild) {
            this.parseRoute(node.firstChild);
        }
    };
    BreadcrumbComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./app/theme/components/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./app/theme/components/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./app/theme/components/flags-menu/flags-menu.component.html":
/*!*******************************************************************!*\
  !*** ./app/theme/components/flags-menu/flags-menu.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <mat-icon>flag</mat-icon>\r\n</button>\r\n<!--<button mat-icon-button [matMenuTriggerFor]=\"flagsMenu\" #flagsMenuTrigger=\"matMenuTrigger\">\r\n    <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n</button>-->\r\n<mat-menu #flagsMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu flags\">\r\n    <span (mouseleave)=\"flagsMenuTrigger.closeMenu()\">      \r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/gb.svg\" width=\"20\" alt=\"english\"> \r\n            English\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/de.svg\" width=\"20\" alt=\"german\"> \r\n            German\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/fr.svg\" width=\"20\" alt=\"french\"> \r\n            French\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/ru.svg\" width=\"20\" alt=\"russian\"> \r\n            Russian\r\n        </button>\r\n        <button mat-menu-item>\r\n            <img src=\"assets/img/flags/tr.svg\" width=\"20\" alt=\"turkish\"> \r\n            Turkish\r\n        </button>\r\n    </span>\r\n</mat-menu>"

/***/ }),

/***/ "./app/theme/components/flags-menu/flags-menu.component.scss":
/*!*******************************************************************!*\
  !*** ./app/theme/components/flags-menu/flags-menu.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flags img {\n  vertical-align: middle;\n  margin-right: 8px; }\n\n.flags .mat-menu-item {\n  height: 36px;\n  line-height: 36px; }\n"

/***/ }),

/***/ "./app/theme/components/flags-menu/flags-menu.component.ts":
/*!*****************************************************************!*\
  !*** ./app/theme/components/flags-menu/flags-menu.component.ts ***!
  \*****************************************************************/
/*! exports provided: FlagsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlagsMenuComponent", function() { return FlagsMenuComponent; });
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


var FlagsMenuComponent = /** @class */ (function () {
    function FlagsMenuComponent(appSettings) {
        this.appSettings = appSettings;
        this.settings = this.appSettings.settings;
    }
    FlagsMenuComponent.prototype.ngOnInit = function () {
    };
    FlagsMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flags-menu',
            template: __webpack_require__(/*! ./flags-menu.component.html */ "./app/theme/components/flags-menu/flags-menu.component.html"),
            styles: [__webpack_require__(/*! ./flags-menu.component.scss */ "./app/theme/components/flags-menu/flags-menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]])
    ], FlagsMenuComponent);
    return FlagsMenuComponent;
}());



/***/ }),

/***/ "./app/theme/components/fullscreen/fullscreen.component.ts":
/*!*****************************************************************!*\
  !*** ./app/theme/components/fullscreen/fullscreen.component.ts ***!
  \*****************************************************************/
/*! exports provided: FullScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenComponent", function() { return FullScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FullScreenComponent = /** @class */ (function () {
    function FullScreenComponent() {
        this.toggle = false;
    }
    FullScreenComponent.prototype.requestFullscreen = function (elem) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        }
        else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.exitFullscreen = function () {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
        else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
        else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        }
        else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        else {
            console.log('Fullscreen API is not supported.');
        }
    };
    ;
    FullScreenComponent.prototype.getFullscreen = function () {
        if (this.expand) {
            this.requestFullscreen(document.documentElement);
        }
        if (this.compress) {
            this.exitFullscreen();
        }
    };
    FullScreenComponent.prototype.onFullScreenChange = function () {
        var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement || document.msFullscreenElement;
        if (fullscreenElement != null) {
            this.toggle = true;
        }
        else {
            this.toggle = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('expand'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FullScreenComponent.prototype, "expand", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('compress'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FullScreenComponent.prototype, "compress", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "getFullscreen", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FullScreenComponent.prototype, "onFullScreenChange", null);
    FullScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fullscreen',
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            template: "\n    <button mat-icon-button class=\"full-screen\">\n        <mat-icon *ngIf=\"!toggle\" #expand>fullscreen</mat-icon>\n        <mat-icon *ngIf=\"toggle\" #compress>fullscreen_exit</mat-icon>\n    </button> \n  "
        })
    ], FullScreenComponent);
    return FullScreenComponent;
}());



/***/ }),

/***/ "./app/theme/components/menu/horizontal-menu/horizontal-menu.component.html":
/*!**********************************************************************************!*\
  !*** ./app/theme/components/menu/horizontal-menu/horizontal-menu.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [fxLayout]=\"(menuParentId == 0) ? 'row' : 'column'\" fxLayoutAlign=\"start center\">\r\n    <div *ngFor=\"let menu of menuItems\" class=\"horizontal-menu-item w-100\">\r\n        <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.href && !menu.subMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n        <a *ngIf=\"menu.hasSubMenu\" mat-button \r\n            fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n            [matTooltip]=\"menu.title\" matTooltipPosition=\"above\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n            [id]=\"'horizontal-menu-item-'+menu.id\">\r\n            <mat-icon class=\"horizontal-menu-icon\">{{menu.icon}}</mat-icon>\r\n            <span class=\"horizontal-menu-title\">{{menu.title}}</span>\r\n        </a>\r\n\r\n        <div *ngIf=\"menu.hasSubMenu\" class=\"horizontal-sub-menu\" [id]=\"'horizontal-sub-menu-'+menu.id\">\r\n            <app-horizontal-menu [menuParentId]=\"menu.id\"></app-horizontal-menu>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss":
/*!**********************************************************************************!*\
  !*** ./app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".horizontal-menu-item {\n  position: relative; }\n  .horizontal-menu-item .mat-button {\n    height: 56px;\n    font-weight: 400; }\n  .horizontal-menu-item .horizontal-menu-icon {\n    margin-right: 5px; }\n  .horizontal-menu-item .horizontal-sub-menu {\n    position: absolute;\n    width: 190px;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 0.25s ease-out; }\n  .horizontal-menu-item .horizontal-sub-menu .mat-button {\n      width: 100%;\n      height: 36px; }\n  .horizontal-menu-item:hover > .horizontal-sub-menu {\n  max-height: 500px;\n  overflow: visible; }\n  .horizontal-sub-menu .horizontal-sub-menu {\n  left: 100%;\n  top: 0; }\n"

/***/ }),

/***/ "./app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts":
/*!********************************************************************************!*\
  !*** ./app/theme/components/menu/horizontal-menu/horizontal-menu.component.ts ***!
  \********************************************************************************/
/*! exports provided: HorizontalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalMenuComponent", function() { return HorizontalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app.settings */ "./app/app.settings.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../menu.service */ "./app/theme/components/menu/menu.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HorizontalMenuComponent = /** @class */ (function () {
    function HorizontalMenuComponent(appSettings, menuService, router) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.settings = this.appSettings.settings;
    }
    HorizontalMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = this.menuService.getHorizontalMenuItems();
        this.menuItems = this.menuItems.filter(function (item) { return item.parentId == _this.menuParentId; });
    };
    HorizontalMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (_this.settings.fixedHeader) {
                    var mainContent = document.getElementById('main-content');
                    if (mainContent) {
                        mainContent.scrollTop = 0;
                    }
                }
                else {
                    document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'),
        __metadata("design:type", Object)
    ], HorizontalMenuComponent.prototype, "menuParentId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"])
    ], HorizontalMenuComponent.prototype, "trigger", void 0);
    HorizontalMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-horizontal-menu',
            template: __webpack_require__(/*! ./horizontal-menu.component.html */ "./app/theme/components/menu/horizontal-menu/horizontal-menu.component.html"),
            styles: [__webpack_require__(/*! ./horizontal-menu.component.scss */ "./app/theme/components/menu/horizontal-menu/horizontal-menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HorizontalMenuComponent);
    return HorizontalMenuComponent;
}());



/***/ }),

/***/ "./app/theme/components/menu/menu.model.ts":
/*!*************************************************!*\
  !*** ./app/theme/components/menu/menu.model.ts ***!
  \*************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
var Menu = /** @class */ (function () {
    function Menu(id, title, routerLink, href, icon, target, hasSubMenu, parentId) {
        this.id = id;
        this.title = title;
        this.routerLink = routerLink;
        this.href = href;
        this.icon = icon;
        this.target = target;
        this.hasSubMenu = hasSubMenu;
        this.parentId = parentId;
    }
    return Menu;
}());



/***/ }),

/***/ "./app/theme/components/menu/menu.service.ts":
/*!***************************************************!*\
  !*** ./app/theme/components/menu/menu.service.ts ***!
  \***************************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./app/theme/components/menu/menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MenuService = /** @class */ (function () {
    function MenuService(location, router) {
        this.location = location;
        this.router = router;
    }
    MenuService.prototype.getVerticalMenuItems = function () {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["verticalMenuItems"];
    };
    MenuService.prototype.getHorizontalMenuItems = function () {
        return _menu__WEBPACK_IMPORTED_MODULE_3__["horizontalMenuItems"];
    };
    MenuService.prototype.expandActiveSubMenu = function (menu) {
        var url = this.location.path();
        var routerLink = url; // url.substring(1, url.length);
        var activeMenuItem = menu.filter(function (item) { return item.routerLink === routerLink; });
        if (activeMenuItem[0]) {
            var menuItem_1 = activeMenuItem[0];
            while (menuItem_1.parentId != 0) {
                var parentMenuItem = menu.filter(function (item) { return item.id == menuItem_1.parentId; })[0];
                menuItem_1 = parentMenuItem;
                this.toggleMenuItem(menuItem_1.id);
            }
        }
    };
    MenuService.prototype.toggleMenuItem = function (menuId) {
        var menuItem = document.getElementById('menu-item-' + menuId);
        var subMenu = document.getElementById('sub-menu-' + menuId);
        if (subMenu) {
            if (subMenu.classList.contains('show')) {
                subMenu.classList.remove('show');
                menuItem.classList.remove('expanded');
            }
            else {
                subMenu.classList.add('show');
                menuItem.classList.add('expanded');
            }
        }
    };
    MenuService.prototype.closeOtherSubMenus = function (menu, menuId) {
        var currentMenuItem = menu.filter(function (item) { return item.id == menuId; })[0];
        if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
            menu.forEach(function (item) {
                if (item.id != menuId) {
                    var subMenu = document.getElementById('sub-menu-' + item.id);
                    var menuItem = document.getElementById('menu-item-' + item.id);
                    if (subMenu) {
                        if (subMenu.classList.contains('show')) {
                            subMenu.classList.remove('show');
                            menuItem.classList.remove('expanded');
                        }
                    }
                }
            });
        }
    };
    MenuService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuService);
    return MenuService;
}());



/***/ }),

/***/ "./app/theme/components/menu/menu.ts":
/*!*******************************************!*\
  !*** ./app/theme/components/menu/menu.ts ***!
  \*******************************************/
/*! exports provided: verticalMenuItems, horizontalMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalMenuItems", function() { return verticalMenuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontalMenuItems", function() { return horizontalMenuItems; });
/* harmony import */ var _menu_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.model */ "./app/theme/components/menu/menu.model.ts");

var verticalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'UI Features', null, null, 'computer', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Lists', '/ui/lists', null, 'list', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Chips', '/ui/chips', null, 'label', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](15, 'Dynamic Menu', '/dynamic-menu', null, 'format_list_bulleted', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](16, 'Mailbox', '/mailbox', null, 'email', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](17, 'Chat', '/chat', null, 'chat', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Form Controls', null, null, 'dvr', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](25, 'Input', '/form-controls/input', null, 'input', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'Tables', null, null, 'view_module', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](35, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'library_books', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'exit_to_app', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'person_add', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](47, 'Error', '/error', null, 'warning', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](48, 'Landing', '/landing', null, 'filter', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, 'Schedule', '/schedule', null, 'event', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](66, 'Maps', null, null, 'map', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](67, 'Google Maps', '/maps/googlemaps', null, 'location_on', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](68, 'Leaflet Maps', '/maps/leafletmaps', null, 'my_location', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Charts', null, null, 'multiline_chart', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](140, 'Level 1', null, null, 'more_horiz', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](141, 'Level 2', null, null, 'folder_open', null, true, 140),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](142, 'Level 3', null, null, 'folder_open', null, true, 141),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](143, 'Level 4', null, null, 'folder_open', null, true, 142),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](144, 'Level 5', null, 'http://themeseason.com', 'link', null, false, 143),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 0)
];
var horizontalMenuItems = [
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](2, 'Users', '/users', null, 'supervisor_account', null, false, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](3, 'UI Features', null, null, 'computer', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](6, 'Lists', '/ui/lists', null, 'list', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](10, 'Chips', '/ui/chips', null, 'label', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](16, 'Mailbox', '/mailbox', null, 'email', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](17, 'Chat', '/chat', null, 'chat', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](20, 'Form Controls', null, null, 'dvr', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](25, 'Input', '/form-controls/input', null, 'input', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](30, 'Tables', null, null, 'view_module', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](35, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](70, 'Charts', null, null, 'multiline_chart', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](66, 'Maps', null, null, 'map', null, true, 70),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](67, 'Google Maps', '/maps/googlemaps', null, 'location_on', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](68, 'Leaflet Maps', '/maps/leafletmaps', null, 'my_location', null, false, 66),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 3),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](40, 'Pages', null, null, 'library_books', null, true, 0),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](43, 'Login', '/login', null, 'exit_to_app', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](44, 'Register', '/register', null, 'person_add', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](47, 'Error', '/error', null, 'warning', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](48, 'Landing', '/landing', null, 'filter', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](50, 'Schedule', '/schedule', null, 'event', null, false, 40),
    new _menu_model__WEBPACK_IMPORTED_MODULE_0__["Menu"](200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 40)
];


/***/ }),

/***/ "./app/theme/components/menu/vertical-menu/vertical-menu.component.html":
/*!******************************************************************************!*\
  !*** ./app/theme/components/menu/vertical-menu/vertical-menu.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-item\">\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">\r\n            <mat-card-subtitle>\r\n                <h2>Simple form field</h2>\r\n            </mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n            <mat-form-field>\r\n                <input matInput placeholder=\"Input\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <textarea matInput placeholder=\"Textarea\"></textarea>\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n                <mat-select placeholder=\"Select\">\r\n                    <mat-option value=\"option\">Option</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </mat-card-content>\r\n    </mat-card>\r\n    <mat-card>\r\n        <mat-card-header fxLayoutAlign=\"center\">\r\n            <mat-card-subtitle><h2>Form field theming</h2></mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n            <form [formGroup]=\"themingForm\" fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n                <mat-form-field [color]=\"themingForm.value.color\">\r\n                    <mat-select placeholder=\"Color\" formControlName=\"color\">\r\n                        <mat-option value=\"primary\">Primary</mat-option>\r\n                        <mat-option value=\"accent\">Accent</mat-option>\r\n                        <mat-option value=\"warn\">Warn</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n                <mat-form-field [color]=\"themingForm.value.color\">\r\n                    <input matInput type=\"number\" placeholder=\"Font size (px)\" formControlName=\"fontSize\" min=\"10\">\r\n                    <mat-error *ngIf=\"themingForm.get('fontSize')?.invalid\">Min size: 10px</mat-error>\r\n                </mat-form-field>\r\n            </form>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>\r\n\r\n\r\n<!-- <a *ngIf=\"menu.routerLink && !menu.hasSubMenu\" mat-button\r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [routerLink]=\"[menu.routerLink]\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.href && !menu.subMenu\" mat-button\r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [attr.href]=\"menu.href || ''\" [attr.target]=\"menu.target || ''\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n    </a>\r\n    <a *ngIf=\"menu.hasSubMenu\" mat-button\r\n        fxLayout=\"row\" [fxLayoutAlign]=\"(settings.menuType=='default') ? 'start center' : 'center center'\"\r\n        [matTooltip]=\"menu.title\" matTooltipPosition=\"after\" [matTooltipDisabled]=\"(settings.menuType=='mini') ? 'false' : 'true'\"\r\n        (click)=\"onClick(menu.id)\" [id]=\"'menu-item-'+menu.id\">\r\n        <mat-icon class=\"menu-icon\">{{menu.icon}}</mat-icon>\r\n        <span class=\"menu-title\">{{menu.title}}</span>\r\n        <mat-icon class=\"menu-expand-icon transition-2\">arrow_drop_down</mat-icon>\r\n    </a>\r\n\r\n    <div *ngIf=\"menu.hasSubMenu\" class=\"sub-menu\" [id]=\"'sub-menu-'+menu.id\">\r\n        <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"menu.id\"></app-vertical-menu>\r\n    </div> -->\r\n"

/***/ }),

/***/ "./app/theme/components/menu/vertical-menu/vertical-menu.component.scss":
/*!******************************************************************************!*\
  !*** ./app/theme/components/menu/vertical-menu/vertical-menu.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-icon {\n  margin-right: 12px; }\n\n.menu-expand-icon {\n  position: absolute;\n  right: 10px;\n  top: 10px; }\n\n.menu-item .mat-button {\n  padding: 0;\n  padding-top: 3px;\n  padding-bottom: 3px;\n  width: 100%;\n  font-weight: 400; }\n\n.menu-item .mat-button.expanded .menu-expand-icon {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg); }\n\n.menu-item .mat-button-wrapper {\n  padding-left: 16px; }\n\n.sub-menu {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.25s ease-out; }\n\n.sub-menu .sub-menu .mat-button {\n    padding-left: 40px; }\n\n.sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 60px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 80px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 100px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 120px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 140px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 160px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 180px; }\n\n.sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .sub-menu .mat-button {\n    padding-left: 200px; }\n\n.sub-menu .mat-button {\n    padding-left: 20px; }\n\n.sub-menu.show {\n    max-height: 500px;\n    transition: max-height 0.25s ease-in; }\n"

/***/ }),

/***/ "./app/theme/components/menu/vertical-menu/vertical-menu.component.ts":
/*!****************************************************************************!*\
  !*** ./app/theme/components/menu/vertical-menu/vertical-menu.component.ts ***!
  \****************************************************************************/
/*! exports provided: VerticalMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalMenuComponent", function() { return VerticalMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app.settings */ "./app/app.settings.ts");
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu.service */ "./app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VerticalMenuComponent = /** @class */ (function () {
    function VerticalMenuComponent(appSettings, menuService, router, formBuilder) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.settings = this.appSettings.settings;
    }
    VerticalMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.parentMenu = this.menuItems.filter(function (item) { return item.parentId == _this.menuParentId; });
        this.options = this.formBuilder.group({
            hideRequired: false,
            floatLabel: 'auto',
        });
        this.themingForm = this.formBuilder.group({
            'color': 'primary',
            'fontSize': [16, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(10)],
        });
    };
    VerticalMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (_this.settings.fixedHeader) {
                    var mainContent = document.getElementById('main-content');
                    if (mainContent) {
                        mainContent.scrollTop = 0;
                    }
                }
                else {
                    document.getElementsByClassName('mat-drawer-content')[0].scrollTop = 0;
                }
            }
        });
    };
    VerticalMenuComponent.prototype.onClick = function (menuId) {
        this.menuService.toggleMenuItem(menuId);
        this.menuService.closeOtherSubMenus(this.menuItems, menuId);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuItems'),
        __metadata("design:type", Object)
    ], VerticalMenuComponent.prototype, "menuItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('menuParentId'),
        __metadata("design:type", Object)
    ], VerticalMenuComponent.prototype, "menuParentId", void 0);
    VerticalMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vertical-menu',
            template: __webpack_require__(/*! ./vertical-menu.component.html */ "./app/theme/components/menu/vertical-menu/vertical-menu.component.html"),
            styles: [__webpack_require__(/*! ./vertical-menu.component.scss */ "./app/theme/components/menu/vertical-menu/vertical-menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_3__["AppSettings"], _menu_service__WEBPACK_IMPORTED_MODULE_4__["MenuService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], VerticalMenuComponent);
    return VerticalMenuComponent;
}());



/***/ }),

/***/ "./app/theme/components/messages/messages.component.html":
/*!***************************************************************!*\
  !*** ./app/theme/components/messages/messages.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"messagesMenu\" (click)=\"openMessagesMenu()\">\r\n    <mat-icon>notifications</mat-icon>\r\n</button>\r\n<mat-menu #messagesMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu messages\">\r\n    <!--<span (mouseleave)=\"onMouseLeave()\">-->\r\n        <mat-tab-group backgroundColor=\"primary\" (click)=\"stopClickPropagate($event)\" [selectedIndex]=\"selectedTab\">\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>message</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let message of messages\">\r\n                          <img src=\"{{ ( message.image || (message.name | profilePicture)) }}\" width=\"50\">   \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{message.name}}</span>\r\n                                  <span class=\"info\"><mat-icon>access_time</mat-icon> {{message.time}}</span>\r\n                              </div>\r\n                              <span class=\"text muted-text\">{{message.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>description</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let file of files\">\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\" class=\"w-100\">\r\n                              <div fxLayout=\"row\" fxLayoutAlign=\"space-between start\">\r\n                                  <span class=\"name\">{{file.text}}</span>\r\n                                  <span class=\"info\">{{file.size}}</span>\r\n                              </div>\r\n                              <mat-progress-bar\r\n                                  class=\"example-margin\"\r\n                                  [color]=\"file.color\"\r\n                                  mode=\"indeterminate\"\r\n                                  [value]=\"file.value\">\r\n                              </mat-progress-bar>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n            <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                    <mat-icon>event</mat-icon>\r\n                </ng-template>\r\n                <mat-card class=\"content\" perfectScrollbar>\r\n                  <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                      <button mat-button *ngFor=\"let meeting of meetings\">  \r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"row-1\">\r\n                              <span class=\"name\">{{meeting.day}}</span>\r\n                              <span class=\"name\">{{meeting.month}}</span>\r\n                          </div>\r\n                          <div fxLayout=\"column\" fxLayoutAlign=\"none\">\r\n                              <span class=\"name\">{{meeting.title}}</span>\r\n                              <span class=\"text muted-text\">{{meeting.text}}</span>\r\n                          </div>\r\n                      </button>\r\n                    </div>             \r\n                </mat-card>\r\n            </mat-tab>\r\n        </mat-tab-group>\r\n    <!--</span>-->\r\n</mat-menu>"

/***/ }),

/***/ "./app/theme/components/messages/messages.component.scss":
/*!***************************************************************!*\
  !*** ./app/theme/components/messages/messages.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messages .mat-tab-label {\n  min-width: 93.3px;\n  height: 40px; }\n\n.messages .content {\n  padding: 0;\n  height: 250px; }\n\n.messages img {\n  margin-right: 8px;\n  border-radius: 4px; }\n\n.messages span.name {\n  text-transform: capitalize;\n  font-size: 13px;\n  line-height: 22px; }\n\n.messages span.info {\n  font-size: 12px;\n  opacity: 0.8;\n  line-height: 22px; }\n\n.messages span.text {\n  font-size: 11px;\n  line-height: 14px;\n  white-space: initial;\n  text-align: left; }\n\n.messages .mat-button {\n  padding: 8px; }\n\n.messages .mat-button .mat-button-wrapper {\n    display: flex;\n    flex-direction: row;\n    align-items: start; }\n\n.messages .mat-button .mat-icon {\n    height: 16px;\n    font-size: 12px;\n    width: 12px;\n    vertical-align: middle; }\n\n.messages .row-1 {\n  box-shadow: 0 0 5px #ccc;\n  border-radius: 4px;\n  padding: 2px 13px;\n  margin-right: 8px; }\n"

/***/ }),

/***/ "./app/theme/components/messages/messages.component.ts":
/*!*************************************************************!*\
  !*** ./app/theme/components/messages/messages.component.ts ***!
  \*************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.service */ "./app/theme/components/messages/messages.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messagesService) {
        this.messagesService = messagesService;
        this.selectedTab = 1;
        this.messages = messagesService.getMessages();
        this.files = messagesService.getFiles();
        this.meetings = messagesService.getMeetings();
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.prototype.openMessagesMenu = function () {
        this.trigger.openMenu();
        this.selectedTab = 0;
    };
    MessagesComponent.prototype.onMouseLeave = function () {
        this.trigger.closeMenu();
    };
    MessagesComponent.prototype.stopClickPropagate = function (event) {
        event.stopPropagation();
        event.preventDefault();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], MessagesComponent.prototype, "trigger", void 0);
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./app/theme/components/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./app/theme/components/messages/messages.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]]
        }),
        __metadata("design:paramtypes", [_messages_service__WEBPACK_IMPORTED_MODULE_2__["MessagesService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./app/theme/components/messages/messages.service.ts":
/*!***********************************************************!*\
  !*** ./app/theme/components/messages/messages.service.ts ***!
  \***********************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessagesService = /** @class */ (function () {
    function MessagesService() {
        this.messages = [
            {
                name: 'ashley',
                text: 'After you get up and running, you can place Font Awesome icons just about...',
                time: '1 min ago'
            },
            {
                name: 'michael',
                text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
                time: '2 hrs ago'
            },
            {
                name: 'julia',
                text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
                time: '10 hrs ago'
            },
            {
                name: 'bruno',
                text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
                time: '1 day ago'
            },
            {
                name: 'tereza',
                text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
                time: '1 day ago'
            },
            {
                name: 'adam',
                text: 'Need some support to reach your goals? Apply for scholarships across...',
                time: '2 days ago'
            },
            {
                name: 'michael',
                text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
                time: '1 week ago'
            }
        ];
        this.files = [
            {
                text: 'gradus.zip',
                size: '~6.2 MB',
                value: '47',
                color: 'primary'
            },
            {
                text: 'documentation.pdf',
                size: '~14.6 MB',
                value: '33',
                color: 'accent'
            },
            {
                text: 'wallpaper.jpg',
                size: '~558 KB',
                value: '60',
                color: 'warn'
            },
            {
                text: 'letter.doc',
                size: '~57 KB',
                value: '80',
                color: 'primary'
            },
            {
                text: 'azimuth.zip',
                size: '~10.2 MB',
                value: '55',
                color: 'warn'
            },
            {
                text: 'contacts.xlsx',
                size: '~96 KB',
                value: '75',
                color: 'accent'
            }
        ];
        this.meetings = [
            {
                day: '09',
                month: 'May',
                title: 'Meeting with Bruno',
                text: 'Fusce ut condimentum velit, quis egestas eros. Quisque sed condimentum neque.',
                color: 'danger'
            },
            {
                day: '15',
                month: 'May',
                title: 'Training course',
                text: 'Fusce arcu tortor, tempor aliquam augue vel, consectetur vehicula lectus.',
                color: 'primary'
            },
            {
                day: '12',
                month: 'June',
                title: 'Dinner with Ashley',
                text: 'Curabitur rhoncus facilisis augue sed fringilla.',
                color: 'info'
            },
            {
                day: '14',
                month: 'June',
                title: 'Sport time',
                text: 'Vivamus tristique enim eros, ac ultricies sem ultrices vitae.',
                color: 'warning'
            },
            {
                day: '29',
                month: 'July',
                title: 'Birthday of Julia',
                text: 'Nam porttitor justo nec elit efficitur vestibulum.',
                color: 'success'
            }
        ];
    }
    MessagesService.prototype.getMessages = function () {
        return this.messages;
    };
    MessagesService.prototype.getFiles = function () {
        return this.files;
    };
    MessagesService.prototype.getMeetings = function () {
        return this.meetings;
    };
    MessagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "./app/theme/components/sidenav/sidenav.component.html":
/*!*************************************************************!*\
  !*** ./app/theme/components/sidenav/sidenav.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" [fxLayoutAlign]=\"(settings.menuType != 'mini') ? 'space-between center' : 'center center'\" class=\"sidenav-header\">\r\n    <a mat-raised-button color=\"accent\" routerLink=\"/\" (click)=\"closeSubMenus()\" class=\"small-logo\">G</a>\r\n    <a *ngIf=\"settings.menuType == 'default'\" class=\"logo\" routerLink=\"/\" (click)=\"closeSubMenus()\">GRADUS</a> \r\n    <svg *ngIf=\"settings.menuType != 'mini'\" class=\"pin\" (click)=\"settings.sidenavIsPinned = !settings.sidenavIsPinned\">\r\n        <path *ngIf=\"!settings.sidenavIsPinned\" d=\"M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z\" />\r\n        <path *ngIf=\"settings.sidenavIsPinned\" d=\"M2,5.27L3.28,4L20,20.72L18.73,22L12.8,16.07V22H11.2V16H6V14L8,12V11.27L2,5.27M16,12L18,14V16H17.82L8,6.18V4H7V2H17V4H16V12Z\" />\r\n    </svg>  \r\n</mat-toolbar>\r\n\r\n<!--<div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"user-block transition-2\" [class.show]=\"settings.sidenavUserBlock\"> \r\n    <div [fxLayout]=\"(settings.menuType != 'default') ? 'column' : 'row'\" \r\n         [fxLayoutAlign]=\"(settings.menuType != 'default') ? 'center center' : 'space-around center'\" class=\"user-info-wrapper\">\r\n        <img [src]=\"userImage\" alt=\"user-image\">\r\n        <div class=\"user-info\">\r\n            <p class=\"name\">Emilio Verdines</p>\r\n            <p *ngIf=\"settings.menuType == 'default'\" class=\"position\">Web developer <br> <small class=\"muted-text\">Member since May. 2016</small></p>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"settings.menuType != 'mini'\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"w-100 muted-text\">\r\n        <button mat-icon-button><mat-icon>person_outline</mat-icon></button>\r\n        <a mat-icon-button routerLink=\"/mailbox\">\r\n            <mat-icon>mail_outline</mat-icon>\r\n        </a>\r\n        <a mat-icon-button routerLink=\"/login\">\r\n            <mat-icon>power_settings_new</mat-icon>\r\n        </a>\r\n    </div>\r\n</div>-->\r\n\r\n<div id=\"sidenav-menu-outer\" class=\"sidenav-menu-outer\" perfectScrollbar [class.user-block-show]=\"settings.sidenavUserBlock\">    \r\n    <span *ngIf=\"!menuItems\">loading....</span>\r\n    <app-vertical-menu [menuItems]=\"menuItems\" [menuParentId]=\"0\"></app-vertical-menu> \r\n</div>"

/***/ }),

/***/ "./app/theme/components/sidenav/sidenav.component.scss":
/*!*************************************************************!*\
  !*** ./app/theme/components/sidenav/sidenav.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pin {\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  fill: currentColor; }\n\n.sidenav-header {\n  padding: 0 10px !important; }\n\n.user-block {\n  height: 0;\n  position: relative;\n  z-index: 1;\n  overflow: hidden; }\n\n.user-block img {\n    width: 80px;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 50%; }\n\n.user-block .user-info-wrapper {\n    padding: 0 6px;\n    margin: 6px 0;\n    width: 100%; }\n\n.user-block .user-info-wrapper .user-info {\n      text-align: center; }\n\n.user-block .user-info-wrapper .user-info .name {\n        font-size: 15px; }\n\n.user-block .user-info-wrapper .user-info .position {\n        font-size: 13px; }\n\n.user-block.show {\n    height: 156px; }\n\n.sidenav-menu-outer {\n  height: calc(100% - 56px); }\n\n.sidenav-menu-outer.user-block-show {\n    height: calc(100% - 212px); }\n"

/***/ }),

/***/ "./app/theme/components/sidenav/sidenav.component.ts":
/*!***********************************************************!*\
  !*** ./app/theme/components/sidenav/sidenav.component.ts ***!
  \***********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.settings */ "./app/app.settings.ts");
/* harmony import */ var _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.service */ "./app/theme/components/menu/menu.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(appSettings, menuService) {
        this.appSettings = appSettings;
        this.menuService = menuService;
        this.userImage = '../assets/img/users/user.jpg';
        this.settings = this.appSettings.settings;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.menuItems = this.menuService.getVerticalMenuItems();
    };
    SidenavComponent.prototype.closeSubMenus = function () {
        var menu = document.querySelector(".sidenav-menu-outer");
        if (menu) {
            for (var i = 0; i < menu.children[0].children.length; i++) {
                var child = menu.children[0].children[i];
                if (child) {
                    if (child.children[0].classList.contains('expanded')) {
                        child.children[0].classList.remove('expanded');
                        child.children[1].classList.remove('show');
                    }
                }
            }
        }
    };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./app/theme/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./app/theme/components/sidenav/sidenav.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            providers: [_menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]]
        }),
        __metadata("design:paramtypes", [_app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"], _menu_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./app/theme/components/user-menu/user-menu.component.html":
/*!*****************************************************************!*\
  !*** ./app/theme/components/user-menu/user-menu.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [matMenuTriggerFor]=\"userMenu\" #userMenuTrigger=\"matMenuTrigger\" >\r\n    <mat-icon>account_circle</mat-icon>\r\n</button>\r\n\r\n<mat-menu #userMenu=\"matMenu\" [overlapTrigger]=\"false\" class=\"toolbar-dropdown-menu user-menu\">\r\n    <!--<span (mouseleave)=\"userMenuTrigger.closeMenu()\">-->\r\n        <mat-toolbar color=\"primary\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" class=\"user-info\">\r\n                <img [src]=\"userImage\" alt=\"user-image\" width=\"80\" class=\"rounded mat-elevation-z6\">\r\n                <p>Emilio Verdines <br> <small>Web developer</small></p>\r\n            </div>  \r\n        </mat-toolbar>\r\n        <a mat-menu-item routerLink=\"profile\"> \r\n            <mat-icon>person</mat-icon>\r\n            <span>Profile</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"settings\"> \r\n            <mat-icon>settings</mat-icon>\r\n            <span>Settings</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"/\"> \r\n            <mat-icon>lock</mat-icon>\r\n            <span>Lock screen</span> \r\n        </a>\r\n        <a mat-menu-item routerLink=\"help\"> \r\n            <mat-icon>help</mat-icon>\r\n            <span>Help</span> \r\n        </a>\r\n        <div class=\"divider\"></div>\r\n        <a mat-menu-item (click)=\"logout()\"> \r\n            <mat-icon>power_settings_new</mat-icon>\r\n            <span>Log out</span> \r\n        </a>\r\n    <!--</span>-->\r\n</mat-menu>"

/***/ }),

/***/ "./app/theme/components/user-menu/user-menu.component.scss":
/*!*****************************************************************!*\
  !*** ./app/theme/components/user-menu/user-menu.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-menu .mat-toolbar, .user-menu .mat-toolbar-row {\n  height: 100px !important; }\n\n.user-menu .user-info {\n  width: 230px; }\n\n.user-menu .user-info p {\n    font-size: 16px;\n    line-height: 22px;\n    text-align: center; }\n\n.user-menu .mat-menu-item {\n  height: 36px;\n  line-height: 36px; }\n"

/***/ }),

/***/ "./app/theme/components/user-menu/user-menu.component.ts":
/*!***************************************************************!*\
  !*** ./app/theme/components/user-menu/user-menu.component.ts ***!
  \***************************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_security_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/security.service */ "./app/shared/services/security.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent(securityService) {
        this.securityService = securityService;
        this.userImage = '../assets/img/users/user.jpg';
    }
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    UserMenuComponent.prototype.logout = function () {
        this.securityService.Logoff();
    };
    UserMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./app/theme/components/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./app/theme/components/user-menu/user-menu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_shared_services_security_service__WEBPACK_IMPORTED_MODULE_1__["SecurityService"]])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./app/theme/pipes/pagination/pagination.pipe.ts":
/*!*******************************************************!*\
  !*** ./app/theme/pipes/pagination/pagination.pipe.ts ***!
  \*******************************************************/
/*! exports provided: PaginationPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationPipe", function() { return PaginationPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaginationPipe = /** @class */ (function () {
    function PaginationPipe() {
    }
    PaginationPipe.prototype.transform = function (data, args) {
        if (!args) {
            args = {
                pageIndex: 0,
                pageSize: 6,
                length: data.length
            };
        }
        return this.paginate(data, args.pageSize, args.pageIndex);
    };
    PaginationPipe.prototype.paginate = function (array, page_size, page_number) {
        return array.slice(page_number * page_size, (page_number + 1) * page_size);
    };
    PaginationPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pagination'
        })
    ], PaginationPipe);
    return PaginationPipe;
}());



/***/ }),

/***/ "./app/theme/pipes/pipes.module.ts":
/*!*****************************************!*\
  !*** ./app/theme/pipes/pipes.module.ts ***!
  \*****************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination/pagination.pipe */ "./app/theme/pipes/pagination/pagination.pipe.ts");
/* harmony import */ var _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profilePicture/profilePicture.pipe */ "./app/theme/pipes/profilePicture/profilePicture.pipe.ts");
/* harmony import */ var _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search/chat-person-search.pipe */ "./app/theme/pipes/search/chat-person-search.pipe.ts");
/* harmony import */ var _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/user-search.pipe */ "./app/theme/pipes/search/user-search.pipe.ts");
/* harmony import */ var _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./truncate/truncate.pipe */ "./app/theme/pipes/truncate/truncate.pipe.ts");
/* harmony import */ var _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/mail-search.pipe */ "./app/theme/pipes/search/mail-search.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [
                _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"],
                _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
                _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
                _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
                _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
                _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]
            ],
            exports: [
                _pagination_pagination_pipe__WEBPACK_IMPORTED_MODULE_2__["PaginationPipe"],
                _profilePicture_profilePicture_pipe__WEBPACK_IMPORTED_MODULE_3__["ProfilePicturePipe"],
                _search_chat_person_search_pipe__WEBPACK_IMPORTED_MODULE_4__["ChatPersonSearchPipe"],
                _search_user_search_pipe__WEBPACK_IMPORTED_MODULE_5__["UserSearchPipe"],
                _truncate_truncate_pipe__WEBPACK_IMPORTED_MODULE_6__["TruncatePipe"],
                _search_mail_search_pipe__WEBPACK_IMPORTED_MODULE_7__["MailSearchPipe"]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());



/***/ }),

/***/ "./app/theme/pipes/profilePicture/profilePicture.pipe.ts":
/*!***************************************************************!*\
  !*** ./app/theme/pipes/profilePicture/profilePicture.pipe.ts ***!
  \***************************************************************/
/*! exports provided: ProfilePicturePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicturePipe", function() { return ProfilePicturePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfilePicturePipe = /** @class */ (function () {
    function ProfilePicturePipe() {
    }
    ProfilePicturePipe.prototype.transform = function (input, ext) {
        if (ext === void 0) { ext = 'jpg'; }
        return '../assets/img/profile/' + input + '.' + ext;
    };
    ProfilePicturePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'profilePicture' })
    ], ProfilePicturePipe);
    return ProfilePicturePipe;
}());



/***/ }),

/***/ "./app/theme/pipes/search/chat-person-search.pipe.ts":
/*!***********************************************************!*\
  !*** ./app/theme/pipes/search/chat-person-search.pipe.ts ***!
  \***********************************************************/
/*! exports provided: ChatPersonSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPersonSearchPipe", function() { return ChatPersonSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChatPersonSearchPipe = /** @class */ (function () {
    function ChatPersonSearchPipe() {
    }
    ChatPersonSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (message) {
                if (message.author) {
                    return message.author.search(searchText) !== -1;
                }
            });
        }
    };
    ChatPersonSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'ChatPersonSearchPipe' })
    ], ChatPersonSearchPipe);
    return ChatPersonSearchPipe;
}());



/***/ }),

/***/ "./app/theme/pipes/search/mail-search.pipe.ts":
/*!****************************************************!*\
  !*** ./app/theme/pipes/search/mail-search.pipe.ts ***!
  \****************************************************/
/*! exports provided: MailSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailSearchPipe", function() { return MailSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MailSearchPipe = /** @class */ (function () {
    function MailSearchPipe() {
    }
    MailSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (mail) {
                if (mail.sender || mail.subject) {
                    if (mail.sender.search(searchText) !== -1 || mail.subject.search(searchText) !== -1) {
                        return true;
                    }
                }
            });
        }
    };
    MailSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'MailSearch'
        })
    ], MailSearchPipe);
    return MailSearchPipe;
}());



/***/ }),

/***/ "./app/theme/pipes/search/user-search.pipe.ts":
/*!****************************************************!*\
  !*** ./app/theme/pipes/search/user-search.pipe.ts ***!
  \****************************************************/
/*! exports provided: UserSearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchPipe", function() { return UserSearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserSearchPipe = /** @class */ (function () {
    function UserSearchPipe() {
    }
    UserSearchPipe.prototype.transform = function (value, args) {
        var searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(function (user) {
                if (user.profile.name) {
                    return user.profile.name.search(searchText) !== -1;
                }
                else {
                    return user.username.search(searchText) !== -1;
                }
            });
        }
    };
    UserSearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'UserSearchPipe', pure: false })
    ], UserSearchPipe);
    return UserSearchPipe;
}());



/***/ }),

/***/ "./app/theme/pipes/truncate/truncate.pipe.ts":
/*!***************************************************!*\
  !*** ./app/theme/pipes/truncate/truncate.pipe.ts ***!
  \***************************************************/
/*! exports provided: TruncatePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruncatePipe", function() { return TruncatePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, args) {
        var limit = args > 0 ? parseInt(args) : 10;
        return value.length > limit ? value.substring(0, limit) + '...' : value;
    };
    TruncatePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "./app/theme/utils/app-validators.ts":
/*!*******************************************!*\
  !*** ./app/theme/utils/app-validators.ts ***!
  \*******************************************/
/*! exports provided: emailValidator, matchingPasswords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailValidator", function() { return emailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchingPasswords", function() { return matchingPasswords; });
function emailValidator(control) {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}
function matchingPasswords(passwordKey, passwordConfirmationKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true });
        }
    };
}


/***/ }),

/***/ "./app/theme/utils/custom-overlay-container.ts":
/*!*****************************************************!*\
  !*** ./app/theme/utils/custom-overlay-container.ts ***!
  \*****************************************************/
/*! exports provided: CustomOverlayContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOverlayContainer", function() { return CustomOverlayContainer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "../node_modules/@angular/cdk/esm5/overlay.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CustomOverlayContainer = /** @class */ (function (_super) {
    __extends(CustomOverlayContainer, _super);
    function CustomOverlayContainer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomOverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.getElementById('app').appendChild(container);
        this._containerElement = container;
    };
    CustomOverlayContainer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CustomOverlayContainer);
    return CustomOverlayContainer;
}(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"]));



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./guid.ts":
/*!*****************!*\
  !*** ./guid.ts ***!
  \*****************/
/*! exports provided: Guid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Guid", function() { return Guid; });
var Guid = /** @class */ (function () {
    function Guid() {
    }
    Guid.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Guid;
}());



/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\RahyabRepository\Irvine\src\WebApps\WebSPA\Client\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map