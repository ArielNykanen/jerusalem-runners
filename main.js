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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-navbar/nav-bar.component.css":
/*!**************************************************!*\
  !*** ./src/app/app-navbar/nav-bar.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-navbar/nav-bar.component.html":
/*!***************************************************!*\
  !*** ./src/app/app-navbar/nav-bar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- nav-bar -->\r\n <nav class=\"navbar navbar-default\">\r\n    <div class=\"container\">\r\n      <!-- navbar header -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#myNavbar\" aria-expanded=\"false\">\r\n          <!-- the hamburger -->\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" routerLinkActive=\"/\">Jerusalem Runners</a>\r\n      </div>\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse \" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li [routerLinkActiveOptions]=\"{exact: 'full'}\" routerLinkActive=\"active\"><a routerLink=\"/\">ראשי</a></li>\r\n          <li routerLinkActive=\"active\"><a routerLink=\"add-tip\">הוסף טיפים</a></li>\r\n          <li routerLinkActive=\"active\"><a routerLink=\"customer-search\">פרטי לקוחות</a></li>\r\n          <li routerLinkActive=\"active\"><a routerLink=\"pauch-history\">היסטורית פאוצ'ים</a></li>\r\n          <li routerLinkActive=\"active\"><a routerLink=\"profile-edit\">עריכת פרופיל</a></li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  "

/***/ }),

/***/ "./src/app/app-navbar/nav-bar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/app-navbar/nav-bar.component.ts ***!
  \*************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/app-navbar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/app-navbar/nav-bar.component.css")]
        })
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/app-routes.routing.ts":
/*!***************************************!*\
  !*** ./src/app/app-routes.routing.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_page_customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/customer-search/customer-search.component */ "./src/app/main-page/customer-search/customer-search.component.ts");
