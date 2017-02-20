// specify that this is a component.
// Imports "Input", "output" & "EventEmitter" which then can be used with PROPERTY BINDING & EVENT BINDING
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

//Importing a static list of dive sites
import { DiveSite } from './dive-site';
import { SiteManagementService } from './site-management.service';

@Component({
    // selector: how the application refers to this component
    selector: 'site-list-view',
    // navigateUrl: template used to control how this component is to be displayed
    templateUrl: 'app/site-list.template.html',
    // Styles can be declared for the component here instead of referencing a .css file in the <link> tag within <head>. 
    // These will then be used in the "site-list.template" file as [class.topRow] & [class.bottomRow].
    // Style SHIMS in a component only applies to the component it is declared in.
    //For example the stle "h3" only affects <h3> tags in this component and has no affect on the <h3> tags in other components.
    styles: [`
    .topRow {
      border-top: 2px solid #808080;
    }

    .bottomRow {
      border-bottom: 2px solid #808080;
    }

    .evenRow{
      background-color: #dddddd;
    }

    h3 {
    font-weight: bold;
    color: maroon;
}
  `]
})

export class SiteListComponent {
    // an array of Dive Sites from the static list in "dive-site.ts"
    // sites = DiveSite.FavouriteSites;

    // @Input() uses the PROPERTY BINDING from "app.template" as an input binding, essentially turning it into an INPUT PROPERTY BINDING
    sites: DiveSite[];
    // @Output uses the EVENT bINDING from "app.template" to generate an output. In this case an event , essentially turning it into an OUTPUT EVENT BINDING
    // ***OUTPUTS must be of the type "EventEmitter" so that the even can be published to any listeners.***



    constructor(
        private siteService: SiteManagementService,
        private router: Router
    ) {
        this.sites = siteService.getAllSites();
    }

    // name of function to be called from "site-list.template"
    //add() {
    //    this.onAdd.emit(null);
    //}

    //edit(siteId: number) {
    //    this.onEdit.emit(siteId);
    //}

    //delete(siteId: number) {
    //    this.onDelete.emit(siteId);
    //}
}