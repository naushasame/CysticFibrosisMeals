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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
//service defined as injectable, to be used by all others
var LunchMenuService = (function () {
    function LunchMenuService(http) {
        this.http = http;
        this.lunchmenusUrl = 'api/LUNCHMENUS'; // URL to web api
        //private lunchmenusUrl = './lunchmenudata.json';
        //can also be added via the sample file created here as lunchmenudata.json file
        //but in memory db used to here, to allow add/remove or data
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    LunchMenuService.prototype.getLunchMenus = function () {
        return this.http.get(this.lunchmenusUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    LunchMenuService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    LunchMenuService.prototype.getLunchMenu = function (id) {
        var url = this.lunchmenusUrl + "/" + id;
        return this.http.get(url).toPromise().then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    LunchMenuService.prototype.update = function (lunchmenu) {
        var url = this.lunchmenusUrl + "/" + lunchmenu.id;
        return this.http
            .put(url, JSON.stringify(lunchmenu), { headers: this.headers })
            .toPromise()
            .then(function () { return lunchmenu; })
            .catch(this.handleError);
    };
    LunchMenuService.prototype.create = function (recommendation, lunchMealavgmealcost) {
        return this.http
            .post(this.lunchmenusUrl, JSON.stringify({ recommendation: recommendation, avgmealcost: lunchMealavgmealcost }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    LunchMenuService.prototype.delete = function (id) {
        var url = this.lunchmenusUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return LunchMenuService;
}());
LunchMenuService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LunchMenuService);
exports.LunchMenuService = LunchMenuService;
//# sourceMappingURL=lunchmenu.service.js.map