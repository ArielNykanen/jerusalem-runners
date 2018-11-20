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

module.exports = " <!-- nav-bar -->\r\n <nav class=\"navbar navbar-default\">\r\n    <div class=\"container\">\r\n      <!-- navbar header -->\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#myNavbar\" aria-expanded=\"false\">\r\n          <!-- the hamburger -->\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" routerLink=\"\">Jerusalem Runn<i class=\"fab fa-drupal\"></i>rs </a>\r\n      </div>\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse \" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <ng-template [ngIf]='authService.isAuthenticated()'>\r\n            <li [routerLinkActiveOptions]=\"{exact: 'full'}\" routerLinkActive=\"active\"><a routerLink=\"/\">ראשי</a></li>\r\n            <li routerLinkActive=\"active\"><a routerLink=\"add-tip\">הוסף טיפ ועדכן לקוח</a></li>\r\n          </ng-template>\r\n          <ng-template [ngIf]='!authService.isAuthenticated()'>\r\n          <li class=\"p-2\"><a routerLink='sign-in'>התחברות</a></li>\r\n          <li class=\"p-2\"><a routerLink='sign-up'>הרשמה</a></li>\r\n        </ng-template>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav navbar-right\">\r\n          <!-- todo make it visible only if user is logged! ! ! -->\r\n          <ng-template [ngIf]='authService.isAuthenticated()'>\r\n            <li> <a href=\"\"><i class=\"fas fa-user\"></i> עריכת פרופיל</a></li>\r\n          </ng-template>\r\n          <ng-template [ngIf]='authService.isAuthenticated()'>\r\n            <li style=\"margin-right:10px;\" (click)='onLogOut'><a href=\"\"><i class=\"fas fa-sign-out-alt\"></i></a></li>\r\n          </ng-template>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  "

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
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(authService) {
        this.authService = authService;
    }
    NavBarComponent.prototype.onLogOut = function () {
        this.authService.logOut();
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/app-navbar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/app-navbar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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
/* harmony import */ var _main_page_add_tip_add_tip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/add-tip/add-tip.component */ "./src/app/main-page/add-tip/add-tip.component.ts");
/* harmony import */ var _main_page_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/profile-edit/profile-edit.component */ "./src/app/main-page/profile-edit/profile-edit.component.ts");
/* harmony import */ var _main_page_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/current-status/current-status.component */ "./src/app/main-page/current-status/current-status.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppRoutes = [
    {
        path: '', component: _main_page_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_4__["CurrentStatusComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'sign-up', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
    },
    {
        path: 'sign-in', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"]
    },
    {
        path: 'add-tip', component: _main_page_add_tip_add_tip_component__WEBPACK_IMPORTED_MODULE_2__["AddTipComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'profile-edit', component: _main_page_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_3__["ProfileEditComponent"], canActivate: [_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
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

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <app-navbar></app-navbar>\r\n    </div>\r\n    \r\n    <div class=\"col-xs-12\">\r\n    <app-main-page></app-main-page>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

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
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
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
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'jerusalem-runners';
    }
    AppComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('userId')) {
            var token = localStorage.getItem('userId');
            this.authService.token = token;
        }
        firebase__WEBPACK_IMPORTED_MODULE_1__["initializeApp"]({
            apiKey: 'AIzaSyCDmFV0_CC6ltw8-mevf4qphUHgPvANgB0',
            authDomain: 'jerusalem-runners.firebaseapp.com',
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var _app_routes_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routes.routing */ "./src/app/app-routes.routing.ts");
/* harmony import */ var _main_page_customers_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page/customers.services */ "./src/app/main-page/customers.services.ts");
/* harmony import */ var _main_page_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-page/profile-edit/profile-edit.component */ "./src/app/main-page/profile-edit/profile-edit.component.ts");
/* harmony import */ var _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not-found-page/not-found-page.component */ "./src/app/not-found-page/not-found-page.component.ts");
/* harmony import */ var _navigation_services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation.services */ "./src/app/navigation.services.ts");
/* harmony import */ var _user_services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user.services */ "./src/app/user.services.ts");
/* harmony import */ var _main_page_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-page/current-status/current-status.component */ "./src/app/main-page/current-status/current-status.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _shared_data_storage_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/data-storage.services */ "./src/app/shared/data-storage.services.ts");
/* harmony import */ var _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/filter.pipe */ "./src/app/shared/filter.pipe.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/auth/auth-guard.service.ts");
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
                _main_page_add_tip_add_tip_component__WEBPACK_IMPORTED_MODULE_6__["AddTipComponent"],
                _main_page_profile_edit_profile_edit_component__WEBPACK_IMPORTED_MODULE_9__["ProfileEditComponent"],
                _not_found_page_not_found_page_component__WEBPACK_IMPORTED_MODULE_10__["NotFoundPageComponent"],
                _main_page_current_status_current_status_component__WEBPACK_IMPORTED_MODULE_13__["CurrentStatusComponent"],
                _shared_filter_pipe__WEBPACK_IMPORTED_MODULE_16__["FilterPipe"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_18__["SigninComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routes_routing__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"]
            ],
            providers: [
                _main_page_customers_services__WEBPACK_IMPORTED_MODULE_8__["CustomerServices"],
                _user_services__WEBPACK_IMPORTED_MODULE_12__["UserServices"],
                _navigation_services__WEBPACK_IMPORTED_MODULE_11__["NavigationServices"],
                _shared_data_storage_services__WEBPACK_IMPORTED_MODULE_15__["DataStoreServices"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"],
                _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_20__["AuthGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-guard.service.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth-guard.service.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
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


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
        this.loading = false;
        this.successMessage = false;
    }
    AuthService.prototype.signupUser = function (email, password) {
        var _this = this;
        this.loading = true;
        firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]().createUserWithEmailAndPassword(email, password).
            then(function (response) {
            _this.loading = false;
            _this.router.navigate(['/sign-in']);
            _this.successMessage = true;
        }).
            catch(function (error) {
            _this.loading = false;
            alert(error);
        });
    };
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        this.loading = true;
        this.successMessage = false;
        firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]().signInWithEmailAndPassword(email, password).
            then(function (response) {
            _this.router.navigate(['../']);
            console.log(response);
            firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]().currentUser.getIdToken()
                .then(function (token) {
                _this.token = token;
                localStorage.setItem('userId', token);
            });
        }).catch(function (error) {
            _this.loading = false;
            alert(error);
        });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]().currentUser.getIdToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.logOut = function () {
        // todo make it async
        window.localStorage.clear();
        firebase__WEBPACK_IMPORTED_MODULE_0__["auth"]().signOut().then();
        this.token = null;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\r\n  border: 10px solid #f3f3f3; /* Light grey */\r\n  border-top: 10px solid #3498db; /* Blue */\r\n  border-radius: 50%;\r\n  width: 150px;\r\n  height: 150px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n          animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n.fa-check-circle {\r\n  font-size: 50px;\r\n}"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <ng-template [ngIf]='!authService.loading'>\n      <ng-template [ngIf]=\"authService.successMessage\">\n          <div class=\"alert alert-success\" role=\"alert\">\n            <h2 align=center>!ברוך הבא</h2>\n            <h2 align=center>!נרשמת למערכת בהצלחה</h2>\n            <h1 align=center>Jerusalem Runners</h1>\n            <h3 class=\"alert-heading\" align=center>מאחלים לך המון בהצלחה והמון המון המון טיפים ויותר מזה נסיעה בטוחה ונעימה</h3>\n            <hr>\n              <p class=\"mb-0\" align=center>אנא התחברו</p>\n            </div>\n      </ng-template>\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n        <form (ngSubmit)=\"onSignIn(f)\" #f=\"ngForm\">\n            <div class=\"form-group\" align=center>\n              <h1>התחברות</h1>\n            </div>\n            <div class=\"form-group\" align=center>\n              <label for=\"email\">אימייל</label>\n              <input class=\"form-control\" type=\"email\" placeholder=\"example@any.any\" id=\"email\" name=\"email\" ngModel>\n            </div>\n            <div class=\"form-group\" align=center>\n              <label for=\"email\">סיסמה</label>\n              <input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" ngModel>\n            </div>\n                <div class=\"form-group\" align=center>\n                    <button class=\"btn btn-primary\" type=\"submit\">התחבר/י</button>\n                  </div>\n            <div class=\"form-group\" align=center>\n              <p>?לא רשומים עדיין</p>\n             <a routerLink=\"/sign-up\">לחצו כאן</a>\n            </div>\n          </form>\n  <hr>\n    </div>\n  </ng-template>\n  <ng-template [ngIf]='authService.loading'>\n    <div class=\"form-group\" align=center>\n      <div class=\"loader\"></div>\n      <span class=\"help-box\">...מתחבר</span>\n    </div>\n  </ng-template>\n  </div>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignIn = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signinUser(email, password);
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\r\n  border: 10px solid #f3f3f3; /* Light grey */\r\n  border-top: 10px solid #3498db; /* Blue */\r\n  border-radius: 50%;\r\n  width: 150px;\r\n  height: 150px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n          animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<ng-template [ngIf]='!authService.loading'>\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <form (ngSubmit)=\"onSignUp(f)\" #f=\"ngForm\">\n          <div class=\"form-group\" align=center>\n            <h1>הרשמה</h1>\n          </div>\n          <div class=\"form-group\" align=center>\n            <label for=\"email\">אימייל</label>\n            <input class=\"form-control\" type=\"email\" placeholder=\"example@any.any\" id=\"email\" name=\"email\" ngModel>\n          </div>\n          <div class=\"form-group\" align=center>\n            <label for=\"email\">סיסמה</label>\n            <input class=\"form-control\" type=\"password\" id=\"password\" name=\"password\" ngModel>\n          </div>\n          <div class=\"form-group\" align=center>\n            <button class=\"btn btn-primary\" type=\"submit\">הרשמה</button>\n          </div>\n          <div class=\"form-group\" align=center>\n              <p>?רשומים כבר</p>\n             <a routerLink=\"/sign-in\">לחצו כאן</a>\n            </div>\n        </form>\n  </div>\n<hr>\n</ng-template>\n\n<ng-template [ngIf]='authService.loading'>\n    <div class=\"form-group\" align=center>\n      <div class=\"loader\"></div>\n      <span class=\"help-box\">...מתחבר</span>\n    </div>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.onSignUp = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signupUser(email, password);
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/main-page/add-tip/add-tip.component.css":
/*!*********************************************************!*\
  !*** ./src/app/main-page/add-tip/add-tip.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-invalid.ng-touched {\r\n  border: 1px solid red;\r\n}\r\n\r\n.loader {\r\n  border: 16px solid #f3f3f3; /* Light grey */\r\n  border-top: 16px solid #3498db; /* Blue */\r\n  border-radius: 50%;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite;\r\n          animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n#tableWrap {\r\n  max-height: 300px !important;\r\n\r\n  color:red;\r\n}\r\n\r\n.bg-success {\r\n  background-color: rgb(164, 241, 164);\r\n}\r\n\r\n.text-gold {\r\n  color: orange;\r\n  font-weight: 600;\r\n}"

/***/ }),