/* harmony import */ var _main_page_add_tip_add_tip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/add-tip/add-tip.component */ "./src/app/main-page/add-tip/add-tip.component.ts");
/* harmony import */ var _main_page_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/profile-edit/profile-edit.component */ "./src/app/main-page/profile-edit/profile-edit.component.ts");
/* harmony import */ var _main_page_customer_search_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-page/customer-search/add-customer/add-customer.component */ "./src/app/main-page/customer-search/add-customer/add-customer.component.ts");
/* harmony import */ var _main_page_customer_search_all_customers_all_customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/customer-search/all-customers/all-customers.component */ "./src/app/main-page/customer-search/all-customers/all-customers.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _main_page_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page/current-status/current-status.component */ "./src/app/main-page/current-status/current-status.component.ts");
/* harmony import */ var _main_page_pauch_history_pauch_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-page/pauch-history/pauch-history.component */ "./src/app/main-page/pauch-history/pauch-history.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppRoutes = [
    {
        path: '', component: _main_page_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_8__["CurrentStatusComponent"]
    },
    {
        path: 'add-tip', component: _main_page_add_tip_add_tip_component__WEBPACK_IMPORTED_MODULE_3__["AddTipComponent"]
    },
    {
        path: 'customer-search', component: _main_page_customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_2__["CustomerSearchComponent"], children: [
            { path: '', component: _main_page_customer_search_all_customers_all_customers_component__WEBPACK_IMPORTED_MODULE_6__["AllCustomersComponent"] },
            { path: 'add-customer', component: _main_page_customer_search_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_5__["AddCustomerComponent"] },
            { path: '**', component: _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundPageComponent"] },
        ]
    },
    {
        path: 'pauch-history', component: _main_page_pauch_history_pauch_history_component__WEBPACK_IMPORTED_MODULE_9__["PauchHistoryComponent"]
    },
    {
        path: 'profile-edit', component: _main_page_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_4__["ProfileEditComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(AppRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <app-navbar></app-navbar>\n    </div>\n    \n    <div class=\"col-xs-12\">\n    <app-main-page></app-main-page>\n    </div>\n\n  </div>\n</div>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'jerusalem-runners';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_navbar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-navbar/nav-bar.component */ "./src/app/app-navbar/nav-bar.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _main_page_add_tip_add_tip_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-page/add-tip/add-tip.component */ "./src/app/main-page/add-tip/add-tip.component.ts");
/* harmony import */ var _main_page_customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-page/customer-search/customer-search.component */ "./src/app/main-page/customer-search/customer-search.component.ts");
/* harmony import */ var _app_routes_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routes.routing */ "./src/app/app-routes.routing.ts");
/* harmony import */ var _main_page_customers_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-page/customers.services */ "./src/app/main-page/customers.services.ts");
/* harmony import */ var _main_page_customer_search_bad_customers_bad_customers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-page/customer-search/bad-customers/bad-customers.component */ "./src/app/main-page/customer-search/bad-customers/bad-customers.component.ts");
/* harmony import */ var _main_page_customer_search_good_customers_good_customers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-page/customer-search/good-customers/good-customers.component */ "./src/app/main-page/customer-search/good-customers/good-customers.component.ts");
/* harmony import */ var _main_page_customer_search_unknown_customers_unknown_customers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-page/customer-search/unknown-customers/unknown-customers.component */ "./src/app/main-page/customer-search/unknown-customers/unknown-customers.component.ts");
/* harmony import */ var _main_page_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-page/profile-edit/profile-edit.component */ "./src/app/main-page/profile-edit/profile-edit.component.ts");
/* harmony import */ var _main_page_customer_search_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-page/customer-search/add-customer/add-customer.component */ "./src/app/main-page/customer-search/add-customer/add-customer.component.ts");
/* harmony import */ var _main_page_customer_search_all_customers_all_customers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-page/customer-search/all-customers/all-customers.component */ "./src/app/main-page/customer-search/all-customers/all-customers.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _navigation_services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navigation.services */ "./src/app/navigation.services.ts");
/* harmony import */ var _user_services__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user.services */ "./src/app/user.services.ts");
/* harmony import */ var _main_page_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./main-page/current-status/current-status.component */ "./src/app/main-page/current-status/current-status.component.ts");
/* harmony import */ var _main_page_pauch_history_pauch_history_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./main-page/pauch-history/pauch-history.component */ "./src/app/main-page/pauch-history/pauch-history.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_navbar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_5__["MainPageComponent"],
                _main_page_customer_search_add_customer_add_customer_component__WEBPACK_IMPORTED_MODULE_14__["AddCustomerComponent"],
                _main_page_add_tip_add_tip_component__WEBPACK_IMPORTED_MODULE_6__["AddTipComponent"],
                _main_page_customer_search_customer_search_component__WEBPACK_IMPORTED_MODULE_7__["CustomerSearchComponent"],
                _main_page_customer_search_bad_customers_bad_customers_component__WEBPACK_IMPORTED_MODULE_10__["BadCustomersComponent"],
                _main_page_customer_search_good_customers_good_customers_component__WEBPACK_IMPORTED_MODULE_11__["GoodCustomersComponent"],
                _main_page_customer_search_unknown_customers_unknown_customers_component__WEBPACK_IMPORTED_MODULE_12__["UnknownCustomersComponent"],
                _main_page_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_13__["ProfileEditComponent"],
                _main_page_customer_search_all_customers_all_customers_component__WEBPACK_IMPORTED_MODULE_15__["AllCustomersComponent"],
                _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundPageComponent"],
                _main_page_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_19__["CurrentStatusComponent"],
                _main_page_pauch_history_pauch_history_component__WEBPACK_IMPORTED_MODULE_20__["PauchHistoryComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes_routing__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            providers: [
                _main_page_customers_services__WEBPACK_IMPORTED_MODULE_9__["CustomerServices"],
                _user_services__WEBPACK_IMPORTED_MODULE_18__["UserServices"],
                _navigation_services__WEBPACK_IMPORTED_MODULE_17__["NavigationServices"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main-page/add-tip/add-tip.component.css":
/*!*********************************************************!*\
  !*** ./src/app/main-page/add-tip/add-tip.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/add-tip/add-tip.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main-page/add-tip/add-tip.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"form-group\">\n  <p align=right [ngStyle]=\"{'color': userServices.getCurrentPauchStyle()}\">({{ currentUserPauch }}) - בפאוץ כרגע</p>\n  <span class=\"help-block\" align=right *ngIf=\"currentUserPauch >= 100 && currentUserPauch < 200\">מברוק הגעת ל100 אולי עוד תגיע ל200</span>\n  <span class=\"help-block\" align=right *ngIf=\"currentUserPauch >= 200  && currentUserPauch < 220\">!עשית את זה הגעת ל200 אלוף אתה</span>\n  <span class=\"help-block\" align=right *ngIf=\"currentUserPauch >= 220\">!!!ממשיך לעלות??  מטורף אתה תשלח לי מייל איך אתה עושה את זה בבקשה</span>\n</div>\n<div class=\"form-group\">\n  <h1 align=center>הוספת טיפים</h1>\n</div>\n<div class=\"row\">\n  <h2 align=center>?כמה</h2>\n  <div class=\"col-xs-12 form-group\" align=right>\n  <button type=\"button\" class=\"btn btn-success form-control\" (click)=\"onAddTwenty()\">20</button>\n</div>\n  <div class=\"col-xs-12 form-group\" align=right>\n  <button type=\"button\" class=\"btn btn-primary form-control\" (click)=\"onAddTen()\">10</button>\n</div>\n  <div class=\"col-xs-12 form-group\" align=right>\n  <button type=\"button\" class=\"btn btn-warning form-control\" (click)=\"onAddFive()\">5</button>\n</div>\n  <div class=\"col-xs-12 form-group\" align=right>\n    <h2 align=center>אחר</h2>\n  <input type=\"number\" class=\"text-center form-control\" [(ngModel)]=\"tipSelected\">\n</div>\n<div class=\"col-xs-12 form-group\" align=center>\n  <p>הבחירה שלך</p>\n  <p>({{ tipSelected }})</p>\n  </div>\n</div>\n<div class=\"col-xs-12 form-group\" align=center>\n    <button type=\"button\" class=\"btn btn-success form-control\" [disabled]=\"tipSelected <= 0\" (click)=\"onAddIncome(tipSelected)\">הוסף</button>\n  </div>\n<hr>"

/***/ }),

/***/ "./src/app/main-page/add-tip/add-tip.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-page/add-tip/add-tip.component.ts ***!
  \********************************************************/
