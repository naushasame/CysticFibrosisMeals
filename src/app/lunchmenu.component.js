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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var lunchmenu_service_1 = require("./lunchmenu.service");
var LunchMenuComponent = (function () {
    function LunchMenuComponent(router, lunchmenuService) {
        this.router = router;
        this.lunchmenuService = lunchmenuService;
        this.cuttleries = "/img/cuttleries.svg";
        this.editIcon = "/img/edit-icon.png";
        this.deleteIcon = "/img/IconRemove.png";
        this.addIcon = "/img/addIcon.png";
    }
    LunchMenuComponent.prototype.getLunchMenus = function () {
        var _this = this;
        this.lunchmenuService.getLunchMenus().then(function (lunchmenus) { return _this.lunchmenus = lunchmenus; });
    };
    //method from Inteface
    LunchMenuComponent.prototype.ngOnInit = function () {
        this.getLunchMenus();
    };
    //selecting single item causes setting that item into a varible for editing purpose
    LunchMenuComponent.prototype.onSelect = function (lunchmenu) {
        this.selectedlunchmenu = lunchmenu;
    };
    //used for bidirectional data-binding using [()]
    LunchMenuComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedlunchmenu.id]);
    };
    LunchMenuComponent.prototype.addLunchMeal = function (lunchMeal) {
        var _this = this;
        lunchMeal = lunchMeal.trim();
        if (!lunchMeal) {
            return;
        }
        this.lunchmenuService.create(lunchMeal)
            .then(function (lunchmenu) {
            _this.lunchmenus.push(lunchmenu);
            _this.selectedlunchmenu = null;
        });
    };
    LunchMenuComponent.prototype.deleteLunchMeal = function (lunchMeal) {
        var _this = this;
        this.lunchmenuService
            .delete(lunchMeal.id)
            .then(function () {
            _this.lunchmenus = _this.lunchmenus.filter(function (l) { return l !== lunchMeal; });
            if (_this.selectedlunchmenu === lunchMeal) {
                _this.selectedlunchmenu = null;
            }
        });
    };
    return LunchMenuComponent;
}());
LunchMenuComponent = __decorate([
    core_1.Component({
        selector: 'my-lunchmenu',
        templateUrl: './lunchmenu.component.html',
        styleUrls: ['./lunchmenu.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        lunchmenu_service_1.LunchMenuService])
], LunchMenuComponent);
exports.LunchMenuComponent = LunchMenuComponent;
//# sourceMappingURL=lunchmenu.component.js.map