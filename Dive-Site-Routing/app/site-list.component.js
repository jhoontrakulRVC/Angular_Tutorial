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
// specify that this is a component.
// Imports "Input", "output" & "EventEmitter" which then can be used with PROPERTY BINDING & EVENT BINDING
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var site_management_service_1 = require('./site-management.service');
var SiteListComponent = (function () {
    // @Output uses the EVENT bINDING from "app.template" to generate an output. In this case an event , essentially turning it into an OUTPUT EVENT BINDING
    // ***OUTPUTS must be of the type "EventEmitter" so that the even can be published to any listeners.***
    function SiteListComponent(siteService, router) {
        this.siteService = siteService;
        this.router = router;
        this.sites = siteService.getAllSites();
    }
    SiteListComponent = __decorate([
        core_1.Component({
            // selector: how the application refers to this component
            selector: 'site-list-view',
            // navigateUrl: template used to control how this component is to be displayed
            templateUrl: 'app/site-list.template.html',
            // Styles can be declared for the component here instead of referencing a .css file in the <link> tag within <head>. 
            // These will then be used in the "site-list.template" file as [class.topRow] & [class.bottomRow].
            // Style SHIMS in a component only applies to the component it is declared in.
            //For example the stle "h3" only affects <h3> tags in this component and has no affect on the <h3> tags in other components.
            styles: ["\n    .topRow {\n      border-top: 2px solid #808080;\n    }\n\n    .bottomRow {\n      border-bottom: 2px solid #808080;\n    }\n\n    .evenRow{\n      background-color: #dddddd;\n    }\n\n    h3 {\n    font-weight: bold;\n    color: maroon;\n}\n  "]
        }), 
        __metadata('design:paramtypes', [site_management_service_1.SiteManagementService, router_1.Router])
    ], SiteListComponent);
    return SiteListComponent;
}());
exports.SiteListComponent = SiteListComponent;
//# sourceMappingURL=site-list.component.js.map