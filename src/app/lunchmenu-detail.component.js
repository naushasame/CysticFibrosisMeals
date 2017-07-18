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
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var lunchmenu_service_1 = require("./lunchmenu.service");
var LunchMenuDetailComponent = (function () {
    function LunchMenuDetailComponent(lunchmenuService, route, location) {
        this.lunchmenuService = lunchmenuService;
        this.route = route;
        this.location = location;
        this.editimg = "/img/Edit.svg";
    }
    //method due to interface implementation
    LunchMenuDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.lunchmenuService.getLunchMenu(+params.get('id')); })
            .subscribe(function (lunchmenu) { return _this.lunchmenu = lunchmenu; });
    };
    //event handler for saving and navigating back
    LunchMenuDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    LunchMenuDetailComponent.prototype.saveAndGoBack = function () {
        var _this = this;
        this.lunchmenuService.update(this.lunchmenu)
            .then(function () { return _this.goBack(); });
    };
    return LunchMenuDetailComponent;
}());
LunchMenuDetailComponent = __decorate([
    core_1.Component({
        selector: 'lunchmenu-detail',
        templateUrl: './lunchmenu-detail.component.html',
        styleUrls: ['./lunchmenu-detail.component.css']
    })
    //component class for editing the object parameters. it will subscribe to the items
    ,
    __metadata("design:paramtypes", [lunchmenu_service_1.LunchMenuService,
        router_1.ActivatedRoute,
        common_1.Location])
], LunchMenuDetailComponent);
exports.LunchMenuDetailComponent = LunchMenuDetailComponent;
//# sourceMappingURL=lunchmenu-detail.component.js.map