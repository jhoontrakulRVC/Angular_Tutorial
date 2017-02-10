import { Component } from '@angular/core';
import { DiveSite } from './dive-site';

// selector: how the application will refer to this component
// navigateUrl: how the component will be displayed

@Component({
    selector: 'yw-app',
    templateUrl: 'app/app.template.html'

})


export class AppComponent {
    // This component will display "sites" which it gets from the "DiveSite (dive-site.ts)" (exported from the "site-list.component" & imported in the "import" section above) 
    sites = DiveSite.FavouriteSites.slice(0);

    // This is used to store a new ID for a new site. Assigned in the function ""startAdd() below.
    newSiteId: number;

    // used to store the current (selected) site. Assigned in the function "startEdit()" below.
    currentSite: DiveSite;

    // string variable specifying what to initially display
    currentView = 'list';

    // function used in "app.template.html" takes a string parameter "view" used to change what is displayed. Assigned by the below functions **look for "this.navigateTo"**
    navigateTo(view: string) {
        this.currentView = view;
    }


    startAdd() {
        this.newSiteId = this.sites.map(s => s.id).reduce((p, c) => p < c ? c : p) + 1;

        this.navigateTo('add');
    }

    siteAdded(newSiteName: string) {
        this.sites.push({ id: this.newSiteId, name: newSiteName });
        this.navigateTo('list');
    }

    startEdit(site: DiveSite) {
        this.currentSite = site;
        this.navigateTo('edit');
    }

    siteSaved(site: DiveSite) {
        let oldSite = this.sites.filter(s => s.id == site.id)[0];
        if (oldSite) {
            oldSite.name = site.name;

            // alert(oldSite.name + site.name);
        }

        this.navigateTo('list');
    }

    startDelete(site: DiveSite) {
        this.currentSite = site;
        this.navigateTo('delete');
    }

    siteDeleted() {
        var siteIndex = this.sites.indexOf(this.currentSite);
        if (siteIndex >= 0) {
            this.sites.splice(siteIndex, 1);
        }
        this.navigateTo('list');
    }
}