/*! exports provided: AddTipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTipComponent", function() { return AddTipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_user_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user.services */ "./src/app/user.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTipComponent = /** @class */ (function () {
    function AddTipComponent(userServices) {
        this.userServices = userServices;
        this.tipSelected = 0;
    }
    AddTipComponent.prototype.onAddTwenty = function () {
        this.tipSelected = 20;
    };
    AddTipComponent.prototype.onAddTen = function () {
        this.tipSelected = 10;
    };
    AddTipComponent.prototype.onAddFive = function () {
        this.tipSelected = 5;
    };
    AddTipComponent.prototype.onAddElse = function () {
        this.tipSelected = 12;
    };
    AddTipComponent.prototype.onAddIncome = function (income) {
        this.userServices.onAddIncome(income);
        this.currentUserPauch = this.userServices.getCurrentPauch();
    };
    AddTipComponent.prototype.ngOnInit = function () {
        this.currentUserPauch = this.userServices.getCurrentPauch();
        this.tipStatusStyles = this.userServices.getTipStatusStyles();
    };
    AddTipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-tip',
            template: __webpack_require__(/*! ./add-tip.component.html */ "./src/app/main-page/add-tip/add-tip.component.html"),
            styles: [__webpack_require__(/*! ./add-tip.component.css */ "./src/app/main-page/add-tip/add-tip.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_user_services__WEBPACK_IMPORTED_MODULE_1__["UserServices"]])
    ], AddTipComponent);
    return AddTipComponent;
}());



/***/ }),

/***/ "./src/app/main-page/current-status/current-status.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/main-page/current-status/current-status.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/current-status/current-status.component.html":
/*!************************************************************************!*\
  !*** ./src/app/main-page/current-status/current-status.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div align=center class=\"form-group\">\n  <h1>הרמה היומית שלך</h1>\n  <p>({{ userServices.userCurrentLevel }})</p>\n</div>\n<hr>\n<div align=center class=\"form-group\">\n  <h2>בפאוץ שלך כרגע</h2>\n <p [ngStyle]=\"{'color':userServices.getCurrentPauchStyle()}\">({{ userCurrentPauch }})</p>\n</div>\n<hr>\n  <div align=center class=\"form-group\">\n    <h2>בדוק כמה יוצא לך לשעה עם הטיפים</h2>\n    <div class=\"form-group\">\n      <div class=\"form-group\">\n        <span>?כמה אתה עושה לשעה</span>\n      </div>\n      <div class=\"form-group\">\n      <input align=center  type=\"number\" class=\"form-control text-center\" [(ngModel)]=\"userHourPayed\">\n      </div>\n      <div class=\"form-group\">\n        <span>?כמה שעות אתה עובד</span>\n      </div>\n      <input align=center  type=\"number\" class=\"form-control text-center\" [(ngModel)]=\"userWorkHours\">\n    </div>\n    <p>אתה עושה לשעה</p>\n    <p *ngIf=\"userHourPayed && userWorkHours\">({{ getCurrentHourlyPayed() }})</p>\n    <p *ngIf=\"!userHourPayed || !userWorkHours\">(0)</p>\n    <div class=\"col-xs-12 form-group\" align=right>\n      <button type=\"button\" class=\"btn btn-primary form-control\" (click)=\"onResetPauch()\" [disabled]=\"userCurrentPauch == 0\">שמור פאוץ והתחל יום חדש</button>\n    </div>\n  </div>\n  <hr>"

/***/ }),

/***/ "./src/app/main-page/current-status/current-status.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/main-page/current-status/current-status.component.ts ***!
  \**********************************************************************/
/*! exports provided: CurrentStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentStatusComponent", function() { return CurrentStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_user_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user.services */ "./src/app/user.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrentStatusComponent = /** @class */ (function () {
    function CurrentStatusComponent(userServices) {
        this.userServices = userServices;
    }
    CurrentStatusComponent.prototype.ngOnInit = function () {
        this.userCurrentPauch = this.userServices.getCurrentPauch();
        this.userServices.getUserLevel();
    };
    CurrentStatusComponent.prototype.onResetPauch = function () {
        this.userServices.onStartNewPauch();
        this.userCurrentPauch = this.userServices.getCurrentPauch();
    };
    CurrentStatusComponent.prototype.getCurrentHourlyPayed = function () {
        var totalDayHourlyPayed = this.userWorkHours * this.userHourPayed;
        var totalPauchAndHour = totalDayHourlyPayed + this.userCurrentPauch;
        var totalPayed = totalPauchAndHour / this.userWorkHours;
        return totalPayed.toFixed(2);
    };
    CurrentStatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-status',
            template: __webpack_require__(/*! ./current-status.component.html */ "./src/app/main-page/current-status/current-status.component.html"),
            styles: [__webpack_require__(/*! ./current-status.component.css */ "./src/app/main-page/current-status/current-status.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_user_services__WEBPACK_IMPORTED_MODULE_1__["UserServices"]])
    ], CurrentStatusComponent);
    return CurrentStatusComponent;
}());



/***/ }),

/***/ "./src/app/main-page/customer-search/add-customer/add-customer.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/main-page/customer-search/add-customer/add-customer.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* input.ng-invalid.ng-touched{\r\n  border: 1px solid red;\r\n} */\r\n.help-block{\r\n  color: red;\r\n}"