/***/ "./src/app/main-page/add-tip/add-tip.component.html":
/*!**********************************************************!*\
  !*** ./src/app/main-page/add-tip/add-tip.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "          <div *ngIf='successMessage' class=\"alert alert-success alert-dismissible\">\r\n            <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\r\n            <h1 align=center>{{ successMessage }}</h1>\r\n          </div>\r\n          <div *ngIf='error' class=\"alert alert-danger alert-dismissible\">\r\n            <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a>\r\n            <h1 align=center>{{ error }}</h1>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <p align=right [ngStyle]=\"{'color': userServices.getCurrentPauchStyle()}\">({{ currentUserPauch }}) - בפאוץ\r\n              כרגע</p>\r\n            <span class=\"help-block\" align=right *ngIf=\"currentUserPauch >= 100 && currentUserPauch < 200\">מברוק הגעת\r\n              ל100 אולי\r\n              עוד תגיע ל200</span>\r\n            <span class=\"help-block\" align=right *ngIf=\"currentUserPauch >= 200  && currentUserPauch < 220\">!עשית את זה\r\n              הגעת ל200\r\n              אלוף אתה</span>\r\n            <span class=\"help-block\" align=right *ngIf=\"currentUserPauch >= 220\">!!!ממשיך לעלות?? מטורף אתה תשלח לי\r\n              מייל איך אתה\r\n              עושה את זה בבקשה</span>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <h1 align=center>הוספת טיפים ופרטי לקוח</h1>\r\n          </div>\r\n          <div class=\"row\">\r\n\r\n            <hr>\r\n            <form [formGroup]=\"addCustomerTipForm\" (ngSubmit)=\"onCustomerAdded()\">\r\n              <div class=\"row\">\r\n\r\n                <div *ngIf='!customerSelected' class=\"col-xs-3 form-group\">\r\n                  <input placeholder=\"שם\" formControlName=\"customerName\" type=\"text\" id=\"\" class=\"form-control\"  [(ngModel)]=\"searchName\">\r\n                  <span *ngIf=\"addCustomerTipForm.get('customerName').errors && addCustomerTipForm.get('customerName').touched\"\r\n                    class=\"help-block\">!שדה חובה</span>\r\n                </div>\r\n                <div class=\"col-xs-2\">\r\n                  <a href=\"tel:{{ searchInput }}\"> <button type=\"button\" class=\"btn btn-success\"><i class=\"fas fa-phone\"></i></button></a>\r\n                </div>\r\n                <div *ngIf='!customerSelected' class=\"col-xs-6 form-group\">\r\n                  <input placeholder=\"פלאפון/טלפון\" formControlName=\"customerPhone\" type=\"text\" id=\"\" class=\"form-control\"\r\n                    [(ngModel)]=\"searchInput\">\r\n                  <span *ngIf=\"!addCustomerTipForm.get('customerPhone').valid && addCustomerTipForm.get('customerPhone').touched\"\r\n                    class=\"help-block\">!שדה חובה</span>\r\n                </div>\r\n                <div *ngIf='customerSelected' class=\"col-xs-6 form-group\" align=center>\r\n\r\n                  <ng-container *ngIf='!loading'>\r\n                    <h1>({{ selectedCustomer.name }})</h1>\r\n                  </ng-container>\r\n\r\n                </div>\r\n                <ng-container *ngIf=\"!customerSelected\">\r\n\r\n                  <div *ngIf='currentNetStatus' class=\"col-xs-12 form-group\" align=center>\r\n                    <button data-toggle=\"collapse\" data-target=\"#customerDetails\" type=\"button\" class=\"btn btn-primary form-control\">הוסף\r\n                      חדש</button>\r\n                    <div id=\"customerDetails\" class=\"collapse\">\r\n                      <ng-container>\r\n                        <div class=\"form-group btn-group btn-toggle\" style=\"float:right; clear:both;\">\r\n                          <h2>הביא טיפ</h2>\r\n                          <button type=\"button\" class=\"btn \" [ngClass]=\"!tipped ? 'btn-success':'btn-disabled'\" (click)=\"onTipped()\">כן</button>\r\n                          <button type=\"button\" class=\"btn \" [ngClass]=\"tipped ? 'btn-success':'btn-disabled'\" (click)=\"onTipped()\">לא</button>\r\n                        </div>\r\n\r\n                        <ng-container *ngIf='!tipped'>\r\n                          <div class=\"col-xs-12 form-group\" align=right>\r\n                            <h2 align=center>?כמה הביא</h2>\r\n                            <input type=\"number\" formControlName=\"customerTip\" class=\"text-center form-control\"\r\n                              [(ngModel)]=\"tipSelected\">\r\n                          </div>\r\n\r\n                        </ng-container>\r\n                        <div class=\"col-xs-12 form-group\" align=center>\r\n                          <button class='btn btn-success' [disabled]=\"addCustomerTipForm.get('customerName').invalid || addCustomerTipForm.get('customerPhone').value.length < 9 ||\r\n               addCustomerTipForm.get('customerPhone').value.length > 10\">הוסף\r\n                            לקוח למערכת</button>\r\n                          <div *ngIf=\"addCustomerTipForm.get('customerName').invalid\" class=\"form-group\">\r\n                            <p style=\"color:red;\">!לא הוספת שם</p>\r\n                          </div>\r\n\r\n\r\n                        </div>\r\n                      </ng-container>\r\n\r\n                    </div>\r\n                  </div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"customerSelected\">\r\n                  <button type=\"button\" style=\"max-width: 100px;\" class=\"btn btn-warning form-control\" (click)=\"onUnSelect()\">חזרה</button>\r\n                </ng-container>\r\n                <div *ngIf='!customerSelected' class=\"col-xs-12 form-group\">\r\n\r\n                  <table class=\"table\">\r\n                    <thead class=\"thead-dark\">\r\n                      <tr>\r\n                        <!-- <th scope=\"col\"></th> -->\r\n                        <th scope=\"col\">הוסף</th>\r\n                        <th scope=\"col\">ממוצע טיפ</th>\r\n                        <th scope=\"col\">לא הביא</th>\r\n                        <th scope=\"col\">הביא</th>\r\n                        <th scope=\"col\">שם</th>\r\n                        <th scope=\"col\">פלאפון/טלפון</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <ng-container *ngFor=\"let customer of allCustomers; let i = index\">\r\n                        <ng-container *ngIf=\"customer | filter:searchInput \">\r\n                          <tr [ngClass]='onGetCustomerColor(customer)'>\r\n                            <!-- <td><input name=\"checkbox\" type='radio' class=\"btn btn-primary\" (click)=\"onAddExistingCustomer(customer)\"></td> -->\r\n                            <!-- <td></td> -->\r\n                            <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"onAddExistingCustomer(i)\"\r\n                                [disabled]='!currentNetStatus'>בחר</button></td>\r\n                            <td>{{ onGetCustomerAvrg(customer) }}</td>\r\n                            <td>{{ customer.notTipped }}</td>\r\n                            <td>{{ customer.tipped }}</td>\r\n                            <td>{{ customer.name }}</td>\r\n                            <td><a class=\"btn btn-success w-25\" href=\"tel:{{customer.phone}}\">{{ customer.phone }} <i\r\n                                  class=\"fas fa-phone\"></i> </a></td>\r\n                          </tr>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                <div class=\"col-xs-12\" *ngIf='customerSelected'>\r\n                  <table class=\"table\">\r\n                    <thead class=\"thead-dark\">\r\n                      <tr>\r\n                        <th scope=\"col\">עדכן</th>\r\n                        <th scope=\"col\">?כמה הביא</th>\r\n                        <th scope=\"col\">?הביא טיפ</th>\r\n                        <th scope=\"col\">שם</th>\r\n                        <th scope=\"col\">פלאפון/טלפון</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr>\r\n                        <ng-container *ngIf='loading'>\r\n                          <p>...מעדכן</p>\r\n                        </ng-container>\r\n                        <ng-container *ngIf='!loading'>\r\n                          <td><button type=\"button\" class=\"btn btn-primary\" (click)=\"onCustomerUpdated(updateCustomerTip)\">עדכן</button></td>\r\n                        </ng-container>\r\n                        <td><input type=\"number\" class=\"form-control\" style=\"max-width: 100px;\" [disabled]='tipped'\r\n                            #updateCustomerTip></td>\r\n                        <td><button type=\"button\" class=\"btn \" [ngClass]=\"!tipped ? 'btn-success':'btn-disabled'\"\r\n                            (click)=\"onTipped()\">כן</button></td>\r\n                        <td>{{ selectedCustomer.name }}</td>\r\n                        <td>{{ selectedCustomer.phone }}</td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n\r\n                  <p style=\"color:red;\">{{ tipNotSellected }}</p>\r\n                </div>\r\n                <ng-container *ngIf='!currentNetStatus'>\r\n                  <div align=center>\r\n                    <div class=\"loader\">\r\n                    </div>\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n              <div *ngIf='!currentNetStatus' class=\"form-group\">\r\n                <p class=\"bg-danger text-danger\">אתה לא מחובר לאינטרנט אינך יכול להוסיף או לעדכן לקוחות במאגר </p>\r\n              </div>\r\n            </form>\r\n\r\n          </div>\r\n\r\n\r\n          <hr>"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _customers_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customers.services */ "./src/app/main-page/customers.services.ts");
