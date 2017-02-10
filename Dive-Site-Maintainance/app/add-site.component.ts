//Specifies that this is a "Component" type

//Imports "Output" & "EventEmitter" which is then usd in EVENT BINDING
import { Component, Input, Output, EventEmitter } from '@angular/core';

//selector assigns the name that the application will use to refer to this component.
//templateUrl is a html file that dictates how the component should be displayed.

@Component({
    selector: 'add-site-view',
    templateUrl: 'app/add-site.template.html'
})

export class AddSiteComponent {

    @Input() siteId: number;

    //@Output uses the EVENT BINDING from "app.template" to generate an output. In this case an event , essentially turning it into an OUTPUT EVENT BINDING
    //***OUTPUTS must be of the type "EventEmitter" so that the even can be published to any listeners.***
    @Output() onAdded = new EventEmitter<string>();
    @Output() onCancel = new EventEmitter();

    siteName: string;

    //name of function to be called from "add-site.template"
    added() {
        if (this.siteName != "") {
            this.onAdded.emit(this.siteName);
        }
    }
    //name of function to be called from "add-site.template"
    cancel() {
        this.onCancel.emit(null);
    }
}