/***/ }),

/***/ "./src/app/main-page/customer-search/add-customer/add-customer.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/main-page/customer-search/add-customer/add-customer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-primary\" type=\"button\" routerLink=\"../\">\n  חזרה\n  </button>\n  <form [formGroup]=\"addCustomerForm\" (ngSubmit)=\"onCustomerAdded()\">\n  <div class=\"form-group\">\n    <h1 align=\"right\">הוסף לקוח חדש</h1>\n    <hr />\n  </div>\n<div class=\"row\">\n  \n    <div class=\"col-xs-6 form-group\">\n        <label>רחוב\n          <input formControlName=\"customerStreet\" type=\"text\" id=\"\" class=\"form-control\">\n        </label>\n        <span *ngIf=\"!addCustomerForm.get('customerStreet').valid && addCustomerForm.get('customerStreet').touched\" class=\"help-block\">שדה רחוב חובה</span>\n      </div>    \n      <div class=\"col-xs-6 form-group\">\n          <label>שם\n            <input formControlName=\"customerName\" type=\"text\" id=\"\" class=\"form-control\">\n          </label>\n           <span *ngIf=\"addCustomerForm.get('customerName').errors && addCustomerForm.get('customerName').errors['required'] && addCustomerForm.get('customerName').touched\" class=\"help-block\">שדה שם חובה</span>\n  </div>\n  <div class=\"col-xs-6 form-group\">\n      <label>מספר דירה\n        <input formControlName=\"customerApartment\" type=\"number\" id=\"\" class=\"form-control\">\n      </label>\n      <span *ngIf=\"!addCustomerForm.get('customerApartment').valid && addCustomerForm.get('customerApartment').touched\" class=\"help-block\">שדה מספר דירה חובה</span>\n    </div>\n      <div class=\"col-xs-6 form-group\">\n          <label>מספר בית\n            <input formControlName=\"customerHouse\" type=\"number\" id=\"\" class=\"form-control\">\n          </label>\n          <span *ngIf=\"!addCustomerForm.get('customerHouse').valid && addCustomerForm.get('customerHouse').touched\" class=\"help-block\">שדה מספר בית חובה</span>\n        </div>\n        <div class=\"btn-group btn-toggle\" style=\"float:right; clear:both;\"> \n            <h2>הביא טיפ</h2>\n            <button type=\"button\" class=\"btn \"  [ngClass]=\"!tipped ? 'btn-success':'btn-disabled'\" (click)=\"onTipped()\">כן</button>\n            <button type=\"button\" class=\"btn \" [ngClass]=\"tipped ? 'btn-success':'btn-disabled'\" (click)=\"onTipped()\">לא</button>\n          </div>\n          \n          <div *ngIf=\"tipped\" class=\"btn-group btn-toggle\" style=\"float:right; clear:both;\"> \n            <h2>חרא לקוח</h2>\n            <button type=\"button\" class=\"btn\"  [ngClass]=\"!badCustomer ? 'btn-success':'btn-disabled'\" (click)=\"onBadCustomer()\">כן</button>\n            <button type=\"button\" class=\"btn\" [ngClass]=\"badCustomer ? 'btn-success':'btn-disabled'\" (click)=\"onBadCustomer()\">לא</button>\n          </div>\n          <div align=center class=\"col-xs-12 form-group\">\n            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!addCustomerForm.valid\">הוסף</button>\n            <span class=\"help-block\" *ngIf=\"onCheckExist()\">\n             *לקוח קיים במערכת\n            </span>\n            <hr>\n          </div>\n</div>\n</form>"

/***/ }),

