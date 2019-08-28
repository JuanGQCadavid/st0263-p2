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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/compose/compose.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/compose/compose.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    Compose\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>&times;</button>\n</mat-toolbar>\n\n<form novalidate [formGroup]=\"composeForm\" ##fform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <p>\n        <mat-form-field>\n            <input matInput formControlName=\"topic\" placeholder=\"Topic\" type=\"text\" required>\n            <mat-error *ngIf=\"formErrors.topic\">\n                {{ formErrors.topic}}\n            </mat-error>\n        </mat-form-field>\n    </p>\n    <p>\n        <mat-form-field>\n            <textarea matInput formControlName=\"comment\" placeholder=\"Type your comment\" rows=\"10\" cols=\"100\" required>\n            </textarea>\n            <mat-error *ngIf=\"formErrors.comment\">\n                {{ formErrors.comment}}\n            </mat-error>\n        </mat-form-field>\n    </p>\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button mat-raised-button color=\"primary\" type=\"submit\"\n        [disabled]=\"composeForm.invalid\">Publish</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit/edit.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    Edit\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>&times;</button>\n</mat-toolbar>\n\n<form novalidate [formGroup]=\"editForm\" ##fform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <p>\n        <mat-form-field>\n            <input matInput formControlName=\"topic\" placeholder=\"Topic\" type=\"text\" required>\n            <mat-error *ngIf=\"formErrors.topic\">\n                {{ formErrors.topic}}\n            </mat-error>\n        </mat-form-field>\n    </p>\n    <p>\n        <mat-form-field>\n            <textarea matInput formControlName=\"comment\" placeholder=\"Type your comment\" rows=\"10\" cols=\"100\" required>\n            </textarea>\n            <mat-error *ngIf=\"formErrors.comment\">\n                {{ formErrors.comment}}\n            </mat-error>\n        </mat-form-field>\n    </p>\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button mat-raised-button color=\"primary\" type=\"submit\"\n        [disabled]=\"editForm.invalid\">Change</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"\n    fxLayout=\"row\"\n    fxLayout.sm=\"column\"\n    fxLayout.xs=\"column\"\n    fxLayoutGap=\"10px\"\n    fxLayoutGap.xs=\"0\">\n\n    <div fxFlex=\"20\">\n        <h3>\n            Filter\n        </h3>\n        <form novalidate [formGroup]=\"filterForm\" #fform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n            <p>\n                <mat-form-field>\n                    <input matInput formControlName=\"author\" placeholder=\"Author\" type=\"text\">\n                </mat-form-field>\n            </p>\n            <p>\n                <mat-form-field>\n                    <input matInput formControlName=\"topic\" placeholder=\"Topic\" type=\"text\">\n                </mat-form-field>\n            </p>\n            <button type=\"submit\" mat-raised-button color=\"primary\">\n                Filter\n            </button>\n             <button style=\"margin-left:5px\" type=\"submit\" mat-raised-button color=\"primary\">\n                Refresh\n            </button>\n        </form>\n        <mat-divider class=\"space-top\"></mat-divider>\n        <div *ngIf=\"userWrapper.user\">\n            <button class=\"space-top\" mat-raised-button color=\"primary\" (click)=\"openComposeForm()\">Compose</button>\n        </div>\n    </div>\n\n    <mat-divider [vertical]=\"true\"></mat-divider>\n\n    <div fxFlex=\"80\">\n        <h3>Feed</h3>\n        <mat-list *ngIf=\"tweets\">\n            <mat-list-item *ngFor=\"let tweet of tweets\">\n                <p matLine>@{{tweet.author}}</p>\n                <p class=\"gray-text\" matLine>#{{tweet.topic}} {{tweet.createdAt | date}}</p>\n                <p matLine>{{tweet.content}}</p>\n                <div *ngIf=\"userWrapper.user && userWrapper.user.username == tweet.author\" matLine>\n                    <button mat-raised-button class=\"separate\" (click)=\"openEditForm(tweet)\">Edit</button>\n                    <button mat-raised-button class=\"separate\" (click)=\"deleteTweet(tweet)\">Delete</button>\n                </div>\n            </mat-list-item>\n        </mat-list>\n    </div>\n\n    <div fxFlex=\"80\" [hidden]=\"tweets\">\n        <mat-spinner></mat-spinner> <h4>Loading . . . Please Wait</h4>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    Login\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>&times;</button>\n</mat-toolbar>\n\n<form novalidate [formGroup]=\"loginForm\" ##fform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <p>\n        <mat-form-field>\n            <input matInput formControlName=\"username\" placeholder=\"Username\" type=\"text\" required>\n            <mat-error *ngIf=\"formErrors.username\">\n                {{ formErrors.username }}\n            </mat-error>\n        </mat-form-field>\n    </p>\n    <p>\n        <mat-form-field>\n            <input matInput formControlName=\"password\" placeholder=\"Password\" type=\"password\" required>\n            <mat-error *ngIf=\"formErrors.password\">\n                {{ formErrors.password }}\n            </mat-error>\n        </mat-form-field>\n    </p>\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button mat-raised-button color=\"primary\" type=\"submit\"\n        [disabled]=\"loginForm.invalid\">Login</button>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/singup/singup.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/singup/singup.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    Signup\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>&times;</button>\n</mat-toolbar>\n\n<form novalidate [formGroup]=\"signupForm\" ##fform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <p>\n        <mat-form-field>\n            <input matInput formControlName=\"username\" placeholder=\"Username\" type=\"text\" required>\n            <mat-error *ngIf=\"formErrors.username\">\n                {{ formErrors.username }}\n            </mat-error>\n        </mat-form-field>\n    </p>\n    <p>\n        <mat-form-field>\n            <input matInput formControlName=\"password\" placeholder=\"Password\" type=\"password\" required>\n            <mat-error *ngIf=\"formErrors.password\">\n                {{ formErrors.password }}\n            </mat-error>\n        </mat-form-field>\n    </p>\n    <span class=\"flex-spacer\"></span>\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button mat-raised-button color=\"primary\" type=\"submit\"\n        [disabled]=\"signupForm.invalid\">Sign up</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/toolbar/toolbar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/toolbar/toolbar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span>Comments</span>\n    <span class=\"flex-spacer\"></span>\n    <div *ngIf=\"!userWrapper.user\">\n        <button mat-button (click)=\"openLoginForm()\">Login</button>\n    </div>\n    <div *ngIf=\"userWrapper.user\">\n        <button mat-button (click)=\"logOut()\">Logout</button>\n    </div>\n    <button mat-button (click)=\"openSignUpForm()\">Sign up</button>\n</mat-toolbar>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_routing_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing/routes */ "./src/app/app-routing/routes.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app-routing/routes.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing/routes.ts ***!
  \***************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");

