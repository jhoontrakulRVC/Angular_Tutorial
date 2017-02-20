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
// Imports from ANGULAR the routing modules
var router_1 = require('@angular/router');
// Imports the components that will be used in the routing table.
var site_list_component_1 = require('./site-list.component');
var add_site_component_1 = require('./add-site.component');
var edit_site_component_1 = require('./edit-site.component');
var delete_site_component_1 = require('./delete-site.component');
// An array of the Route class containing information on how each URL should be interpreted. So these work by declaring a relative PATH to the BASE URL (see <base> tag in the index.html file) 
// ***NOTE*** for the EDIT & DELETE components the path also includes a parameter (sig nified by "/:id") which will then be used in PROPERTY BINDING
var routes = [
    { path: 'list', component: site_list_component_1.SiteListComponent },
    { path: 'add', component: add_site_component_1.AddSiteComponent },
    { path: 'edit/:id', component: edit_site_component_1.EditSiteComponent },
    { path: 'delete/:id', component: delete_site_component_1.DeleteSiteComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RoutingModule);
    return RoutingModule;
}());
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=app.routes.js.map