/***/ "./src/app/main-page/customer-search/add-customer/add-customer.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/main-page/customer-search/add-customer/add-customer.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_navigation_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/navigation.services */ "./src/app/navigation.services.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_customer_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/customer.model */ "./src/app/main-page/models/customer.model.ts");
/* harmony import */ var _customers_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../customers.services */ "./src/app/main-page/customers.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddCustomerComponent = /** @class */ (function () {
    function AddCustomerComponent(navigationService, customerServices) {
        this.navigationService = navigationService;
        this.customerServices = customerServices;
        this.tipped = false;
        this.badCustomer = true;
        this.allReadyExist = this.customerServices.getAllCustomers();
    }
    AddCustomerComponent.prototype.onBadCustomer = function () {
        this.badCustomer = !this.badCustomer;
    };
    AddCustomerComponent.prototype.onTipped = function () {
        this.tipped = !this.tipped;
    };
    AddCustomerComponent.prototype.ngOnInit = function () {
        this.addCustomerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'customerName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.allReadyExistCustomerName.bind(this)]),
            'customerStreet': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.allReadyExistCustomerStreet.bind(this)]),
            'customerHouse': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'customerApartment': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'customerTipped': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'customerShit': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
    };
    AddCustomerComponent.prototype.onCustomerAdded = function () {
        this.customerServices
            .addCustomer(new _models_customer_model__WEBPACK_IMPORTED_MODULE_3__["Customer"](this.addCustomerForm.get('customerName').value, this.addCustomerForm.get('customerStreet').value, this.addCustomerForm.get('customerHouse').value, this.addCustomerForm.get('customerApartment').value, !this.tipped ? '1' : '0', this.tipped ? '1' : '0', !this.badCustomer ? 'חרא לקוח' : 'לא דורג'));
        alert('customer was added successfuly!');
        this.addCustomerForm.reset();
    };
    AddCustomerComponent.prototype.onCheckExist = function () {
        if (this.addCustomerForm.controls['customerName'].errors &&
            this.addCustomerForm.controls['customerName'].errors['customerExists1'] &&
            this.addCustomerForm.controls['customerStreet'].errors &&
            this.addCustomerForm.controls['customerStreet'].errors['customerExists2']) {
            return true;
        }
        return false;
    };
    AddCustomerComponent.prototype.allReadyExistCustomerName = function (control) {
        if (this.allReadyExist.map(function (e) {
            return e.name;
        }).indexOf(control.value) !== -1) {
            return { 'customerExists1': true };
        }
        return null;
    };
    AddCustomerComponent.prototype.allReadyExistCustomerStreet = function (control) {
        if (this.allReadyExist.map(function (e) {
            return e.street;
        }).indexOf(control.value) !== -1) {
            return { 'customerExists2': true };
        }
        return null;
    };
    AddCustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-customer',
            template: __webpack_require__(/*! ./add-customer.component.html */ "./src/app/main-page/customer-search/add-customer/add-customer.component.html"),
            styles: [__webpack_require__(/*! ./add-customer.component.css */ "./src/app/main-page/customer-search/add-customer/add-customer.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_navigation_services__WEBPACK_IMPORTED_MODULE_1__["NavigationServices"],
            _customers_services__WEBPACK_IMPORTED_MODULE_4__["CustomerServices"]])
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());



/***/ }),

/***/ "./src/app/main-page/customer-search/all-customers/all-customers.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/main-page/customer-search/all-customers/all-customers.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/customer-search/all-customers/all-customers.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main-page/customer-search/all-customers/all-customers.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-xs-12 form-group\">\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"navigationService.onNavigateForward('add-customer')\">\n              הוסף לקוח חדש\n            </button>\n      <h1 align=\"right\">חיפוש במאגר הלקוחות</h1>\n      <hr>\n    </div>\n    <div align=right class=\"form-group\">\n        <label>שם\n          <input type=\"text\" id=\"\" class=\"form-control\" [(ngModel)]=\"customerNameSearch\">\n        </label>\n      </div>\n    </div>\n    <div align=right class=\"form-group\">\n      <label>רחוב\n        <input  type=\"text\" id=\"\" class=\"form-control\" [(ngModel)]=\"customerStreetSearch\">\n      </label>\n    </div>\n    <hr>\n    <div>\n        <table class=\"table table-dark\">\n            <thead>\n              <tr>\n                <th scope=\"col\">לא הביא</th>\n                <th scope=\"col\">הביא טיפ</th>\n                <th scope=\"col\">דירוג</th>\n                <th scope=\"col\">דירה</th>\n                <th scope=\"col\">בית</th>\n                <th scope=\"col\">רחוב</th>\n                <th scope=\"col\">שם</th>\n              </tr>\n            </thead>\n            <tbody *ngFor=\"let customer of customers\">\n              <tr *ngIf=\"\n              customer.name.match(customerNameSearch)  \n              && customer.street.match(customerStreetSearch)\n               && customerNameSearch != ''\">\n                <td>{{ customer.notTipped }}</td>\n                <td>{{ customer.tipped }}</td>\n                <td>{{ customer.rating }}</td>\n                <td>{{ customer.apartment }}</td>\n                <td>{{ customer.house }}</td>\n                <td>{{ customer.street }}</td>\n                <td >{{ customer.name }}</td>\n              </tr>\n            </tbody>\n          </table>\n    \n    \n    \n      <!-- <div class=\"col-xs-4\" *ngIf=\"customer.name.match(customerSearch) && !customerSearch == '' \">\n          <h2>Good Customers</h2>\n          <p >\n              {{ customer.name }}\n          </p>\n        </div> -->\n      </div>"

/***/ }),

/***/ "./src/app/main-page/customer-search/all-customers/all-customers.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main-page/customer-search/all-customers/all-customers.component.ts ***!
  \************************************************************************************/
/*! exports provided: AllCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCustomersComponent", function() { return AllCustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customers_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../customers.services */ "./src/app/main-page/customers.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_navigation_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/navigation.services */ "./src/app/navigation.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllCustomersComponent = /** @class */ (function () {
    function AllCustomersComponent(customerServices, router, navigationService) {
        this.customerServices = customerServices;
        this.router = router;
        this.navigationService = navigationService;
        this.customerNameSearch = '';
        this.customerStreetSearch = '';
    }
    AllCustomersComponent.prototype.ngOnInit = function () {
        this.customers = this.customerServices.getAllCustomers();
    };
    AllCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-customers',
            template: __webpack_require__(/*! ./all-customers.component.html */ "./src/app/main-page/customer-search/all-customers/all-customers.component.html"),
            styles: [__webpack_require__(/*! ./all-customers.component.css */ "./src/app/main-page/customer-search/all-customers/all-customers.component.css")]
        }),
        __metadata("design:paramtypes", [_customers_services__WEBPACK_IMPORTED_MODULE_1__["CustomerServices"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_navigation_services__WEBPACK_IMPORTED_MODULE_3__["NavigationServices"]])
    ], AllCustomersComponent);
    return AllCustomersComponent;
}());