const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'FakeTwitter';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_tweet_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/tweet.service */ "./src/app/services/tweet.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/baseurl */ "./src/app/shared/baseurl.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/toolbar/toolbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./compose/compose.component */ "./src/app/compose/compose.component.ts");
/* harmony import */ var _singup_singup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./singup/singup.component */ "./src/app/singup/singup.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
            _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_20__["ToolbarComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
            _compose_compose_component__WEBPACK_IMPORTED_MODULE_22__["ComposeComponent"],
            _singup_singup_component__WEBPACK_IMPORTED_MODULE_23__["SingupComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_24__["EditComponent"],
        ],
        imports: [
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
        ],
        providers: [
            _services_tweet_service__WEBPACK_IMPORTED_MODULE_15__["TweetService"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_16__["LoginService"],
            { provide: 'BaseURL', useValue: _shared_baseurl__WEBPACK_IMPORTED_MODULE_17__["baseURL"] }
        ],
        entryComponents: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
            _singup_singup_component__WEBPACK_IMPORTED_MODULE_23__["SingupComponent"],
            _compose_compose_component__WEBPACK_IMPORTED_MODULE_22__["ComposeComponent"],
            _edit_edit_component__WEBPACK_IMPORTED_MODULE_24__["EditComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/compose/compose.component.scss":
/*!************************************************!*\
  !*** ./src/app/compose/compose.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvc2UvY29tcG9zZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/compose/compose.component.ts":
/*!**********************************************!*\
  !*** ./src/app/compose/compose.component.ts ***!
  \**********************************************/
/*! exports provided: ComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeComponent", function() { return ComposeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_tweet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tweet.service */ "./src/app/services/tweet.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let ComposeComponent = class ComposeComponent {
    constructor(cb, tweetService, dialogRef, data) {
        this.cb = cb;
        this.tweetService = tweetService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.formErrors = {
            'topic': '',
            'comment': ''
        };
        this.validationMessages = {
            'topic': {
                'required': 'A topic is required',
                'maxlength': 'The topic cannot be more than 25 characters long'
            },
            'comment': {
                'required': 'A comment is required',
                'maxlength': 'The comment cannot be more than 500 characters long'
            }
        };
        this.username = this.data;
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.composeForm = this.cb.group({
            topic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]],
            comment: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]]
        });
        this.composeForm.valueChanges
            .subscribe((data) => this.onValueChanged(data));
    }
    onValueChanged(data) {
        if (!this.composeForm) {
            return;
        }
        const form = this.composeForm;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                //clear previous error message (if any)
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    }
    onSubmit() {
        let values = this.composeForm.value;
        this.tweetService.pushTweet(this.username, values.topic, values.comment);
        this.dialogRef.close();
    }
};
ComposeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_tweet_service__WEBPACK_IMPORTED_MODULE_3__["TweetService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fform', { static: false })
], ComposeComponent.prototype, "composeFormDirective", void 0);
ComposeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compose',
        template: __webpack_require__(/*! raw-loader!./compose.component.html */ "./node_modules/raw-loader/index.js!./src/app/compose/compose.component.html"),
        styles: [__webpack_require__(/*! ./compose.component.scss */ "./src/app/compose/compose.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]))
], ComposeComponent);



