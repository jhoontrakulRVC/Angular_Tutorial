"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var dive_site_1 = require("./dive-site");
// selector: how the application will refer to this component
// navigateUrl: how the component will be displayed
var AppComponent = (function () {
    function AppComponent() {
        // This component will display "sites" which it gets from the "DiveSite (dive-site.ts)" (exported from the "site-list.component" & imported in the "import" section above) 
        this.sites = dive_site_1.DiveSite.FavouriteSites.slice(0);
        // string variable specifying what to initially display
        this.currentView = 'list';
    }
    // function used in "app.template.html" takes a string parameter "view" used to change what is displayed. Assigned by the below functions **look for "this.navigateTo"**
    AppComponent.prototype.navigateTo = function (view) {
        this.currentView = view;
    };
    AppComponent.prototype.startAdd = function () {
        this.newSiteId = this.sites.map(function (s) { return s.id; }).reduce(function (p, c) { return p < c ? c : p; }) + 1;
        this.navigateTo('add');
    };
    AppComponent.prototype.siteAdded = function (newSiteName) {
        this.sites.push({ id: this.newSiteId, name: newSiteName });
        this.navigateTo('list');
    };
    AppComponent.prototype.startEdit = function (site) {
        this.currentSite = site;
        this.navigateTo('edit');
    };
    AppComponent.prototype.siteSaved = function (site) {
        var oldSite = this.sites.filter(function (s) { return s.id == site.id; })[0];
        if (oldSite) {
            oldSite.name = site.name;
        }
        this.navigateTo('list');
    };
    AppComponent.prototype.startDelete = function (site) {
        this.currentSite = site;
        this.navigateTo('delete');
    };
    AppComponent.prototype.siteDeleted = function () {
        var siteIndex = this.sites.indexOf(this.currentSite);
        if (siteIndex >= 0) {
            this.sites.splice(siteIndex, 1);
        }
        this.navigateTo('list');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'yw-app',
        templateUrl: 'app/app.template.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map