/***/ }),

/***/ "./src/app/main-page/customer-search/bad-customers/bad-customers.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/main-page/customer-search/bad-customers/bad-customers.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/customer-search/bad-customers/bad-customers.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/main-page/customer-search/bad-customers/bad-customers.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  bad-customers works!\n</p>\n"

/***/ }),

/***/ "./src/app/main-page/customer-search/bad-customers/bad-customers.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/main-page/customer-search/bad-customers/bad-customers.component.ts ***!
  \************************************************************************************/
/*! exports provided: BadCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadCustomersComponent", function() { return BadCustomersComponent; });
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

var BadCustomersComponent = /** @class */ (function () {
    function BadCustomersComponent() {
    }
    BadCustomersComponent.prototype.ngOnInit = function () {
    };
    BadCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bad-customers',
            template: __webpack_require__(/*! ./bad-customers.component.html */ "./src/app/main-page/customer-search/bad-customers/bad-customers.component.html"),
            styles: [__webpack_require__(/*! ./bad-customers.component.css */ "./src/app/main-page/customer-search/bad-customers/bad-customers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BadCustomersComponent);
    return BadCustomersComponent;
}());



/***/ }),

/***/ "./src/app/main-page/customer-search/customer-search.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/main-page/customer-search/customer-search.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/customer-search/customer-search.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/main-page/customer-search/customer-search.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n\n\n\n\n\n  \n  \n    \n\n\n"

/***/ }),

/***/ "./src/app/main-page/customer-search/customer-search.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/main-page/customer-search/customer-search.component.ts ***!
  \************************************************************************/
/*! exports provided: CustomerSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSearchComponent", function() { return CustomerSearchComponent; });
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

var CustomerSearchComponent = /** @class */ (function () {
    function CustomerSearchComponent() {
    }
    CustomerSearchComponent.prototype.ngOnInit = function () {
    };
    CustomerSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer-search',
            template: __webpack_require__(/*! ./customer-search.component.html */ "./src/app/main-page/customer-search/customer-search.component.html"),
            styles: [__webpack_require__(/*! ./customer-search.component.css */ "./src/app/main-page/customer-search/customer-search.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomerSearchComponent);
    return CustomerSearchComponent;
}());



/***/ }),

/***/ "./src/app/main-page/customer-search/good-customers/good-customers.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/main-page/customer-search/good-customers/good-customers.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/customer-search/good-customers/good-customers.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/main-page/customer-search/good-customers/good-customers.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  good-customers works!\n</p>\n"

/***/ }),

/***/ "./src/app/main-page/customer-search/good-customers/good-customers.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/main-page/customer-search/good-customers/good-customers.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GoodCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodCustomersComponent", function() { return GoodCustomersComponent; });
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

var GoodCustomersComponent = /** @class */ (function () {
    function GoodCustomersComponent() {
    }
    GoodCustomersComponent.prototype.ngOnInit = function () {
    };
    GoodCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-good-customers',
            template: __webpack_require__(/*! ./good-customers.component.html */ "./src/app/main-page/customer-search/good-customers/good-customers.component.html"),
            styles: [__webpack_require__(/*! ./good-customers.component.css */ "./src/app/main-page/customer-search/good-customers/good-customers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GoodCustomersComponent);
    return GoodCustomersComponent;
}());



/***/ }),

/***/ "./src/app/main-page/customer-search/unknown-customers/unknown-customers.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/main-page/customer-search/unknown-customers/unknown-customers.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/customer-search/unknown-customers/unknown-customers.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/main-page/customer-search/unknown-customers/unknown-customers.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  unknown-customers works!\n</p>\n"

/***/ }),

/***/ "./src/app/main-page/customer-search/unknown-customers/unknown-customers.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/main-page/customer-search/unknown-customers/unknown-customers.component.ts ***!
  \********************************************************************************************/
/*! exports provided: UnknownCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnknownCustomersComponent", function() { return UnknownCustomersComponent; });
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

var UnknownCustomersComponent = /** @class */ (function () {
    function UnknownCustomersComponent() {
    }
    UnknownCustomersComponent.prototype.ngOnInit = function () {
    };
    UnknownCustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unknown-customers',
            template: __webpack_require__(/*! ./unknown-customers.component.html */ "./src/app/main-page/customer-search/unknown-customers/unknown-customers.component.html"),
            styles: [__webpack_require__(/*! ./unknown-customers.component.css */ "./src/app/main-page/customer-search/unknown-customers/unknown-customers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UnknownCustomersComponent);
    return UnknownCustomersComponent;
}());



/***/ }),

/***/ "./src/app/main-page/customers.services.ts":
/*!*************************************************!*\
  !*** ./src/app/main-page/customers.services.ts ***!
  \*************************************************/