/***/ }),

/***/ "./src/app/edit/edit.component.scss":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_tweet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/tweet.service */ "./src/app/services/tweet.service.ts");





let EditComponent = class EditComponent {
    constructor(eb, tweetService, dialogRef, data) {
        this.eb = eb;
        this.tweetService = tweetService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.formErrors = {
            'topic': '',
            'comment': ''
        };
        this.validationMessages = {
            'topic': {
                'required': 'A topic is required',
                'maxlength': 'The topic cannot be more than 25 characters long'
            },
            'comment': {
                'required': 'A comment is required',
                'maxlength': 'The comment cannot be more than 500 characters long'
            }
        };
        this.tweet = this.data;
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.editForm = this.eb.group({
            topic: [this.tweet.topic, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(25)]],
            comment: [this.tweet.content, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500)]]
        });
        this.editForm.valueChanges
            .subscribe((data) => this.onValueChanged(data));
    }
    onValueChanged(data) {
        if (!this.editForm) {
            return;
        }
        const form = this.editForm;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                //clear previous error message (if any)
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    }
    onSubmit() {
        let values = this.editForm.value;
        this.tweet.topic = values.topic;
        this.tweet.content = values.comment;
        this.tweetService.updateTweet(this.tweet);
        this.dialogRef.close();
    }
};
EditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_tweet_service__WEBPACK_IMPORTED_MODULE_4__["TweetService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fform', { static: false })
], EditComponent.prototype, "editFormDirective", void 0);
EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit',
        template: __webpack_require__(/*! raw-loader!./edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit/edit.component.html"),
        styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/edit/edit.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], EditComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".space-top {\n  margin: 20px 0px 0px 0px;\n}\n\n.gray-text {\n  color: gray;\n}\n\n.separate {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcV29ya3NwYWNlXFxTVDAyNjMtUDFcXEZha2VUd2l0dGVyL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlLXRvcCB7XHJcbiAgbWFyZ2luOiAyMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uZ3JheS10ZXh0IHtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG5cclxuLnNlcGFyYXRlIHtcclxuICBtYXJnaW46IDVweDtcclxufSIsIi5zcGFjZS10b3Age1xuICBtYXJnaW46IDIwcHggMHB4IDBweCAwcHg7XG59XG5cbi5ncmF5LXRleHQge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnNlcGFyYXRlIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_tweet_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/tweet.service */ "./src/app/services/tweet.service.ts");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../compose/compose.component */ "./src/app/compose/compose.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit/edit.component */ "./src/app/edit/edit.component.ts");










