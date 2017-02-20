import { NgModule } from '@angular/core';
// Imports from ANGULAR the routing modules
import { Routes, RouterModule } from '@angular/router';

// Imports the components that will be used in the routing table.

import { SiteListComponent } from './site-list.component';
import { AddSiteComponent } from './add-site.component';
import { EditSiteComponent } from './edit-site.component';
import { DeleteSiteComponent } from './delete-site.component';


// An array of the Route class containing information on how each URL should be interpreted. So these work by declaring a relative PATH to the BASE URL (see <base> tag in the index.html file) 
// ***NOTE*** for the EDIT & DELETE components the path also includes a parameter (sig nified by "/:id") which will then be used in PROPERTY BINDING
const routes: Routes = [
    { path: 'list', component: SiteListComponent },
    { path: 'add', component: AddSiteComponent },
    { path: 'edit/:id', component: EditSiteComponent },
    { path: 'delete/:id', component: DeleteSiteComponent },
    { path: '', redirectTo: 'list', pathMatch:'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule { }

