import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
// On changes is is used by Angular to track changes to @Input. This prevents the service from fetching data when the @Input is NULL.
//import { OnChanges } from '@angular/core';
import { SiteManagementService } from './site-management.service';

@Component({
    selector: 'delete-site-view',
    templateUrl: 'app/delete-site.template.html'
})
// "implements OnChanges" is referencing an interface. Although it is possible to invoke the ngOnChanges (below) this ensures that the dev gets a warning if it is not implemented. 
// Put simple it is good prtactice.
export class DeleteSiteComponent implements OnChanges {

    @Input() siteId: number;
    @Output() onClosed = new EventEmitter();
    siteName: string;

    constructor(private siteService: SiteManagementService) {        
    }
    // "ngOnChanges" executes when the @Input changes.
    ngOnChanges() {
        this.siteName = this.siteService.getSiteById(this.siteId).name;

    }

    delete() {
        this.siteService.deleteSite(this.siteId);
        this.onClosed.emit(null);
    }

    cancel() {
        this.onClosed.emit(null);
    }
}