let HomeComponent = class HomeComponent {
    constructor(loginService, tweetService, route, location, fb, dialog) {
        this.loginService = loginService;
        this.tweetService = tweetService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.dialog = dialog;
        this.filter = null;
        this.createForm();
    }
    ngOnInit() {
        this.tweetService.getTweets(this.filter)
            .subscribe((tweets) => this.tweets = tweets);
        this.loginService.getUserWrapper()
            .subscribe((userWrapper) => this.userWrapper = userWrapper);
    }
    createForm() {
        this.filterForm = this.fb.group({
            author: ['', []],
            topic: ['', []],
        });
    }
    onSubmit() {
        // Filter
        this.filter = this.filterForm.value;
        this.ngOnInit();
    }
    deleteTweet(tweet) {
        this.tweetService.deleteTweet(tweet);
        this.ngOnInit();
    }
    openComposeForm() {
        this.dialog.open(_compose_compose_component__WEBPACK_IMPORTED_MODULE_8__["ComposeComponent"], {
            data: this.userWrapper.user.username
        });
    }
    openEditForm(tweet) {
        this.dialog.open(_edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"], {
            data: tweet
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] },
    { type: _services_tweet_service__WEBPACK_IMPORTED_MODULE_7__["TweetService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fform', { static: false })
], HomeComponent.prototype, "filterFormDirective", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");





let LoginComponent = class LoginComponent {
    constructor(lb, loginService, dialogRef) {
        this.lb = lb;
        this.loginService = loginService;
        this.dialogRef = dialogRef;
        this.formErrors = {
            'username': '',
            'password': ''
        };
        this.validationMessages = {
            'username': {
                'required': 'Username is required'
            },
            'password': {
                'required': 'Password is required'
            }
        };
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.loginForm = this.lb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.loginForm.valueChanges
            .subscribe((data) => this.onValueChanged(data));
    }
    onValueChanged(data) {
        if (!this.loginForm) {
            return;
        }
        const form = this.loginForm;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                //clear previous error message (if any)
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    }
    onSubmit() {
        this.user = this.loginForm.value;
        this.loginService.login(this.user);
        this.dialogRef.close();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fform', { static: false })
], LoginComponent.prototype, "loginFormDirective", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");





let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.userWrapper = {
            user: null
        };
    }
    login(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'users/login', { username: user.username, password: user.password }, httpOptions)
            .subscribe((response) => { this.userWrapper.user = user; });
    }
    logout() {
        this.userWrapper.user = null;
    }
    signup(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + 'users/signup', { username: user.username, password: user.password }, httpOptions)
            .subscribe((response) => { this.userWrapper.user = user; });
    }
    getUserWrapper() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.userWrapper);
    }
    getUsername() {
        return (this.userWrapper.user) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.userWrapper.user.username) : null;
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/services/tweet.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/tweet.service.ts ***!
  \*******************************************/
/*! exports provided: TweetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetService", function() { return TweetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_baseurl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/baseurl */ "./src/app/shared/baseurl.ts");




