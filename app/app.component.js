"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
require('rxjs/Rx');
var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () { };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'page-not-found',
            template: "\n    <h5>Page Not Found</h5>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;
var GammaComponent = (function () {
    function GammaComponent(_router, _route) {
        this._router = _router;
        this._route = _route;
    }
    GammaComponent.prototype.ngOnInit = function () {
        console.log(this._route.snapshot.params['id']);
        var x = this._route.params.subscribe(function (params) {
            var id = +params['id'];
            // this.serviceName.getThing(id).then( thing => this.thing = thing);
        });
    };
    GammaComponent = __decorate([
        core_1.Component({
            selector: 'gamma-component',
            template: "\n    <h5>I'm the Gamma Component</h5>\n    <h5>You passed me the value of: {{ id }}</h5>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute])
    ], GammaComponent);
    return GammaComponent;
}());
exports.GammaComponent = GammaComponent;
var BetaComponent = (function () {
    function BetaComponent() {
    }
    BetaComponent.prototype.ngOnInit = function () { };
    BetaComponent = __decorate([
        core_1.Component({
            selector: 'beta-component',
            template: "\n    <h5>I'm the Beta Component</h5>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], BetaComponent);
    return BetaComponent;
}());
exports.BetaComponent = BetaComponent;
var AlphaComponent = (function () {
    function AlphaComponent(_router) {
        this._router = _router;
    }
    AlphaComponent.prototype.onClick = function () {
        this._router.navigate(['/gamma-component', 12]);
    };
    AlphaComponent.prototype.ngOnInit = function () { };
    AlphaComponent = __decorate([
        core_1.Component({
            selector: 'alpha-component',
            template: "\n    <h5>I'm the Alpha component</h5>\n    <button (click)='onClick()'>From Alpha Navigate to Gamma/12</button>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AlphaComponent);
    return AlphaComponent;
}());
exports.AlphaComponent = AlphaComponent;
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class='container'>\n        <h3>Sample Routing</h3>\n        <a routerLink=\"/alpha-component\" routerLinkActive=\"active\">Alpha Component Link</a>\n        <a routerLink=\"/beta-component\" routerLinkActive=\"active\">Beta Component Link</a>\n        <a routerLink=\"/gamma-component/7\" routerLinkActive=\"active\">Gamma Component Link</a>\n        <router-outlet></router-outlet>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map