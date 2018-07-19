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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _githubrepos_githubrepos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./githubrepos/githubrepos.component */ "./src/app/githubrepos/githubrepos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: '', redirectTo: '/githubrepos', pathMatch: 'full' },
    { path: 'detail/:id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailComponent"] },
    { path: 'githubrepos', component: _githubrepos_githubrepos_component__WEBPACK_IMPORTED_MODULE_5__["GitHubReposComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
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

module.exports = ".branding{\r\n    padding-top:10px;\r\n    padding-left:10px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n\n  <mat-sidenav #sidenav mode=\"push\">\n          <div class=\"branding\">\n                  <img [src]=\"logo\" />\n                  <span></span>\n          </div>\n          <mat-nav-list>\n                  <a mat-list-item *ngFor=\"let item of navigationSideMenu\" (click)=\"sidenav.close()\" [routerLink]=\"[item.link]\" routerLinkActive=\"active\">\n                          {{item.label}}\n                  </a>\n          </mat-nav-list>\n  </mat-sidenav>\n\n\n  <div class=\"toolbar\">\n          <mat-toolbar class=\"mat-toolbar mat-toolbar-single-row\">\n                  <button mat-icon-button class=\"d-md-none\" (click)=\"sidenav.open()\">\n                          <mat-icon fontSet=\"fas\" fontIcon=\"fa-bars\"></mat-icon>\n                  </button>\n                  <span routerLink=\"\" class=\"branding spacer center d-inline d-sm-none\">\n                          <img [src]=\"logo\" alt=\"Danske Bank\" disablewebedit=\"True\"></span>\n          </mat-toolbar>\n  </div>\n  <nav mat-tab-nav-bar>\n          <a mat-tab-link *ngFor=\"let e of toolbar\"\n           [routerLink]=\"e.link\" routerLinkActive #rla=\"routerLinkActive\" \n            [active]=\"rla.isActive\">{{e.label}}\n          </a>\n  </nav>\n  \n  <div class=\"wrapper\">\n          <div class=\"content\">\n                  <!--[@routeAnimations]=\"o.isActivated && o.activatedRoute.routeConfig.path\"-->\n                  <router-outlet #o=\"outlet\"></router-outlet>\n          </div>          \n  </div>\n\n \n\n</mat-sidenav-container>"

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
        this.logo = './assets/danske-bank-logo.svg';
        this.title = 'Danske Bank';
        this.navigation = [
            { link: 'dashboard', label: 'Dashboard' },
            { link: 'products', label: 'Products' },
            { link: 'githubrepos', label: 'GitHubRepos' },
            { link: 'about', label: 'About' }
        ];
        this.toolbar = [
            { link: 'dashboard', label: 'Dashboard' },
            { link: 'products', label: 'Products' },
            { link: 'githubrepos', label: 'GitHubRepos' }
        ];
        this.navigationSideMenu = this.navigation.concat([
            { link: 'settings', label: 'Settings' }
        ]);
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _product_search_product_search_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-search/product-search.component */ "./src/app/product-search/product-search.component.ts");
/* harmony import */ var _githubrepos_githubrepos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./githubrepos/githubrepos.component */ "./src/app/githubrepos/githubrepos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//cdk









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_11__["ProductDetailComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _product_search_product_search_component__WEBPACK_IMPORTED_MODULE_14__["ProductSearchComponent"],
                _githubrepos_githubrepos_component__WEBPACK_IMPORTED_MODULE_15__["GitHubReposComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_4__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_5__["InMemoryDataService"], { dataEncapsulation: false }),
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_7__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n*, *:after, *:before {\r\n  box-sizing: border-box;\r\n}\r\nh3 {\r\n  text-align: center; margin-bottom: 0;\r\n}\r\nh4 {\r\n  position: relative;\r\n}\r\n.grid {\r\n  margin: 0;\r\n}\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n.module {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  max-height: 120px;\r\n  min-width: 120px;\r\n  background-color: #607d8b;\r\n  border-radius: 2px;\r\n}\r\n.module:hover {\r\n  background-color: #eee;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px; }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top Products</h3>\n<div class=\"grid grid-pad\">\n    <a *ngFor=\"let product of products\" class=\"col-1-4\" routerLink=\"/detail/{{product.id}}\">\n    <div class=\"module product\">\n      <h4>{{product.name}}</h4>\n    </div>\n  </a>\n</div>\n<app-product-search></app-product-search>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(productService) {
        this.productService = productService;
        this.products = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    DashboardComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) { return _this.products = products.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/githubrepo.service.ts":
/*!***************************************!*\
  !*** ./src/app/githubrepo.service.ts ***!
  \***************************************/
/*! exports provided: GitHubRepoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHubRepoService", function() { return GitHubRepoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var GitHubRepoService = /** @class */ (function () {
    function GitHubRepoService(http) {
        this.http = http;
        this.reposUrl = 'api/githubrepos'; // URL to web api
        this.gitHubReposUrl = 'https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=10&page=1';
    }
    GitHubRepoService.prototype.getReposFromGitHub = function () {
        var HttpClient = function () {
            this.get = function (aUrl, aCallback) {
                var anHttpRequest = new XMLHttpRequest();
                anHttpRequest.onreadystatechange = function () {
                    if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                        aCallback(anHttpRequest.responseText);
                };
                anHttpRequest.open("GET", aUrl, true);
                anHttpRequest.send(null);
            };
        };
        //Parse json into array of objects
        var client = new HttpClient();
        client.get(this.gitHubReposUrl, function (response) {
            var obj = JSON.parse(response);
            console.log(obj);
            console.log(obj.items[0].owner.avatar_url);
            obj.items[0].owner.avatar_url;
            return obj;
            // do something with response
        });
        return null;
    };
    /** GET repos from the server */
    GitHubRepoService.prototype.getGitHubRepos = function () {
        //Todo: logic here to get repot from github and parse into array of 
        // githubrepo objects
        var _this = this;
        // 
        var gitHubJson = this.getReposFromGitHub();
        return this.http.get(this.reposUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (githubrepo) { return _this.log("fetched repos"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getGitHubRepos', [])));
    };
    /** PUT: update the githubrepo on the server */
    GitHubRepoService.prototype.updateGitHubRepo = function (githubrepo) {
        var _this = this;
        return this.http.put(this.reposUrl, githubrepo, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated githubrepo id=" + githubrepo.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateGitHubRepo')));
    };
    // Log GitHubRepoService message */
    GitHubRepoService.prototype.log = function (message) {
        console.log('GitHubRepoService: ' + message);
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    GitHubRepoService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    GitHubRepoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GitHubRepoService);
    return GitHubRepoService;
}());



/***/ }),

/***/ "./src/app/githubrepos/githubrepos.component.css":
/*!*******************************************************!*\
  !*** ./src/app/githubrepos/githubrepos.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".githubrepos {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    \r\n  }\r\n\r\n  .githubrepo-avatar\r\n{\r\n    width:50px;\r\n    height:50px;\r\n}\r\n\r\n  /* .githubrepos li {\r\n    position: relative;\r\n    cursor: pointer;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .githubrepos li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  \r\n  .githubrepos a {\r\n    color: #888;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: block;\r\n    width: 250px;\r\n  }\r\n  \r\n  .githubrepos a:hover {\r\n    color:#607D8B;\r\n  }\r\n  \r\n  .githubrepos .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    min-width: 16px;\r\n    text-align: right;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n  \r\n  button {\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n    font-family: Arial;\r\n  }\r\n  \r\n  button:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n  \r\n  button.delete {\r\n    position: relative;\r\n    left: 194px;\r\n    top: -32px;\r\n    background-color: gray !important;\r\n    color: white;\r\n  } */"

/***/ }),

/***/ "./src/app/githubrepos/githubrepos.component.html":
/*!********************************************************!*\
  !*** ./src/app/githubrepos/githubrepos.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Git Hub Repos</h2>\n<ul class=\"githubrepos\">\n  <li *ngFor=\"let githubrepo of githubrepos\"> \n\n    <div class=\"row\">\n        <span class=\"badge\"><img [src]= \"githubrepo.avatarUrl\" class=\"githubrepo-avatar\" /> </span>\n        <span style='float:right'> {{githubrepo.name}}   \n         <br>\n         {{githubrepo.description}}  \n         <input type=\"checkbox\" id=\"isVisible\" [value] =\"githubrepo.isVisible\" (onchange)= \"save(githubrepo)\"/>\n        </span>\n    </div>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/githubrepos/githubrepos.component.ts":
/*!******************************************************!*\
  !*** ./src/app/githubrepos/githubrepos.component.ts ***!
  \******************************************************/
/*! exports provided: GitHubReposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHubReposComponent", function() { return GitHubReposComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _githubrepo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../githubrepo.service */ "./src/app/githubrepo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 //Import our service
var GitHubReposComponent = /** @class */ (function () {
    function GitHubReposComponent(githubrepoService) {
        this.githubrepoService = githubrepoService;
    }
    GitHubReposComponent.prototype.ngOnInit = function () {
        this.getGitHubRepos();
    };
    GitHubReposComponent.prototype.getGitHubRepos = function () {
        var _this = this;
        this.githubrepoService.getGitHubRepos()
            .subscribe(function (githubrepos) { return _this.githubrepos = githubrepos; });
    };
    GitHubReposComponent.prototype.save = function (gitHubRepo) {
        this.githubrepoService.updateGitHubRepo(gitHubRepo)
            .subscribe();
    };
    GitHubReposComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-githubrepos',
            template: __webpack_require__(/*! ./githubrepos.component.html */ "./src/app/githubrepos/githubrepos.component.html"),
            styles: [__webpack_require__(/*! ./githubrepos.component.css */ "./src/app/githubrepos/githubrepos.component.css")]
        }),
        __metadata("design:paramtypes", [_githubrepo_service__WEBPACK_IMPORTED_MODULE_1__["GitHubRepoService"]])
    ], GitHubReposComponent);
    return GitHubReposComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [
            { id: 1, name: 'Mortgages' },
            { id: 2, name: 'Current Accounts' },
            { id: 3, name: 'Loans' }
        ];
        var githubrepos = [
            { id: 1, name: 'vue', description: 'A progressive, incrementally-adoptable JavaScript framework for building UI on the web.', avatarUrl: 'https://avatars1.githubusercontent.com/u/6128107?v=4', isVisible: true }
        ];
        return { products: products, githubrepos: githubrepos };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product\">\n\n  <h2>{{product.name | uppercase}} Details</h2>\n  <div><span>id: </span>{{product.id}}</div>\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"product.name\" placeholder=\"name\"/>\n    </label>\n  </div>\n\n</div>\n<button (click)=\"save()\">save</button>\n<button (click)=\"goBack()\">go back</button>\n\n"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product */ "./src/app/product.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(route, productService, location) {
        this.route = route;
        this.productService = productService;
        this.location = location;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.getProduct();
    };
    ProductDetailComponent.prototype.getProduct = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.productService.getProduct(id)
            .subscribe(function (product) { return _this.product = product; });
    };
    ProductDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductDetailComponent.prototype.save = function () {
        var _this = this;
        this.productService.updateProduct(this.product)
            .subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _product__WEBPACK_IMPORTED_MODULE_4__["Product"])
    ], ProductDetailComponent.prototype, "product", void 0);
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-search/product-search.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-search/product-search.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search-component\r\n{\r\nclear:both;  \r\n}\r\n.search-result li {\r\n  border-bottom: 1px solid gray;\r\n  border-left: 1px solid gray;\r\n  border-right: 1px solid gray;\r\n  width:195px;\r\n  height: 16px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  list-style-type: none;\r\n}\r\n.search-result li:hover {\r\n  background-color: #607D8B;\r\n}\r\n.search-result li a {\r\n  color: #888;\r\n  display: block;\r\n  text-decoration: none;\r\n}\r\n.search-result li a:hover {\r\n  color: white;\r\n}\r\n.search-result li a:active {\r\n  color: white;\r\n}\r\n#search-box {\r\n  width: 200px;\r\n  height: 20px;\r\n}\r\nul.search-result {\r\n  margin-top: 0;\r\n  padding-left: 0;\r\n}"

/***/ }),