/*! exports provided: CustomerServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServices", function() { return CustomerServices; });
var CustomerServices = /** @class */ (function () {
    function CustomerServices() {
        this.goodCustomers = [];
    }
    CustomerServices.prototype.getAllCustomers = function () {
        if (localStorage.getItem('customers')) {
            return JSON.parse(localStorage.getItem('customers'));
        }
        return this.goodCustomers;
    };
    CustomerServices.prototype.addCustomer = function (customer) {
        this.goodCustomers.push(customer);
        var allCustomers = JSON.stringify(this.goodCustomers);
        localStorage.setItem('customers', allCustomers);
    };
    return CustomerServices;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
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

var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/main-page/models/customer.model.ts":
/*!****************************************************!*\
  !*** ./src/app/main-page/models/customer.model.ts ***!
  \****************************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(name, street, house, apartment, tipped, notTipped, rating) {
        this.name = name;
        this.street = street;
        this.house = house;
        this.apartment = apartment;
        this.tipped = tipped;
        this.notTipped = notTipped;
        this.rating = rating;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/main-page/models/pauch.model.ts":
/*!*************************************************!*\
  !*** ./src/app/main-page/models/pauch.model.ts ***!
  \*************************************************/
/*! exports provided: Pauch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pauch", function() { return Pauch; });
var Pauch = /** @class */ (function () {
    function Pauch(amount, level, date) {
        this.amount = amount;
        this.level = level;
        this.date = date;
    }
    return Pauch;
}());



/***/ }),

/***/ "./src/app/main-page/pauch-history/pauch-history.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/main-page/pauch-history/pauch-history.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#total-income-table p {\r\n  color: green;\r\n}"

/***/ }),

/***/ "./src/app/main-page/pauch-history/pauch-history.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/main-page/pauch-history/pauch-history.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <h1 align=center>היסטורית הפאוצ'ים</h1>\n</div>\n<hr>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>כסף שהיה לך בפאוץ</th>\n      <th>הרמה היומית שהייתה</th>\n      <th>תאריך שמירה</th>\n    </tr>\n  </thead>\n  <tbody *ngFor=\"let pauch of pauchHistory;let i = index\">  \n    <tr class=\"success\">\n      <td>{{ pauch.amount }}</td>\n      <td>{{ pauch.level }}</td>\n      <td>{{ pauch.date }}</td>\n      <td><button class=\"btn btn-danger\" (click)=\"onRemove(i)\">מחק</button></td>\n    </tr>\n  </tbody>\n</table>\n<div id=\"total-income-table\">\n  <p align=right>{{ totalTips }}:סהכ\"ל הכנסה מהטיפים</p>\n  <p align=right>{{ avrgTipsInDay }}:ממוצע טיפים ליום לפי מספר הפאוצ'ים</p>\n</div>"

/***/ }),

/***/ "./src/app/main-page/pauch-history/pauch-history.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/main-page/pauch-history/pauch-history.component.ts ***!
  \********************************************************************/
/*! exports provided: PauchHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PauchHistoryComponent", function() { return PauchHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_user_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/user.services */ "./src/app/user.services.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PauchHistoryComponent = /** @class */ (function () {
    function PauchHistoryComponent(userServices) {
        this.userServices = userServices;
        this.totalTips = 0;
        this.avrgTipsInDay = 0;
    }
    PauchHistoryComponent.prototype.ngOnInit = function () {
        this.pauchHistory = this.userServices.getPauchHistory();
        this.getTotalInfo();
    };
    PauchHistoryComponent.prototype.getTotalInfo = function () {
        for (var i = 0; i < this.pauchHistory.length; i++) {
            this.totalTips += Number(this.pauchHistory[i].amount);
        }
        if (this.pauchHistory.length > 0) {
            this.avrgTipsInDay = this.totalTips / this.pauchHistory.length;
            // todo make it work
            // this.avrgTipsInDay = this.avrgTipsInDay.toFixed(2);
        }
        else {
            this.totalTips = this.userServices.getCurrentPauch();
            this.avrgTipsInDay = 0;
        }
    };
    PauchHistoryComponent.prototype.onRemove = function (pauchIndex) {
        this.userServices.onRemoveFromPauchHistory(pauchIndex);
        this.pauchHistory = this.userServices.getPauchHistory();
        this.getTotalInfo();
    };
    PauchHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pauch-history',
            template: __webpack_require__(/*! ./pauch-history.component.html */ "./src/app/main-page/pauch-history/pauch-history.component.html"),
            styles: [__webpack_require__(/*! ./pauch-history.component.css */ "./src/app/main-page/pauch-history/pauch-history.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_user_services__WEBPACK_IMPORTED_MODULE_1__["UserServices"]])
    ], PauchHistoryComponent);
    return PauchHistoryComponent;
}());



/***/ }),

/***/ "./src/app/main-page/profile-edit/profile-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/main-page/profile-edit/profile-edit.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-page/profile-edit/profile-edit.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main-page/profile-edit/profile-edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>יעודכן בהמשך</h1>"

/***/ }),

/***/ "./src/app/main-page/profile-edit/profile-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main-page/profile-edit/profile-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditComponent", function() { return ProfileEditComponent; });
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

var ProfileEditComponent = /** @class */ (function () {
    function ProfileEditComponent() {
    }
    ProfileEditComponent.prototype.ngOnInit = function () {
    };
    ProfileEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-edit',
            template: __webpack_require__(/*! ./profile-edit.component.html */ "./src/app/main-page/profile-edit/profile-edit.component.html"),
            styles: [__webpack_require__(/*! ./profile-edit.component.css */ "./src/app/main-page/profile-edit/profile-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileEditComponent);
    return ProfileEditComponent;
}());



/***/ }),

