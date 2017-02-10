// specify that this is a component.
// Imports "Input", "output" & "EventEmitter" which then can be used with PROPERTY BINDING & EVENT BINDING
import { Component, Input, Output, EventEmitter } from '@angular/core';

//Importing a static list of dive sites
import { DiveSite } from './dive-site';

@Component({
    // selector: how the application refers to this component
    selector: 'site-list-view',
    // navigateUrl: template used to control how this component is to be displayed
    templateUrl: 'app/site-list.template.html'
})

export class SiteListComponent {
    // an array of Dive Sites from the static list in "dive-site.ts"
    // sites = DiveSite.FavouriteSites;

    // @Input() uses the PROPERTY BINDING from "app.template" as an input binding, essentially turning it into an INPUT PROPERTY BINDING
    @Input() sites: DiveSite[];
    // @Output uses the EVENT bINDING from "app.template" to generate an output. In this case an event , essentially turning it into an OUTPUT EVENT BINDING
    // ***OUTPUTS must be of the type "EventEmitter" so that the even can be published to any listeners.***
    @Output() onAdd = new EventEmitter();

    @Output() onEdit = new EventEmitter<DiveSite>();

    @Output() onDelete = new EventEmitter<DiveSite>();

    // name of function to be called from "site-list.template"
    add() {
        this.onAdd.emit(null);
    }

    edit(site: DiveSite) {
        this.onEdit.emit(site);
    }

    delete(site: DiveSite) {
        this.onDelete.emit(site);
    }
}