/***/ "./src/app/product-search/product-search.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-search/product-search.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\"  >\n  <h4>Product Search</h4>\n\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n\n  <ul class=\"search-result\">\n    <!--The $ is a convention that indicates products$ is an Observable, not an array.-->\n    <!--The *ngFor can't do anything with an Observable. But there's also a pipe character (|) followed by async, which identifies Angular's AsyncPipe.-->\n    <li *ngFor=\"let product of products$ | async\" >\n      <a routerLink=\"/detail/{{product.id}}\">\n        {{product.name}}\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/product-search/product-search.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-search/product-search.component.ts ***!
  \************************************************************/
/*! exports provided: ProductSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductSearchComponent", function() { return ProductSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductSearchComponent = /** @class */ (function () {
    function ProductSearchComponent(productService) {
        this.productService = productService;
        //A Subject is both a source of observable values and an Observable itself. 
        // You can subscribe to a Subject as you would any Observable.
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Push a search term into the observable stream.
    ProductSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    ProductSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.products$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        // switchMap() preserves the original request order while returning 
        // only the observable from the most recent HTTP method call. Results 
        // from prior calls are canceled and discarded.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.productService.searchProducts(term); }));
    };
    ProductSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-search',
            template: __webpack_require__(/*! ./product-search.component.html */ "./src/app/product-search/product-search.component.html"),
            styles: [__webpack_require__(/*! ./product-search.component.css */ "./src/app/product-search/product-search.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());



/***/ }),

/***/ "./src/app/product.service.ts":
/*!************************************!*\
  !*** ./src/app/product.service.ts ***!
  \************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productsUrl = 'api/products'; // URL to web api
    }
    /** GET products from the server */
    ProductService.prototype.getProducts = function () {
        var _this = this;
        return this.http.get(this.productsUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (products) { return _this.log("fetched products"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getProducts', [])));
    };
    /** GET product by id. Will 404 if id not found */
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        var url = this.productsUrl + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getProduct id=" + id)));
    };
    /** POST: add a new product to the server */
    ProductService.prototype.addProduct = function (product) {
        var _this = this;
        return this.http.post(this.productsUrl, product, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (product) { return _this.log("added product w/ id=" + product.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addProduct')));
    };
    /** PUT: update the product on the server */
    ProductService.prototype.updateProduct = function (product) {
        var _this = this;
        return this.http.put(this.productsUrl, product, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("updated product id=" + product.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateProduct')));
    };
    /** DELETE: delete the product from the server */
    ProductService.prototype.deleteProduct = function (product) {
        var _this = this;
        var id = typeof product === 'number' ? product : product.id;
        var url = this.productsUrl + "/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("deleted product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteProduct')));
    };
    /* GET products whose name contains search term */
    ProductService.prototype.searchProducts = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty product array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        return this.http.get(this.productsUrl + "/?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("found products matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchProducts', [])));
    };
    /** Log aProductService message with the MessageService */
    ProductService.prototype.log = function (message) {
        console.log('ProductService: ' + message);
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    ProductService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/product.ts":
/*!****************************!*\
  !*** ./src/app/product.ts ***!
  \****************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
var Product = /** @class */ (function () {
    function Product(id, name, state) {
        if (state === void 0) { state = 'inactive'; }
        this.id = id;
        this.name = name;
        this.state = state;
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".products {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n  .products li {\r\n    position: relative;\r\n    cursor: pointer;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n  .products li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .products a {\r\n    color: #888;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: block;\r\n    width: 250px;\r\n  }\r\n  .products a:hover {\r\n    color:#607D8B;\r\n  }\r\n  .products .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    min-width: 16px;\r\n    text-align: right;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n  button {\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n    font-family: Arial;\r\n  }\r\n  button:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\n  button.delete {\r\n    position: relative;\r\n    left: 194px;\r\n    top: -32px;\r\n    background-color: gray !important;\r\n    color: white;\r\n  }"

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Products</h2>\n<div>\n  <label>Products name:\n    <input #productName />\n  </label>\n  <!-- (click) passes input value to add() and then clears the input -->\n  <button (click)=\"add(productName.value); productName.value=''\">\n    add\n  </button>\n</div>\n<ul class=\"products\">\n    <li *ngFor=\"let product of products\">\n      <a routerLink=\"/detail/{{product.id}}\">\n        <span class=\"badge\">{{product.id}}</span> {{product.name}}\n      </a><button class=\"delete\" title=\"delete product\"\n      (click)=\"delete(product)\">x</button>\n    </li>    \n  </ul>\n\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../product.service */ "./src/app/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService) {
        this.productService = productService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) { return _this.products = products; });
    };
    ProductsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.productService.addProduct({ name: name })
            .subscribe(function (product) {
            _this.products.push(product);
        });
    };
    ProductsComponent.prototype.delete = function (product) {
        this.products = this.products.filter(function (h) { return h !== product; });
        this.productService.deleteProduct(product).subscribe();
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], ProductsComponent);
    return ProductsComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\paul_\Documents\Visual Studio Code\Danske\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map