/***/ "./src/app/navigation.services.ts":
/*!****************************************!*\
  !*** ./src/app/navigation.services.ts ***!
  \****************************************/
/*! exports provided: NavigationServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationServices", function() { return NavigationServices; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationServices = /** @class */ (function () {
    function NavigationServices(router) {
        this.router = router;
    }
    NavigationServices.prototype.onNavigateForward = function (link) {
        this.router.navigate([this.router.url, link]);
    };
    NavigationServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], NavigationServices);
    return NavigationServices;
}());



/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Page Not Found!</h1>"

/***/ }),

/***/ "./src/app/not-found-page/not-found-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.component.ts ***!
  \************************************************************/
/*! exports provided: NotFoundPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageComponent", function() { return NotFoundPageComponent; });
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

var NotFoundPageComponent = /** @class */ (function () {
    function NotFoundPageComponent() {
    }
    NotFoundPageComponent.prototype.ngOnInit = function () {
    };
    NotFoundPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found-page',
            template: __webpack_require__(/*! ./not-found-page.component.html */ "./src/app/not-found-page/not-found-page.component.html"),
            styles: [__webpack_require__(/*! ./not-found-page.component.css */ "./src/app/not-found-page/not-found-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundPageComponent);
    return NotFoundPageComponent;
}());



/***/ }),

/***/ "./src/app/user.services.ts":
/*!**********************************!*\
  !*** ./src/app/user.services.ts ***!
  \**********************************/
/*! exports provided: UserServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServices", function() { return UserServices; });
/* harmony import */ var _main_page_models_pauch_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page/models/pauch.model */ "./src/app/main-page/models/pauch.model.ts");

var UserServices = /** @class */ (function () {
    function UserServices() {
        this.currentPauch = 0;
        this.pauchHistory = [];
        this.tipStatusStyles = ['red', 'orange', 'green'];
    }
    UserServices.prototype.getUserLevel = function () {
        if (this.currentPauch < 20) {
            this.userCurrentLevel = 'חור בפאוץ';
        }
        if (this.currentPauch > 40) {
            this.userCurrentLevel = 'מתחיל את היום';
        }
        if (this.currentPauch > 60) {
            this.userCurrentLevel = 'מתקדם';
        }
        if (this.currentPauch > 100) {
            this.userCurrentLevel = 'תותח';
        }
    };
    UserServices.prototype.getCurrentPauchStyle = function () {
        if (this.currentPauch < 40) {
            return this.tipStatusStyles[0];
        }
        if (this.currentPauch < 60) {
            return this.tipStatusStyles[1];
        }
        if (this.currentPauch >= 60) {
            return this.tipStatusStyles[2];
        }
    };
    UserServices.prototype.getCurrentPauch = function () {
        if (localStorage.getItem('pauch')) {
            var pauch = localStorage.getItem('pauch');
            return this.currentPauch = Number(pauch);
        }
        else {
            return this.currentPauch = Number(0);
        }
    };
    UserServices.prototype.getTipStatusStyles = function () {
        return this.tipStatusStyles;
    };
    UserServices.prototype.onAddIncome = function (income) {
        this.currentPauch += income;
        localStorage.setItem('pauch', this.currentPauch.toString());
    };
    UserServices.prototype.getIfMatch = function (date) {
        var currentDate = date;
        var match = this.pauchHistory.map(function (e) {
            if (e.date.match(currentDate)) {
                return true;
            }
            else {
                return false;
            }
        });
        return match;
    };
    UserServices.prototype.onStartNewPauch = function () {
        var date = new Date();
        var currentDate = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        this.pauchHistory = this.getPauchHistory();
        var match = this.getIfMatch(currentDate);
        // todo make it work
        // if (match.map((e) => e === true ? true : false )) {
        this.pauchHistory.push(new _main_page_models_pauch_model__WEBPACK_IMPORTED_MODULE_0__["Pauch"](this.currentPauch, this.userCurrentLevel, currentDate));
        console.log(this.pauchHistory);
        localStorage.setItem('pauchHistory', JSON.stringify(this.pauchHistory));
        localStorage.setItem('pauch', '0');
        alert('!הפאוץ נשמר בהצלחה');
        // } else {
        //   alert('כבר שמרת פאוץ להיום מחק פאוץ קיים כדי להוסיף פאוץ להיום');
        // }
    };
    UserServices.prototype.getPauchHistory = function () {
        // return this.pauchHistory;
        if (localStorage.getItem('pauchHistory')) {
            var pauchHistory = localStorage.getItem('pauchHistory');
            return JSON.parse(pauchHistory);
        }
        else {
            return this.pauchHistory;
        }
    };
    UserServices.prototype.onRemoveFromPauchHistory = function (pauchIndex) {
        this.pauchHistory.splice(pauchIndex, 1);
        localStorage.setItem('pauchHistory', JSON.stringify(this.pauchHistory));
    };
    UserServices.prototype.ngOnInit = function () {
    };
    return UserServices;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\GIT\JerusalemRunnersOnGit\jerusalem-runners\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map