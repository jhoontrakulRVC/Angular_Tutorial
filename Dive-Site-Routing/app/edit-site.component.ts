﻿import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SiteManagementService } from './site-management.service';

import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'edit-site-view',
    templateUrl: 'app/edit-site.template.html'
})

export class EditSiteComponent {

    siteId: number;
    siteName: string;

    constructor(
        private siteService: SiteManagementService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.siteId = this.route.snapshot.params['id'];
        this.siteName = this.siteService.getSiteById(this.siteId).name;
    }

    save() {
        this.siteService.saveSite({ id: this.siteId, name: this.siteName });
        this.router.navigate(['/list']);
    }
    
  
}