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
var lunchmenu_service_1 = require("./lunchmenu.service");
var FavLunchComponent = (function () {
    //injecting a service object, without creating one separately
    function FavLunchComponent(lunchmenuService) {
        this.lunchmenuService = lunchmenuService;
        this.lunchmenus = [];
    }
    //method due to interface implementation from OnInit
    FavLunchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lunchmenuService.getLunchMenus()
            .then(function (lunchmenus) { return _this.lunchmenus = lunchmenus.slice(0, 4); });
    };
    return FavLunchComponent;
}());
FavLunchComponent = __decorate([
    core_1.Component({
        selector: 'my-favlunch',
        templateUrl: './favlunch.component.html',
        styleUrls: ['./favlunch.component.css']
    }),
    __metadata("design:paramtypes", [lunchmenu_service_1.LunchMenuService])
], FavLunchComponent);
exports.FavLunchComponent = FavLunchComponent;
//# sourceMappingURL=favlunch.component.js.map