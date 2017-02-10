import { Component } from '@angular/core';
import { SiteListComponent } from './site-list.component';

// selector: how the application will refer to this component
// navigateUrl: how the component will be displayed

@Component({
    selector: 'yw-app',
    templateUrl: 'app/app.template.html'
})


export class AppComponent {
    siteId: number;

    // string variable specifying what to initially display
    currentView = 'list';

    // function used in "app.template.html" takes a string parameter "view" used to change what is displayed. Assigned by the below functions **look for "this.navigateTo"**
    navigateTo(view: string) {
        this.currentView = view;
    }    
}