/* harmony import */ var _models_customer_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/customer.model */ "./src/app/main-page/models/customer.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_data_storage_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/data-storage.services */ "./src/app/shared/data-storage.services.ts");
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
    function AddTipComponent(userServices, customerServices, router, dataSotrageServices) {
        this.userServices = userServices;
        this.customerServices = customerServices;
        this.router = router;
        this.dataSotrageServices = dataSotrageServices;
        this.successMessage = '';
        this.error = '';
        this.loading = false;
        this.tipNotSellected = '';
        this.tipped = true;
        this.currentNetStatus = true;
        this.searchInput = '';
        this.searchName = '';
        this.customerSelected = false;
        this.customerExists = false;
    }
    AddTipComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUserPauch = this.userServices.getCurrentPauch();
        this.tipStatusStyles = this.userServices.getTipStatusStyles();
        // this.customerServices.setLocalStorage();
        this.customerServices.customersUpdated.subscribe(function (customers) {
            _this.allCustomers = customers;
            // todo make it observable when it notices user is offline then it will get the localstorage
            // todo if there is one.
        });
        this.dataSotrageServices.fetchCustomers();
        this.customerServices.netStatus.subscribe(function (status) {
            _this.currentNetStatus = status;
        });
        this.addCustomerTipForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'customerName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'customerPhone': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'customerTip': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'customerTipped': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'customerShit': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
        });
    };
    AddTipComponent.prototype.onTipped = function () {
        this.tipped = !this.tipped;
    };
    AddTipComponent.prototype.onGetCustomerColor = function (customer) {
        if (this.onGetCustomerAvrg(customer) < 5) {
            return 'bg-danger text-danger';
        }
        else if (this.onGetCustomerAvrg(customer) < 10) {
            return 'bg-warning text-secondary';
        }
        else if (this.onGetCustomerAvrg(customer) < 20) {
            return 'bg-info text-success';
        }
        else if (this.onGetCustomerAvrg(customer) > 20) {
            return 'bg-success text-gold font-weight-bold';
        }
    };
    AddTipComponent.prototype.onAddExistingCustomer = function (index) {
        this.selectedCustomerId = index;
        this.selectedCustomer = this.allCustomers[index];
        this.addCustomerTipForm.get('customerName').setValue(this.selectedCustomer.name);
        this.addCustomerTipForm.get('customerPhone').setValue(this.selectedCustomer.phone);
        this.customerSelected = true;
    };
    AddTipComponent.prototype.onCustomerUpdated = function (tip) {
        var _this = this;
        this.loading = true;
        if (this.tipped && confirm('?אתה בטוח שאתה רוצה לעדכן שהלקוח לא הביא טיפ')) { // it will fire if tipped is not sellected
            // todo make it submit customer update without tip
            var editableCustomer = this.selectedCustomer;
            var currentCustomerTotalNotTipped = Number(editableCustomer.notTipped) + 1;
            editableCustomer.notTipped = currentCustomerTotalNotTipped;
            this.allCustomers[this.selectedCustomerId] = editableCustomer;
            this.customerServices.updateCustomers(this.allCustomers);
            this.dataSotrageServices.storeCustomers().
                subscribe(function (response) {
                _this.successMessage = '!עודכן בהצלחה';
                setTimeout(function () {
                    _this.router.navigate(['../']);
                }, 1500);
                // todo make the response create success message!
            }
            //  },
            //  (error: Error) => {
            //    this.error = 'משהו השתבש אנא נסה שנית';
            //  },
            //  (compl) => {},
            );
        }
        else {
            this.loading = false;
        }
        // it will fire if tipped is sellected
        if (!this.tipped && confirm('אתה בטוח שאתה רוצה לעדכן שהלקוח הביא לך טיפ של' + tip.value)) {
            this.loading = true;
            if (tip.value == '') {
                // todo make it return error that tip is empty
                this.tipNotSellected = 'You Need To Add Tip If You Choosed Customer Tipped!';
                return;
            }
            else {
                this.tipNotSellected = '';
                var editableCustomer = this.selectedCustomer;
                var currentCustomerTipped = Number(editableCustomer.tipped) + 1;
                var currentCustomerTotal = Number(editableCustomer.totalTip) + Number(tip.value);
                editableCustomer.tipped = currentCustomerTipped;
                editableCustomer.totalTip = currentCustomerTotal;
                this.allCustomers[this.selectedCustomerId] = editableCustomer;
                this.customerServices.updateCustomers(this.allCustomers);
                this.userServices.onAddIncome(Number(tip.value));
                this.currentUserPauch = this.userServices.getCurrentPauch();
                this.dataSotrageServices.storeCustomers().
                    subscribe(function (response) {
                    _this.successMessage = '!עודכן בהצלחה';
                    setTimeout(function () {
                        _this.router.navigate(['../']);
                    }, 1500);
                    // todo make the response create success message!
                });
            }
            // todo make it submit the update
        }
    };
    // let editableCustomer = this.selectedCustomer;
    // console.log(editableCustomer.name);
    // this.customerServices.addUpdateToCustomer();
    AddTipComponent.prototype.onUnSelect = function () {
        this.customerSelected = false;
    };
    AddTipComponent.prototype.onGetCustomerAvrg = function (customer) {
        var totalTipTimes = Number(customer.tipped) + Number(customer.notTipped);
        var result = Number(customer.totalTip) / totalTipTimes;
        return result;
    };
    AddTipComponent.prototype.onAddIncome = function (income) {
        this.userServices.onAddIncome(income);
        this.currentUserPauch = this.userServices.getCurrentPauch();
    };
    AddTipComponent.prototype.onCustomerAdded = function () {
        var _this = this;
        // todo make the tip and customer add
        if (!this.customerServices.checkIfCustomerExists(this.addCustomerTipForm.get('customerPhone').value)) {
            this.customerServices
                .addCustomer(new _models_customer_model__WEBPACK_IMPORTED_MODULE_4__["Customer"](this.addCustomerTipForm.get('customerName').value, this.addCustomerTipForm.get('customerPhone').value.toString(), !this.tipped ? '1' : '0', this.tipped ? '1' : '0', '23', this.addCustomerTipForm.get('customerTip').value > 0 ? this.addCustomerTipForm.get('customerTip').value : '0'));
            alert('customer was added successfuly!');
            this.allCustomers = this.customerServices.getAllCustomers();
            this.dataSotrageServices.storeCustomers().
                subscribe(function (response) {
                console.log('Customer Was Added Successfuly');
                _this.allCustomers = _this.customerServices.getAllCustomers();
            });
            this.userServices.onAddIncome(this.addCustomerTipForm.get('customerTip').value);
            this.currentUserPauch = this.userServices.getCurrentPauch();
            this.router.navigate(['../']);
        }
        else {
            this.error = '!לקוח קיים כבר! בחר בהוסף ועדכן';
        }
    };
    AddTipComponent.prototype.ngOnDestroy = function () {
        console.log('ngOnDestroy Was Fired! In add-tip');
    };
    AddTipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-tip',
            template: __webpack_require__(/*! ./add-tip.component.html */ "./src/app/main-page/add-tip/add-tip.component.html"),
            styles: [__webpack_require__(/*! ./add-tip.component.css */ "./src/app/main-page/add-tip/add-tip.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_user_services__WEBPACK_IMPORTED_MODULE_1__["UserServices"],
            _customers_services__WEBPACK_IMPORTED_MODULE_3__["CustomerServices"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_shared_data_storage_services__WEBPACK_IMPORTED_MODULE_6__["DataStoreServices"]])
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

module.exports = "<div align=center class=\"form-group\">\r\n  <h1>הרמה שלך</h1>\r\n  <p>({{ userCurrentLevel }})</p>\r\n</div>\r\n<hr>\r\n<div align=center class=\"form-group\">\r\n  <h2>בפאוץ שלך כרגע</h2>\r\n <p [ngStyle]=\"{'color':userServices.getCurrentPauchStyle()}\">({{ userCurrentPauch }})</p>\r\n</div>\r\n<hr>\r\n\r\n<div class=\"form-group\" align=center>\r\n  <button class=\"btn btn-success\" routerLink=\"/add-tip\">הוסף טיפ ועדכן לקוח</button>\r\n</div>\r\n\r\n<hr>\r\n\r\n  <div align=center class=\"form-group\">\r\n    <h2>בדוק כמה יוצא לך לשעה</h2>\r\n    <div class=\"dropdown\" align=center>\r\n        <button class=\"btn btn-primary dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Dropdown\r\n        </button>\r\n        <div class=\"dropdown-menu\" align=center>\r\n            <div class=\"form-group\" align=center>\r\n                <div class=\"form-group\">\r\n                  <span>?כמה אתה עושה לשעה</span>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                <input align=center  type=\"number\" class=\"form-control text-center\" [(ngModel)]=\"userHourPayed\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <span>?כמה שעות אתה עובד</span>\r\n                </div>\r\n                <input align=center  type=\"number\" class=\"form-control text-center\" [(ngModel)]=\"userWorkHours\">\r\n              </div>\r\n             \r\n            </div>\r\n        </div>\r\n      </div> \r\n      <div class=\"form-group\" align=center>\r\n        <p>אתה עושה לשעה</p>\r\n        <p *ngIf=\"userHourPayed && userWorkHours\">({{ getCurrentHourlyPayed() }})</p>\r\n      </div>\r\n    \r\n  <hr>"

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
        this.getUserLevel();
    };
    CurrentStatusComponent.prototype.getUserLevel = function () {
        if (this.userCurrentPauch < 20) {
            this.userCurrentLevel = 'חור בפאוץ';
        }
        if (this.userCurrentPauch < 40) {
            this.userCurrentLevel = 'מתחיל את היום';
        }
        if (this.userCurrentPauch > 60) {
            this.userCurrentLevel = 'מתקדם';
        }
        if (this.userCurrentPauch > 100) {
            this.userCurrentLevel = 'תותח';
        }
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

/***/ "./src/app/main-page/customers.services.ts":
/*!*************************************************!*\
  !*** ./src/app/main-page/customers.services.ts ***!
  \*************************************************/
/*! exports provided: CustomerServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerServices", function() { return CustomerServices; });
/* harmony import */ var _models_customer_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/customer.model */ "./src/app/main-page/models/customer.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");


