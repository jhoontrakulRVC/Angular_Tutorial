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
// selector: how the application will refer to this component
// navigateUrl: how the component will be displayed
var AppComponent = (function () {
    function AppComponent() {
        // string variable specifying what to initially display
        this.currentView = 'list';
    }
    // function used in "app.template.html" takes a string parameter "view" used to change what is displayed. Assigned by the below functions **look for "this.navigateTo"**
    AppComponent.prototype.navigateTo = function (view) {
        this.currentView = view;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'yw-app',
            templateUrl: 'app/app.template.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map