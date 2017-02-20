"use strict";
// Imports from ANGULAR the routing modules
var router_1 = require('@angular/router');
// Imports the components that will be used in the routing table.
var site_list_component_1 = require('./app/site-list.component');
var add_site_component_1 = require('./app/add-site.component');
var edit_site_component_1 = require('./app/edit-site.component');
var delete_site_component_1 = require('./app/delete-site.component');
// An array of the Route class containing information on how each URL should be interpreted. So these work by declaring a relative PATH to the BASE URL (see <base> tag in the index.html file) 
// ***NOTE*** for the EDIT & DELETE components the path also includes a parameter (sig nified by "/:id") which will then be used in PROPERTY BINDING
var routes = [
    { path: 'list', component: site_list_component_1.SiteListComponent },
    { path: 'add', component: add_site_component_1.AddSiteComponent },
    { path: 'edit/:id', component: edit_site_component_1.EditSiteComponent },
    { path: 'delete/:id', component: delete_site_component_1.DeleteSiteComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map