var CustomerServices = /** @class */ (function () {
    function CustomerServices() {
        this.netStatus = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.customersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.allCustomers = [
            new _models_customer_model__WEBPACK_IMPORTED_MODULE_0__["Customer"]('אריאל', '0544443334', '2', '2', '20', '20'),
            new _models_customer_model__WEBPACK_IMPORTED_MODULE_0__["Customer"]('הרצל', '0544443335', '4', '0', '2', '344'),
            new _models_customer_model__WEBPACK_IMPORTED_MODULE_0__["Customer"]('אלי', '0544543335', '5', '0', '20', '344'),
            new _models_customer_model__WEBPACK_IMPORTED_MODULE_0__["Customer"]('שמחה', '0544443454', '2', '0', '4', '344'),
            new _models_customer_model__WEBPACK_IMPORTED_MODULE_0__["Customer"]('רעות', '0524247646', '2', '0', '16', '344'),
            new _models_customer_model__WEBPACK_IMPORTED_MODULE_0__["Customer"]('שני', '0574537459', '2', '0', '16', '344'),
            new _models_customer_model__WEBPACK_IMPORTED_MODULE_0__["Customer"]('איציק', '0524234560', '2', '0', '16', '344'),
            new _models_customer_model__WEBPACK_IMPORTED_MODULE_0__["Customer"]('שמחה', '0524273453', '2', '0', '16', '344'),
            new _models_customer_model__WEBPACK_IMPORTED_MODULE_0__["Customer"]('חמד', '0524243354', '0', '-12', '0', '344'),
        ];
    }
    CustomerServices.prototype.getAllCustomers = function () {
        // todo make it posible to save data when offline
        // if (localStorage.getItem('customers')) {
        //   return JSON.parse(localStorage.getItem('customers'));
        // }
        return this.allCustomers;
    };
    CustomerServices.prototype.checkIfCustomerExists = function (phoneNum) {
        for (var _i = 0, _a = this.allCustomers; _i < _a.length; _i++) {
            var customer = _a[_i];
            if (customer.phone == phoneNum) {
                return true;
            }
        }
        return false;
    };
    CustomerServices.prototype.addCustomer = function (customer) {
        this.allCustomers.push(customer);
    };
    CustomerServices.prototype.setCustomers = function (updatedCustomers) {
        this.allCustomers = updatedCustomers;
        this.customersUpdated.next(this.allCustomers);
    };
    CustomerServices.prototype.setNetWorkStatus = function (status) {
        this.netStatus.next(status);
    };
    CustomerServices.prototype.getNetWorkStatus = function () {
        return this.netStatus;
    };
    CustomerServices.prototype.setLocalStorage = function () {
        // for offline couses
        var currentCustomers = JSON.stringify(this.allCustomers);
        localStorage.setItem('customers', currentCustomers);
    };
    CustomerServices.prototype.updateCustomers = function (customers) {
        this.allCustomers = customers;
    };
    CustomerServices.prototype.addUpdateToCustomer = function (customer) {
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

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
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



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    MainPageComponent.prototype.ngOnInit = function () {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/sign-in']);
        }
    };
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
    // {name: 'ירוחם', street: 'הרב ברלין', house: 12, apartment: 4, tipped: 3, notTipped: 0},
    function Customer(name, phone, tipped, notTipped, averageTip, totalTip) {
        this.name = name;
        this.phone = phone;
        this.tipped = tipped;
        this.notTipped = notTipped;
        this.averageTip = averageTip;
        this.totalTip = totalTip;
    }
    return Customer;
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

/***/ "./src/app/shared/data-storage.services.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/data-storage.services.ts ***!
  \*************************************************/
/*! exports provided: DataStoreServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreServices", function() { return DataStoreServices; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _main_page_customers_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-page/customers.services */ "./src/app/main-page/customers.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataStoreServices = /** @class */ (function () {
    function DataStoreServices(http, customerServices, authServices) {
        this.http = http;
        this.customerServices = customerServices;
        this.authServices = authServices;
    }
    DataStoreServices.prototype.storeCustomers = function () {
        var token = this.authServices.getToken();
        return this.http.put('https://jerusalem-runners.firebaseio.com/customers.json?auth=' + token, this.customerServices.
            getAllCustomers());
    };
    DataStoreServices.prototype.fetchCustomers = function () {
        var _this = this;
        var token = this.authServices.getToken();
        return this.http.get('https://jerusalem-runners.firebaseio.com/customers.json?auth=' + token).
            subscribe(function (response) {
            if (response.json() == null) {
                var customers = [];
                _this.customerServices.setCustomers(customers);
            }
            else {
                var customers = response.json();
                _this.customerServices.setCustomers(customers);
            }
            _this.customerServices.setNetWorkStatus(true);
        }, function (error) {
            console.log('You Are Offline!' + error);
            _this.customerServices.setNetWorkStatus(false);
        });
    };
    DataStoreServices = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"],
            _main_page_customers_services__WEBPACK_IMPORTED_MODULE_1__["CustomerServices"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DataStoreServices);
    return DataStoreServices;
}());



/***/ }),

/***/ "./src/app/shared/filter.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/shared/filter.pipe.ts ***!
  \***************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (customer, search) {
        if (customer.phone.match(search) && search.length >= 3) {
            return customer.phone;
        }
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
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
var UserServices = /** @class */ (function () {
    function UserServices() {
        this.currentPauch = 0;
        this.tipStatusStyles = ['red', 'orange', 'green'];
    }
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
        if (income > 0) {
            this.currentPauch += income;
            localStorage.setItem('pauch', this.currentPauch.toString());
        }
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