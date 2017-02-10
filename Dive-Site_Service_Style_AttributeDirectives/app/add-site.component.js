//Specifies that this is a "Component" type
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
//Imports "Output" & "EventEmitter" which is then usd in EVENT BINDING
var core_1 = require('@angular/core');
var site_management_service_1 = require('./site-management.service');
//selector assigns the name that the application will use to refer to this component.
//templateUrl is a html file that dictates how the component should be displayed.
var AddSiteComponent = (function () {
    function AddSiteComponent(siteService) {
        this.siteService = siteService;
        //@Output uses the EVENT BINDING from "app.template" to generate an output. In this case an event , essentially turning it into an OUTPUT EVENT BINDING
        //***OUTPUTS must be of the type "EventEmitter" so that the even can be published to any listeners.***
        this.onClosed = new core_1.EventEmitter();
    }
    //name of function to be called from "add-site.template"
    AddSiteComponent.prototype.add = function () {
        this.siteService.addSite({ id: 0, name: this.siteName });
        this.onClosed.emit(null);
    };
    //name of function to be called from "add-site.template"
    AddSiteComponent.prototype.cancel = function () {
        this.onClosed.emit(null);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AddSiteComponent.prototype, "onClosed", void 0);
    AddSiteComponent = __decorate([
        core_1.Component({
            selector: 'add-site-view',
            templateUrl: '/app/add-site.template.html'
        }), 
        __metadata('design:paramtypes', [site_management_service_1.SiteManagementService])
    ], AddSiteComponent);
    return AddSiteComponent;
}());
exports.AddSiteComponent = AddSiteComponent;
//# sourceMappingURL=add-site.component.js.map