let TweetService = class TweetService {
    constructor(http) {
        this.http = http;
    }
    getTweets(filter) {
        if (filter) {
            if (filter.author && filter.author.length > 0) {
                return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'tweets?author=' + filter.author);
            }
            if (filter.topic && filter.topic.length > 0) {
                return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'tweets?topic=' + filter.topic);
            }
        }
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'tweets');
    }
    getTweet(id) {
        return this.http.get(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'tweets/' + id);
    }
    updateTweet(tweet) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.http.put(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'tweets/' + tweet._id, tweet, httpOptions)
            .subscribe(response => { });
        // Subscribe to observables to activate them
    }
    pushTweet(author, topic, content) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.http.post(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'tweets/', { author: author, topic: topic, content: content }, httpOptions)
            .subscribe(response => { });
    }
    deleteTweet(tweet) {
        this.http.delete(_shared_baseurl__WEBPACK_IMPORTED_MODULE_3__["baseURL"] + 'tweets/' + tweet._id)
            .subscribe(response => { });
    }
};
TweetService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TweetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TweetService);



/***/ }),

/***/ "./src/app/shared/baseurl.ts":
/*!***********************************!*\
  !*** ./src/app/shared/baseurl.ts ***!
  \***********************************/
/*! exports provided: baseURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
const baseURL = 'https://valentarmo-st0263p1.tk/data/';


/***/ }),

/***/ "./src/app/singup/singup.component.scss":
/*!**********************************************!*\
  !*** ./src/app/singup/singup.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Npbmd1cC9zaW5ndXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/singup/singup.component.ts":
/*!********************************************!*\
  !*** ./src/app/singup/singup.component.ts ***!
  \********************************************/
/*! exports provided: SingupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupComponent", function() { return SingupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");





let SingupComponent = class SingupComponent {
    constructor(sb, loginService, dialogRef) {
        this.sb = sb;
        this.loginService = loginService;
        this.dialogRef = dialogRef;
        this.formErrors = {
            'username': '',
            'password': ''
        };
        this.validationMessages = {
            'username': {
                'required': 'Username is required'
            },
            'password': {
                'required': 'Password is required'
            }
        };
        this.createForm();
    }
    ngOnInit() {
    }
    createForm() {
        this.signupForm = this.sb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.signupForm.valueChanges
            .subscribe((data) => this.onValueChanged(data));
    }
    onValueChanged(data) {
        if (!this.signupForm) {
            return;
        }
        const form = this.signupForm;
        for (const field in this.formErrors) {
            if (this.formErrors.hasOwnProperty(field)) {
                //clear previous error message (if any)
                this.formErrors[field] = '';
                const control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    const messages = this.validationMessages[field];
                    for (const key in control.errors) {
                        if (control.errors.hasOwnProperty(key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    }
    onSubmit() {
        this.user = this.signupForm.value;
        this.loginService.signup(this.user);
        this.dialogRef.close();
    }
};
SingupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fform', { static: false })
], SingupComponent.prototype, "signupFormDirective", void 0);
SingupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-singup',
        template: __webpack_require__(/*! raw-loader!./singup.component.html */ "./node_modules/raw-loader/index.js!./src/app/singup/singup.component.html"),
        styles: [__webpack_require__(/*! ./singup.component.scss */ "./src/app/singup/singup.component.scss")]
    })
], SingupComponent);



/***/ }),

/***/ "./src/app/toolbar/toolbar.component.scss":
/*!************************************************!*\
  !*** ./src/app/toolbar/toolbar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/toolbar/toolbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbar/toolbar.component.ts ***!
  \**********************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _singup_singup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../singup/singup.component */ "./src/app/singup/singup.component.ts");






let ToolbarComponent = class ToolbarComponent {
    constructor(dialog, loginService) {
        this.dialog = dialog;
        this.loginService = loginService;
    }
    ngOnInit() {
        this.loginService.getUserWrapper()
            .subscribe((userWrapper) => this.userWrapper = userWrapper);
    }
    openLoginForm() {
        this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]);
    }
    openSignUpForm() {
        this.dialog.open(_singup_singup_component__WEBPACK_IMPORTED_MODULE_5__["SingupComponent"]);
    }
    logOut() {
        this.loginService.logout();
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] }
];
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toolbar',
        template: __webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/toolbar/toolbar.component.html"),
        styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/toolbar/toolbar.component.scss")]
    })
], ToolbarComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Workspace\ST0263-P1\FakeTwitter\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map