import { Injectable } from '@angular/core';
import { DiveSite } from './dive-site';

@Injectable()
export class SiteManagementService {
    private sites = DiveSite.FavouriteSites.slice(0);
        
    getAllSites(): DiveSite[] {
        return this.sites.slice(0);
    }

    getSiteById(id: number): DiveSite {
        let site = this.sites.filter(s => s.id == id)[0];
        return site
            ? { id: site.id, name: site.name }
            : null;
    }

    addSite(newSite: DiveSite) {
        newSite.id = this.sites.map(s => s.id).reduce((p, c) => p < c ? c : p) + 1;
        this.sites.push(newSite);
    }

    saveSite(site: DiveSite) {
        let oldSite = this.sites.filter(s => s.id == site.id)[0];
        if (oldSite) {
            oldSite.name = site.name;
        }
    }

    deleteSite(id: number) {
        let site = this.sites.filter(s => s.id == id)[0];
        if (site) {
            let siteIndex = this.sites.indexOf(site);
            if (siteIndex >= 0) {
                this.sites.splice(siteIndex, 1);
            }
        }
    }
}


