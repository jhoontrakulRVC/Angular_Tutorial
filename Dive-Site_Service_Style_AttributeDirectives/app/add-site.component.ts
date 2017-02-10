//Specifies that this is a "Component" type

//Imports "Output" & "EventEmitter" which is then usd in EVENT BINDING
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { SiteManagementService } from './site-management.service';
//selector assigns the name that the application will use to refer to this component.
//templateUrl is a html file that dictates how the component should be displayed.

@Component({
    selector: 'add-site-view',
    templateUrl: '/app/add-site.template.html'
})

export class AddSiteComponent {
    
    //@Output uses the EVENT BINDING from "app.template" to generate an output. In this case an event , essentially turning it into an OUTPUT EVENT BINDING
    //***OUTPUTS must be of the type "EventEmitter" so that the even can be published to any listeners.***
    @Output() onClosed = new EventEmitter();

    siteName: string;

    constructor(private siteService: SiteManagementService) {

    }

    //name of function to be called from "add-site.template"
    add() {
        this.siteService.addSite({ id: 0, name: this.siteName });
        this.onClosed.emit(null);
    }
    //name of function to be called from "add-site.template"
    cancel() {
        this.onClosed.emit(null);
    }
}
